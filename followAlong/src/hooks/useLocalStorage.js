import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    //  When we create state, check to see if that value is in localStorage
    //  If it does, put that into our state value
    //  If it does not, put our initialValue into state AND localStorage
    //  When we update our state, save that update to localStorage
  
    // const [ value, setValue ] = useState(initialValue);
  
    const [ value, setValue ] = useState(()=> {
      if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      }
  
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });
  
    const setLocalStorageValue = value => {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    }
  
    return [value, setLocalStorageValue];
  }