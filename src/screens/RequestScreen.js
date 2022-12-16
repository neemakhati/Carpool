import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

export default function RequestScreen(){
    return(
        <View style={styles.container}>
            <Text>HIIII</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    }
})