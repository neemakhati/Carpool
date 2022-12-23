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

        (async () => {
            // const carQuery = query(collection(database, "car_db"));
            // const carSnapshot = await getDocs(carQuery);
    
            // carSnapshot.forEach((car) => {
            //     setData(prev => [
            //         ...prev,
            //         {
            //             car_num: car.data().car_num,
            //             id: car.id,
            //             car_seat: car.data().car_seat,
            //             driver_latitude: car.data().driver_latitude,
            //             driver_longitude: car.data().driver_longitude,
            //             driver_name: car.data().driver_name
            //         }
            //     ])
            // })
            const carQuery = query(collection(database, "car_db"));
            const carSnapshot = await getDocs(carQuery);
            setSnapSize(carSnapshot.size);

            carSnapshot.forEach((car) => {
                setLocations(prev => [
                    ...prev,
                    {
                        availableSeat: car.data().car_seat,
                        location: {
                            lat2: car.data().driver_latitude,
                            lon2: car.data().driver_longitude,
                        }
                    }
                ])
            })
        })();
    }, []);

    if (locations.length != snapSize) return null;

    const nearestNeighbors = KNN(locations, {
        requiredSeat: 2,
        location: {
            lat1: 27,
            lon1: 81
        }
    }, 1);
    console.log(nearestNeighbors);

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