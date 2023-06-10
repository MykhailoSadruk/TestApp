import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Platform } from '../screens/Profile';
import { TabContent } from './TabContent';


interface Tab {
  id: number;
  icon: string;
}

const TabComponent: React.FC<{selectedPlatform: Platform}> = ({selectedPlatform}) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs: Tab[] = [
    {id: 1, icon: 'table'},
    {id: 2, icon: 'videocamera'},
    {id: 3, icon: 'loading1'},
  ];

  const handleTabPress = (tabId: number) => {
    setActiveTab(tabId);
  };


  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tabButton]}
            onPress={() => handleTabPress(tab.id)}>
            <Icon
              name={tab.icon}
              size={22}
              color={activeTab === tab.id ? '#000' : 'grey'}
            />
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 1 && <TabContent selectedPlatform={selectedPlatform} />}
      {activeTab === 2 && <TabContent selectedPlatform={selectedPlatform} />}
      {activeTab === 3 && <TabContent selectedPlatform={selectedPlatform} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButtonText: {
    color: '#000',
  },
});

export default TabComponent;
