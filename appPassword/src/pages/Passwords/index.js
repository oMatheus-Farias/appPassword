import React from "react";
import { AsyncStorage } from 'react-native';
import { 
    Container,
    Header,
    Title,
    ContentPasswords,
    ListPassword
} from './styled';

import RenderPasswords from "../../components/RenderPasswords";

export default function Passwords(){
    let listPassword = ['dfddfdf', 'jopjpuup', 'jdidhosihdhs', 'hsuhdguisg'];

    return(
        <Container>
            <Header>
                <Title>Minhas senhas</Title>
            </Header>

            <ContentPasswords>
                <ListPassword
                    data={ listPassword }
                    renderItem={ ({ item }) => <RenderPasswords data={ item } /> }
                />
            </ContentPasswords>
        </Container>
    );
};