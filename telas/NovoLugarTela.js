import React from 'react';
import { View, Text, Stylesheet, ScrollView, TextInput, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import cores from '../constantes/Cores';

const NovoLugarTela = (props) => {
    const [novoLugar, setNovoLugar] = useState('');
    return (
        <ScrollView >
            <View style={estilos.form}>
                <text style={estilos.titulo}>NovoLugarTela</text>
                <TextInput 
                 style={estilos.TextInput}
                 onChangeText={(texto) =>setNovoLugar(texto)}
                 value={novoLugar}
                
                />
                <Button
                    title="Salvar Lugar"
                    color={cores.primary}
                    onPress={adicionarLugar}
                />
            </View>
        </ScrollView>
    )
};

const estilos = Stylesheet.create ({
    TextInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4

    },

    titulo: {
        fontSize: 18,
        marginBottom: 15
    },

    form: {
        margin:30
    }

});

export default NovoLugarTela;