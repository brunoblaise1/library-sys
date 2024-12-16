/* eslint-disable */
"use client"
import { useRef, useEffect } from 'react'
export const useWithSound = (audioSource: any) => {
    const soundRef = useRef() as any
   //initiate the sound  
    useEffect(() => {
        soundRef.current = new Audio(audioSource) as any
    }, [])
 // play the sund
  const playSound = () => {
    soundRef.current?.play();
  };

//s
    return {
        playSound
    }

}