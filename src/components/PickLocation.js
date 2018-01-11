import React, { Component } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import Button from './common/Button';
import HeaderPlain from './common/HeaderPlain';

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight;

const styles = {
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 20
  },
  textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 22,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
  },
  buttonStyle: {
      width: width * 0.7,
      borderBottomWidth: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
  }
};

class PickLocation extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#D3D3D3' }}>
        <HeaderPlain headerText={'Where can i take you today?'} />
        <View style={styles.container}>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={() => {
          this.props.selectLocation('Rohini');
          this.props.postUrl('https://unityone-65a80.firebaseio.com/posts.json');
          this.props.likeUrl('https://unityone-65a80.firebaseio.com/posts');
          this.props.storeUrl('https://unityone-65a80.firebaseio.com/rohiniShop.json');
          this.props.foodUrl('https://unityone-65a80.firebaseio.com/rohiniFood.json');
          this.props.dbRef('/posts');
          Actions.lobby();
        }}>Rohini
        </Button>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={() => {
          this.props.selectLocation('Janakpuri');
          this.props.postUrl('https://unityone-65a80.firebaseio.com/jPosts.json');
          this.props.likeUrl('https://unityone-65a80.firebaseio.com/jPosts');
          this.props.storeUrl('https://unityone-65a80.firebaseio.com/janakpuriShop.json');
          this.props.foodUrl('https://unityone-65a80.firebaseio.com/janakpuriFood.json');
          this.props.dbRef('/jPosts');
          Actions.lobby();
        }}>Janakpuri
        </Button>
        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={() => {
          this.props.selectLocation('Shahadra');
          this.props.postUrl('https://unityone-65a80.firebaseio.com/sPosts.json');
          this.props.likeUrl('https://unityone-65a80.firebaseio.com/sPosts');
          this.props.storeUrl('https://unityone-65a80.firebaseio.com/shahdraShop.json');
          this.props.foodUrl('https://unityone-65a80.firebaseio.com/shahdraFood.json');
          this.props.dbRef('/sPosts');
          Actions.lobby();
        }}>
          Shahadra
        </Button>
        </View>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    locate: state.currentLocation
  };
};

export default connect(mapStateToProps, actions)(PickLocation);
