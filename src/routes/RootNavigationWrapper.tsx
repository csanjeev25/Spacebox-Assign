import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {navigationRef} from 'src/utils';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors, spacing } from 'src/values';
import { UploadImageScreen } from "src/screens/uploadimage"; 
import {Toast} from 'src/components';
import {screens} from 'src/routes/screens';

const Stack = createNativeStackNavigator();

type RouteConfig = {
  [key: string]: {
    screen: React.ComponentType<any>;
  };
};

type NavigatorProps = {
  initialRouteName: string;
  screenProps: any;
};

const routeConfigs: RouteConfig = {
  [screens.uploadImageScreen]: {
    screen: UploadImageScreen
  }
};

const navOptions: NativeStackNavigationOptions = {
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: spacing.size_18,
    color: colors.background,
  },
  headerTintColor: colors.palette.greyishBrown,
};

const Navigator: React.FC<NavigatorProps> = ({
  initialRouteName,
  screenProps,
}) => {
  return (
    <NavigationContainer ref={navigationRef} onReady={() => {}}>
      <Stack.Navigator
        screenOptions={navOptions}
        initialRouteName={initialRouteName}>
        {Object.keys(routeConfigs).map(screenName => {
          const screenComponent = routeConfigs[screenName].screen;
          return (
            <Stack.Screen
              key={screenName}
              name={screenName}
              component={screenComponent}
              initialParams={{screenProps}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootNavigationWrapper: React.FC<any> = props => {
  return (
    <SafeAreaView style={style.safeareaContainer}>
      <Navigator
        screenProps={props}
        initialRouteName={screens.uploadImageScreen}
      />
      <Toast />
    </SafeAreaView>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RootNavigationWrapper);

const style = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: colors.palette.white,
  },
});
