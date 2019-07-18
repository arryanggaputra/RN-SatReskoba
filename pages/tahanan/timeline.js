import React from "react";
import styles from "../stylesheet";
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import Timeline from "react-native-timeline-listview";
import Moment from "moment";
import OneSignal from "react-native-onesignal";
import BackgroundGeolocation from "react-native-mauron85-background-geolocation";

class TahananTimeline extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Timeline"
  };

  constructor() {
    super();
    var myDate = new Date().getTime();
    this.state = {
      token: null,
      data: [
        { description: "Selamat Datang", title: "Bot Narkoba", time: myDate }
      ],
      refreshing: false,
      page: 1
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();

    OneSignal.setSubscription(true);
    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("registered", this.onRegistered);

    OneSignal.addEventListener("ids", device => {
      // console.log("[OneSignal]>>ids: ", device);
    });
    OneSignal.configure();
    OneSignal.clearOneSignalNotifications();

    AsyncStorage.getItem("@satReskoba:tokenData").then(
      token => {
        theToken = token;
        this.setState({
          token: theToken
        });

        BackgroundGeolocation.configure(
          {
            desiredAccuracy: 10,
            stationaryRadius: 50,
            distanceFilter: 50,
            locationTimeout: 30,
            notificationTitle: "Sat Reskoba Polrestabes Surabaya",
            notificationText: "Informasi & Update Tahanan Terbaru",
            debug: false,
            startOnBoot: true,
            stopOnTerminate: false,
            locationProvider:
              BackgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
            interval: (150000 + 150000) * 2,
            fastestInterval: (35000 + 150000) * 2,
            activitiesInterval: (150000 + 150000) * 2,
            notificationIconSmall: "ic_stat_onesignal_default",
            stopOnStillActivity: false,
            autoSync: true,
            url: "http://crimesocial.web.id/api/trackings",
            httpHeaders: {
              token: "ambil_data_tahanan",
              "api-token": this.state.token
            }
          },
          function(state) {
            // console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);

            if (!state.enabled) {
              BackgroundGeolocation.start(function() {
                // console.log("- Start success");
              });
            }
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error); //Display error
      }
    );

    // BackgroundGeolocation.on('location', (location) => {
    //     console.log(location);
    // });

    // BackgroundGeolocation.on('error', (error) => {
    //     console.log('[ERROR] BackgroundGeolocation error:', error);
    // });

    // BackgroundGeolocation.start(() => {
    //     console.log('[DEBUG] BackgroundGeolocation started successfully');
    // });
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    //   console.log('Message: ', openResult.notification.payload.body);
    //   console.log('Data: ', openResult.notification.payload.additionalData);
    //   console.log('isActive: ', openResult.notification.isAppInFocus);
    //   console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
    // console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
    // console.log('Device info: ', device);
  }

  makeRemoteRequest() {
    URL = `http://crimesocial.web.id/api/status?page=${this.state.page}`;
    var myHeaders = new Headers();
    myHeaders.append("token", "ambil_data_tahanan");

    fetch(URL, {
      headers: myHeaders
    })
      .then(res => res.json())
      .then(res => {
        var statuses = res.data.map(function(data) {
          var person = {
            description: data.body,
            summary: data.summary,
            is_summary: data.is_summary,
            type: data.type,
            title: "Bot Narkoba",
            jam: data.jam,
            tanggal: data.tanggal,
            id: data.id
          };
          return person;
        });
        this.setState({
          data: [...this.state.data, ...statuses],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  renderTime(rowData, sectionID, rowID) {
    var timeWrapper = "single-column-left";
    const jam = rowData.jam
      ? rowData.jam
      : Moment(rowData.time).format("HH:mm");
    const tanggal = rowData.tanggal
      ? rowData.tanggal
      : Moment(rowData.time).format("DD/MMM/YYYY");
    return (
      <View style={{ alignItems: "flex-end" }}>
        <View style={[{ minWidth: 45 }, this.props.timeContainerStyle]}>
          <View style={[this.props.timeStyle]}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 13 }}>
              {jam}
            </Text>
          </View>
          <Text style={{ fontSize: 8, textAlign: "center", marginTop: 2 }}>
            {tanggal}
          </Text>
        </View>
      </View>
    );
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.timelineTitle]}>{rowData.title}</Text>;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee",
          padding: 10,
          borderRadius: 5,
          marginTop: -10
        }}
      >
        {title}
        {rowData.type == 1 &&
          rowData.is_summary == 1 && (
            <Text style={styles.timelineDescription}>
              {rowData.summary}
              <Text
                style={styles.timelineReadmore}
                onPress={() => {
                  this.props.navigation.navigate("ShowStatus", {
                    id_status: rowData.id,
                    name: `${rowData.jam} - ${rowData.tanggal}`
                  });
                }}
              >
                Baca selengkapnya...
              </Text>
            </Text>
          )}

        {rowData.type !== 1 &&
          rowData.is_summary !== 1 && (
            <Text style={styles.timelineDescription}>
              {" "}
              {rowData.description}{" "}
            </Text>
          )}
      </View>
    );
  }

  handleRefresh = () => {
    var myDate = new Date().getTime();
    this.setState(
      {
        data: [
          { description: "Selamat Datang", title: "Bot Narkoba", time: myDate }
        ],
        page: 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  render() {
    return (
      <ScrollView
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        }
        onScrollEndDrag={this.handleLoadMore}
        style={[styles.container, { backgroundColor: "#fff" }]}
      >
        <Timeline
          lineWidth={1}
          circleSize={15}
          innerCircle={"dot"}
          renderTime={this.renderTime}
          renderDetail={this.renderDetail}
          circleColor="#fff"
          lineColor="rgba(0,0,0,0.09)"
          dotColor="#ccc"
          separator={false}
          navigation={this.props.navigation}
          timeStyle={{
            backgroundColor: "#000",
            paddingVertical: 2,
            paddingHorizontal: 2,
            borderRadius: 13
          }}
          data={this.state.data}
          style={styles.timeline}
        />
      </ScrollView>
    );
  }
}

export default TahananTimeline;
