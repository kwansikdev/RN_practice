import React from 'react';
import {Button, Text, View} from 'react-native';

function SettingScreen({navigate}) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigate.goBack()} />
    </View>
  );
}

export default SettingScreen;
