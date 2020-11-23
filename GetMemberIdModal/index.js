import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Accordion from '../Accordion';

export default function ModalPopUp({navigation}) {
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
          <Accordion />

          {/* ============= */}
        </View>
      </View>
    </View>
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
