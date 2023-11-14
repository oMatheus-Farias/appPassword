import React, { useState } from "react";
import { Modal } from "react-native";
import { 
    Container,
    Logo, 
    PasswordArea,
    PasswordTextLength,
    Buttom,
    ButtonText
} from "./styled";

import Slider from '@react-native-community/slider';
import ModalPassword from "../../components/ModalPassword";

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ123456789';

export default function Home(){
    const [sliderValue, setSliderValue] = useState(10);
    const [modalVisible, setModalVisible] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    
    function generatePassword(){
        let password = '';

        for(let i = 0, n = charset.length; i < sliderValue.toFixed(0); i++){
            password += charset.charAt(Math.floor(Math.random() * n));
        };

        setPasswordValue(password);
        setModalVisible(true);
    };

    return(
        <Container>
            <Logo
                source={ require('../../assets/logo.png') }
            />

            <PasswordArea>
                <PasswordTextLength>{ sliderValue.toFixed(0) } caracteres</PasswordTextLength>

                <Slider
                    style={{ width: '100%', height: 44 }}
                    minimumValue={ 6 }
                    maximumValue={ 20 }
                    thumbTintColor="#392DE4"
                    value={ sliderValue }
                    onValueChange={ (value) => setSliderValue(value) }
                />

                <Buttom onPress={ generatePassword } >
                    <ButtonText>Gerar senha</ButtonText>
                </Buttom>
            </PasswordArea>

            <Modal visible={ modalVisible } transparent={ true } animationType='slide' >
                <ModalPassword closedModal={ () => setModalVisible(false) }  password={ passwordValue } />
            </Modal>
        </Container>
    );
};