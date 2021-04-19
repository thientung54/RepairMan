/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-community/async-storage';

export async function getAsyncStorage(keyName) {
    try {
        if (keyName != null && keyName.trim() !== '') {
            const value = await AsyncStorage.getItem(keyName);
            if (value !== null) {
                return value;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.log('Sorry! No AsyncStorage support...');
    }
}

export async function setAsyncStorage(keyName, data) {
    try {
        if (keyName != null && keyName.trim() !== '') {
            await AsyncStorage.setItem(keyName.trim(), data);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log('Sorry! No AsyncStorage support...');
    }
}

export async function removeAsyncStorage(keyName) {
    try {
        if (keyName != null && keyName.trim() !== '') {
            await AsyncStorage.removeItem(keyName);
        }
    } catch (error) {
        console.log('Sorry! No AsyncStorage support...');
    }
}

export async function clearAllAsyncStorage() {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log('Sorry! No AsyncStorage support...');
    }
}
