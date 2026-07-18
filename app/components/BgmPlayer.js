'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './BgmPlayer.module.css';
import { useBgm } from './BgmContext';

// Ruta del mp3 dentro de /public/audio
const TRACK_SRC = '/audio/bgm.mp3';
const TRACK_NAME = 'BGM — Pista 01';

export default function BgmPlayer() {
  const audioRef = useRef(null);
  const { started } = useBgm(); // el login lo activa tras autenticarse
  const [playing, setPlaying] = useState(false);

  const pathname = usePathname();
  // Solo se muestra tras iniciar sesión (pantalla de login excluida)
  const visible = pathname !== '/';

  // Autoplay tras login (el gesto de iniciar sesión lo permite en el navegador)
  useEffect(() => {
    if (!visible || !started) return;
    const audio = audioRef.current;
    if (!audio || playing) return;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, visible]);

  // Limpia el elemento al desmontar
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.player} aria-label="Reproductor de música de fondo">
      <audio ref={audioRef} src={TRACK_SRC} loop preload="none" />
      <span className={styles.note} aria-hidden="true">♪</span>
      <span className={styles.title} title={TRACK_NAME}>
        {TRACK_NAME}
      </span>
      {playing ? (
        <button
          type="button"
          className={styles.btn}
          onClick={handleStop}
          aria-label="Detener música"
          title="Detener"
        >
          ⏹
        </button>
      ) : (
        <button
          type="button"
          className={styles.btn}
          onClick={handlePlay}
          aria-label="Reproducir música"
          title="Reproducir"
        >
          ▶
        </button>
      )}
      {playing && <span className={styles.eq} aria-hidden="true"><i /><i /><i /></span>}
    </div>
  );
}
