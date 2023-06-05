import { StatusBar } from 'expo-status-bar';
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import List from '../../components/List';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import{v4 as uuid} from 'uuid';

export default function ToDoList() {

  const [task,setTask] = useState();
  const [tasksItems,setTasksItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    const newTask = {
      id: uuid(),
      text: task,
      isDone:false
    };
    if (!task) {
      Alert.alert('Must Write A Task');
      return;
    }
      setTasksItems([...tasksItems, newTask]);
      setTask(null);
    
  };

  const handleDeleteTask = (id) => {
    setTasksItems(tasksItems.filter((task) => task.id !== id));
  }

  const handleDoneTask = (id) => {
    setTasksItems(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      });
    });
  };


  return (
    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{
        // flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'>
      <View style={styles.tasks}>
          <Text style={styles.sectionTitle}>To Do List</Text>
        {tasksItems.map(({ id, text,isDone }) =>
        <List key={id} id={id} isDone={isDone} handleDoneTask={handleDoneTask}  text={text} handleDeleteTask={handleDeleteTask} />
        )}
      </View>
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
      <View style={styles.inputWrapper}>
        <TextInput 
        style={styles.input} 
        placeholder='Write A Task'
        onChangeText={text=>setTask(text)}
        value={task}
        ></TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.plusWrapper}>
                <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  tasks:{
    paddingTop:40,
    paddingHorizontal:10,

  },
  sectionTitle:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:"center",
    marginBottom:20,
  },
writeTaskWrapper:{
  position:"absolute",
  bottom:30,
},
input:{
  borderColor:"#586e75",
  borderWidth:2,
  padding:15,
  marginHorizontal:10,
  borderRadius:15,
  width:325,

},
plusWrapper:{
  width:60,
  height:60,
  borderRadius:60,
  backgroundColor:"#FFF",

},
plus:{
  fontSize:60,
  fontWeight:"bold",
  color:"#586e75",
  textAlign:"center",
  lineHeight:"61"
},
inputWrapper:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
}
  
});
