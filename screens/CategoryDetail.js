import React from 'react';
import axios from 'axios';
import { StyleSheet, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

var category = null;
export default class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);
    category = this.props.route.params;
    this.state = {
      products: [
      ]
    }
  }
  
  componentDidMount(){
    axios.get('http://65.21.190.120/categories/' + category.categoryId)
    .then(res => {
      this.setState({
        products: res.data.data
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render(){
    const { navigation } = this.props;
    const { route } = this.props.route;
    const { categoryName } = this.props.route.params;
    const { products } = this.state;

    return (
      <FlatList data={products} contentContainerStyle={styles.scrollView}
      renderItem={({item}) => <ProductListItem product={item} onPress={ ()=> navigation.navigate('ProductDetail', { ProductName: item.name })}/>}
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
    paddingRight: 16,
  }
})