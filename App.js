/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node}
from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View
} from 'react-native';

import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import {Fragment, useState} from 'react/cjs/react.production.min';


const App: () => Node = () => {

  return( 
      <Text>안녕</Text>
  )
    
    ;
};

const styles = StyleSheet.create({
  input1: {
    backgroundColor:"skyblue",
    fontSize:20,
    borderRadius:15,
    
  }
});

export default App;
