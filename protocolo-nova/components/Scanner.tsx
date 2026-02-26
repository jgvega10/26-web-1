"use client";
import { useEffect, useRef, useState } from "react";

export default function Scanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const filtros: Record<string, string> = {
      NORMAL: "none",
      TERMICA: "invert(1) hue-rotate(90deg) contrast(1.5)",
      NOCTURNA: "sepia(1) saturate(10) hue-rotate(90deg) brightness(0.8)",
      RADAR: "grayscale(1) contrast(3) brightness(1.2)"
    };
  
  useEffect(() => {
    // 🔴 TAREA ESTUDIANTE:
    // 1. Crear función asíncrona para pedir acceso a cámara
    // 2. Usar navigator.mediaDevices.getUserMedia({ video: true })
    // 3. Asignar el stream a videoRef.current.srcObject
    // Acceso a la Cámara
    const startCamera = async() => {
      const stream = await navigator.mediaDevices.getUserMedia({video:true});
      if(videoRef.current) videoRef.current.srcObject = stream;
    }
    startCamera();

    //const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    //if (videoRef.current) videoRef.current.srcObject = stream;

  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-emerald-500/20 bg-black aspect-video">
      <div className="scan-line" />
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        //asegurese de conectarlo al componente HTML del vídeo
        //style={{ filter: filtro }}      
        className="w-full h-full object-cover opacity-60" 
      />
      <div className="absolute bottom-4 left-4 font-mono text-xs text-emerald-500">
        SENSOR_ACTIVO // SEÑAL_ESTABLE
      </div>
    </div>
  );
}