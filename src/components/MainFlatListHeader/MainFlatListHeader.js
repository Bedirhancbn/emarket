import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MainFlatListHeader.style';

const SearchCard = () => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={null}
          onChangeText={null}
          placeholder="Search"
          style={styles.textInput}
        />
      </View>
      <View>
        <Text>Filter</Text>
        <TouchableOpacity>
          <Text>Select Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchCard;
