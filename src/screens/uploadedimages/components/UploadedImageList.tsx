import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors, spacing, strings} from 'src/values';
import {ListEmptyScreen} from 'src/components';
import {isNullOrEmptyArray} from 'src/utils';
import {useUploadedImageList} from '../hooks';
import {FlashList} from '@shopify/flash-list';
import {IImage} from 'src/redux/types';
import {UploadedImageItem} from './UploadedImageItem';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { ErrorScreen } from 'src/components/ErrorScreen';

export function UploadedImageList() {
  const {images, error, isFetchingImages, onErrorScreenRender} =
    useUploadedImageList();

  if (isFetchingImages) {
    <ActivityIndicator
      style={{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  const renderImage = ({item, index}: {item: IImage; index: number}) => {
    if (!item) return null;
    return <UploadedImageItem image={item} />;
  };

  return (
    <View style={styles.containerStyle}>
      <ErrorBoundary onError={onErrorScreenRender}>
        {isNullOrEmptyArray(images) ? (
          <ListEmptyScreen displayText={strings.noImagesUploaded} />
        ) : (
          <FlashList
            data={images}
            keyExtractor={(item, _) => item.id}
            renderItem={renderImage}
          />
        )}
      </ErrorBoundary>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.palette.white,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.palette.whiteFive,
    marginLeft: spacing.grid_5_half,
    marginRight: spacing.grid_5_half,
  },
  container: {
    width: '100%',
    flexDirection: 'column',
  },
});
