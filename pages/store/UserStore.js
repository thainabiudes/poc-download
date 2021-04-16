import React, { createContext, useState } from 'react';

export const UserContext = createContext();

UserContext.displayName = 'UserContext';

export const UserStore = props => {
  const [nome, setNome] = useState();

  return (
    <UserContext.Provider
      value={{
        state: {
          nome
        },
        dispatch: {
          nome: setNome
        }
      }}
      {...props}
    />
  );
};
