import React  from "react";
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import FirstAidKit from '../assets/first-aid-kit.png'
import Megaphone from '../assets/megaphone.png'
import SpinalBoard from '../assets/spinal-board.png'

export default function CategoryListItem(props) {
    const {category} = props
    return <View style={styles.categoryView}>
        <Text style={styles.categoryTitle}>{category.name}</Text>
        <Image style={styles.categoryImage} source={FirstAidKit} />
    </View>
}

const styles = StyleSheet.create({
    categoryView:{
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
    categoryImage:{
        width: 64,
        height: 64
    },
    categoryTitle:{
        textTransform: "uppercase",
        marginBottom: 10,
        fontWeight: "700"
    }
})