import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';

const SingUpScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>

        <Text style={{marginTop: 30}}>Full Name</Text>
        <View style={styles.inputContainer}>
            <FontAwesome5 style={styles.icon} name="user" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your full name'
            />
        </View>

        <Text style={{marginTop: 10}}>Phone</Text>
        <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="phone" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your phone'
            />
        </View>

        <Text style={{marginTop: 10}}>Password</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your password'
            />
        </View>

        <Text style={{marginTop: 10}}>Confirm Password</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your password'
            />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 50}}>
            <Text>Already a User?</Text>
            <TouchableOpacity 
                style={{marginTop: 10}}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingVertical: 30,
        height: '75%',
        width: '80%',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    inputStyle: {
        flex: 1,
    },
    icon: {
        marginHorizontal: 5,
        width: 25,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        padding: 5
    },
    button: {
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: 17,
        padding: 7,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    login: {
        fontWeight: 'bold'
    }
});

export default SingUpScreen;