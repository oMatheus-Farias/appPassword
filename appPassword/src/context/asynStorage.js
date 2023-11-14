import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageContext = createContext({});

export default function AsyncStorageProvider({ children }){
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
            let passwords = await getItem(key);
            passwords.push(pass);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        }catch(err){
            alert('Ops! Ocorreu um erro' + err);
        };
    };

    const removeItem = async (key, item) =>{
        try{
            let passwords = await getItem(key);

            let myPasswords = passwords.filter(password => {
                return (password !== item);
            });

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        }catch(err){
            alert('Erro ao deletar' + err);
        };
    };

    return(
        <AsyncStorageContext.Provider value={{ setItem, getItem, removeItem }} >
            { children }
        </AsyncStorageContext.Provider>
    );
};