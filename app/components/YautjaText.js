'use client';
import { useEffect, useRef } from 'react';

export default function YautjaText({ children, className, style }) {
  const spanRef = useRef(null);

  useEffect(() => {
    // Load font via JS FontFace API — bypasses OTS restrictions on CSS @font-face
    if (document.fonts) {
      const f = new FontFace('Yautja', "url(/fonts/yautja-regular.woff2) format('woff2')");
      f.load()
        .then((loaded) => {
          document.fonts.add(loaded);
          if (spanRef.current) {
            spanRef.current.style.fontFamily = "'Yautja', monospace";
          }
        })
        .catch(() => { });
    }
  }, []);

  return (
    <span ref={spanRef} className={className} style={style}>
      {children}
    </span>
  );
}
