import * as ReactNative from 'react-native';

jest.useFakeTimers();

afterAll(() => {
  jest.restoreAllMocks();
});

import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);