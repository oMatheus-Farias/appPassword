import React from "react";
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

export default function ModalPassword({ closedModal, passwords }){
    return(
        <Container>
            <PasswordContent>
                <Title>Senha gerada</Title>

                <PasswordGenerateArea>
                    <PasswordGenerateText>{ passwords[passwords.length - 1] }</PasswordGenerateText>
                </PasswordGenerateArea>

                <BtnsArea>
                    <BtnClosedModal onPress={ closedModal } >
                        <BtnClosedModalText>Voltar</BtnClosedModalText>
                    </BtnClosedModal>

                    <BtnsavePassword>
                        <BtnsavePassworText>Salvar senha</BtnsavePassworText>
                    </BtnsavePassword>
                </BtnsArea>
            </PasswordContent>
        </Container>
    );
};