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
    const {category, onPress} = props
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.categoryView}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryView:{
        alignItems: 'center',
        padding: 16,
        borderRadius:8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width:0, height:0},
        marginBottom: 16
    },
    categoryTitle:{
        textTransform: "uppercase",
        fontWeight: "700"
    }
})