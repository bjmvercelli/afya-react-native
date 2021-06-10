import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Afya: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>Afya</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    paragraph: {
        color: '#fff'
    }
})

export default Afya;