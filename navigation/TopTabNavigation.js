import React, { Component } from "react";
import { StatusBar, Image, StyleSheet, Platform } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import ExploreScreen from "../Screens/ExploreScreen";
import NewsScreen from "../Screens/NewsScreen";
import { RFValue } from "react-native-responsive-fontsize";

const INDICATOR_SIZE = 61;

const Tab = createMaterialTopTabNavigator()

export default class TopTabNavigation extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIconStyle: {
                        width: 40,
                        height: 40,
                    },
                    tabBarIndicatorStyle: {
                        ...styles.tabBarIndicatorStyles
                    },
                    tabBarStyle: {
                        paddingTop: StatusBar.currentHeight,
                        marginTop: -10,
                        borderRadius: 10,
                    },
                    tabBarShowLabel: true,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name === 'Home') {
                            iconName = 'ios-home'
                            color = focused ? '#008000' : '#B22222'
                            
                        } else if (route.name === 'News') {
                            iconName = 'md-newspaper'
                            color = focused ? 'tomato' : 'gray'
                            color = focused ? '#008000' : '#B22222'

                        }
                        return <Ionicons name={iconName} size={30} color={color} />
                    },
                })}
            >
                <Tab.Screen name="Home" component={ExploreScreen} />
                <Tab.Screen name="News" component={NewsScreen} />
            </Tab.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        width: '90%',
        marginLeft: 20
    },
    tabBarIndicatorStyles: {
        backgroundColor: '#00ff00',
        width: INDICATOR_SIZE,
        height: INDICATOR_SIZE,
        left: '17%',
        top: 20,
        borderRadius: 30,
        borderEndColor: '#001eaf',
    }
})