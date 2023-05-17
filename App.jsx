import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {BlogProvider} from './src/store/BlogContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BlogProvider>
          <Navigation />
        </BlogProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
