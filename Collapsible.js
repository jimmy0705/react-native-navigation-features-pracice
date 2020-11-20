import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM = 

<View 
style={{
  display:"flex",flexDirection: 'column',justifyContent: 'center',
  alignItems: 'center',}}>
    <TouchableOpacity 
    style={{width: 300,
    height: 50,
    backgroundColor: '#1F2D3D',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 25,}}
    >
      <Text 
      style={{color: '#fff', fontWeight: 'bold',}} 
      onPress={() => console.log("live chat clicked")}>
        Start Live Chat
      </Text>
    </TouchableOpacity>
  </View> 
 ;
const CONTENT = [
  {
    title: 'Live chat with us',
    content: BACON_IPSUM,
  },
  {
    title: 'Call us',
    content: 
    <View 
    style={{
      display:"flex",flexDirection: 'column',justifyContent: 'center',
      alignItems: 'center',}}>
      
          <Text style={{color: 'black', fontSize:14,alignSelf:"center"}} >
          Monday - Friday 9am - 8pm ET
          </Text>
          <Text style={{color: '#0065F2', fontSize: 14,textAlign:"center"}} >
          1-(877)-672-7348
          </Text>
      </View> ,
  },
  {
    title: 'Request callback',
    content: 
    <View>
   <View style={{justifyContent: 'center',
    marginBottom: 20,}}>
      <Text style={{fontSize: 16,
    color: 'black',
    maxWidth: 300,}}>
        We’ll get back to you as soon as we can.
      </Text>
    </View>
    <View style={{flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,}}>
      <Text style={{color: '#000000',
    fontSize: 14,
    alignSelf: 'flex-start',
    lineHeight: 30,}}>Full Name</Text>
      <TextInput style={{ width: 300,
    height: 50,
    backgroundColor: '#091321',
    opacity: 0.2,
    fontSize: 16,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',}} />

<Text style={{color: '#000000',
    fontSize: 14,
    alignSelf: 'flex-start',
    lineHeight: 30,}}>Phone Number</Text>
      <TextInput style={{ width: 300,
    height: 50,
    backgroundColor: '#091321',
    opacity: 0.2,
    fontSize: 16,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',}} />
    </View>

    <View style={{flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',}}>
      <TouchableOpacity style={{width: 300,
    height: 50,
    backgroundColor: '#1F2D3D',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 25,}}>
        <Text
          style={{color: '#fff',
          fontWeight: 'bold',}}
          onPress={() => console.log("jjj")}>
          Request callback
        </Text>
      </TouchableOpacity>
    </View>
  </View>,
  },
];


export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    // multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const {activeSections} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{}}>
          {/* <Text style={styles.title}>Accordion Example</Text> */}

          {/*  */}

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
           // expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor: '#F5FCFF',
    // paddingTop: Constants.statusBarHeight,
  },
  title: {
    //textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 30,
  },
  header: {
   // backgroundColor: 'green',
    padding: 10,
    // borderBottomWidth :5,
    // borderBottomColor: 'blue',
    
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    borderTopWidth :1,
    borderTopColor: 'black',
  },
  content: {
    padding: 20,
   // backgroundColor: '#fff',
  //  borderTopWidth :1,
  //   borderTopColor: 'black',
  },
  active: {
    //backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
   // backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
   // backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    //marginRight: 8,
  },

  // testing purpose

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



///////import * as React from 'react';
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
const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> :)</Text>
      <Button
        style={{borderRadius:20,}}
        title="Get Member id"
        onPress={() => navigation.navigate('modalPopUp')}
      />
    </View>
  );
}

function ModalPopUp({navigation}) {
  //const [emailSubmit, setEmailSubmit] = useState(false);

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

            <View style={styles.resetMsgcontainer}>
              <Text style={styles.resetMsg}>
              Contact the Member Resource Center to get your Member ID in the following ways.
              </Text>
            </View>
           
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
