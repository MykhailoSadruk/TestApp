import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import TabComponent from '../components/ Tab';

interface Platform {
  id: string;
  name: string;
  profilePic: string;
  details: string;
}

const platforms: Platform[] = [
  {
    id: '1',
    name: 'Instagram',
    profilePic: '',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    name: 'TikTok',
    profilePic: '',
    details:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    name: 'Twitter',
    profilePic: '',
    details:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // {
  //   id: '4',
  //   name: 'Facebook',
  //   profilePic: '',
  //   details:
  //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // },
];

export const ProfileScreen: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    setModalVisible(false);
  };

  const renderPlatformItem = ({item}: {item: Platform}) => (
    <TouchableOpacity
      style={styles.platformButton}
      onPress={() => handlePlatformSelect(item)}>
      <Image source={{uri: item.profilePic}} style={styles.profilePic} />
      <Text style={styles.platformName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.stackContainer}>
          {platforms.map(platform => (
            <TouchableOpacity key={platform.id} style={styles.platformButton}>
              <Image
                source={{uri: platform.profilePic}}
                style={styles.profilePic}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.info}>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>447</Text>
            <Text style={styles.countName}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>3.6M</Text>
            <Text style={styles.countName}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>1,351</Text>
            <Text style={styles.countName}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userDetails}>
        <Text style={styles.name}>Noah Beck</Text>
        <Text style={styles.profession}>Athlete</Text>
        <Text style={styles.sub}>noah@talentxent.com</Text>
        <Text style={styles.sub}>do what makes you happy</Text>
        <Text style={styles.link}>link</Text>
      </View>

      <View style={styles.panel}>
        <View style={[styles.panelButton, {width: '100%', marginBottom: 10}]} />
        <View style={styles.panelButtons}>
          <TouchableOpacity style={styles.panelButton}>
            <Text style={styles.panelButttonText}>Plane Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton}>
            <Text style={styles.panelButttonText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton}>
            <Text style={styles.panelButttonText}>Hide Icons</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TabComponent />
      {/*
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={platforms}
              renderItem={renderPlatformItem}
              keyExtractor={item => item.id}
              horizontal
            />
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}

      {selectedPlatform && (
        <View style={styles.detailsContainer}>
          <Image
            source={{uri: selectedPlatform.profilePic}}
            style={styles.selectedProfilePic}
          />
          <Text style={styles.selectedPlatformName}>
            {selectedPlatform.name}
          </Text>
          <Text style={styles.selectedPlatformDetails}>
            {selectedPlatform.details}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  stackContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  platformButton: {
    marginRight: -60,
    zIndex: 1,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#fff',
  },
  platformName: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  infoItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  count: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countName: {
    color: '#000',
    fontSize: 14,
  },
  userDetails: {
    flexDirection: 'column',
    marginVertical: 15,
    paddingHorizontal: 16,
  },
  name: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profession: {
    color: 'grey',
    fontSize: 14,
  },
  sub: {
    color: '#000',
    fontSize: 14,
  },
  link: {
    color: 'blue',
    fontSize: 14,
  },
  panel: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 16,
  },
  panelButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  panelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    width: 110,
    height: 50,
    borderRadius: 5,
  },
  panelButttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: 160,
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    padding: 16,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 16,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 18,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  selectedProfilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  selectedPlatformName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
  },
  selectedPlatformDetails: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default ProfileScreen;
