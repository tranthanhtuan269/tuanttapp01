import React from 'react';
import axios from 'axios';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
      ]
    }
  }

  componentDidMount(){
    axios.get('http://65.21.190.120/categories')
    .then(res => {
      console.log(res.data.data)
      this.setState({
        categories: res.data.data
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render(){
    const { navigation } = this.props;
    const { categories} = this.state;
    return (
        <FlatList data={categories} contentContainerStyle={styles.scrollView}
          renderItem={({item}) => <CategoryListItem category={item} onPress={ ()=> navigation.navigate('CategoryDetail', { categoryName: item.name, categoryId: item.id })}/>}
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
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  }
})