import React from "react";
import { 
    Container,
    Logo, 
    PasswordArea,
    PasswordTextLength,
    Buttom,
    ButtonText
} from "./styled";

import Slider from '@react-native-community/slider';

export default function Home(){
    return(
        <Container>
            <Logo
                source={ require('../../assets/logo.png') }
            />

            <PasswordArea>
                <PasswordTextLength>16 caracteres</PasswordTextLength>

                <Slider
                    style={{ width: '100%', height: 44 }}
                    minimumValue={ 6 }
                    maximumValue={ 20 }
                    thumbTintColor="#392DE4"
                />

                <Buttom>
                    <ButtonText>Gerar senha</ButtonText>
                </Buttom>
            </PasswordArea>
        </Container>
    );
};