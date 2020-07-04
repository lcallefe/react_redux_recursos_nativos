import React from 'react';
import { View, ImagePropTypes } from 'react-native';
import {
    View,
    Text,
    Image,
    StyleSheet, 
    TouchableOpacity
} from 'react-native'
import cores from '../constantes/Cores';

const LugarItem = () => {
    return (
        <TouchableOpacity style={estilos.LugarItem} onPress={ImagePropTypes.onSelect}>
            <Image
                style={estilos.imagem}
                source={{uri: ImagePropTypes.imagem}}
            
            />
            <View style={estilos.infoContainer}>
                <Text style={estilos.nomeLugar}>{props.nomeLugar}</Text>
                <Text style={estilos.endereco}>{props.endereco}</Text>
            </View>
        </TouchableOpacity>
    );
};

const estilos = Stylesheet.create ({
    lugarItem: {        
        borderBottomColor: '#ccc',        
        borderBottomWidth: 1,        
        paddingVertical: 15,        
        paddingHorizontal: 30,        
        flexDirection: 'row',        
        alignItems: 'center'    },    
    imagem: {        
        width: 70,        
        height: 70,        
        borderRadius: 35,       
        backgroundColor: '#ccc',        
        borderColor: Cores.primary,        
        borderWidth: 1    
    },    
    infoContainer: {        
        marginLeft: 25,        
        width: 250,        
        justifyContent: 'center',        
        alignItems: 'flex-start'    
    },    
    nomeLugar: {        
        color: 'black',        
        fontSize: 18,        
        marginBottom: 5    
    },    
    endereco: {        
        color: '#666',        
        fontSize: 16    
    }

});

export default LugarItem;