import { Inter } from 'next/font/google';
import './globals.css';
import './yautja-font.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Login',
  description: 'Página de inicio de sesión',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
