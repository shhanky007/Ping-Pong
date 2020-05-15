import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {primaryColor} from './NameInput';

export const {height, width} = Dimensions.get('window');

const Game = ({navigation, route}) => {
  const NameP1 = route.params.Player1;
  const NameP2 = route.params.Player2;
  const [P1wincount, SetP1wincount] = useState(0);
  const [P2wincount, SetP2wincount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.containerP}>
        <View style={styles.InteractionContainer}>
          <Text style={styles.PlayerName}>{NameP1}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => SetP1wincount(P1wincount + 1)}
            style={styles.btnWincount}>
            <Text style={styles.btnWinCounttext}>Add Win</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DisplayWins}>
          <Text style={styles.winText}>Wins:</Text>
          <Text style={styles.winCount}>{P1wincount}</Text>
        </View>
      </View>
      <View style={styles.containerP}>
        <View style={styles.InteractionContainer}>
          <Text style={styles.PlayerName}>{NameP2}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => SetP2wincount(P2wincount + 1)}
            style={styles.btnWincount}>
            <Text style={styles.btnWinCounttext}>Add Win</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DisplayWins}>
          <Text style={styles.winText}>Wins:</Text>
          <Text style={styles.winCount}>{P2wincount}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerP: {
    flex: 1,
  },
  InteractionContainer: {
    flexDirection: 'row',
  },
  PlayerName: {
    flex: 2,
    fontSize: height * 0.04,
    paddingLeft: width * 0.02,
    fontWeight: '600',
    alignSelf: 'center',
    color: primaryColor,
  },
  btnWincount: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 8,
  },
  btnWinCounttext: {
    color: 'white',
    fontSize: width * 0.05,
  },
  DisplayWins: {
    flex: 1,
    marginTop: width * 0.08,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  winText: {
    fontSize: width * 0.07,
    color: primaryColor,
  },
  winCount: {
    fontSize: width * 0.2,
    color: primaryColor,
  },
});
export default Game;
