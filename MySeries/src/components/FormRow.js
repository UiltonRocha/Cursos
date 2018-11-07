import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormRow = props => {
    const { children } = props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        elevation: 0.5,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        marginHorizontal: 15,
        marginTop: 10
    }
});

export default FormRow;