import React from "react";
import { 
    Container,
    PasswordText 
} from './styles';

export default function RenderPasswords({ data }){
    return(
        <Container>
            <PasswordText>{ data }</PasswordText>
        </Container>
    );
};