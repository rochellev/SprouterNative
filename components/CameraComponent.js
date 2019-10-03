import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraComponent extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={this.state.type}>
        <View style={styles.camera}>
          <TouchableOpacity style={styles.toucher} onPress={() => {
            this.setState({
              type:
                this.state.type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front : Camera.Constants.Type.back,
            });
          }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  }
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  toucher: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  }
})