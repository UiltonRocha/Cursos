import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
    render(){
        const {people} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{uri: people.picture.large}} />
                
                <View style={styles.detailContainer}>
                    <Line label='Endereço:' content={people.location.street} />
                    <Line label='Cidade:' content={people.location.city} />
                    <Line label='Estado:' content={people.location.state} />
                    <Line label='CEP:' content={people.location.postcode} />
                    <Line label='E-mail:' content={people.email} />
                    <Line label='Telefones:' content={people.phone + ' / ' + people.cell} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        marginHorizontal:5
    },
    avatar:{
        aspectRatio: 1,
        borderWidth:1,
        borderColor:'#999999',
        borderRadius:4
    },
    detailContainer:{
        backgroundColor:'#e2f9ff',
        marginTop:5,
        elevation:1
    }
});