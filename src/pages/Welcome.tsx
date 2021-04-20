import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

import { Button } from '../components/Button';
import watering from '../assets/watering.png'
import colors from '../styles/colors';

// #missaoespacial

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {'\n'}
        your plants {'\n'}
        in a easy way
        </Text>
      
      <Image source={watering} style={styles.image} />
      
      <Text style={styles.subtitle}>
        Do not forget to wash your plants.
        We take care of remind you everytime you need.
      </Text>
      
      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 32,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  image: {
    width: 292,
    height: 284,
  },
});
