import React from "react";
import styles from "../stylesheet";
import { Text, View, FlatList, ActivityIndicator, Alert } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import Badge from "./badge";

class Tahanan extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Arsip Tahanan ${navigation.state.params.tahun}`
  });
  constructor(props) {
    super();

    this.state = {
      disabledListItem: false,
      keyword: "",
      loading: false,
      data: [],
      page: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.getTahanan();
  }

  componentWillUnmount() {
    this.setState({
      disabledListItem: false
    });
  }

  makeRemoteRequest() {
    URL = `http://crimesocial.web.id/api/tahanan/ditahan?q=${
      this.state.keyword
    }&page=${this.state.page}&tahun=${
      this.props.navigation.state.params.tahun
    }`;
    var myHeaders = new Headers();
    myHeaders.append("token", "ambil_data_tahanan");

    fetch(URL, {
      headers: myHeaders
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: this.state.page === 1 ? res : [...this.state.data, ...res],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error, loading: false });
      });
  }

  getTahanan = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        keyword: "",
        page: 1,
        refreshing: true
      },
      () => {
        this.getTahanan();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.getTahanan();
      }
    );
  };

  onTahananPress = (id, name) => {
    this.props.navigation.navigate("TahananShowDitahan", {
      id_tahanan: id,
      name: name
    });
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

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return <ListitemComponent onPress={this.onTahananPress} data={item} />;
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.withNavbar}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          refreshing={this.state.refreshing}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
        />
      </View>
    );
  }
}

export default Tahanan;

class ListitemComponent extends React.PureComponent {
  capitalizeFirstLetter = str => {
    return str.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  onPress = () => {
    this.props.onPress(this.props.data.id, this.props.data.nama);
  };

  render() {
    return (
      <ListItem
        title={this.capitalizeFirstLetter(this.props.data.nama)}
        subtitle={this.capitalizeFirstLetter(this.props.data.alamat)}
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0,0,0,0.09)"
        }}
        roundAvatar
        avatar={{ uri: this.props.data.image_utama }}
        rightIcon={
          <Badge
            lamaDitahan={this.props.data.lama_ditahanan}
            dilimpahkan={this.props.data.tanggal_dilimpahkan}
          />
        }
        onPress={this.onPress}
      />
    );
  }
}
