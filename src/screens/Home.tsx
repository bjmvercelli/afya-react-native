import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';

// import { Container } from './styles';

const Home: React.FC = () => {

    const [allowCamera, setAllowCamera] = useState<any>(null);

    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect( () => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setAllowCamera(status == 'granted')
        })();
    }, []);

    if ( allowCamera == null || false){
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}> 
                    Acesso a camera não permitido
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back ?
                        Camera.Constants.Type.front :
                        Camera.Constants.Type.back
                        )
                    }}
                    >
                <Text style={styles.paragraph}>Toque aqui para acessar a camera</Text>
            </TouchableOpacity>
            </Camera>
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
    },
    camera: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width
    }
})

export default Home;