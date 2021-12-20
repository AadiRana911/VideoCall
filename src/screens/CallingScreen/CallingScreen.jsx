import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import CallActionBox from '../../components/CallActionBox'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';

const CallingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const user = route?.params?.user
    const goBack = () => {
        navigation.pop();
    }
    return (
        <View style = {styles.page}>
            <Pressable onPress = {goBack} style = {styles.backButton} >
                <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
            <View style = {styles.cameraPreview}>
                <Text style= {styles.name}>{user?.user_display_name}</Text>
                <Text style = {styles.phoneNumber}>ringing +92 300 955 4892</Text>
            </View>
            <CallActionBox navigation = {navigation} />
        </View>
    )
}

export default CallingScreen
