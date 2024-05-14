import {View} from 'react-native';
import React from 'react';
import FilterHeader from '../../../components/FilterHeader';
import RadioButtonCard from '../../../components/RadioButtonCard';
import CheckBoxBrand from '../../../components/CheckBoxBrand';
import CheckBoxModel from '../../../components/CheckBoxModel';
import useFetch from '../../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Filter.style';
import PrimaryButton from '../../../components/PrimaryButton';

const Filter = () => {
  const {data} = useFetch(Config.URL);
  return (
    <View style={styles.container}>
      <FilterHeader />
      <RadioButtonCard />
      <CheckBoxBrand />
      <CheckBoxModel onData={data} />
      <PrimaryButton />
    </View>
  );
};

export default Filter;
