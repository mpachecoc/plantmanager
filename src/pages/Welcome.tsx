import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import watering from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// #missaoespacial - embuscadoproximonivel - astronautas - universoinfinito

export function Welcome() {
  const navigation = useNavigation();
  
  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Manage {'\n'}
          your plants {'\n'}
          in a easy way
          </Text>
        
        <Image
          source={watering}
          style={styles.image} 
          resizeMode="contain"
        />
        
        <Text style={styles.subtitle}>
          Do not forget to wash your plants.
          We take care of remind you everytime you need.
        </Text>
        
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={handleStart}
          >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 32,
    fontFamily: fonts.heading,
    lineHeight: 34
  },

  image: {
    height: Dimensions.get('window').width * 0.7,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
  },

  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },

});
