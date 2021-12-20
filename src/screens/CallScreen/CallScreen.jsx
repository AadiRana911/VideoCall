import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import CallActionBox from '../../components/CallActionBox'

const CallScreen = ({navigation}) => {
    return (
        <View style = {styles.page}>
            <View style = {styles.cameraPreview}>
            </View>
            <CallActionBox navigation = {navigation}/>
        </View>
    )
}

export default CallScreen
