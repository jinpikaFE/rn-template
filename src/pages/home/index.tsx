import React from 'react';
import {Button, Text, View, ViewProps} from 'react-native';

const HomeScreen: React.FC<ViewProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.push('Me')} />
    </View>
  );
};

export default HomeScreen;
