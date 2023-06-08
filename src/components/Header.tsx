import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface HeaderProps {
  title: string;
  logo: string;
}

export const Header: React.FC<HeaderProps> = ({title, logo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{logo}</Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <Icon name="calendar" size={20} color="#000" />
        <Icon
          name="loading1"
          size={20}
          color="#000"
          style={{marginHorizontal: 10}}
        />
        <EntypoIcon name="bar-graph" size={20} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    color: '#000',
  },
});

export default Header;
