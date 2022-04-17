import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  ImageBackground,
  Linking,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { NewsCategory, NewsSources } from '../NewsProps';

const { width, height } = Dimensions.get('window');

// Platform.isPad

export default class ExploreScreen extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount(){
    this.getNews()
  };

  render() {
    if (this.state.article === '') {
      return(
      <View>
        <Text>Loading...</Text>
      </View>  
      )
    } else {
      return (
        <ScrollView>
          <StatusBar />
          
          <View>
            <Text style={styles.categoryText}>Category</Text>
          </View>
          <FlatList
            keyExtractor={(element) => element.id}
            data={NewsCategory}
            renderItem={(element) => {
              return (
                <View style={{ marginTop: 100, marginLeft: 30 }}>
                  <TouchableOpacity
                    style={styles.cardContainer}
                    onPress={() => {
                      this.props.navigation.navigate(element.item.type);
                    }}>
                    <Image
                      source={{ uri: element.item.image }}
                      style={styles.imageStyle}
                    />
                    <Text style={styles.textStyle}>{element.item.type}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              >
              <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#fff', width: 300, height: 400, borderRadius: 30, marginLeft: 30,  }}>
                  <Image 
                  source={{uri: this.state.article.articles[0].urlToImage }}
                  style={{ width: 300, height: 200, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
                   />
                  <Text style={{ fontSize: 13, fontWeight: 'Bold', color: 'black', margin: 10 }}>
                  {this.state.article.articles[0].title}
                  </Text>
                  <Text 
                  style={{ fontSize: 13, color: 'black', marginHorizontal: 10, top: -10 }}>
                  {this.state.article.articles[0].description}
                  </Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 300, height: 400, borderRadius: 30, marginLeft: 30,  }}>
                  <Image 
                  source={{uri: this.state.article.articles[1].urlToImage }}
                  style={{ width: 250, height: 200, left: 25, borderRadius: 30 }}
                   />
                  <Text style={{ fontSize: 13, fontWeight: 'Bold', color: 'black', margin: 10 }}>
                  {this.state.article.articles[1].title}
                  </Text>
                  <Text 
                  style={{ fontSize: 10, color: 'black', marginHorizontal: 10, top: -10 }}>
                  {this.state.article.articles[1].description}
                  </Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 300, height: 400, borderRadius: 30, marginLeft: 30,  }}>
                  <Image 
                  source={{uri: this.state.article.articles[2].urlToImage }}
                  style={{ width: 250, height: 200, left: 25, borderRadius: 30 }}
                   />
                  <Text style={{ fontSize: 13, fontWeight: 'Bold', color: 'black', margin: 10 }}>
                  {this.state.article.articles[2].title}
                  </Text>
                  <Text 
                  style={{ fontSize: 10, color: 'black', marginHorizontal: 10, top: -10 }}>
                  {this.state.article.articles[2].description}
                  </Text>
              </View>
              </View>
              </ScrollView>
          
          <Text style={styles.sourceText}>Sources</Text>
          
          <FlatList
            keyExtractor={(element) => element.id}
            data={NewsSources}
            renderItem={(element) => {
              return (
                <View style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    style={styles.sourceCardContainer}
                    onPress={() => {
                      this.props.navigation.navigate(element.item.id);
                    }}>
                    <Image
                      source={{ uri: element.item.pic }}
                      style={styles.sourceImageStyle}
                    />
                    <Text style={styles.sourceTextStyle}>
                      {element.item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            style={{ margin: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    top: -70,
    backgroundColor: '#F5F5f1',
    width: 250,
    height: 300,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#dcdcdc',
  },
  imageStyle: {
    width: 230,
    height: 200,
    marginLeft: 5,
    marginTop: 5,
    marginRight: 60,
    borderRadius: 10,
  },
  textStyle: {
    marginLeft: '10%',
    marginTop: 10,
    fontSize: RFValue(18),
    fontFamily: 'Fira Code iScript',
    fontWeight: '900',
  },
  sourceCardContainer: {
    backgroundColor: '#F5F5f1',
    width: 250,
    height: 300,
    borderRadius: 20,
    borderWidth: 4,
  },
  sourceTextStyle: {
    marginLeft: 20,
    fontSize: 35,
    fontFamily: 'Fira Code iScript',
    // fontWeight: "900",
    marginTop: 10,
  },
  sourceImageStyle: {
    marginLeft: 10,
    marginTop: 10,
    width: 220,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  categoryText: {
    paddingTop: -100,
    marginLeft: 30,
    fontSize: RFValue(25),
    fontFamily: 'Fira Code iScript',
    borderRadius: 10,
  },
  sourceText: {
    paddingTop: -40,
    marginLeft: 30,
    fontSize: RFValue(25),
    fontFamily: 'Fira Code iScript',
    borderRadius: 20,
    width: 230,
  },
});
