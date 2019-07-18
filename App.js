import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  StatusBar,
  Platform,
  AsyncStorage,
  Alert
} from "react-native";
import {
  StackNavigator,
  TabNavigator,
  NavigationActions,
  TabBarBottom
} from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";
import { connect, Provider } from "react-redux";
import { login } from "./redux/actions/auth";
import { Icon, Button } from "react-native-elements";
import PopupMenu from "./pages/component/popup-menu";
import { enhance } from "react-navigation-addons";
import OneSignal from "react-native-onesignal";

import Login from "./pages/login/index";
import Logout from "./pages/login/logout";
import ForgotPassword from "./pages/login/ForgotPassword";
import TermOfService from "./pages/login/termOfService";

import Petapetugas from "./pages/maps/index";
import TahananShowDitahan from "./pages/tahanan/show_ditahan";
import TahananShowDirehab from "./pages/tahanan/show_direhab";
import Gallery from "./pages/tahanan/gallery";
import TahananList from "./pages/tahanan/list";
import TahananFolder from "./pages/tahanan/folder";
import TahananRehab from "./pages/tahanan/list_rehab";
import TahananTimeline from "./pages/tahanan/timeline";
import ShowStatus from "./pages/tahanan/show_status";
import TahananPolda from "./pages/tahanan/tahanan_polda";
import ListTahananPolda from "./pages/tahanan/list_tahanan_polda";
import Location from "./pages/maps/location";
import ListUser from "./pages/maps/list_users";

const Guest = StackNavigator(
  {
    Home: { screen: Login },
    ForgotPassword: { screen: ForgotPassword },
    TermOfService: { screen: TermOfService }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: { visible: false }
    }
  }
);

// prevent double tap on all navigations
const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

Guest.router.getStateForAction = navigateOnce(Guest.router.getStateForAction);

class MainApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    StatusBar.setBarStyle("dark-content", true);
    StatusBar.setBackgroundColor("#f3f3f3", true);
    this.checkLogin().done();
  }

  logout(navigation) {
    // keluar
    Alert.alert(
      "Keluar",
      "Anda yakin ingin keluar dari aplikasi?",
      [
        {
          text: "Ya",
          onPress: () => {
            navigation.navigate("Logout");
          }
        },
        { text: "Tidak", style: "cancel" }
      ],
      { cancelable: false }
    );
  }

  async checkLogin() {
    AsyncStorage.getItem("@satReskoba:tokenData").then(token => {
      var token = token;
      AsyncStorage.getItem("@satReskoba:detailUser").then(data => {
        var theData = JSON.parse(data);

        this.setState({
          isLoading: false
        });
        if (token !== null) {
          this.props.onLogin(token, theData.is_master, token);
        }
      });
    });
  }

  render() {
    var popupMenuList = ["Tahanan Polda Jatim", "Keluar"];
    if (this.props.is_master == 1) {
      var popupMenuList = ["Tahanan Polda Jatim", "GPS Tracker", "Keluar"];
    }

    const Tabs = TabNavigator(
      {
        TahananTimeline: { screen: TahananTimeline },
        TahananFolder: { screen: TahananFolder }
        // TahananList: { screen: TahananList }
      },
      {
        lazyLoad: true,
        animationEnabled: false,
        tabBarOptions: {
          activeTintColor: "black",
          inactiveTintColor: "rgba(0,0,0,0.3)",
          showIcon: false,
          showLabel: true,
          labelStyle: {
            fontWeight: "bold"
          },
          style: {
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "black"
          },
          pressColor: "rgba(0,0,0,0.2)",
          indicatorStyle: {
            backgroundColor: "black"
          }
        },
        navigationOptions: ({ navigation }) => ({
          headerTitle: (
            <View
              style={{
                marginLeft: 20,
                marginTop: 15,
                flex: 1,
                flexDirection: "row"
              }}
            >
              <View style={{ width: 40, height: 40 }}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("./pages/images/ic_launcher.png")}
                />
              </View>
              <View style={{ height: 40, paddingLeft: 5, paddingTop: 0 }}>
                <Text
                  style={{ color: "black", fontSize: 22, fontWeight: "bold" }}
                >
                  Sat Reskoba
                </Text>
                <Text style={{ marginTop: -5 }}>Polrestabes Surabaya</Text>
              </View>
            </View>
          ),
          headerTitleStyle: {
            fontSize: 22
          },
          headerStyle: {
            elevation: 0
          },
          headerTintColor: "#000",
          headerRight: (
            <PopupMenu
              style={{ marginRight: 10 }}
              actions={popupMenuList}
              onPress={
                (onPopupEvent = (eventName, index) => {
                  if (eventName !== "itemSelected") return;
                  if (index === 0) {
                    // edit
                    navigation.navigate("TahananPolda");
                  } else if (index === 1) {
                    if (popupMenuList.length > 2) {
                      navigation.navigate("TabLocation");
                    } else {
                      this.logout(navigation);
                    }
                  } else {
                    this.logout(navigation);
                  }
                })
              }
            />
          )
        })
      }
    );

    const TabLocation = enhance(TabNavigator)(
      {
        Location: {
          screen: Location,
          navigationOptions: {
            showIcon: true,
            tabBarLabel: "Lokasi Anggota",
            tabBarIcon: ({ tintColor }) => {
              return <Icon name="map" size={22} color={tintColor} />;
            }
          }
        },
        UserList: {
          screen: ListUser,
          navigationOptions: {
            showIcon: true,
            tabBarLabel: "Daftar Anggota",
            tabBarIcon: ({ tintColor }) => {
              return (
                <Icon name="format-list-bulleted" size={22} color={tintColor} />
              );
            }
          }
        }
      },
      {
        tabBarOptions: {
          activeTintColor: "black",
          inactiveTintColor: "rgba(0,0,0,0.3)",
          showLabel: true,
          labelStyle: {
            fontWeight: "bold",
            fontSize: 12
          },
          style: {
            backgroundColor: "white"
          },
          pressColor: "rgba(0,0,0,0.2)",
          indicatorStyle: {
            backgroundColor: "red"
          }
        },
        navigationOptions: ({ navigation }) => ({
          title: "Peta Petugas"
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        lazyLoad: true
      }
    );

    const Auth = StackNavigator({
      Tabs: { screen: Tabs },
      TahananShowDitahan: { screen: TahananShowDitahan },
      ShowStatus: { screen: ShowStatus },
      Gallery: { screen: Gallery },
      TahananList: { screen: TahananList },
      TahananPolda: { screen: TahananPolda },
      ListTahananPolda: { screen: ListTahananPolda },
      Logout: { screen: Logout },
      TabLocation: { screen: TabLocation }
    });

    Auth.navigationOptions = {
      header: null
    };
    Auth.router.getStateForAction = navigateOnce(Auth.router.getStateForAction);

    if (this.state.isLoading) {
      return (
        <Spinner
          visible={true}
          overlayColor="#fff"
          color="black"
          textContent={"Loading..."}
          textStyle={{ color: "#000" }}
        />
      );
    }
    if (this.props.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Auth style={{ width: Dimensions.get("window").width }} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Guest style={{ width: Dimensions.get("window").width }} />
        </View>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    is_master: state.auth.is_master
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, is_master, password) => {
      dispatch(login(email, is_master, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApplication);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0
  }
});
