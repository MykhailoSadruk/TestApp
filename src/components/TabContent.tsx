import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Platform } from '../screens/Profile';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const TabContent: React.FC<{selectedPlatform: Platform}> = ({selectedPlatform}) => {
  return (
    <>
      {selectedPlatform.title === 'Instagram' || selectedPlatform.title === 'Twitter' ? 
        <ScrollView contentContainerStyle={styles.tabContentContainer}>
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <View
                key={index}
                style={[styles.randomBox, {backgroundColor: getRandomColor()}]}
              />
            ))
          }
        </ScrollView> : 
        <ScrollView contentContainerStyle={styles.tabContentContainer}>
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <View
                key={index}
                style={[styles.randomBox, {backgroundColor: getRandomColor(), height: 150}]}
              >
                <View style={styles.tiktokInfo}>
                  <FeatherIcon
                    name='play'
                    size={18}
                    color='#fff'
                  />
                  <Text style={{color: '#fff'}}>{Math.floor(Math.random() * (2000 - 100 + 1)) + 100}</Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
      }
    </>
  );
};

const styles = StyleSheet.create({
  tabContentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  randomBox: {
    width: 120,
    height: 120,
    margin: 1,
  },
  tiktokInfo: {
    position: 'absolute', 
    bottom: 5, 
    left: 5, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});