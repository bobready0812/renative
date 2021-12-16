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
import {Fragment} from 'react/cjs/react.production.min';

const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle, {
                        color: isDarkMode
                            ? Colors.white
                            : Colors.black
                    }
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription, {
                        color: isDarkMode
                            ? Colors.light
                            : Colors.dark
                    }
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode
            ? Colors.darker
            : Colors.lighter
    };

    return (
        <View>
            <View>
                <TextInput  style={styles.input1}>

                </TextInput>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  input1: {
    backgroundColor:"skyblue",
    fontSize:20,
    borderRadius:15,
    
  }
});

export default App;
