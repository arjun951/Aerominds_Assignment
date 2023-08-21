import React, {useState} from 'react';
import {Text, StyleSheet, View, Modal, TouchableHighlight, Image} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 4000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}>
        <View style={styles.modal}>
            <Image
              style={{ width: '100%', height: 200, resizeMode: 'stretch',borderWidth: 4,borderColor: '#EA7B04' }}
              source={{ uri: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/11/15/Pictures/gslv-mk-iii-d2-gsat-29-mission_fe78cebe-e882-11e8-a696-ab1a80e4d2e8.jpg' }}
            />
            <Text>{'\n'} </Text>
            <Text style={styles.text}> ISRO to launch surveillance satellite</Text>

            <TouchableHighlight style={styles.touchableButton}
              onPress={() => { this.toggleModal(!this.state.modalVisible) }}>
              <Text>Story will close in 4 seconds..</Text>
            </TouchableHighlight>
          </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          showModal();
        }}>
        <Image source={{uri: 'https://media.licdn.com/dms/image/C4E03AQGHIv10cf8TSw/profile-displayphoto-shrink_800_800/0/1618214635416?e=2147483647&v=beta&t=WVyl4j6meB-vVSR9_qDSqCBIAhZPKYphJTVf1_Bjvcc'}}
       style={{width: 120, height: 120,borderRadius: 120,borderWidth: 4,borderColor: '#EA7B04'}} />
      </TouchableHighlight>
      <Text>{'\n'} </Text>
      <Text style={styles.titleText}>Arjun Dev Mishra</Text>
      <Text>{'\n'} </Text>
      <Text style={styles.baseText}>Software Developer</Text>
      
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
         ArjunDevMishra.com
      </Text>
      <Text>{'\n'} </Text>
      <Text>{'\n'} </Text>
      <Text style={styles.baseText}>Tap on image to view Story !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
    modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#032139',
      justifyContent: 'center',
      padding : 10,
    },
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    },
    touchableButton: {
      width: '70%',
      padding: 10,
      backgroundColor: '#f06292',
      marginBottom: 10,
      marginTop: 30,
    },
});

export default App;