import React from "react";
import styles from "../stylesheet";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  AsyncStorage,
  Alert
} from "react-native";
import { NavigationActions } from "react-navigation";
import { Button } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";
import OneSignal from "react-native-onesignal";
import { login } from "../../redux/actions/auth";

const background = require("./login1_bg.png");
const mark = require("../images/narkoba.png");
const lockIcon = require("./key.png");
const personIcon = require("./user.png");

const navigateTahanan = NavigationActions.navigate({
  routeName: "TahananTimeline"
});

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      route: "Login",
      email: "",
      password: "",
      fcm_token: "",
      disabled: false,
      processLogin: false,
      errorMessage: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentDidMount() {
    OneSignal.removeEventListener("received");
    OneSignal.removeEventListener("opened");
    OneSignal.removeEventListener("registered");
    OneSignal.removeEventListener("ids");
    OneSignal.setSubscription(false);
  }

  userLogin() {
    Keyboard.dismiss();
    this.setState({
      disabled: true,
      processLogin: true,
      errorMessage: ""
    });
    if (!this.state.email || !this.state.password) {
      this.setState({
        disabled: false,
        processLogin: false,
        errorMessage: "Masukan E-mail & Password"
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append("token", "ambil_data_tahanan");

      var formData = new FormData();
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);
      formData.append("fcm_token", this.state.fcm_token);

      fetch("http://crimesocial.web.id/api/login", {
        method: "post",
        headers: myHeaders,
        body: formData
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            disabled: false,
            processLogin: false
          });
          if (!res.success) {
            this.setState({
              errorMessage: "Login Gagal, Mohon Ulangi"
            });
          }
          if (res.success !== false) {
            OneSignal.syncHashedEmail(this.state.email);
            AsyncStorage.setItem("@satReskoba:tokenData", res.success.token);
            AsyncStorage.setItem(
              "@satReskoba:detailUser",
              JSON.stringify(res.success)
            );
            Alert.alert(
              "Login Berhasil!",
              "Selamat datang di Aplikasi Tahanan Narkoba"
            );
            this.props.onLogin(
              this.state.email,
              res.success.is_master,
              this.state.password
            );
          }
        })
        .catch(error => {
          this.setState({
            disabled: false,
            processLogin: false,
            errorMessage: "Login Gagal, Mohon Ulangi1"
          });
        });
    }
  }

  handleEmail = text => {
    this.setState({ email: text, errorMessage: "" });
  };

  handlePassword = text => {
    this.setState({ password: text, errorMessage: "" });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <Spinner
          visible={this.state.processLogin}
          overlayColor="rgba(0, 0, 0, 0.9)"
          textContent={"Connecting Server..."}
          textStyle={{ color: "#FFF" }}
        />
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={[styles.inputWrap, { marginTop: 5 }]}>
              <View style={styles.iconWrap}>
                <Image
                  source={personIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                autoCapitalize="none"
                placeholder="E-mail"
                placeholderTextColor="#333"
                returnKeyType="next"
                underlineColorAndroid="transparent"
                style={styles.input}
                value={this.state.email}
                onChangeText={this.handleEmail}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={lockIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor="#333"
                returnKeyType="next"
                underlineColorAndroid="transparent"
                style={styles.input}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={this.handlePassword}
              />
            </View>
            {!!this.state.errorMessage && (
              <Text style={[styles.errorMessage, { marginHorizontal: 20 }]}>
                {this.state.errorMessage}
              </Text>
            )}

            <Button
              raised
              fontSize={18}
              buttonStyle={[styles.button, { paddingHorizontal: 0 }]}
              icon={{ name: "input", size: 18 }}
              onPress={this.userLogin.bind(this)}
              textStyle={{ textAlign: "center" }}
              title={`Login`}
            />
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text
                onPress={() => {
                  navigate("ForgotPassword");
                }}
                style={styles.forgotPasswordText}
              >
                Lupa Password
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text
                onPress={() => {
                  navigate("TermOfService");
                }}
                style={styles.forgotPasswordText}
              >
                Term of Services
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.signupWrap} />
          </View>
        </Image>
      </KeyboardAvoidingView>
    );
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
)(LoginScreen);
