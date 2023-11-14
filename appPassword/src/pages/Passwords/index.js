import React, { useContext, useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
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
    const { getItem, removeItem } = useContext(AsyncStorageContext);
    const [listPassword, setListPassword] = useState([]);
    const focused = useIsFocused();

    useEffect(() => {
        async function handleGetItem(){
            let password = await getItem('@password');
            setListPassword(password);
            console.log(listPassword)
        };

        handleGetItem();
    }, [focused]);

    async function handleDeletepassword(item){
        const passwords = await removeItem('@password', item);
        setListPassword(passwords);
    };

    return(
        <Container>
            <Header>
                <Title>Minhas senhas</Title>
            </Header>

            <ContentPasswords>
                <ListPassword
                    data={ listPassword }
                    keyExtractor={ (item) => String(item) }
                    renderItem={ ({ item }) => <RenderPasswords data={ item } deletePassword={ () => handleDeletepassword(item) } /> }
                />
            </ContentPasswords>
        </Container>
    );
};