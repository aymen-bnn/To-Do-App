import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity,Keyboard} from 'react-native';
import Task from './components/tasks'

export default function App() {
  
  const [texttask,settexttask]=useState()
  const [addTask,setaddTask]=useState([])

  const handleAddTask=()=>{
    setaddTask([...addTask,texttask])
    settexttask(null);
    Keyboard.dismiss();
  }
  const removeTask=(index)=>{
    newItems=[...addTask];
    newItems.splice(index,1);
    setaddTask(newItems);
  }
  return (
    <View style={styles.container}>
      {/*today tasks*/}
      <View style={StyleSheet.tasks}>
          <Text style={styles.toptext}>Today's Tasks</Text>
      </View>
      <View style={styles.items}>
        {
          addTask.map((item,index)=>{
            return(
            <TouchableOpacity onPress={()=>removeTask(index)}>
              <Task key={index} text={item}/>
            </TouchableOpacity>
            )
          })
        }
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.Inputbar}>
          <TextInput style={styles.Input} placeholder={'Write a task'} onChangeText={text=>settexttask(text)}></TextInput>
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.touchbar}>
              <Text style={styles.touchinput}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030027',
  },
  tasks:{

  },
  toptext:{
    fontSize:25,
    paddingTop:60,
    paddingHorizontal:30,
    fontWeight:'bold',
    color:'white',
  },
  items:{
    
  },
  Inputbar:{
    position:'absolute',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    bottom:60,
  },
  Input:{
    backgroundColor:'white',
    padding:10,
    height:50,
    width:250,
    borderRadius:10,
  },
  touchbar:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:50,
    width:50,
    borderRadius:10,
  },
  touchinput:{
    fontSize:40,
  },
});
