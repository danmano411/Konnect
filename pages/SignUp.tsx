import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import constants from "../constants";

const windowHeight = constants.dimentions.height;
const windowWidth = constants.dimentions.width;

type SignUpProps = {
  navigation: any;
};

const SignUp = (props: SignUpProps) => {
  // const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(response);
      alert("Check your email!");

      setEmail("");
      setPassword("");
      setLoading(false);

      props.navigation.navigate("Account");
    } catch (error: any) {
      // console.log(error);
      alert("Sign Up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const switchHandler = () => {
    setEmail("");
    setPassword("");
    setLoading(false);

    props.navigation.navigate("LogIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.infoInput}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.infoInput}
          secureTextEntry={true}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.switchTextContainer}
        onPress={switchHandler}
      >
        <Text style={styles.switchText}>Already have an account? Log in!</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        {loading ? (
          <View style={styles.enterButton}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <TouchableOpacity style={styles.enterButton} onPress={() => signUp()}>
            <Text style={styles.enterButtonText}>Sign Up</Text>
          </TouchableOpacity>
        )}
        <View style={styles.enterTextContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    height: windowHeight * 0.15,
    flexDirection: "row",
    paddingHorizontal: (windowWidth * 20) / 390,
    paddingTop: windowHeight * 0.04,
    alignItems: "center",
    // marginBottom: windowHeight * 0.023,
  },

  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "black",
    fontSize: windowWidth * 0.09,
    fontWeight: "bold",
  },

  inputs: {
    flexDirection: "column",
    padding: (windowWidth * 20) / 390,
    height: windowHeight * 0.18,
    gap: windowHeight * 0.026,
  },

  infoInput: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: windowWidth * 0.003,
    fontSize: windowWidth * 0.045,
    paddingHorizontal: windowWidth * 0.04,
  },

  switchTextContainer: {
    width: "100%",
    alignItems: "center",
    height: windowHeight * 0.03,
    justifyContent: "center",
  },

  switchText: {
    fontSize: windowWidth * 0.035,
    color: colors.mainColor.color,
    textDecorationLine: "underline",
  },

  bottom: {
    bottom: 0,
    left: 0,
    width: "100%",
    position: "absolute",
    height: windowHeight * 0.15,
    flexDirection: "column",
    padding: (windowWidth * 20) / 390,
    alignItems: "center",
    gap: windowHeight * 0.01,
  },

  enterButton: {
    flex: 2,
    width: "100%",
    backgroundColor: colors.mainColor.color,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  enterButtonText: {
    color: "white",
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },

  enterTextContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUp;
