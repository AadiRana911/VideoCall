import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    page: {
      height: '100%',
      backgroundColor: '#7b4e80',
      overflow: 'hidden'
    },
    cameraPreview: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 10
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 50,
      marginBottom: 15
    },
    phoneNumber: {
      fontSize: 22,
      color: 'white'
    },
    backButton: {
      position: 'absolute',
      top: 50,
      left: 10,
      zIndex: 10,
    }
    
  });

  export default styles