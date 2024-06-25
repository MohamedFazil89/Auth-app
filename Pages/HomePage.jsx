import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function HomePage({ navigation }){

    return(
        <View style={styles.text}>



            {/* <Text style={styles.text}> Home Page</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text >Go Back</Text>
            </TouchableOpacity>  */}

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        margin: 'auto'

    }
})

export default HomePage;