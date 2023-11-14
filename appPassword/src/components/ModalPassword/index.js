import React, { useContext } from "react";
import { 
    Container,
    PasswordContent,
    Title,
    PasswordGenerateArea,
    PasswordGenerateText,
    BtnsArea,
    BtnClosedModal,
    BtnClosedModalText,
    BtnsavePassword,
    BtnsavePassworText 
} from "./styled";

import { AsyncStorageContext } from "../../context/asynStorage";

export default function ModalPassword({ closedModal, password }){
    const { setItem } = useContext(AsyncStorageContext);

    async function handleCopy(){
        await setItem('@password', password);
        closedModal();
        alert('Senha salva com sucesso');
    };

    return(
        <Container>
            <PasswordContent>
                <Title>Senha gerada</Title>

                <PasswordGenerateArea>
                    <PasswordGenerateText>{ password }</PasswordGenerateText>
                </PasswordGenerateArea>

                <BtnsArea>
                    <BtnClosedModal onPress={ closedModal } >
                        <BtnClosedModalText>Voltar</BtnClosedModalText>
                    </BtnClosedModal>

                    <BtnsavePassword onPress={ handleCopy } > 
                        <BtnsavePassworText>Salvar senha</BtnsavePassworText>
                    </BtnsavePassword>
                </BtnsArea>
            </PasswordContent>
        </Container>
    );
};