import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#7ec1d3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:20,
        paddingVertical:10
    }
});