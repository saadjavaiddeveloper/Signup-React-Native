import React from 'react';
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

const Signup = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={style.mainView}>
        <Image source={require('../assets/logo.png')} style={style.logo} />
        {/* <Text style={{fontWeight:"bold"}}>Signup</Text> */}
        <TextInput placeholder="FirstName" style={style.userNameInput} />
        <TextInput placeholder="Last Name" style={style.passwordInput} />
        <TextInput placeholder="UserName" style={style.userNameInput} />
        <TextInput secureTextEntry={true} placeholder="Password" style={style.passwordInput} />
        <TouchableOpacity
          style={style.loginBtnView}
          onPress={() => {
            alert('login successfully');
            navigation.navigate('About');
          }}>
          <Text style={style.loginBtn}>Signup</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={style.LogBtnView} onPress={()=> navigation.navigate("Home")}>
            <Text style={style.LogBtn}>Login</Text>
        </TouchableOpacity>
        {/* <Text>Forget Password?</Text>
        <TouchableOpacity style={style.signinBtnView}>
          <Text style={style.signinBtn}>Sign in with Google</Text>
        </TouchableOpacity>
        <View style={style.accountView}>
          <Text>Don't Have an account?</Text>
          <Text>Create account</Text>
        </View> */}
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

export default Signup;
