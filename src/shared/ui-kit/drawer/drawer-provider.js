import React, { createContext, useContext, useState } from 'react';

const DrawerContext = createContext(undefined);

export const DrawerProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDrawer = (content) => {
        setIsOpen(true);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    return (
        <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) throw new Error('useDrawer must be used within a DrawerProvider');
    return context;
};
