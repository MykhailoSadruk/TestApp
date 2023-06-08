import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileScreen from './src/screens/Profile';
import Header from './src/components/Header';
import BottomTab from './src/components/BottomTab';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Noah Beck" logo="crosspost" />
      <ProfileScreen />
      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
