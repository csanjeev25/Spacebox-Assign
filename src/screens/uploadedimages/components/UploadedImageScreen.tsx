import React from 'react';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import withBaseComponent from 'src/hoc/withBaseComponent';
import {IUploadedImageScreen} from '../types';
import CrossIcon from 'src/svg/CrossIcon';
import {UploadedImageList} from './UploadedImageList';

export function UploadedImageScreenMain(props: IUploadedImageScreen) {
  const {visible, onClose} = props;
  return (
    <Modal visible={visible} animationType={'slide'} transparent={false}>
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <CrossIcon />
        </TouchableOpacity>
        <UploadedImageList />
      </View>
    </Modal>
  );
}

export const UploadedImageScreen = withBaseComponent()(UploadedImageScreenMain);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});
