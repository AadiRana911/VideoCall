import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import bg from '../../assets/download.jfif'

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const IncomingCallScreen = () => {
    const onDecline = () => {
        console.warn('On Decline')
    }

    const onAccept = () => {
        console.warn('On Accept')
    }

    return (
        <ImageBackground source={bg} style = {styles.bg} >
            <Text style = {styles.name}>Asad</Text>
            <Text style = {styles.phoneNumber}>WhatsApp Video...</Text>
            <View style = {[styles.row, {marginTop: 'auto'}]}>
                <View style = {styles.iconContainer}>
                    <Ionicons name="alarm" size={24} color="white" />
                    <Text style = {styles.iconText}>Remind me</Text>
                </View>
                <View style = {styles.iconContainer}>
                    <Entypo name="message" size={24} color="white" />
                    <Text style = {styles.iconText}>Accept</Text>
                </View>
            </View>
            <View style = {styles.row}>
                <Pressable onPress = {onDecline} style = {styles.iconContainer}>
                    <View style = {[styles.iconButtonContainer, {backgroundColor: 'red'}]}>
                        <Entypo name="cross" size={40} color="white" />
                    </View>
                    <Text style = {styles.iconText}>Decline</Text>
                </Pressable>
                <Pressable onPress={onAccept} style = {styles.iconContainer}>
                    <View style = {[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
                        <Entypo name="check" size={40} color="white" />
                    </View>
                    <Text style = {styles.iconText}>Accept</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default IncomingCallScreen
