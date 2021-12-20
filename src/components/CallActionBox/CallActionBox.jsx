import React, {useState} from 'react'
import { View, Pressable } from 'react-native'
import styles from './styles'

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const CallActionBox = ({navigation}) => {

    const [isCameraOn, setIsCameraOn] = useState(true)
    const [isMicrophoneOn, setIsMicrophoneOn] = useState(true)

    const onReverseCamera = () => {
        console.warn('Reverse Camera')
    }

    const onToggleCamera = () => {
        setIsCameraOn(currentValue => !currentValue)
    }

    const onToggleMicrophone = () => {
        setIsMicrophoneOn(currentValue => !currentValue)
    }

    const onHangup = () => {
        navigation.navigate('Contacts')
    }

    return (
        <View style = {styles.buttonsContainer}>
            <Pressable onPress = {onReverseCamera} style = {styles.iconButton}>
                <Ionicons name="ios-camera-reverse" size={30} color="white" />
            </Pressable>
            <Pressable onPress = {onToggleCamera} style = {styles.iconButton}>
                <MaterialCommunityIcons name={!isCameraOn ? "camera-off" : "camera"} size={30} color="white" />
            </Pressable>
            <Pressable onPress = {onToggleMicrophone} style = {styles.iconButton}>
                <MaterialCommunityIcons name={!isMicrophoneOn ? "microphone-off" : "microphone"} size={30} color="white" />
            </Pressable>
            <Pressable onPress = {onHangup} style = {[styles.iconButton, {backgroundColor: 'red'}]}>
                <MaterialCommunityIcons name="phone-hangup" size={30} color="white" />
            </Pressable>
        </View>
    )
}

export default CallActionBox
