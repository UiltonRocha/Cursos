import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {peoples} = props;
    const textElements = peoples.map(people => {
        const {first} = people.name;

        return  <View key={first} style={styles.line}>
                <Text style={styles.lineText}>
                   {first}
               </Text>
               </View>
      });

    return(
        <View style={styles.container}>
            { textElements }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
    },
    line:{
        backgroundColor:'#e2edff',
        marginHorizontal: 5,
        marginTop: 5,
        paddingHorizontal: 10,
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomColor:'#dddddd',
        borderRightColor:'#dddddd'
    },
    lineText:{
        fontSize:15
    }
});

export default PeopleList;