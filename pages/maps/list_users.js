import React from "react";
import styles from "../stylesheet";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Alert
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import Communications from "react-native-communications";
import { NavigationActions } from "react-navigation";
import axios from "axios";

class ListUser extends React.Component {
  constructor(props) {
    super();

    this.state = {
      disabledListItem: false,
      loading: true,
      data: [],
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    console.log("ambil user");
    this.getUserList();
  }

  componentWillUnmount() {
    this.setState({
      disabledListItem: false
    });
  }

  makeRemoteRequest() {
    URL = `http://crimesocial.web.id/api/user_list`;
    var myHeaders = new Headers();
    myHeaders.append("token", "ambil_data_tahanan");
    console.log("ambil data petugas");
    axios
      .get(URL, {
        headers: {
          token: "ambil_data_tahanan"
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data,
          error: response.data.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.makeRemoteRequest();
        console.log("error " + error);
      });
    // fetch(URL, {
    //   headers: myHeaders
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     console.log("cukkkkk");
    //     this.setState({
    //       data: res,
    //       error: res.error || null,
    //       loading: false,
    //       refreshing: false
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ error, loading: false });
    //   });
  }

  getUserList = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  capitalizeFirstLetter = str => {
    return str.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.getUserList();
      }
    );
  };

  searchData = text => {
    if (text == null) {
      this.handleRefresh();
    } else {
      this.setState(
        {
          keyword: text !== "" ? text : "",
          loading: true,
          page: 1
        },
        () => {
          this.makeRemoteRequest();
        }
      );
    }
  };

  callToAction(phone) {
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

  callToLocation(item, navigate) {
    if (item.position == null) {
      ToastAndroid.showWithGravity(
        "Lokasi anggota tidak ditemukan.",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      const { navigation } = this.props;
      navigation.navigate("Location", {
        latitude: item.position.latitude,
        longtitude: item.position.longtitude
      });
    }
  }

  renderHeader = () => {
    return (
      <SearchBar
        lightTheme={false}
        placeholderTextColor={"#fff"}
        placeholder="Cari Tahanan"
        showLoadingIcon={this.state.loading}
        onChangeText={this.searchData}
      />
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.withNavbar, { backgroundColor: "white" }]}>
        {this.state.loading && (
          <ActivityIndicator animating={this.state.loading} size="small" />
        )}
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={this.capitalizeFirstLetter(item.name)}
              subtitle={item.date_human || "Belum ada lokasi terdaftar"}
              containerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0,0,0,0.09)"
              }}
              disabled={this.state.disabledListItem}
              rightIcon={
                <Icon
                  name={"phone"}
                  size={28}
                  color={item.phone == "" ? "#ddd" : "green"}
                  onPress={() => {
                    this.callToAction(item.phone);
                  }}
                />
              }
              onPress={() => {
                this.callToLocation(item);
              }}
            />
          )}
          keyExtractor={item => item.id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

export default ListUser;
