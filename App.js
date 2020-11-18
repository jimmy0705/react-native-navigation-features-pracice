//import * as React from 'react';
import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Profile({navigation}) {
  const [emailSubmit, setEmailSubmit] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.modalContent}>
        <View>
          <TouchableOpacity
            style={styles.touchableIdArea}
            onPress={() => navigation.goBack()}>
            <View style={styles.rectangle}></View>
          </TouchableOpacity>
        </View>

        {!emailSubmit ? (
          <View>
            <View>
              <Text style={styles.title}>Forgot your password? </Text>
            </View>

            <View style={styles.resetMsgcontainer}>
              <Text style={styles.resetMsg}>
                Confirm your email and we’ll send the instructions to reset your
                password.
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.textId}>Email</Text>
              <TextInput style={styles.input} />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.resetBtn}>
                <Text
                  style={styles.btnTitle}
                  onPress={() => setEmailSubmit(true)}>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View>
              <Text style={styles.title}>
                Email sent to john.smith@gmail.cm{' '}
              </Text>
            </View>

            <View style={styles.resetMsgcontainer}>
              <Text style={styles.resetMsg}>
                Please check your inbox for a link to reset your password.
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

const modalOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: 'transparent'},
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({current: {progress}}) => ({
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
        extrapolate: 'clamp',
      }),
    },
  }),
};

const ForgotPasswordClickOption = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <Stack.Navigator headerMode="screen" mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={ForgotPasswordClickOption}
      />

      <Stack.Screen name="Profile" component={Profile} options={modalOptions} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

// modal style are from here will put this to an another file in project
const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    height: '100%',
  },

  modalContent: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: 398,
    width: '100%',
    bottom: 0,
    borderWidth: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderColor: '#C4C4C4',
  },
  rectangle: {
    alignSelf: 'flex-start',
    height: 5,
    width: 70,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
  },
  touchableIdArea: {
    marginTop: 25,
  },
  title: {
    fontSize: 23,
    width: 300,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000000',
    marginVertical: 30,
  },

  resetMsgcontainer: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  resetMsg: {
    fontSize: 16,
    color: 'black',
    maxWidth: 300,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#091321',
    opacity: 0.2,
    fontSize: 16,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textId: {
    color: '#000000',
    fontSize: 14,
    alignSelf: 'flex-start',
    lineHeight: 30,
  },

  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    width: 300,
    height: 50,
    backgroundColor: '#1F2D3D',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 25,
  },
  btnTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
