import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import RadioButton from './RadioButton';

const options = [
  {
    key: 'pay',
    text: 'Morning 9am-12pm',
  },
  {
    key: 'performance',
    text: 'Afternoon 12pm-4pm ',
  },
  {
    key: 'aToZ',
    text: 'Evening 4pm-8pm',
  },
];

const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> :)</Text>
      <Button
        style={{borderRadius: 20}}
        title="Get Member id"
        onPress={() => navigation.navigate('modalPopUp')}
      />
    </View>
  );
}

function ModalPopUp({navigation}) {
  //const [emailSubmit, setEmailSubmit] = useState(false);
  const [show, setShow] = useState(true);
  const [call, setCall] = useState(true);
  const [mail, setmMail] = useState(true);

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

        <View>
          <View>
            <Text style={styles.title}>Don’t know your Member ID? </Text>
          </View>

          <View style={styles.requesttMemberIdcontainer}>
            <Text style={styles.resetMsg}>
              Contact the Member Resource Center to get your Member ID in the
              following ways.
            </Text>
          </View>
          {/* live chat accordion aprt goes from here */}
          <View style={styles.collapsiblecontainer}>
            <View style={styles.collapsibleHeaderTitle}>
              <Image source={require('./img/message.png')} />
              <Text style={styles.livechatText}>Live chat with us</Text>
            </View>
            <View style={styles.collapsibleHeaderTitle}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show ? (
                  <Image
                    style={styles.circle}
                    source={require('./img/plus-circle.png')}
                  />
                ) : (
                  <Image source={require('./img/minus-circle.png')} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {!show ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.resetBtn}>
                <Text
                  style={styles.btnTitle}
                  onPress={() => console.log('clicked live chat button')}>
                  Start Live Chat
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View></View>
          )}

          <View style={{height: 1, backgroundColor: '#C4C4C4'}}></View>

          {/* call us accordion part  */}
          <View style={styles.collapsiblecontainer}>
            <View style={styles.collapsibleHeaderTitle}>
              <Image source={require('./img/phone.png')} />
              <Text style={styles.livechatText}>Call us</Text>
            </View>
            <View style={styles.collapsibleHeaderTitle}>
              <TouchableOpacity onPress={() => setCall(!call)}>
                {call ? (
                  <Image
                    style={styles.circle}
                    source={require('./img/plus-circle.png')}
                  />
                ) : (
                  <Image source={require('./img/minus-circle.png')} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {!call ? (
            <View style={styles.resetMsgcontainer}>
              <Text style={styles.callText}>Monday - Friday 9am - 8pm ET</Text>
              <Text style={styles.phoneNumText}>1-(877)-672-7348</Text>
            </View>
          ) : (
            <View></View>
          )}

          <View style={{height: 1, backgroundColor: '#C4C4C4'}}></View>

          {/* mail us accordion part  */}
          <View style={styles.collapsiblecontainer}>
            <View style={styles.collapsibleHeaderTitle}>
              <Image source={require('./img/mail.png')} />
              <Text style={styles.livechatText}>Request callback</Text>
            </View>
            <View style={styles.collapsibleHeaderTitle}>
              <TouchableOpacity onPress={() => setmMail(!mail)}>
                {mail ? (
                  <Image
                    style={styles.circle}
                    source={require('./img/plus-circle.png')}
                  />
                ) : (
                  <Image source={require('./img/minus-circle.png')} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {!mail ? (
            <View>
              <View style={styles.resetMsgcontainer}>
                <Text style={styles.mailTitleMsg}>
                  We’ll get back to you as soon as we can.
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.textId}>Full Name</Text>
                <TextInput style={styles.input} />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.textId}>Phone Number</Text>
                <TextInput style={styles.input} />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.textId}>Preferred time of day</Text>
              </View>

              {/* testing radion buttons */}
              <View>
                <RadioButton options={options} />
              </View>
              {/* testing radio buttons */}

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.requestBtn}>
                  <Text
                    style={styles.btnTitle}
                    onPress={() => console.log('mail button clicked')}>
                    Request callback
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View></View>
          )}

          {/* <View style={{height: 1, backgroundColor: '#C4C4C4'}}></View> */}

          {/* ============= */}
        </View>
      </View>
    </View>
  );
}

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

      <Stack.Screen
        name="modalPopUp"
        component={ModalPopUp}
        options={modalOptions}
      />
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
    minHeight: 398,
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
    lineHeight: 24,
    //width: 300,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.2,
    color: '#000000',
    marginVertical: 24,
  },
  requesttMemberIdcontainer: {
    justifyContent: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  collapsiblecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    // borderBottomWidth:1,
    // borderBottomColor:'black'
  },

  collapsibleHeaderTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collapsibleMailcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },

  resetMsg: {
    fontSize: 16,
    color: 'black',
    maxWidth: 300,
  },
  mailTitleMsg: {
    fontSize: 16,
    color: 'black',
    maxWidth: 300,
    marginVertical: 9,
  },

  callText: {
    fontSize: 16,
    color: 'black',
    maxWidth: 300,
    marginLeft: 40,
    lineHeight: 19,
  },
  phoneNumText: {
    fontSize: 16,
    color: '#0065F2',
    maxWidth: 300,
    marginLeft: 40,
    marginBottom: 20,
    //lineHeight:16,
  },

  livechatText: {
    //alignSelf:'flex-start',
    fontSize: 18,
    color: 'black',
    lineHeight: 19,
    maxWidth: 316,
    marginLeft: 20,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  circle: {
    //alignSelf:'flex-end',
    //marginLeft:180,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 10,
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
    lineHeight: 40,
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
    marginBottom: 11,
  },

  requestBtn: {
    width: 300,
    height: 50,
    backgroundColor: '#1F2D3D',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 24,
  },
  btnTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
