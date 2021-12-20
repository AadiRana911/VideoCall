// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, TextInput, Pressable } from 'react-native';
import styles from './styles';
import dummyContacts from'../../assets/contacts.json'
import { useNavigation } from '@react-navigation/core';
const ContactsScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredContacts, setFilteredContacts] = useState(dummyContacts)
    const navigation = useNavigation();
    useEffect(() => {
        const newContacts = dummyContacts.filter(
            contact => contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredContacts(newContacts)
    }, [searchTerm])

    const callUser = (user) => {
        navigation.navigate('Calling', {user})
    }

    return (
        <View style = {styles.page}>
            <TextInput
            value={searchTerm}
            onChangeText = {setSearchTerm}
            style = {styles.searchInput}
            placeholder='Search...' 
            />
            <FlatList 
                data = {filteredContacts}
                renderItem={({item: user}) => {
                return(
                    <Pressable onPress = {() => callUser(user)}>
                        <Text style = {styles.contactName}>{user.user_display_name}</Text>
                    </Pressable>
                )
                }}
                ItemSeparatorComponent={() => <View style = {styles.separator} />}
            />
        </View>
    );
}

export default ContactsScreen