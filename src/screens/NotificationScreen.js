import React from "react";
import {View, Text} from 'react-native';

const NotificationScreen = ({message}) => {
    console.log(message);
    return (
        <View style={{flex: 1}}>
            <Text>Notification</Text>
        </View>
    )
};

export default NotificationScreen;