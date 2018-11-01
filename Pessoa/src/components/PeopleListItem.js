import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {capitalizeFirstLetter} from '../util';
const PeopleListItem = props => {
    const {people} = props;
    const {title, first, last} = people.name;
    return (
        <TouchableOpacity onPress={() => console.log ('Clocou em mim !!!', first)}>
        <View style={styles.line}>
            <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
            <Text style={styles.lineText}>
                {`${
                    capitalizeFirstLetter(title)
                } ${
                    capitalizeFirstLetter(first)
                } ${
                    capitalizeFirstLetter(last)
                }`}
            </Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line:{
        backgroundColor:'#e2edff',
        marginHorizontal: 5,
        marginTop: 5,
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomColor:'#dddddd',
        borderRightColor:'#dddddd'
    },
    lineText:{
        flex:6,
        fontSize:15,
        paddingHorizontal: 10
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        borderRadius: 50,
        marginLeft:5
    }
});

export default PeopleListItem;