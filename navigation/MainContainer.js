import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home'
import Details from './screens/DetailsScreen'
import Setting from './screens/SettingsScreen'
import Task1 from './screens/Task1';
import Task2 from './screens/Task2';
import ToDoList from './screens/ToDoList';

// screen names

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const Task = "Task";
const TaskTwo = "TaskTwo";
const List = "ToDoList";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    // <SafeAreaView>
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOption={({route})=>({
                tabBarIcon:({focused, color, size })=>{
                    let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
              else if (rn === Task) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
              else if (rn === TaskTwo) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
              else if (rn === List) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;

                },

              })}>
            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={settingsName} component={Details} />
            <Tab.Screen name={detailsName} component={Setting} />
            <Tab.Screen name={Task} component={Task1} />
            <Tab.Screen name={TaskTwo} component={Task2} />
            <Tab.Screen name={List} component={ToDoList} />

            </Tab.Navigator>
        </NavigationContainer>
    // </SafeAreaView>
  )
}

export default MainContainer