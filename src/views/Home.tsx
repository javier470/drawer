import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/Home';



const Home = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
      <Image style={styles.img} source={{uri: 'https://www.creativefabrica.com/wp-content/uploads/2020/09/23/WELCOME-Graphics-5632158-1.jpg'}} />
    </View>
  );
};

export default Home;
