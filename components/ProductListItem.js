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
        <Text style={styles.productTitle}>{product.name}</Text>
        <Image style={styles.productImage} source={FirstAidKit} />
    </View></TouchableOpacity>)
}

const styles = StyleSheet.create({
    productView:{
        width: '100%',
        height: 200,
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
        width: 64,
        height: 64
    },
    productTitle:{
        textTransform: "uppercase",
        marginBottom: 10,
        fontWeight: "700"
    }
})