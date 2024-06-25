import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Form from './Components/FormComponents/Form';
import { auth, realtimedb } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, get, child } from "firebase/database"

export default function Home({ navigation }) {
  const [Login, setLogin] = useState(false); 
  const [Register, setRegister] = useState({ 
    email: ' ',
    password: ' ',
    confirmPassword: ''
  })

  const handelClick = (data) =>{
    const state = JSON.stringify(data.isLogin)
    setLogin(state)
    console.log(Login);
  }

  const handelInput = async (data) =>  {
    // console.log(data);
    setRegister({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    })
    if(Register.email && Register.password){
      if(Login){
         await sigup()
      }else{
        navigation.navigate("HomePage")
      }
    }else{
      alert("Please fill all the fields")
    }
  }

  // console.log("Register data: ", Register.email);
  // db connection 

  const sigup = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth, Register.email, Register.password);
      console.log(user);
      AddUser();
    }catch(err){
      alert(err)
    }
  }
  // add user

  const AddUser = async () =>{
    try{
      const dbRef = ref(realtimedb, 'User/', auth.currentUser.uid);
      await set(dbRef, {
        email: Register.email,
        password: Register.password,
        createdAt: new Date().toISOString(),
      });
      console.log("user added to real time db");
      navigation.navigate("HomePage")

    }catch(err){
      console.log(err);
    }
  }







  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.bgimage}>
      <View style={styles.container}>
      <Form  Toggle={handelClick} data={handelInput}/>
      

    </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgimage:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

    
  },
});
