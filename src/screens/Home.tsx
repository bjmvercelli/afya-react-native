import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => alert('test')}>Home</TouchableOpacity>
        <TouchableOpacity style={styles.button}>Afya</TouchableOpacity>
        <TouchableOpacity style={styles.button}>Contato</TouchableOpacity>
    </View>
  )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#c5c5c5',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        color: '#fff',
    },
    button: {
        flex: 0.1,

    }
})

export default Home;