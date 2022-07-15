import React  from "react";
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import FirstAidKit from '../assets/first-aid-kit.png'

export default function ProductListItem(props) {
    const {product, onPress} = props
    return (<TouchableOpacity onPress={onPress}><View style={styles.productView}>
        <Image style={styles.productImage} source={product.image} />
        <Text style={styles.productTitle}>{product.name}</Text>
    </View></TouchableOpacity>)
}

const styles = StyleSheet.create({
    productView:{
        width: '100%',
        alignItems: 'center',
        padding: 16,
        borderRadius:8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width:0, height:0},
        marginBottom: 16
    },
    productImage:{
        width: 215,
        height: 322,
        paddingBottom: 16
    },
    productTitle:{
        marginTop:16,
        textTransform: "uppercase",
        fontWeight: "700"
    }
})