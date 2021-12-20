import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // },
    page: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    contactName: {
      marginVertical: 10,
      fontSize: 16
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#f0f0f0'
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5
    }
  });

  export default styles