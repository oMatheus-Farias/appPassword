import React, { useContext } from "react";
import { 
    Container,
    PasswordText 
} from './styles';

export default function RenderPasswords({ data, deletePassword }){

    return(
        <Container onLongPress={ deletePassword } >
            <PasswordText>{ data }</PasswordText>
        </Container>
    );
};