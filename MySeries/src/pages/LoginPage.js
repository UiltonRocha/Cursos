import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component{
    render(){
        return (
            <View>
                <FormRow>
                    <TextInput style={styles.input} placeholder="E-mail" />
                </FormRow>

                <FormRow>
                    <TextInput secureTextEntry style={styles.input} placeholder="Senha" />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal: 5,
        paddingVertical: 10,
        fontSize: 18
    }
});