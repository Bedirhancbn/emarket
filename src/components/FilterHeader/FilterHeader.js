import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './filterHeader.style';
import {useNavigation} from '@react-navigation/native';

export default function FilterHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../../assets/images/close_icon.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Filter</Text>
      </View>
    </View>
  );
}
