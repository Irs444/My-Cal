import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const IntroScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.inner}>
                <Image source={require('../../assets/calculator1.gif')} style={styles.innerimg} />
            </View>
        </View>


    )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:"lightgray",
        height:'100%',
        width:'100%',
        
    },
   

})