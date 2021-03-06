import {View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './homePage.style';
import likePic from '../../../assets/images/like.png'
export default class HomePage extends React.Component{


    render(){
        const header = 'Wellcom';
        const subHeader = 'to the best day of your life';

        return(
            <View style={styles.container}>
                <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold', paddingTop: 70}}>{header}</Text>
                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', paddingTop: 0}}>{subHeader}</Text>
                <Image
                    style={{width: 140, height: 140, marginTop: 30}}
                    source={likePic}
                />
            </View>
        )
    }
}
