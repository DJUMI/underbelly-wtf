import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const initState = {
    current: null,
    prev: null,
    playing: false,
    fx: {
        crash: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/crash.mp3"),
        shot: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/shot.mp3"),
        to_dystopia: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/SoundFX/utopia/To_Dystopia.mp3"),
        open: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/SoundFX/utopia/Door_Open.mp3"),
        close: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/SoundFX/utopia/Door_Close.mp3"),
        smack: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/SoundFX/utopia/smack.mp3"),
        scratch: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/scratch.mp3"),
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
        track10C: new Audio("https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/9C_1.mp3"),

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

        get_through: new Audio('https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/get_through.mp3'),
        d_start: new Audio('https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/music/dystopia/d_start.mp3'),
    }

};

const reducer = (state, action) => {
    switch (action.type) {
        case 'PLAY_SONG':
            return { ...state, prev: state.current, current: action.payload, playing: true };
        case 'STOP_SONG':
            return { ...state, current: null, prev: null, playing: false };
        case 'PAUSE_SONG':
            return { ...state, playing: false };
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

    const startSong = (value) => {
        console.log(`starting: ${value}`)
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
        fadeIn(state.tracks[value], 1, 0.1, 300);
        dispatch({ type: 'PLAY_SONG', payload: value });
    };

    const stopSong = () => {
        console.log(`stopping: ${state.current}`)
        if (state.current != null) {
            fadeOut(state.tracks[state.current], 0, 0.1, 100, 1);
        }
        dispatch({ type: 'STOP_SONG' });
    };

    const playSong = (value) => {
        console.log(`playing: ${value}`)
        state.tracks[value].loop = true;
        if (state.current != null) {
            if (state.current === value && !state.tracks[state.current].paused) {
                return;
            }
            state.tracks[state.current].pause();
        }

        state.tracks[value].play();
        dispatch({ type: 'PLAY_SONG', payload: value });
    };

    const pauseSong = () => {
        console.log(`pausing: ${state.current}`)
        if (state.current != null) {
            state.tracks[state.current].pause();
        }
        dispatch({ type: 'PAUSE_SONG' });
    };

    const playFX = (value) => {
        console.log(`playing FX: ${value}`)
        state.fx[value].play();
    };

    return (
        <Context.Provider value={{ state, pauseSong, playFX, playSong, startSong, stopSong }}>
            {props.children}
        </Context.Provider>
    );
};