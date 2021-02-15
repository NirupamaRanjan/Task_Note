import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../styles";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import Input from "../components/Input";
import useDispatch from "react-redux";
import * as authActions from "../store/actions/authaction";

export default AuthScreen = (props) => {
  // const signUpHandler = () => {

  // }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={["#ffedff", "#ffe3ff"]} style={styles.gradient}>
        <Card style={styles.cardStyle}>
          <ScrollView style={styles.screen}>
            <Input
              id="email"
              label="E-mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorMessage="Please enter a valid email address."
              onValueChange={() => {}}
              intitialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minlength={6}
              autoCapitalize="none"
              errorMessage="Please enter a valid password"
              onValueChange={() => {}}
              intitialValue=""
            />

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Log in" />
              </View>
              <View style={styles.button}>
                <Button title="Sign up" />
              </View>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
