import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FormRow = props => {
    const {children} = props;
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor: '#dddddd',
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 2,
        elevation:1
    }
});

export default FormRow;