import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import { query, where, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';
import DriverDetail from '../components/DriverDetail';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { KNN } from '../KNN';

export default function RequestScreen(){
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState([]);
    const [snapSize, setSnapSize] = useState(0);

    useEffect(() => {
        setData([]);

        async function getData() {
            const myArrary = [];
            const carSnapshot = await getDocs(query(collection(database, "car_db")));
            carSnapshot.forEach(car => {
                myArrary.push({
                    availableSeat: car.data().car_seat,
                    location: {
                        lat2: car.data().driver_latitude,
                        lon2: car.data().driver_longitude
                    }
                });
            });
            return myArrary;
        }

        getData()
            .then(data => {
                const nearestNeighbors = KNN(data, {
                        requiredSeat: 2,
                        location: {
                            lat1: 27.7172,
                            lon1: 85.3240
                        }
                    }, 1);
                console.log(nearestNeighbors);
            })
    }, []);

    

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <DriverDetail 
                            driver_name={item.driver_name}
                            car_num = {item.car_num}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 20
    }
})