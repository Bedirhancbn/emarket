import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'expo-checkbox';
import styles from './CheckBoxModel.style';

const CheckBoxModel = ({onData}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const renderModel = ({item}) => {
    return (
      <View style={styles.render_container}>
        <CheckBox
          style={styles.checkBox}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          color={'blue'}
        />
        <Text style={styles.render_text}>{item.model}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Model</Text>
      <FlatList
        data={onData}
        renderItem={renderModel}
        style={styles.flatList}
      />
    </View>
  );
};
export default CheckBoxModel;
