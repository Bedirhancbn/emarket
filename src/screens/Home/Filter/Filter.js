import {View} from 'react-native';
import React from 'react';
import FilterHeader from '../../../components/FilterHeader';
import RadioButtonCard from '../../../components/RadioButtonCard';
import CheckBoxBrand from '../../../components/CheckBoxBrand';
import CheckBoxModel from '../../../components/CheckBoxModel';
import styles from './Filter.style';
import PrimaryButton from '../../../components/PrimaryButton';

const Filter = () => {
  return (
    <View style={styles.container}>
      <FilterHeader />
      <RadioButtonCard />
      <CheckBoxBrand />
      <CheckBoxModel />
      <PrimaryButton />
    </View>
  );
};

export default Filter;
