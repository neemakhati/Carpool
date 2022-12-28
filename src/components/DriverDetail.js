import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function DriverDetail({ driver_name, car_num, distance, availableSeat }){
    return(
        <View style={styles.cardStyle}>
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={require('../../assets/Car2.jpg')} />
                <View style={{justifyContent: 'center'}}>
                    <Text>Name: {driver_name}</Text>
                    <Text>Car Plate: {car_num}</Text>
                    <Text>Distance: {distance} Km</Text>
                    <Text>Available Seats: {availableSeat}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>ACCEPT</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{color: 'white', backgroundColor: 'rgb(227, 57, 62)', borderRadius: 17,
                    padding: 7, marginBottom: 10, width: '45%'}}
                >
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 15,}}>REJECT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 80,
        margin: 10
    },
    container: {
        flexDirection: 'row'
    },
    cardStyle: {
        borderRadius: 10,
        marginBottom: 20,
        width: 350,
        backgroundColor: 'rgb(153, 240, 240)'
    },
    button: {
        color: 'white',
        backgroundColor: 'rgb(95, 232, 120)',
        borderRadius: 17,
        padding: 7,
        marginBottom: 10,
        width: '45%'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
})
