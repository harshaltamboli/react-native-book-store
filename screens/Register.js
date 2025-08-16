import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

const Register = () => {

const[name,setName]=useState("");
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[repassword,setRepassword] = useState("");



const ValidateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

const handelRegister=() => {

  if(!email){
    Alert.alert("Enter The Email");
    return;
  }
  if(!password){
    Alert.alert("Enter the password ");

    return;
  }
  if(!ValidateEmail(email)){
    Alert.alert("Enter The Valid Email");
    return;
  }
if(password!==repassword){
  Alert.alert("pasword not match");
  return;
}

if(password.length<6){
  Alert.alert("at list 6 digit enter");
  return ;
}

console.log("name",name);
console.log("Email",email);
console.log("password",password);
console.log("confirm password",repassword);
Alert.alert("Register SuccesFully");

}

  return (
    <SafeAreaView style={styles.safecontainer}>
    <View style={styles.container}>
      <Text style={styles.headertext}>Create Account  </Text>

      {/* input code */}

 <TextInput
 style={styles.input}
 placeholder='Enter The Name'
 placeholderTextColor='black'
 value={name}
 onChangeText={setName}

 />

 <TextInput
 style={styles.input}
 placeholder='Enter The Email'
 placeholderTextColor='black'
  keyboardType="email-address"
 value={email}
 onChangeText={setEmail}

 />

  <TextInput
 style={styles.input}
 placeholder='Enter The password'
 placeholderTextColor='black'
 value={password}
 onChangeText={setPassword}

 />


  <TextInput
 style={styles.input}
 placeholder='Confirm Password'
 placeholderTextColor='black'
 value={repassword}
 onChangeText={setRepassword}

 />
 <TouchableOpacity style={styles.button} onPress={(handelRegister)}>
  
  <Text style={styles.buttonText}>Register</Text>

 </TouchableOpacity>
 
 
 
  </View>

  </SafeAreaView>
  )

}

export default Register


const styles = StyleSheet.create({
  safecontainer:{
        flex: 1,
      backgroundColor: "#f8f9fa",
     borderWidth: 2,    
       borderColor: "black",
       margin: 10,
  borderRadius: 10

  },
container:{
  flex: 1,
    padding: 20,
    justifyContent: "center",

},
headertext:{
 fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 30,
    textAlign: "center",
},

input:{
borderColor: "#ccc",
    borderWidth: 1,
    color: "#000",
    fontSize: 16,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    elevation: 1,


},
button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

});