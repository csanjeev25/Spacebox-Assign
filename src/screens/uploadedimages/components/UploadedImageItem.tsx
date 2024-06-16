import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {spacing, colors} from 'src/values';
import ErrorBoundary from 'src/components/ErrorBoundary';
import {IImage} from 'src/redux/types';

interface IUploadedImageItem {
  image: IImage;
}

export function UploadedImageItem(props: IUploadedImageItem) {
  const {image} = props;

  return (
    <ErrorBoundary>
      <View style={styles.imageContainer} id={image.id}>
        <Image source={{uri: image.uri}} style={styles.image} />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    marginHorizontal: 16
  },
  image: {
    aspectRatio: 16/9,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
