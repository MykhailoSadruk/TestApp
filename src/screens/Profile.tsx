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
import Icon from 'react-native-vector-icons/AntDesign';

interface Platform {
  id: string;
  title: string;
  profilePic: string;
  details: string;
  isSelected: boolean
  posts: string;
  followers: string;
  following: string;
  name: string;
  prof: string;
  address: string;
  subtitle: string;
  link: string;
  icon: string;
}

const platforms: Platform[] = [
  {
    id: '1',
    title: 'Instagram',
    profilePic: 'https://www.ikea.com/gb/en/images/products/kopparfall-picture-moonscape__0997459_pe822680_s5.jpg?f=xs',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isSelected: true,
    posts: "447",
    followers: "3.6",
    following: "1,351",
    name: 'Noah Beck',
    prof: 'Athlete',
    address: 'noah@talentxent.com',
    subtitle: 'do what makes you happy',
    link: '',
    icon: 'instagram'
  },
  {
    id: '2',
    title: 'TikTok',
    profilePic: 'https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    details:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isSelected: false,
    posts: "237",
    followers: "2.1",
    following: "421",
    name: 'Beck',
    prof: 'Athlete',
    address: 'noah@talentxent.com',
    subtitle: 'do what makes you happy',
    link: '',
    icon: 'tiktok'
  },
  {
    id: '3',
    title: 'Twitter',
    profilePic: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    details:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isSelected: false,
    posts: "47",
    followers: "1.2",
    following: "51",
    name: 'Noah',
    prof: 'Athlete',
    address: 'noah@talentxent.com',
    subtitle: 'do what makes you happy',
    link: '',
    icon: 'twitter',
  },
  {
    id: '4',
    title: 'Facebook',
    profilePic: 'https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/3/GettyImages-1134062152.jpg.rend.hgtvcom.406.406.suffix/1583191585259.jpeg',
    details:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isSelected: false,
    posts: "33",
    followers: "1.6",
    following: "2,351",
    name: 'Beck',
    prof: 'Athlete',
    address: 'noah@talentxent.com',
    subtitle: 'do what makes you happy',
    link: '',
    icon: 'facebook-square'
  },
];

export const ProfileScreen: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    platforms[0],
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    setModalVisible(false);
  };

  const renderPlatformItem = ({item}: {item: Platform}) => (
    <TouchableOpacity
      style={styles.platformItem}
      onPress={() => handlePlatformSelect(item)}>
      <Image source={{uri: item.profilePic}} style={styles.profilePic} />
      <Text style={styles.platformName}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.stackContainer}>
          {platforms.slice(0, 2).map((platform) => (
            <TouchableOpacity
              key={platform.id}
              style={styles.platformButton}
              disabled={!platform.isSelected}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                source={{ uri: platform.profilePic }}
                style={styles.profilePic}
              />
            </TouchableOpacity>
          ))}
          {selectedPlatform && (
            <TouchableOpacity
              style={styles.platformButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                source={{ uri: selectedPlatform.profilePic }}
                style={styles.profilePic}
              />
              {/* <View style={styles.platformIcon}>
                <Icon name={selectedPlatform.icon} size={23} color="#000" />
              </View> */}
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.info}>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>{selectedPlatform?.posts}</Text>
            <Text style={styles.countName}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>{selectedPlatform?.followers}M</Text>
            <Text style={styles.countName}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>{selectedPlatform?.following}</Text>
            <Text style={styles.countName}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userDetails}>
        <Text style={styles.name}>{selectedPlatform?.name}</Text>
        <Text style={styles.profession}>{selectedPlatform?.prof ? selectedPlatform?.prof : ''}</Text>
        <Text style={styles.sub}>{selectedPlatform?.address ? selectedPlatform?.address : ''}</Text>
        <Text style={styles.sub}>{selectedPlatform?.subtitle ? selectedPlatform?.subtitle : ''}</Text>
        <Text style={styles.link}>{selectedPlatform?.link ? selectedPlatform.link : 'link'}</Text>
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
      
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={20} color="#000" />
            </TouchableOpacity>
            <FlatList
              data={platforms}
              renderItem={renderPlatformItem}
              keyExtractor={item => item.id}
              horizontal
            />
          </View>
          
        </TouchableOpacity>
      </Modal>

      {/* {selectedPlatform && (
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
      )} */}
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
  platformIcon: {
    position: 'absolute',
    top: 0,
    right: 0
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
    height: 170,
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  closeButton: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 5
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 18,
  },
  platformItem: {
    flexDirection: 'column',
    alignItems: 'center'
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
