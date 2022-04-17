import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../Screens/NewsScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import BusinessScreen from '../NewsScreen/Business';
import EntertainmentScreen from '../NewsScreen/Entertainment';
import HealthScreen from '../NewsScreen/Health';
import ScienceScreen from '../NewsScreen/Science';
import SportsScreen from '../NewsScreen/Sports';
import TechnologyScreen from '../NewsScreen/Technology';
import TopTabNavigation from './TopTabNavigation';
import BBCNews from '../NewsScreen/Source/BBCNews';
import CNNNews from '../NewsScreen/Source/CNNNews';
import FoxNews from '../NewsScreen/Source/FoxNews';
import GoogleNews from '../NewsScreen/Source/GoogleNews';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false
      })}
    >
       <Stack.Screen name="Home_" component={TopTabNavigation} />
       <Stack.Screen name="General" component={NewsScreen} />
       <Stack.Screen name="Business" component={BusinessScreen} />
       <Stack.Screen name="Entertainment" component={EntertainmentScreen} />
       <Stack.Screen name="Health" component={HealthScreen} />
       <Stack.Screen name="Science" component={ScienceScreen} />
       <Stack.Screen name="Sports" component={SportsScreen} />
       <Stack.Screen name="BBC" component={BBCNews} />
       <Stack.Screen name="CNN" component={CNNNews} />
       <Stack.Screen name="FoxNews" component={FoxNews} />
       <Stack.Screen name="GoogleNews" component={GoogleNews} />
    </Stack.Navigator>
  );
}

export default StackNavigation;