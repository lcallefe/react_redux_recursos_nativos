import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const DetalhesDoLugarTela = (props) => {
    return (
        <View>
            <text>DetalhesDoLugarTela</text>
        </View>
    );
};

DetalhesDoLugarTela.navigationOptions = (dadosNav) => {    
    return {       
         headerTitle: dadosNav.navigation.getParam('tituloLugar')    
    }

};

const estilos = Stylesheet.create ({


});

export default DetalhesDoLugarTela;