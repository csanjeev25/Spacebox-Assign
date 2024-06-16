import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import RootNavigationWrapper from './src/routes/RootNavigationWrapper';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'light-content'} backgroundColor="white" />
      <Provider store={store}>
        <RootNavigationWrapper />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
