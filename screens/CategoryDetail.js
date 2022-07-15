import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'a'},
        { id: 2, name: 'b'},
        { id: 3, name: 'c'},
        { id: 4, name: 'd'},
        { id: 5, name: 'e'}
      ]
    }
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