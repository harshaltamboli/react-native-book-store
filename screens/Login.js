import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ValidateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleLogin = () => {

    if(!email){
      Alert.alert("Enter The Email")
      return ;
    }

    if(!ValidateEmail(email)){
      Alert.alert("Enter The Valid Email")
      return;
    }

    if(!password){
      Alert.alert("Enter The Password")
      return;
    }

    if(password.length <6 ){
      Alert.alert(" at list 6 digit Enter The Password")
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
        Alert.alert("Success", 
        "Login successful!",
          [
            {
              text:"ok",
              onPress:()=>navigation.navigate('Dashbord')
            }
          ]
        );
      
  };

  return (
   
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity 
  style={styles.button} 
  onPress={handleLogin}
>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>


        <TouchableOpacity 
        style={styles.button}
         onPress={()=> navigation.navigate('Register')}>

          <Text style={styles.buttonText}> Register </Text>

        </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  
  
  );
};


export default Login;

const styles = StyleSheet.create({

safecontainer:{
   flex: 1,
      backgroundColor: "#f8f9fa",
     borderWidth: 2,    
       borderColor: "black",
       margin: 10,
  borderRadius: 10
},
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color:'black',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
