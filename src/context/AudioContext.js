import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const initState = {
    current: null,
    prev: null,
    fx: {

    },
    tracks: {
        track1A: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/1A.mp3"),
        track5A: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/5A.mp3"),
        track9A: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/9A.mp3"),

        track1B: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/1B.mp3"),
        track3B: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/3B.mp3"),

        track2C: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/2C.mp3"),
        track5C: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/5C.mp3"),
        track9C: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/9C.mp3"),

        track1C: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/1C.mp3"),
        track5C_U: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/5C.mp3"),
        track9C1: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/9C1.mp3"),
        track9C5: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/9C5.mp3"),

        track1H: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/1H.mp3"),
        track2H5: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/2H5.mp3"),
        track2H13: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/2H13.mp3"),

        track1L: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/1L.mp3"),
        track3L: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/3L.mp3"),
        track4L: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/4L.mp3"),
        track5L: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/5L.mp3"),
        track7L2: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/utopia/7L2.mp3"),
    }

};

const reducer = (state, action) => {
    switch (action.type) {
        case 'PLAY_SONG':
            return { ...state, prev: state.current, current: action.payload };
        case 'STOP_SONG':
            return { ...state, current: null, prev: null };
        default:
            return state;
    };
};

export default function AudioContext(props) {
    const [state, dispatch] = useReducer(reducer, { ...initState, refs: props.value });

    const fadeIn = (audio, targetVolume, volumeStep, tick) => {
        audio.play();
        var vol = Math.min(targetVolume, audio.volume + volumeStep);
        audio.volume = vol;

        if (audio.volume < targetVolume) {
            setTimeout(() => { fadeIn(audio, targetVolume, volumeStep, tick) }, tick);
        }
    }

    const fadeOut = (audio, targetVolume, volumeStep, tick, orignalVolume) => {
        var vol = Math.max(0, audio.volume - volumeStep);
        audio.volume = vol;

        if (audio.volume > targetVolume) {
            setTimeout(() => { fadeOut(audio, targetVolume, volumeStep, tick, orignalVolume) }, tick);
        } else {
            audio.pause();
            audio.volume = orignalVolume;
        }
    }

    const playSong = (value) => {
        if (state.current != null) {
            if (state.current === value) {
                return;
            }
            if (state.prev) {
                if (!state.tracks[state.prev].paused) {
                    state.tracks[state.prev].pause();
                }
            }
            fadeOut(state.tracks[state.current], 0, 0.1, 100, 1);
        }
        state.tracks[value].volume = 0;
        state.tracks[value].loop = true;
        fadeIn(state.tracks[value], 1, 0.1, 500);
        dispatch({ type: 'PLAY_SONG', payload: value });
    };

    const stopSong = (value) => {
        if (state.current != null) {
            fadeOut(state.tracks[state.current], 0, 0.1, 500, 1);
        }
        dispatch({ type: 'STOP_SONG', payload: value });
    };

    return (
        <Context.Provider value={{ state, playSong, stopSong }}>
            {props.children}
        </Context.Provider>
    );
};