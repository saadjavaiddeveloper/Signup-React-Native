import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {style} from './style';

const Login = ({navigation}) => {
  const [newData, setNewData] = useState("")
  const [newPass, setNewPass] = useState("")


  return (
    <SafeAreaView>
      <View style={style.mainView}>
        <Image source={require('../assets/logo.png')} style={style.logo} />
        <TextInput placeholder="UserName" value={newData} onChangeText={(e)=> setNewData(e)} style={style.userNameInput} />
        <TextInput
      secureTextEntry={true}
        value={newPass} onChangeText={(e)=>{
          setNewPass(e)
        }} placeholder="Password" style={style.passwordInput} />
        <TouchableOpacity
          style={style.loginBtnView}
          onPress={() => {
            alert('login successfully');
            navigation.navigate('About');
          }}>
          <Text style={style.loginBtn}>Login</Text>
        </TouchableOpacity>
        <Text>Forget Password?</Text>
        <TouchableOpacity style={style.signinBtnView}>
          <Text style={style.signinBtn}>Sign in with Google</Text>
        </TouchableOpacity>
        <View style={style.accountView}>
          <Text>Don't Have an account?</Text>
          <Text onPress={()=> navigation.navigate("Signup")}>Create account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;
