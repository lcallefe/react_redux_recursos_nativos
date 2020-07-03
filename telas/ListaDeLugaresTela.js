import React from 'react';
import { View, Text, Stylesheet , Platform } from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../componentes/BotaoCabecalho';


const ListaDeLugaresTela = (props) => {
    return (
        <View>
            <text>ListaDeLugaresTela</text>
        </View>
    );
}

ListaDeLugaresTEla.navigationOptions = dadosNav => {
    return {
        headerTitle : 'Lista de Lugares',
        headerRight:
        <HeaderButtons                
            HeaderButtonComponent={BotaoCabecalho}>                
            <Item                    
                title="Adicionar"                    
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}                    
                onPress={() => { dadosNav.navigation.navigate("NovoLugar") }} />            
        </HeaderButtons>
                

    }

}


const estilos = Stylesheet.create ({


});

export default ListaDeLugaresTela;