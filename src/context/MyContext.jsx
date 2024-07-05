import React, { useState } from "react";

export const MyContext = React.createContext();


//ana componenti sarmalayacak olan component

export const MyProvider = ({ children }) => {
    //component olarak yazdık çünkü içine state de yazabilmeliyiz
    //.Provider statelerimiz alt componentlere aktaracak yapı
    //.Consumer daha çok class yapısında kullanılır
    //value içerisine yazdığımız tüm stateleri alabiliriz
  const [myState, setMyState] = useState("Emin")
  
    const value = {
      myState,
      setMyState
    };
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };

