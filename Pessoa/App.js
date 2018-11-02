import {createStackNavigator} from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import {capitalizeFirstLetter} from './src/util';

export default createStackNavigator({
    'Main':{
        screen: PeoplePage
    },
    'PeopleDetail':{
        screen: PeopleDetailPage,
            navigationOptions: ({navigation}) => {
            const peopleName = capitalizeFirstLetter(
                navigation.state.params.people.name.first
            );


            return ({
                title: peopleName
            });
        }
    }
},{
    navigationOptions:{
        title: 'Pessoas!',
        headerTintColor: '#ffffff',
        headerStyle:{
            backgroundColor: '#7ec1d3',
        },
        headerTitleStyle:{
            color:'#ffffff'
        }
    }
});

//export default PeoplePage;