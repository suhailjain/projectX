import React, { Component } from 'react';
import { View } from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import Header from '../common/Header';

const datacarousel = [
  {
      "id": 339964,
      "title": "Valerian and the City of a Thousand Planets",
      "subtitle": "More than just a trend",
      "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
  },
  {
      "id": 315635,
      "title": "wô",
      "subtitle": "More than just a trend",
      "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
  },
  {
      "id": 339403,
      "title": "Baby Driver",
      "subtitle": "More than just a trend",
      "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
  },
];


class Cinepolis extends Component {
    render() {
      return (
        <View>
        <Header headerText={'Now  Showing'} onPress={() => this.props.drawerState(false)} />
        <SwipeableParallaxCarousel
            data={datacarousel}
            parallax={true}
            navigation={true}
        />
        </View>
      );
    }
}

export default Cinepolis;
