import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: '100%',
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 100,
      marginBottom: 15
    },
    phoneNumber: {
      fontSize: 22,
      color: 'white'
    },
    bg: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      paddingBottom: 50,
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
    },
    iconContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    iconButtonContainer: {
      padding: 15,
      borderRadius: 50,
      margin: 10,
    },
    iconText: {
      color: 'white'
    }
  });

  export default styles