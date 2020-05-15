import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
export const {height, width} = Dimensions.get('window');
export const primaryColor = 'rgb(88, 35, 158)';

const NameInput = ({navigation}) => {
  const [P1name, setP1name] = useState('');
  const [P2name, setP2name] = useState('');
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      // behavior={Platform.OS == 'ios' ? 'height' : 'padding'}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} />
        <View>
          <Text style={styles.playerLable}>Player 1 name</Text>
          <TextInput
            style={styles.NameInput}
            maxLength={18}
            value={P1name}
            onChangeText={text => setP1name(text)}
            autoCorrect={false}
          />
        </View>
        <View>
          <Text style={styles.playerLable}>Player 2 name</Text>
          <TextInput
            style={styles.NameInput}
            maxLength={18}
            value={P2name}
            onChangeText={text => setP2name(text)}
            autoCorrect={false}
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            if (P1name != '' && P2name != '') {
              setP1name('');
              setP2name('');
              navigation.navigate('Game', {Player1: P1name, Player2: P2name});
            } else {
              alert('Players details can not be blanck');
            }
          }}
          style={styles.btnWrapper}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  playerLable: {
    color: primaryColor,
    fontSize: width * 0.05,
  },
  NameInput: {
    borderColor: primaryColor,
    borderWidth: 4,
    fontSize: width * 0.05,
    color: primaryColor,
    paddingLeft: 10,
    marginTop: width * 0.03,
  },
  btnWrapper: {
    backgroundColor: primaryColor,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: width * 0.05,
  },
});

export default NameInput;
