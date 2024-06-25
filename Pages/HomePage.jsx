import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated  } from "react-native";

function HomePage({ navigation }){

    const InitPosition = new Animated.ValueXY({ x: 0, y: -900})

useEffect(()=>{
    Animated.sequence([
        Animated.delay(1000),
        Animated.spring(InitPosition,{
            toValue: { x: 0, y: 0 },
            stiffness: 4,
            damping: 6,
            mass: 1,
            useNativeDriver: true
        }),
        
    ]).start()
})


    return(
        <Animated.View style={[styles.text, {
            transform: [
                { translateX: InitPosition.x},
                { translateY: InitPosition.y}
            ]
        }]}>



            <Text style={styles.text}> Home Page</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text >Go Back</Text>
            </TouchableOpacity> 

        </Animated.View>
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