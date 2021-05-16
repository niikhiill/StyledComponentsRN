import React, {useState, useEffect} from 'react';
// import {} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getSavedValue(key, initialValue) {
  //   const savedValue = AsyncStorage.getItem(key);
  const savedValue = async () => {
    try {
      const sValue = await AsyncStorage.getItem(key);
      return sValue != null ? JSON.parse(sValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //   useEffect(() => {
  //     AsyncStorage.setItem(key, JSON.stringify(value));
  //   }, [value]);

  useEffect(
    async value => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        // saving error
      }
      // AsyncStorage.setItem(key, JSON.stringify(value));
    },
    [value],
  );

  return [value, setvalue];
}
