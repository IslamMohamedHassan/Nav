import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const List = ({text,id,Done,handleDeleteTask,handleDoneTask}) => {
    
    const [isDone,setTaskDone] = useState(Done)

    const handleDoneBtn = () =>{
        setTaskDone(!isDone)
        handleDoneTask(id)
    }
  return (
    <View style={styles.tasks}>
        <View style={styles.taskName}>
            <Text style={isDone ? styles.lineThroughName : styles.textName }>{text}</Text>
        </View>

        <TouchableOpacity onPress={() => handleDoneBtn() }>
        <View style={styles.taskDone}>
            <View style={isDone ? styles.squareBtnSelected : styles.squareBtn}></View>
            <Text>Done</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(id)}>
        <View style={styles.taskDeleted}>
            <View style={styles.squareBtn}></View>
            <Text>Delete</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}
const styles= StyleSheet.create({
    tasks:{
        backgroundColor:'#fff',
        flexDirection:'row',
        padding:15,
        marginBottom:15,
        justifyContent:'space-between',
    },
    taskName:{
        textDecorationLine:"line-through"
    },
    lineThroughName:{
        textDecorationLine:"line-through"
    },
    taskDone:{
        flexDirection:'row'
    },
    taskDeleted:{
        flexDirection:'row'
    },
    squareBtn:{
        width:20,
        height:20,
        backgroundColor:"#F0F0F0",
        borderRadius:5,
        marginRight:7,
    },
    squareBtnSelected:{
        width:20,
        height:20,
        backgroundColor:"#000",
        borderRadius:5,
        marginRight:7,
    }
    
})
export default List