import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageContext = createContext({});

export default function AsyncStorageProvider({ children }){
    let [listPassword, setListPassword] = useState([]);

    const getItem = async (key) =>{
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        }catch(err){
            alert('Ocorreu um erro em buscar as senhas');
            return [];
        };
    };

    const setItem = async (key, pass) =>{
        try{
            setListPassword((value) => [...value, pass])
            await AsyncStorage.setItem(key, JSON.stringify(listPassword));
            // let passwords = getItem(key);
            // passwords.push(pass)

            // await AsyncStorage.removeItem(key)
        }catch(err){
            alert('Ops! Ocorreu um erro' + err);
        };
    };

    const removeItem = async () =>{
        try{

        }catch(err){

        };
    };

    return(
        <AsyncStorageContext.Provider value={{ listPassword, setItem, getItem }} >
            { children }
        </AsyncStorageContext.Provider>
    );
};

// CONTINUAR: USAR USEEFFECT NA PAGINA MINHAS SENHAS USANDO A FUNC GET ITEM PARA SEMPRE BUSCAR OS DADOS NO ASYNC STORAGE