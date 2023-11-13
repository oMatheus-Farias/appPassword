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
    background-color: #FFF;
    border-radius: 8px;
    padding: 36px 28px;
    align-items: center;
    gap: 18px;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: 700;
    color: #000;
`;

export const PasswordGenerateArea = styled.TouchableOpacity`
    width: 100%;
    height: 46px;
    background-color: #0E0E0E;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const PasswordGenerateText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
`;

export const BtnsArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const BtnClosedModal = styled.TouchableOpacity`
    flex: 1;
    height: 46px;
    background-color: #FFF;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const BtnClosedModalText = styled.Text`
   color: #000;
   font-size: 16px;
   font-weight: 700;
`;

export const BtnsavePassword = styled.TouchableOpacity`
    flex: 1;
    height: 46px;
    background-color: #392DE9;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const BtnsavePassworText = styled.Text`
    color: #FFF;
   font-size: 16px;
   font-weight: 700;
`;