import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
const Task= (props)=>{
    return(
        <View style={styles.items}>
            <View style={styles.item}>
                <TouchableOpacity >
                    <View style={styles.square}></View>
                </TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    square:{
        height:25,
        width:24,
        backgroundColor:"black",
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    },
    item:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        paddingHorizontal:30,
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
    },
    items:{
        padding:15,
        
    },


});
export default Task;