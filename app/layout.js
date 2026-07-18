import { Inter } from 'next/font/google';
import './globals.css';
import './yautja-font.css';
import BgmPlayer from './components/BgmPlayer';
import { BgmProvider } from './components/BgmContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Login',
  description: 'Página de inicio de sesión',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BgmProvider>
          {children}
          <BgmPlayer />
        </BgmProvider>
      </body>
    </html>
  );
}
