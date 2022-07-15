import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'a'},
        { id: 2, name: 'b'},
        { id: 3, name: 'c'},
        { id: 4, name: 'd'},
        { id: 5, name: 'e'}
      ]
    }
  }
  render(){
    const {navigation } = this.props;
    const {categories} = this.state;
    return (
        <FlatList data={categories} contentContainerStyle={styles.scrollView}
          renderItem={({item}) => <CategoryListItem category={item} onPress={ ()=> navigation.navigate('CategoryDetail')}/>}
          keyExtractor={item => `${item.id}`}
          />
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
    paddingLeft: 16,
    paddingRight: 16,
  }
})