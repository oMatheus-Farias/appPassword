import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #F3F3FF;
    align-items: center;
    margin-top: 26px;
`;

export const Logo = styled.Image``;

export const PasswordArea = styled.View`
    width: 100%;
    align-items: center;
    padding: 0 36px;
    gap: 32px;
`;

export const PasswordTextLength = styled.Text`
    font-size: 26px;
    font-weight: 700;
    margin-top: 26px;
`;

export const Buttom = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: #392DE9;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #FFF;
`;