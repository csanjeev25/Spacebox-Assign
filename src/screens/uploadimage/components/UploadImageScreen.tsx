import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, TouchableButton} from 'src/components';
import {strings, colors} from 'src/values';
import {testIdProps} from 'src/utils';
import withBaseComponent from 'src/hoc/withBaseComponent';
import {UploadImageContainer} from 'src/screens/uploadimage/components/UploadImageContainer';
import {UploadedImageScreen} from 'src/screens/uploadedimages';

export function UploadImageScreenMain(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container} {...testIdProps('upload-image-screen')}>
      <Header title={strings.headerTitle} />
      <UploadImageContainer />
      <TouchableButton
        style={styles.continueButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.continueButtonText}>Show Uploaded Images</Text>
      </TouchableButton>
      <UploadedImageScreen
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
}

export const UploadImageScreen = withBaseComponent()(UploadImageScreenMain);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.white,
    flex: 1,
    flexDirection: 'column',
  },
  continueButton: {
    padding: 15,
    marginHorizontal: 48,
    borderRadius: 10,
    backgroundColor: '#00c853',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 32,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
