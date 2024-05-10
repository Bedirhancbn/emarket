import {View, Text} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './RadioButtonCard.style';

const RadioButtonCard = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Old to new',
        value: 'option1',
        color: 'blue',
      },
      {
        id: '2',
        label: 'New to old',
        value: 'option2',
        color: 'blue',
      },
      {
        id: '3',
        label: 'Price hight to low',
        value: 'option3',
        color: 'blue',
      },
      {
        id: '4',
        label: 'Price low to hight',
        value: 'option4',
        color: 'blue',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState();

  const handleSelect = selectedRadioButton => {
    setSelectedId(selectedRadioButton);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Sort by</Text>
        <RadioGroup
          color={styles.blue}
          labelStyle={styles.labelStyle_RadioGroup}
          containerStyle={styles.container_RadioGroup}
          radioButtons={radioButtons}
          onPress={handleSelect}
          selectedId={selectedId}
        />
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default RadioButtonCard;
