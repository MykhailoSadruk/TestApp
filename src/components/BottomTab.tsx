import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

interface BottomTabProps {
  activeTab: number;
  setActiveTab: (tabIndex: number) => void;
}

const BottomTab: React.FC<BottomTabProps> = ({activeTab, setActiveTab}) => {
  const tabs = [
    {id: 1, icon: 'home'},
    {id: 2, icon: 'comment'},
    {id: 3, icon: 'diff-added'},
    {id: 4, icon: 'stack'},
    {
      id: 5,
      icon: 'user',
      profilePic:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AA_black_image.jpg&psig=AOvVaw3lg8XSRR136zkbcuF3S51J&ust=1686296519952000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC0j5qWs_8CFQAAAAAdAAAAABAE',
    },
  ];

  const handleTabPress = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <View style={styles.bottomTabContainer}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tabButton,
            activeTab === tab.id && styles.activeTabButton,
          ]}
          onPress={() => {}}>
          {tab.profilePic ? (
            <Image
              source={{}}
              style={[
                styles.profilePic,
                activeTab === tab.id && styles.activeProfilePic,
              ]}
            />
          ) : (
            <Icon
              name={tab.icon}
              size={24}
              color={activeTab === tab.id ? '#000' : '#333'}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabButton: {
    backgroundColor: '#e6e6e6',
  },
  profilePic: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#000',
  },
  activeProfilePic: {
    borderColor: '#000',
    borderWidth: 2,
  },
});

export default BottomTab;
