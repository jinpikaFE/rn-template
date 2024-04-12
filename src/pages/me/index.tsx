import React from 'react';
import {Text, View, ViewProps} from 'react-native';

const MeScreen: React.FC<ViewProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MeScreen</Text>
    </View>
  );
};

export default MeScreen;
