import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { View } from 'react-native-web';

export default class ProductDetail extends React.Component {
  render(){
    const { navigation } = this.props.navigation;
    const { route } = this.props.route;
    const { productName } = this.props.route.params;

    return (
      <View><Text>Product Detail</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  scrollView:{
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  }
})