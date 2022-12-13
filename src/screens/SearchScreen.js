import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchScreen=({ navigation })=>{
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        console.warn('useEffect is called');

        if (originPlace && destinationPlace) {
            console.warn('Redirect to results');
        }
     }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
        <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBSePaY3qzjJs0OewXv5KE_OmmSGfpt_nk',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="To?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBSePaY3qzjJs0OewXv5KE_OmmSGfpt_nk',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
      marginTop: 20,
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
    },
  });

export default SearchScreen;