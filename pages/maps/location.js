import React, { Component } from "react";
import styles from "../stylesheet";
import MapView from "react-native-maps";
import {
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "react-native-elements";
import { requestPermission } from "react-native-android-permissions";
import PopupDialog, {
  SlideAnimation,
  DialogTitle,
  DialogButton
} from "react-native-popup-dialog";
import Communications from "react-native-communications";
import axios from "axios";

export default class ShowStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
      loading: true,
      latitude: null,
      longitude: null,
      phone: null,
      loadingButton: false,
      name: null,
      last_update: ""
    };
    this.map = MapView;
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.fetchLocations = this.fetchLocations.bind(this);
  }

  onSuccess(position) {
    this.setState(
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        loading: false
      },
      () => {}
    );
  }

  callToAction(phone) {
    setTimeout(() => {
      this.popupDialog.dismiss();
    }, 500);

    if (phone == "") {
      ToastAndroid.showWithGravity(
        "Nomor telepon belum didaftarkan.",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      Communications.phonecall(phone, true);
    }
  }

  onError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  componentDidMount() {
    this.props.navigation.addListener("focus", () => {
      if (this.props.navigation.state.params) {
        setTimeout(() => {
          this.map.animateToRegion(
            {
              latitude: this.props.navigation.state.params.latitude,
              longitude: this.props.navigation.state.params.longtitude,
              latitudeDelta: 0.0025,
              longitudeDelta: 0.0025
            },
            1500
          );
        }, 500);

        // this.setState({
        //     loading:false
        // });
      }
    });

    setTimeout(() => {
      requestPermission("android.permission.ACCESS_FINE_LOCATION").then(
        result => {
          navigator.geolocation.getCurrentPosition(
            position => this.onSuccess(position),
            error => alert("Silahkan cek kembali koneksi internet Anda."),
            { enableHighAccuracy: false, timeout: 30000 }
          );
        },
        result => {
          console.log("Not Granted!");
          console.log(result);
        }
      );
    }, 0);

    this.fetchLocations();
  }

  fetchLocations() {
    URL = `http://crimesocial.web.id/api/tracking_list`;
    var myHeaders = new Headers();
    myHeaders.append("token", "ambil_data_tahanan");

    this.setState({
      loadingButton: true
    });

    axios
      .get(URL, {
        headers: {
          token: "ambil_data_tahanan"
        }
      })
      .then(response => {
        console.log("cuukkk", response.data);
        var newCoords = response.data;
        var filteredCoords = [];
        Object.keys(newCoords).map(location => {
          console.log(location);
        });
        this.setState(
          {
            coords: newCoords,
            loadingButton: false
          },
          () => {
            ToastAndroid.showWithGravity(
              "Lokasi petugas diperbaharui",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }
        );
      })
      .catch(error => {
        console.log("error " + error);
        this.fetchLocations();
        this.setState({ error, loading: false });
      });
    // fetch(URL, {
    //   headers: myHeaders
    // })
    //   .then(res => res.json())
    //   .then(res => {})
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ error, loading: false });
    //   });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.withNavbar, { flex: 1 }]}>
          <ActivityIndicator animating={this.state.loading} size="small" />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.floatingArea}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                elevation: 1,
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 100
              }}
              onPress={() => {
                this.fetchLocations();
              }}
            >
              {this.state.loadingButton && (
                <ActivityIndicator
                  animating={this.state.loadingButton}
                  size="large"
                />
              )}
              {!this.state.loadingButton && (
                <Icon name={"refresh"} size={36} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <PopupDialog
            dialogTitle={<DialogTitle title="Hubungi Petugas" />}
            ref={popupDialog => {
              this.popupDialog = popupDialog;
            }}
            dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
            overlayOpacity={0.7}
            width={250}
            height={150}
          >
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                {this.state.name}
              </Text>
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                Last Update : {this.state.last_update}
              </Text>
              <Button
                onPress={() => {
                  this.callToAction(this.state.phone);
                }}
                buttonStyle={{ marginTop: 10 }}
                backgroundColor={this.state.phone !== "" ? "green" : "#ddd"}
                icon={{ name: "phone" }}
                borderRadius={4}
                title="Hubungi Petugas"
              />
            </View>
          </PopupDialog>
          <MapView
            style={{
              position: "absolute",
              paddingBottom: 100,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            ref={component => (this.map = component)}
            toolbarEnabled={true}
            showsUserLocation={true}
            showMyLocationButton={true}
            showsCompass={true}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00921
            }}
          >
            {Object.keys(this.state.coords).map((row, index) => (
              <MapView.Marker
                key={index}
                coordinate={{
                  latitude: this.state.coords[row].position.latitude,
                  longitude: this.state.coords[row].position.longtitude
                }}
              >
                <MapView.Callout
                  onPress={() => {
                    this.setState(
                      {
                        phone: this.state.coords[row].phone,
                        name: this.state.coords[row].name,
                        last_update: this.state.coords[row].date_human
                      },
                      () => {
                        this.popupDialog.show();
                      }
                    );
                  }}
                >
                  <View style={styles.mapCallout}>
                    <Text style={{ fontWeight: "bold" }}>{`${this.state.coords[
                      row
                    ].name}`}</Text>
                    <Text style={{ fontSize: 12 }}>
                      Last Update : {this.state.coords[row].date_human}
                    </Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            ))}
          </MapView>
        </View>
      );
    }
  }
}
