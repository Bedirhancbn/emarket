import {View, Text, FlatList} from 'react-native';
import React, {useContext, useState} from 'react';
import CheckBox from 'expo-checkbox';
import styles from './CheckBoxModel.style';
import {ProductContext} from '../../context/ProductContext';
import CheckBoxHeader from '../CheckBoxHeader';

const CheckBoxModel = ({onData}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {filtredBrands, setFiltredBrands} = useContext(ProductContext);

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
        ListHeaderComponent={<CheckBoxHeader />}
      />
    </View>
  );
};
export default CheckBoxModel;
