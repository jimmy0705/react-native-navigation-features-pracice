import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RadioButton from './RadioButton';
const options = [
  {
    key: '1',
    text: 'Morning 9am-12pm',
  },
  {
    key: '2',
    text: 'Afternoon 12pm-4pm ',
  },
  {
    key: '3',
    text: 'Evening 4pm-8pm',
  },
];

export default function Accordion(props) {
const {img1} = props.data;
console.log(img1);
  const [show, setShow] = useState('') ;

  function showHandler(value) {
    const obj = {...show, ...{[value]:!show[value]}};
    setShow(obj)
  }

  return (
    <>
      <View style={styles.collapsiblecontainer}>
        <View style={styles.collapsibleHeaderTitle}>
          <Image source={require('./img/message.png')} />
          <Text style={styles.livechatText}>Live chat with us</Text>
        </View>
        <View style={styles.collapsibleHeaderTitle}>
          <TouchableOpacity id ="chat" onPress={() => showHandler('chat')}>
            {!show.chat ? (
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
      {/* {show.chat && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetBtn}>
            <Text
              style={styles.btnTitle}
              onPress={() => console.log('clicked live chat button')}>
              Start Live Chat
            </Text>
          </TouchableOpacity>
        </View>
      )} */}
     {props.data.key !== "3" && (
       <View style={{height: 1, backgroundColor: '#C4C4C4'}}></View>
     )}
      

      

     
    </>
  );
}

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
  },

  livechatText: {
    fontSize: 18,
    color: 'black',
    lineHeight: 19,
    maxWidth: 316,
    marginLeft: 20,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
