import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    padding: 0 22px;
`;

export const PasswordContent = styled.View`
    width: 100%;
    height: 80px;
    background-color: #FFF;
    border-radius: 8px;
`;

export const BtnClosedModal = styled.TouchableOpacity`
    width: 60px;
    height: 40px;
    background-color: #121212;
`;

export const BtnClosedModalText = styled.Text`
   color: #FFF;
`;