'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ZoomContextProps {
    selectImage:{
        img:string,
        open:boolean
    };
    setSelectImage: (data:{
        img:string,
        open:boolean
    }) => void;
}

const ZoomContext = createContext<ZoomContextProps | undefined>(undefined);


export const ZoomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [selectImage, setSelectImage] = useState({
        img:'',
        open:false
    });

    return (
        <ZoomContext.Provider value={{
            selectImage,
            setSelectImage
        }}>
            {children}
        </ZoomContext.Provider>
    );
};

export const useZoomContext = (): ZoomContextProps => {
    const context = useContext(ZoomContext);
    if (context === undefined) {
        throw new Error('useZoomContext must be used within a ZoomProvider');
    }
    return context;
};