import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#7b4e80',
      overflow: 'hidden'
    },
    cameraPreview: {
      height: 150,
      width: 100,
      backgroundColor: '#ffff6e',
      borderRadius: 10,

      position: 'absolute',
      right: 10,
      top: 100,
    },    
  });

  export default styles