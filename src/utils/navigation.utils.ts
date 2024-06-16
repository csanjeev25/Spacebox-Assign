import { createNavigationContainerRef, CommonActions, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(...args) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}

export function canGoBack() {
  if (navigationRef.isReady()) {
    return navigationRef.canGoBack();
  }
  return false;
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}

export function reset(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.reset(...args));
  }
}