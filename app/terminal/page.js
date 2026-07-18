'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './terminal.module.css';
import { TREE, SERIAL } from './ficha-data';

const BOOT_LINES = [
  '> init kernel_hoplita --mode secure',
  '> verificando firma biométrica .......... OK',
  '> montando partición /dev/neohumano ..... OK',
  `> leyendo número de serie ............... ${SERIAL}`,
  '> cargando módulo de ficha .............. OK',
  '> conexión establecida. bienvenido, operador.',
];

const WARNING = [
  '╔══════════════════════════════════════════════════════════════╗',
  '║   HEXTON ᴮⁱᵒᵗᵉᶜʰ  ·  DIVISIÓN DE SEGURIDAD COGNITIVA         ║',
  '╚══════════════════════════════════════════════════════════════╝',
  '',
  'AVISO DE ACCESO RESTRINGIDO — NIVEL Ω',
  '',
  'La información almacenada en este terminal es PROPIEDAD CLASIFICADA',
  'de HEXTON Biotech y se encuentra protegida bajo los protocolos de',
  'seguridad. El acceso, copia, distribución o divulgación',
  'no autorizada de los datos de operadores neo-humanos constituye una',
  'violación de la Orden de Confidencialidad Interestelar y será',
  'perseguida conforme a la jurisdicción federal correspondiente.',
  '',
  'Cualquier intruso detectado será rastreado, identificado y entregado',
  'a las autoridades competentes. El uso indebido de esta ficha operativa',
  'puede acarrear responsabilidad penal, así como la revocación permanente',
  'de los permisos de acceso asociados a su número de serie.',
  '',
  'Al continuar, usted declara haber sido autorizado por HEXTON Biotech',
  'para la revisión de esta ficha y acepta hacer un uso estrictamente',
  'operativo de la misma.',
  '',
  '¿Está de acuerdo con lo anterior?',
  'Escriba  Si  o  No  en la consola.',
];

export default function TerminalPage() {
  const router = useRouter();

  const [phase, setPhase] = useState('boot'); // 'boot' | 'warning' | 'ready'
  const [bootLines, setBootLines] = useState([]);
  const [log, setLog] = useState([]); // líneas de consola (warning + ecos)
  const [input, setInput] = useState('');

  const screenRef = useRef(null);
  const inputRef = useRef(null);

  // ── Secuencia de arranque (animación lenta) ──
  useEffect(() => {
    let cancelled = false;
    const timers = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setBootLines((prev) => [...prev, line]);
          if (i === BOOT_LINES.length - 1) {
            timers.push(
              setTimeout(() => {
                if (cancelled) return;
                setLog(WARNING);
                setPhase('warning');
              }, 900)
            );
          }
        }, 850 * (i + 1))
      );
    });
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  // ── Scroll automático ──
  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
    if (phase === 'warning' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [bootLines, log, phase]);

  // ── Consola de confirmación (fase warning) ──
  const handleCommand = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;

    if (/^si$/i.test(cmd)) {
      // El aviso se elimina al aceptar
      setLog([
        'ACCESO AUTORIZADO. cargando ficha operativa...',
        'Navegue el árbol con el cursor o con las flechas del teclado.',
        '',
      ]);
      setPhase('ready');
    } else if (/^no$/i.test(cmd)) {
      setLog((prev) => [
        ...prev,
        `> ${cmd}`,
        '',
        'ACCESO DENEGADO. redirigiendo a login...',
      ]);
      setTimeout(() => router.push('/'), 800);
    } else {
      setLog((prev) => [
        ...prev,
        `> ${cmd}`,
        "Respuesta no válida. Escriba 'Si' o 'No'.",
      ]);
    }
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.console}>
        <div className={styles.titlebar}>
          <span className={styles.barText}>operador@hoplita — ~/ficha</span>
        </div>

        <div className={styles.screen} ref={screenRef}>
          <p className={styles.prompt}>C:\USERS\OPERADOR&gt;</p>

          {phase === 'boot' && (
            <div className={styles.boot}>
              {bootLines.map((l, i) => (
                <pre key={i} className={styles.line}>
                  {l}
                </pre>
              ))}
              <span className={styles.cursor} />
            </div>
          )}

          {phase !== 'boot' && (
            <div className={styles.log}>
              {log.map((l, i) => (
                <pre key={i} className={styles.line}>
                  {l}
                </pre>
              ))}
            </div>
          )}

          {phase === 'ready' && <FileExplorer />}
        </div>

        {phase === 'warning' && (
          <div className={styles.cmdline}>
            <span className={styles.promptInline}>&gt;</span>
            <input
              ref={inputRef}
              className={styles.cmdInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              spellCheck={false}
              aria-label="Consola de confirmación de acceso"
            />
            <span className={styles.cursorInline} />
          </div>
        )}
      </section>
    </main>
  );
}

/* ── Explorador de ficha (árbol + contenido) ── */
function FileExplorer() {
  // Estado de carpetas expandidas: por defecto la raíz abierta.
  const [expanded, setExpanded] = useState(() => ({ [TREE.id]: true }));
  // Nodo seleccionado (hoja o carpeta). Por defecto, la primera hoja accesible.
  const [selectedId, setSelectedId] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([TREE.label]);
  const treeRef = useRef(null);

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  // Selecciona un nodo y calcula la ruta (breadcrumb).
  const selectNode = (node, path) => {
    setSelectedId(node.id);
    setBreadcrumb(path);
  };

  // Lista aplanada de nodos visibles (para navegación por teclado).
  const visible = flattenVisible(TREE, expanded);

  const onTreeKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = visible.findIndex((n) => n.node.id === selectedId);
      const next = visible[Math.min(visible.length - 1, idx + 1)];
      if (next) selectNode(next.node, next.path);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = visible.findIndex((n) => n.node.id === selectedId);
      const prev = visible[Math.max(0, idx - 1)];
      if (prev) selectNode(prev.node, prev.path);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const node = visible.find((n) => n.node.id === selectedId)?.node;
      if (node && node.type === 'folder' && !expanded[node.id]) {
        toggle(node.id);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const node = visible.find((n) => n.node.id === selectedId)?.node;
      if (node && node.type === 'folder' && expanded[node.id]) {
        toggle(node.id);
      } else if (breadcrumb.length > 1) {
        // Subir al padre.
        const parentPath = breadcrumb.slice(0, -1);
        const parent = findNodeByPath(TREE, parentPath);
        if (parent) selectNode(parent, parentPath);
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const node = visible.find((n) => n.node.id === selectedId)?.node;
      if (node) {
        if (node.type === 'folder') toggle(node.id);
        else selectNode(node, breadcrumb);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      // Volver al login (no navegamos dentro del árbol).
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.explorer}>
      <nav
        className={styles.tree}
        role="tree"
        aria-label="Estructura de la ficha del Neohumano"
        ref={treeRef}
        onKeyDown={onTreeKeyDown}
      >
        <TreeNode
          node={TREE}
          path={[TREE.label]}
          depth={0}
          expanded={expanded}
          toggle={toggle}
          selectedId={selectedId}
          selectNode={selectNode}
        />
      </nav>

      <section className={styles.contentPane} aria-live="polite">
        <div className={styles.breadcrumb}>
          {breadcrumb.map((b, i) => (
            <span key={i}>
              {i > 0 && <span className={styles.breadcrumbSep}> / </span>}
              {b}
            </span>
          ))}
        </div>
        <ContentPane selectedId={selectedId} root={TREE} />
      </section>
    </div>
  );
}

/* Nodo recursivo del árbol */
function TreeNode({ node, path, depth, expanded, toggle, selectedId, selectNode }) {
  const isFolder = node.type === 'folder';
  const isOpen = !!expanded[node.id];
  const isSelected = selectedId === node.id;

  const handleClick = () => {
    if (isFolder) toggle(node.id);
    selectNode(node, path);
  };

  return (
    <div role="treeitem" aria-selected={isSelected} aria-expanded={isFolder ? isOpen : undefined}>
      <button
        type="button"
        className={`${styles.treeItem} ${node.type === 'folder' ? styles.treeFolder : styles.treeLeaf} ${
          isSelected ? styles.treeItemSelected : ''
        }`}
        style={{ paddingLeft: `${0.6 + depth * 1.1}rem` }}
        onClick={handleClick}
        tabIndex={0}
        onFocus={() => selectNode(node, path)}
        aria-label={isFolder ? `Carpeta ${node.label}` : node.label}
      >
        {isFolder ? (
          <span className={styles.treeIcon} aria-hidden="true">
            {isOpen ? '▾' : '▸'}
          </span>
        ) : (
          <span className={styles.treeIcon} aria-hidden="true">
            ·
          </span>
        )}
        <span className={styles.treeLabel}>{node.label}</span>
      </button>

      {isFolder && isOpen && (
        <div role="group">
          {node.children?.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              path={[...path, child.label]}
              depth={depth + 1}
              expanded={expanded}
              toggle={toggle}
              selectedId={selectedId}
              selectNode={selectNode}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* Panel de contenido del nodo seleccionado */
function ContentPane({ selectedId, root }) {
  const node = findNodeById(root, selectedId);
  if (!node) {
    return (
      <p className={styles.contentEmpty}>
        Seleccione un elemento del árbol para ver su contenido.
      </p>
    );
  }

  // Carpeta: muestra el listado de hijos como índice.
  if (node.type === 'folder') {
    return (
      <div className={styles.contentBody}>
        <h1 className={styles.contentTitle}>{node.label}/</h1>
        <ul className={styles.contentIndex}>
          {node.children?.map((c) => (
            <li key={c.id}>
              <span className={c.type === 'folder' ? styles.idxFolder : styles.idxLeaf}>
                {c.type === 'folder' ? '📁 ' : '· '}
                {c.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.contentBody}>
      <h1 className={styles.contentTitle}>{node.label}</h1>
      {(node.paragraphs || []).map((p, i) => (
        <p key={i} className={styles.contentParagraph}>
          {p}
        </p>
      ))}

      {(node.images || []).map((img, i) => (
        <figure key={i} className={styles.contentImageBox}>
          <img
            src={img.src}
            alt={img.alt}
            className={styles.contentImage}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }
            }}
          />
          <div className={styles.contentImagePlaceholder}>
            <span>{img.caption || img.src}</span>
          </div>
          {img.caption && (
            <figcaption className={styles.contentCaption}>{img.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

/* ── Utilidades de árbol ── */
function flattenVisible(node, expanded, path = [node.label], acc = []) {
  acc.push({ node, path });
  if (node.type === 'folder' && expanded[node.id]) {
    node.children?.forEach((c) =>
      flattenVisible(c, expanded, [...path, c.label], acc)
    );
  }
  return acc;
}

function findNodeById(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const c of node.children) {
      const found = findNodeById(c, id);
      if (found) return found;
    }
  }
  return null;
}

function findNodeByPath(node, path, currentPath = [node.label]) {
  if (arraysEqual(currentPath, path)) return node;
  if (node.children) {
    for (const c of node.children) {
      const found = findNodeByPath(c, path, [...currentPath, c.label]);
      if (found) return found;
    }
  }
  return null;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
