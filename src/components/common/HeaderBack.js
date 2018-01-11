import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';


const { width, height } = Dimensions.get('window');

const HeaderBack = (props) => {
  return (
    <View style={styles.viewStyle}>
        <Icon name='menu' onPress={props.onPress} />
      <Text style={styles.headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 11,
    flexDirection: 'row',
    marginTop: '2%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerTextStyle: {
    fontSize: 20
  },
  textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
  buttonStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
};

// Make the component available to other parts of the app
export default HeaderBack;
