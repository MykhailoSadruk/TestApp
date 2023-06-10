import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Animated,
} from 'react-native';
import TabComponent from '../components/ Tab';

export interface Platform {
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
  const [delayedSelectedPlatform, setDelayedSelectedPlatform] = useState<Platform | null>(platforms[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(1);
  const [animation] = useState(new Animated.Value(0));

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);

    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
      setModalContent(2);
  
      setTimeout(() => {
        setModalVisible(false);
        setDelayedSelectedPlatform(platform);
        setModalContent(1);
      }, 1200);
    });
  };

  const renderPlatformItem = ({ item }: { item: Platform }) => {
    const animatedStyle = {
      transform: [
        {
          translateX: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0],
          }),
        },
        {
          scale: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ],
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
    };
  
    return (
      <TouchableOpacity
        style={styles.platformItem}
        onPress={() => handlePlatformSelect(item)}
      >
        <Animated.Image
          source={{ uri: item.profilePic }}
          style={[styles.profilePic, animatedStyle]}
        />
        <Animated.Text style={[styles.platformName, animatedStyle]}>
          {item.title}
        </Animated.Text>
      </TouchableOpacity>
    );
  };

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
                source={{ uri: delayedSelectedPlatform?.profilePic }}
                style={styles.profilePic}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.info}>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>{delayedSelectedPlatform?.posts}</Text>
            <Text style={styles.countName}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>{delayedSelectedPlatform?.followers}M</Text>
            <Text style={styles.countName}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem}>
            <Text style={styles.count}>{delayedSelectedPlatform?.following}</Text>
            <Text style={styles.countName}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userDetails}>
        <Text style={styles.name}>{delayedSelectedPlatform?.name}</Text>
        <Text style={styles.profession}>{delayedSelectedPlatform?.prof ? delayedSelectedPlatform?.prof : ''}</Text>
        <Text style={styles.sub}>{delayedSelectedPlatform?.address ? delayedSelectedPlatform?.address : ''}</Text>
        <Text style={styles.sub}>{delayedSelectedPlatform?.subtitle ? delayedSelectedPlatform?.subtitle : ''}</Text>
        <Text style={styles.link}>{delayedSelectedPlatform?.link ? delayedSelectedPlatform.link : 'link'}</Text>
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

      <TabComponent selectedPlatform={delayedSelectedPlatform!} />
      
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {modalContent === 1 ?
              <FlatList
                data={platforms}
                renderItem={renderPlatformItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />  :
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image
                  source={{ uri: selectedPlatform?.profilePic }}
                  style={[styles.profilePic, {width: 150, height: 150, borderRadius: 75}]}
                />
                <Text style={styles.platformName}>{selectedPlatform?.title}</Text>
              </View>
            }
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#fff',
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    height: 170,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  platformItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 5
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
