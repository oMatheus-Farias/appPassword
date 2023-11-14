import React, { useContext } from "react";
import { 
    Container,
    Header,
    Title,
    ContentPasswords,
    ListPassword
} from './styled';

import RenderPasswords from "../../components/RenderPasswords";
import { AsyncStorageContext } from "../../context/asynStorage";

export default function Passwords(){
    const { listPassword } = useContext(AsyncStorageContext);

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