import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Dimensions
} from 'react-native';
// import LottieView from 'lottie';
import { Ionicons } from "@expo/vector-icons"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class NewsScreen extends Component {
  constructor() {
    super();
    this.state = {
      article: '',
    };
  }

  getNews = async () => {
    //change latitude and longitude
    var url =
      'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          article: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getNews();
  };

  render() {
    if (this.state.article === '') {
      return (
        <View
          style={{ backgroundColor: '#ffc' }}>
          <Text>Loading....</Text>
          {/* <LottieView
          autoPlay
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={require('../assets/animation/98579-junction-loader.json')}
        /> */}
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor: '#ffc' }}>
          <ImageBackground
            source={require('../assets/images/bgs.gif')}
            style={{ width: windowWidth, height: windowHeight, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          >
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Home_')
          }}>
            <Ionicons name='arrow-back' size={30} />
          </TouchableOpacity>

          <FlatList
            key={this.state.article.articles.title}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.article.articles}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 10, padding: 10, backgroundColor: '#fe1', borderRadius: 30 }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.url)}
                >
                  <Image source={{ uri: item.urlToImage }} style={{ width: 350, height: 200, borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                  <Text style={{ fontSize: 20, color: 'white' }}>{item.title}</Text>
                  <Text style={{ fontSize: 15, color: 'white' }}>{item.description}</Text>
                </TouchableOpacity>
              </View>
            )}
            showsVerticalScrollIndicator={true}
            />
            </ImageBackground>
        </View>
      );
    }
  }
}
