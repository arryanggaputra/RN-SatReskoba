import React from "react";
import styles from "../stylesheet";
import { Text, View, FlatList, ActivityIndicator, Alert } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

class Tahanan extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Arsip Tahanan"
  };

  constructor(props) {
    super();
  }

  onPress = tahun => {
    this.props.navigation.navigate("TahananList", {
      tahun: tahun
    });
  };

  render() {
    var listYear = [
      {
        tahun: 2019,
        title: "Arsip 2019",
        subtitle: "Menampilkan Tahanan tahun 2018"
      },
      {
        tahun: 2018,
        title: "Arsip 2018",
        subtitle: "Menampilkan Tahanan tahun 2018"
      },
      {
        tahun: 2017,
        title: "Arsip 2017",
        subtitle: "Menampilkan Tahanan tahun 2017"
      },
      {
        tahun: 2016,
        title: "Arsip 2016",
        subtitle: "Menampilkan Tahanan tahun 2016"
      },
      {
        tahun: 2015,
        title: "Arsip 2015",
        subtitle: "Menampilkan Tahanan tahun 2015"
      }
    ];
    return (
      <View style={[styles.withNavbar, { flex: 1 }]}>
        {listYear.map((item, index) => {
          return <ListingItem onPress={this.onPress} key={index} data={item} />;
        })}
      </View>
    );
  }
}

export default Tahanan;

class ListingItem extends React.PureComponent {
  onPress = () => {
    this.props.onPress(this.props.data.tahun);
  };

  render() {
    return (
      <ListItem
        title={this.props.data.title}
        subtitle={this.props.data.subtitle}
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0,0,0,0.09)"
        }}
        onPress={this.onPress}
      />
    );
  }
}
