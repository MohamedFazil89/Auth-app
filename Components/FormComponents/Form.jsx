import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from "react-native";

export default function Form(props) {
    const [isLogin, setIsLogin] = useState(true); // true = Register, false = Login
    // const [email, setEmail] = useState("")
    // const [Password, setPassword] = useState("")
    // const [ConfirmPassword, setConfirmPassword] = useState("")
    const [register, setRegister] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })




    function OnClicks() {
        setIsLogin(!isLogin)
        props.Toggle({ isLogin })
        setRegister({
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    function handleSubmit(){
        props.data(register)
        // props.Password({ Password })
        // props.email({ email })

    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Title}>{isLogin ? "Register" : "Login"}</Text>
            <TextInput
                style={styles.input}
                placeholder="Username or Email"
                placeholderTextColor={'gray'} 
                value={register.email}
                onChangeText={(text) => setRegister({ ...register, email: text})}
                />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'gray'}
                secureTextEntry={true}
                value={register.password}
                onChangeText={(text) => setRegister({ ...register, password: text})}
            />


            {isLogin && <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor={'gray'}
                secureTextEntry={true}
                value={register.confirmPassword}
                onChangeText={(text) => setRegister({...register, confirmPassword: text})}
            />}

            <TouchableOpacity onPress={OnClicks}>
                <Text style={[styles.Title, styles.Login]}>{isLogin ? "Login" : "Register"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{isLogin ? "Register" : "Login"}</Text>
            </TouchableOpacity>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        // margin: 'auto'
        width: '80%',

    },
    Title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    input: {
        color: 'white',
        borderWidth: 0,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white',


    },
    button: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        shadowOffset: {
            width: 10,
            height: 12
        },
        shadowColor: 'white',
        shadowOpacity: .8,
        elevation: 5
    },
    buttonText: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: 10,
        fontSize: 18,

    },
    Login: {
        color: 'lightblue',
        textDecorationLine: 'underline',
        textAlign: 'left',
        fontSize: 15,
        opacity: .9,
        marginLeft: 9,
    }

})