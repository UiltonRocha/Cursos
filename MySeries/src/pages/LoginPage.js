import React from 'react';
import { View,
    ImageBackground,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDan4jh-0WJDJP-0hq1b4ECMwIS491OIRY",
            authDomain: "myseries-4b28c.firebaseapp.com",
            databaseURL: "https://myseries-4b28c.firebaseio.com",
            projectId: "myseries-4b28c",
            storageBucket: "myseries-4b28c.appspot.com",
            messagingSenderId: "994969279101"
        };
        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { mail, password } = this.state;

        const loginUserSuccess = user => {
            this.setState({message: 'Sucesso!'});
        }
        const loginUserFailed = error => {
            this.setState({message: this.getMessageByErrorCode(error.code)});
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(loginUserSuccess)
            .catch(error => {
                if(error.code === 'auth/user-not-found'){
                    Alert.alert(
                    'Usuário não encontrado',
                    'Deseja criar um cadastro com as informações fornecidas?',
                    [{
                        text: 'Não',
                        onPress: () => console.log('Usuário não quer criar conta'),
                        style: 'cancel'
                    }, {
                        text: 'Sim',
                        onPress: () => {
                            firebase
                            .auth()
                            .createUserWithEmailAndPassword(mail, password)
                            .then(loginUserSuccess)
                            .catch(loginUserFailed)
                        }
                    }],
                        {cancelable: false}
                    )
                    return;
                } 
                    loginUserFailed(error)
            })
            .then(() => this.setState({ isLoading: false }));
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;

        return (
            <View style={styles.containerMessageError}>
                <Text style={styles.textMessageError}>{message}</Text>
            </View>
        )
    }
    renderButton() {
        const entrar = 'Entrar';

        if (this.state.isLoading)
            return <ActivityIndicator />;
        return (
            <View>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => this.tryLogin()}>
                    <Text style={styles.textButton}>{entrar.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <ImageBackground source={require('../images/bg-login.png')} style={styles.container}>
                <FormRow first>
                    <TextInput style={styles.input}
                        placeholder="E-mail"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>

                <FormRow last>
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                        secureTextEntry
                    />
                </FormRow>

                {this.renderButton()}
                {this.renderMessage()}

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    input: {
        backgroundColor: '#ffffff',
        opacity: 0.8,
        paddingHorizontal: 5,
        paddingTop: 15,
        paddingBottom: 5,
        fontSize: 18,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
    },
    buttonLogin: {
        backgroundColor: '#000000',
        marginHorizontal: 15,
        marginVertical: 10,
        elevation: 2,
        borderRadius: 2
    },
    textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingVertical: 15,
        fontSize: 18
    },
    containerMessageError: {
        backgroundColor: '#ffffff',
        opacity: 0.8,
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 10
    },
    textMessageError: {
        color: '#ff4d4d',
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});