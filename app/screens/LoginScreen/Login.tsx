import React from "react";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import Colors from "../../utils/Colors";

WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.loginImage}
        source={require("../../../assets/images/login.png")}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 26, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's Find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning and Repair
          </Text>{" "}
          Services
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            marginTop: 20,
            color: Colors.WHITE,
          }}
        >
          Best App to find servies near you which provide a professional service
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ textAlign: "center", fontSize: 18, color: Colors.PRIMARY }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 36,
  },
});
