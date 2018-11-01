import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {peoples} = props;

    const items = peoples.map(people =>
            <PeopleListItem
            key={people.name.first}
            people={people} />
    );

    return(
        <View style={styles.container}>
            { items }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
    }
});

export default PeopleList;