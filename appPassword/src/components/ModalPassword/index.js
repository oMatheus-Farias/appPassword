import React from "react";
import { 
    Container,
    PasswordContent,
    BtnClosedModal,
    BtnClosedModalText 
} from "./styled";

export default function ModalPassword({ closedModal }){
    return(
        <Container>
            <PasswordContent>
                <BtnClosedModal onPress={ closedModal } >
                    <BtnClosedModalText>Voltar</BtnClosedModalText>
                </BtnClosedModal>
            </PasswordContent>
        </Container>
    );
};