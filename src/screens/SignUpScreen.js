import React,{useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { database } from '../../firebase';
import { collection, doc , setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";

const SingUpScreen = ({ navigation }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const collectionRef = collection(database, 'users');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("User created with: " + user.email);

                setDoc(doc(database, "users", user.uid), {
                    ...data,
                    uid: user.uid
                })
                .then(() => console.log('Data Added'))
                .catch(err => console.log(err.message))
            })
            .catch(err => console.log(err.message));
            navigation.navigate("Login");
    }

    return <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>

        <Text style={{marginTop: 30}}>Full Name</Text>
        <View style={styles.inputContainer}>
            <FontAwesome5 style={styles.icon} name="user" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your full name'
                value={data.name}
                onChangeText={value => {setData(prev => ({...prev, name: value}))}}
            />
        </View>

        <Text style={{marginTop: 10}}>Email</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="email" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your email'
                value={data.email}
                onChangeText={value => {setData(prev => ({...prev, email: value}))}}

            />
        </View>

        <Text style={{marginTop: 10}}>Phone</Text>
        <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="phone" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your phone'
                value={data.phone}
                onChangeText={value => {setData(prev => ({...prev, phone: value}))}}
            />
        </View>

        <Text style={{marginTop: 10}}>Password</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your password'
                isPassword={true}
                value={data.password}
                onChangeText={value => {setData(prev => ({...prev, password: value}))}}
            />
        </View>

        <Text style={{marginTop: 10}}>Confirm Password</Text>
        <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock-outline" size={22} color="gray" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Type your password'
                value={data.confirmPassword}
                isPassword={true}
                onChangeText={value => {setData(prev => ({...prev, confirmPassword: value}))}}
            />
        </View>

        <TouchableOpacity 
            style={styles.button}
            onPress={handleSignUp}>
            <Text style={styles.buttonText}>SIGNUP</Text>
            
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