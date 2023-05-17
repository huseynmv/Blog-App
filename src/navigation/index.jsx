import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BlogList from '../screens/BlogList';
import BlogDetail from '../screens/BlogDetail';

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="List" component={BlogList} />
        <Stack.Screen name="Detail" component={BlogDetail} />
      </Stack.Navigator>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
