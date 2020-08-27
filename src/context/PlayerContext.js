import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const initState = {
    hasBunker: false,
    hasChoose: false,
    hasCrash: false,
    hasHouse: false,
    hasMap: false,
    hasTom: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_BUNKER':
            return { ...state, hasBunker: true };
        case 'GET_CHOOSE':
            return { ...state, hasChoose: true };
        case 'GET_CRASH':
            return { ...state, hasCrash: true };
        case 'GET_HOUSE':
            return { ...state, hasHouse: true };
        case 'GET_MAP':
            return { ...state, hasMap: true };
        case 'GET_TOM':
            return { ...state, hasTom: true };
        default:
            return state;
    };
};

export default function PlayerContext(props) {
    const [state, dispatch] = useReducer(reducer, { ...initState, refs: props.value });

    const getBunker = () => {
        dispatch({ type: 'GET_BUNKER' });
    };

    const getChoose = () => {
        dispatch({ type: 'GET_CHOOSE' });
    };

    const getCrash = () => {
        dispatch({ type: 'GET_CRASH' });
    };

    const getHouse = () => {
        dispatch({ type: 'GET_HOUSE' });
    };

    const getMap = () => {
        dispatch({ type: 'GET_MAP' });
    };

    const getTom = () => {
        dispatch({ type: 'GET_TOM' });
    };

    return (
        <Context.Provider value={{ state, getBunker, getChoose, getCrash, getHouse, getMap, getTom }}>
            {props.children}
        </Context.Provider>
    );
};