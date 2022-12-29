import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AcceptScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Accept Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default AcceptScreen;