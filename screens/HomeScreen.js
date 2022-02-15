import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <SafeAreaView>
      <View>
        <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
        <Button
          title="setting 열기"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
