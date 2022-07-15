import React from 'react';
import { Text, View } from 'react-native';

export default class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { navigation } = this.props.navigation;
    const { route } = this.props.route;
    const { categoryName } = this.props.route.params;
    console.log(categoryName)

    return (
        <View><Text>Detail</Text></View>
    )
  }
}