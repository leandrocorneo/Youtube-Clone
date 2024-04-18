import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface IMenuContextProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}


interface IProps {
  children: React.ReactNode;
}

export const MenuContext = createContext<IMenuContextProps>({
  openMenu: true,
  setOpenMenu: () => {},
});

export const MenuStore: React.FC<IProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};