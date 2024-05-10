import {View} from 'react-native';
import React from 'react';
import FilterHeader from '../../../components/FilterHeader';
import RadioButtonCard from '../../../components/RadioButtonCard';
import CheckBoxBrand from '../../../components/CheckBoxBrand';
import CheckBoxModel from '../../../components/CheckBoxModel';
import useFetch from '../../../hooks/useFetch';
import Config from 'react-native-config';

const Filter = () => {
  const {data} = useFetch(Config.URL);
  return (
    <View>
      <FilterHeader />
      <RadioButtonCard />
      <CheckBoxBrand onData={data} />
      <CheckBoxModel onData={data} />
    </View>
  );
};

export default Filter;
