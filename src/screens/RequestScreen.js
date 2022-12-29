import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import { query, where, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';
import DriverDetail from '../components/DriverDetail';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { KNN } from '../KNN';
import store from '../store';
import { useSelector } from 'react-redux';

export default function RequestScreen({navigation}){
    const requiredSeat = useSelector(state => state.requiredSeat);
    const location = useSelector(state => state.location);

    const [data, setData] = useState(null);
    const [locations, setLocations] = useState([]);
    const [snapSize, setSnapSize] = useState(0);

    useEffect(() => {
        setData(null);

        async function getData() {
            const myArrary = [];
            const carSnapshot = await getDocs(query(collection(database, "car_db")));
            carSnapshot.forEach(car => {
                myArrary.push({
                    availableSeat: car.data().car_seat,
                    location: {
                        lat2: car.data().driver_latitude,
                        lon2: car.data().driver_longitude
                    },
                    driver_name: car.data().driver_name,
                    car_num: car.data().car_num,
                    distance: 0
                });
            });
            return myArrary;
        }

        getData()
            .then(data => {
                const nearestNeighbors = KNN(data, {
                        requiredSeat: requiredSeat,
                        location: {
                            lat1: location.latitude,
                            lon1: location.longitude
                        }
                    }, 3);
                setData(nearestNeighbors);
                console.log(nearestNeighbors);
            })
    }, []);

    const deleteItem = (index) => {
        const newData =[...data];
        newData.splice(index, 1);
        setData(newData);
    }
    

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.car_num}
                renderItem={({item, index}) => {
                    return (
                        <DriverDetail 
                            driver_name={item.driver_name}
                            car_num = {item.car_num}
                            distance = {item.distance}
                            availableSeat = {item.availableSeat}
                            deleteItem = {deleteItem}
                            index={index}
                            navigation={navigation}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
            {data != null && data?.length == 0 ? <Text>You are out of options</Text> : null}
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