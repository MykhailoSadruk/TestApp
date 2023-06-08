import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface Tab {
  id: number;
  icon: string;
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TabContent: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.tabContentContainer}>
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <View
            key={index}
            style={[styles.randomBox, {backgroundColor: getRandomColor()}]}
          />
        ))}
    </ScrollView>
  );
};

const TabComponent: React.FC = () => {
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

      {activeTab === 1 && <TabContent />}
      {activeTab === 2 && <TabContent />}
      {activeTab === 3 && <TabContent />}
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
});

export default TabComponent;
