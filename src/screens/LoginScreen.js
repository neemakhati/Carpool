import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth/react-native';
import { auth, database } from '../../firebase';
import { query } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => { 
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(`Logged in with: ${user.email}`);
                
                const uid = user.uid;
                (async() => {
                    const docRef = doc(database, 'users', uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.data().role === 'driver') {
                        navigation.navigate('Home');
                    }
                    else if(docSnap.data().role === 'passenger') {
                        navigation.navigate('Map');
                    }
                })();
                
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
        
    }

    return <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <Text style={{marginTop: 30}}>Email</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="email" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your email'
                value={email}
                onChangeText={value => setEmail(value)}
            />
        </View>
        <Text style={{marginTop: 10}}>Password</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your password'
                value={password}
                onChangeText={value => setPassword(value)}
            />
        </View>
        <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}
                // onPress={() => navigation.navigate('Home')}
        >
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 80}}>
            <Text>Or Sign Up Using</Text>
            <TouchableOpacity 
                style={{marginTop: 10}}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.signUp}>SIGN UP</Text>
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
        justifyContent: 'center',
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
    signUp: {
        fontWeight: 'bold'
    }
});

export default LoginScreen;