'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import MatrixRain from './components/MatrixRain';
import YautjaText from './components/YautjaText';
import styles from './page.module.css';

const VALID_USER = 'H3-NE129118';
const VALID_PASS = 'Ryuketsu';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      return;
    }

    setLoading(true);
    // Simula autenticación
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);

    if (username.trim() === VALID_USER && password === VALID_PASS) {
      router.push('/terminal');
    } else {
      setError('ACCESO DENEGADO');
    }
  };

  return (
    <main className={styles.main}>
      <MatrixRain />
      <div className={styles.card}>
        {/* GIF superior */}
        <div className={styles.gifWrapper}>
          <Image
            src="/Ini.png"
            alt="Imagen de bienvenida"
            width={320}
            height={200}
            unoptimized
            priority
            className={styles.gif}
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldGroup}>
            <input
              id="username"
              type="text"
              autoComplete="username"
              className={styles.input}
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className={styles.input}
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className={styles.error}>
              <YautjaText>{error}</YautjaText>
            </p>
          )}

          <button
            id="login-btn"
            type="submit"
            className={`${styles.btn} ${loading ? styles.btnLoading : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className={styles.spinner} aria-label="Cargando" />
            ) : (
              <YautjaText>INGRESAR</YautjaText>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
