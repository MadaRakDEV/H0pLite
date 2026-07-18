// Datos estructurados de la ficha del Neohumano H3-NE129118 (Eidon / Liar).
// Se usa como modelo para el explorador de dos columnas en /terminal.
//
// Estructura de nodo:
//   { id, label, type: 'folder' | 'leaf', children?, note?, paragraphs?, images? }
// - folders: expandibles (aria-expanded)
// - leaf: seleccionable; paragraphs = array de párrafos; images = [{src, alt, caption}]

const SERIAL = 'H3-NE129118';

const informacionPersonal = {
  id: 'info',
  label: 'Información personal',
  type: 'folder',
  children: [
    {
      id: 'cuerpo',
      label: 'Cuerpo',
      type: 'leaf',
      images: [
        { src: '/Fc2.jpg', alt: 'Registro visual del sujeto H3-NE129118', caption: 'Registro visual del sujeto H3-NE129118' },
      ],
      paragraphs: [
        'Complexión delgada, más cercana a la de un corredor de fondo que a la de un operativo de asalto resultado esperable de un perfil orientado a reconocimiento y no a confrontación directa. Estatura media, piel pálida incluso para los estándares de quien pasa la mayor parte del tiempo bajo tierra. Cabello largo, negro con mechones que blanquearon sin causa clínica identificada, generalmente sujeto a medias, dejando el resto caer sobre sus ojo. Sus ojos contienen el mismo tono que su cabello, están marcados por líneas oscuras que descienden como lágrimas secas no son una herida activa ni maquillaje: el propio expediente médico las clasifica como "marca dérmica de origen incierto, probablemente asociada al aparato emisor". Su rasgo más reconocible es esa sonrisa es casi permanente, ligeramente afilada, y aparece incluso en contextos donde no correspondería. Un rasgo que varios evaluadores anotaron antes de saber que también era, técnicamente, un síntoma.',
        'El cuerpo lleva encima la evidencia de todo lo que "Corpus" ha intentado decir y Eidon ha decidido posponer: cicatrices finas en manos y antebrazos, una venda permanente alrededor del cuello que cubre una lesión nunca completamente explicada en su historial, y una postura que se lee cómoda hasta que alguien nota cuánto peso evita cargar del lado derecho. Nada de esto lo hace lucir frágil. Lo hace lucir usado como un instrumento que sigue funcionando precisamente porque nunca se le ha dado tiempo de dejar de hacerlo.',
        'El sujeto presenta una conciencia corporal anormalmente elevada: identifica variaciones mínimas en frecuencia cardíaca, respiración, tensión muscular y respuesta nerviosa con una precisión que ningún examen estandarizado logra explicar del todo. Se presume que años de usar L1-4R sobre su propio sistema nervioso, como método de entrenamiento informal, terminaron por reprogramar la forma en que interpreta sus propias señales internas. El resultado es una capacidad de lectura corporal casi clínica y una relación profundamente disfuncional con lo que esa lectura debería significar.',
        'Expediente médico, extracto incidente #14: fractura de dos costillas durante una extracción de campo. El sujeto continuó la misión, completó el informe de cierre y solo aceptó revisión médica cuarenta y una horas después, al perder la conciencia brevemente durante un interrogatorio de rutina. Declaración registrada del sujeto al ser confrontado: "Lo sabía. Solo no era prioridad todavía." El médico de guardia anotó, entre paréntesis, que "todavía" no tenía una definición clara ni siquiera para el paciente.',
        'Esta condición le permite operar con lesiones que incapacitarían a un individuo promedio. También es, de forma consistente, su mayor factor de riesgo: el dolor se procesa como un dato entre muchos, no como una advertencia con jerarquía propia, y la fatiga se ignora de forma deliberada mediante autosugestión. El patrón se repite en casi cada intervención médica registrada no por negación del daño, sino por una genuina reclasificación interna de qué cuenta como urgente.',
      ],
    },
    {
      id: 'mente',
      label: 'Mente',
      type: 'leaf',
      images: [
        { src: '/Fc1.jpg', alt: 'Registro visual del sujeto H3-NE129118', caption: 'Registro visual del sujeto H3-NE129118' },
      ],
      paragraphs: [
        'Eidon sonríe casi todo el tiempo. No es una máscara sobre algo distinto es, literalmente, una de tres versiones de sí mismo compitiendo por hablar primero.',
        'Nota de evaluación psicológica, sesión 09: "El sujeto alterna entre hiperactividad, distracción y apatía sin patrón identificable. Responde preguntas con otras preguntas. Introduce información falsa en la conversación sin motivo aparente no como defensa, sino como si necesitara ver qué pasa después." La evaluadora cierra la sesión con una observación que no logra clasificar del todo: el sujeto parece sentirse más cómodo dentro de la incertidumbre que dentro de una conversación completamente honesta.',
        'CORPUS es el dato crudo, filtrado por un hábito peligroso: años de entrenamiento le enseñaron a archivar el dolor como información diferida en lugar de alarma inmediata. Sigue diciendo la verdad. Rara vez logra que se le escuche a tiempo.',
        'MENTIS no miente para protegerlo. Miente porque no soporta bien la certeza introduce información falsa en conversaciones cotidianas sin un objetivo claro, movida por una necesidad casi compulsiva de observar cómo reacciona el otro frente a una contradicción. Debajo de esa fachada errática hay una capacidad analítica excepcional: reconstruye secuencias, detecta inconsistencias, sostiene varias hipótesis a la vez sin necesitar que ninguna sea definitiva. Construye una mentira exactamente como construye una teoría del caso, y a veces ni ella sabe en qué momento dejó de investigar y empezó a inventar.',
        'ANIMA no cree en la verdad nunca estuvo convencida de que existiera una a la que apelar. Bajo la filosofía que sostiene a Eidon, toda percepción es una reconstrucción incompleta; la mentira no es una traición a nada. Así que Anima no arbitra buscando qué es cierto, sino qué ha sostenido a Eidon en pie antes. Es, en la práctica, un reflejo directo de su Sanidad: con SP alto tiende a Corpus, con SP bajo se inclina hacia Mentis, no porque convenza más, sino porque ya fue reforzada tantas veces que dejó de sentirse como mentira. Por eso mantiene registros físicos de cada caso, casi de forma compulsiva el único punto fijo externo al que puede recurrir cuando la balanza interna ya no es confiable.',
        'La IA encargada de clasificar su perfil operativo lo resumió sin rodeos: rendimiento deficiente en unidades de asalto, sobresaliente en investigación, reconocimiento avanzado y contrainteligencia. Su manera de resolver un problema no es buscar la respuesta. Es identificar qué partes de la historia no encajan entre sí.',
        'Eidon no es la suma de las tres voces. Es, cada vez con más frecuencia, la que va ganando.',
      ],
    },
    {
      id: 'alma',
      label: 'Alma',
      type: 'leaf',
      images: [
        { src: '/Fc3.jpg', alt: 'Registro visual adicional del sujeto H3-NE129118', caption: 'Registro visual adicional del sujeto H3-NE129118' },
      ],
      paragraphs: [
        'Eidon sostiene que la verdad objetiva es, en la práctica, inalcanzable: toda persona percibe el mundo a través de una reconstrucción incompleta de recuerdos, emociones y experiencias individuales. Bajo esa premisa, mentir no es un acto de malicia es una manifestación inevitable de la percepción humana, la misma que ya hace cualquiera, con o sin combustible de memoria de por medio.',
        'Caso registrado interrogatorio de un testigo reticente en la investigación de espionaje industrial CN-77: el sujeto no presionó una sola vez durante las dos horas que duró el encuentro. En su lugar, dejó caer tres afirmaciones falsas, espaciadas y aparentemente casuales, sobre lo que "ya se sabía". El testigo, convencido de que el caso ya estaba resuelto sin él, corrigió un detalle "por precisión" el detalle que rompió el caso. Nota de cierre del propio Eidon en el expediente: "La gente no confiesa lo que teme. Confiesa lo que cree que ya no importa."',
        'Esta filosofía explica buena parte de su método operativo: evita juicios morales precipitados, le interesa más el origen de una decisión que sus consecuencias inmediatas, y prefiere construir el escenario donde el objetivo termine revelándose por iniciativa propia antes que forzar una confesión.',
        'Es también su mayor conflicto interno. El uso continuado de L1-4R alimenta un temor persistente y nunca verbalizado del todo: perder la capacidad de distinguir sus propios recuerdos de aquellos alterados por su propia emisión. Los registros físicos que conserva de cada caso, cada conversación, cada hallazgo, no cumplen solo una función investigativa. Son el intento constante de preservar una referencia externa de su propia identidad la evidencia de que, en algún momento, algo fue verificado fuera de su propia cabeza.',
      ],
    },
    {
      id: 'civil',
      label: 'Civil',
      type: 'leaf',
      paragraphs: [
        'Formación: ingeniería de sistemas, título obtenido antes de su reasignación operativa.',
        'Los sistemas de evaluación lo descartaron para unidades de combate convencional las simulaciones mostraron que su tendencia a improvisar, cuestionar órdenes y priorizar la obtención de información sobre la eliminación del objetivo reducía de forma consistente el rendimiento de cualquier escuadrón de asalto. Los mismos análisis lo situaron muy por encima del promedio en recopilación de inteligencia, seguimiento de objetivos y reconstrucción de acontecimientos. Resultado: autorización para ejercer como investigador y detective independiente, especializado en terrorismo, desapariciones, espionaje industrial, crímenes cometidos por Neohumanos y anomalías meta-sinápticas.',
        'Eidon no pidió esta reasignación. Tampoco la rechazó. Hay una distancia deliberada entre "esto no es lo que estudié" y "esto no lo hago bien", y vive exactamente en medio de las dos frases sin resolverlas algo que un excompañero de formación resumió, en tono más de burla que de crítica, como "el ingeniero que terminó resolviendo a la gente en vez de sistemas, y no se ha dado cuenta de que es básicamente el mismo trabajo".',
        'Relaciones formales: ninguna declarada. No figura pareja, familia de contacto ni vínculo social sostenido en ningún expediente. Los FF-NATT y su terminal portátil son, hasta ahora, lo más cercano que tiene a algo que mantiene con regularidad y, según su propio historial, lo único que nunca le ha mentido.',
      ],
    },
    {
      id: 'organizacion',
      label: 'Organización',
      type: 'leaf',
      paragraphs: [
        'Estado operativo: Activo Externo Certificado. "Independiente" con todas las comillas que hagan falta.',
        'No pertenece de forma permanente a ninguna organización militar o corporativa; opera bajo contratación temporal, prestando servicio a múltiples entidades siempre que no exista conflicto contractual entre ellas. Sus clientes han incluido, según registro, oficinas de inteligencia estatal, al menos dos corporaciones de desarrollo de implantes, y contratantes cuya identidad permanece clasificada incluso dentro de este archivo. Todos comparten un mismo patrón en el encargo: encontrar lo que otros fueron incapaces de descubrir.',
        'Su autonomía se limita estrictamente a la ejecución de la misión. La selección de objetivos y prioridades estratégicas sigue siendo responsabilidad de quien contrata, y el acceso a información clasificada, tecnología experimental o combustible de grado militar depende directamente del cumplimiento de esos contratos una condición que Eidon acepta sin queja registrada, y sin comentario adicional, en cada renovación.',
        'Eidon no rechaza las órdenes que llegan. Tampoco finge que aceptarlas, una y otra vez, sea lo mismo que ser libre. La independencia, para él, no es ausencia de mando. Es la ausencia de alguien a quien culpar cuando decide obedecer.',
      ],
    },
  ],
};

const l1r = {
  id: 'l1r',
  label: 'L1-4R',
  type: 'folder',
  children: [
    {
      id: 'l1r-general',
      label: 'Descripción general',
      type: 'leaf',
      images: [
        { src: '/Liar.png', alt: 'L1R-general', caption: 'Ilustración conceptual de Liar.' },
      ],
      paragraphs: [
        'L1-4R, denominada informalmente Liar, es una emisión meta-sináptica especializada en introducir información falsa dentro de cualquier sistema capaz de percibir, procesar o interpretar datos. No altera la realidad de forma directa: no crea materia, no modifica las leyes físicas y no transforma de inmediato la estructura biológica de un objetivo. Su función es más simple y más peligrosa: hacer que un sistema acepte una falsedad como información válida, y actúe en consecuencia.',
        'En las primeras evaluaciones se clasificó como una emisión ilusoria. La descripción resultó incompleta. Una ilusión convencional altera el estímulo; Liar altera la conclusión que se extrae de él. Puede interferir con la percepción humana, el sistema nervioso, la memoria, la interpretación corporal, implantes cibernéticos, sensores electrónicos, sistemas informáticos, inteligencias artificiales, protocolos de identificación, sistemas automatizados, e incluso otras emisiones meta-sinápticas que dependan del reconocimiento o el procesamiento de información.',
        'El sujeto no necesita fabricar una realidad alternativa completa. Solo necesita introducir suficientes datos falsos para que el objetivo construya, por sí mismo, la conclusión equivocada.',
      ],
    },
    {
      id: 'l1r-principio',
      label: 'Principio operativo',
      type: 'leaf',
      images: [
        { src: '/Liar4.png', alt: 'Ilustración del principio operativo de Liar.', caption: 'Ilustración del principio operativo de Liar.' },
      ],
      paragraphs: [
        'El funcionamiento observado se resume en cuatro etapas: emisión de información falsa, recepción por parte del objetivo, interpretación de la falsedad como dato legítimo, y respuesta natural del sistema ante la conclusión obtenida.',
        'Esa última etapa es el límite fundamental de la emisión. Liar puede inducir una interpretación, pero no controla de manera absoluta lo que ocurre después. Si el sujeto hace creer a una persona que su corazón se ha detenido, el órgano no deja de funcionar por intervención directa de la emisión; es el propio cerebro el que reacciona con pánico, hiperventilación, pérdida de coordinación, debilidad, desmayo, o una respuesta psicosomática grave, y cualquier consecuencia física se produce mediante mecanismos que el organismo ya posee. Liar modifica la interpretación de la biología. No modifica la biología misma.',
      ],
    },
    {
      id: 'l1r-propio-cuerpo',
      label: 'Aplicación sobre el propio cuerpo',
      type: 'leaf',
      images: [
        { src: '/Liar3.png', alt: 'L1R-propio-cuerpo', caption: 'Ilustración de los efectos de la emisión L1R sobre el propio cuerpo.' },
      ],
      paragraphs: [
        'Eidon puede dirigir L1-4R sobre su propio sistema nervioso. Los usos registrados incluyen la supresión temporal del dolor, la reducción de la percepción de fatiga, la inhibición de respuestas de retirada, la liberación de limitaciones musculares, la aceleración de respuestas reflejas, el mantenimiento de la conciencia bajo condiciones adversas y la continuación de actividad física pese a lesiones.',
        'Ninguno de estos efectos repara el cuerpo. Una fractura sigue siendo una fractura; una hemorragia sigue activa; un músculo sobrecargado sigue acumulando daño. El sujeto simplemente deja de interpretar correctamente las señales de advertencia, y el rendimiento aparente es el resultado de forzar capacidades fisiológicas que ya existían. Cuando la percepción normal regresa, suele revelar lesiones agravadas.',
        'Se recomienda atención médica inmediata tras cualquier uso prolongado de autoengaño corporal. El sujeto ha ignorado esta recomendación en todas las ocasiones registradas.',
      ],
    },
    {
      id: 'l1r-construccion',
      label: 'Construcción de mentiras',
      type: 'leaf',
      paragraphs: [
        'La eficacia de L1-4R no depende tanto de la intensidad de una falsedad como de su coherencia: las mentiras simples, plausibles y apoyadas por el entorno se aceptan con mucha más facilidad que las alteraciones excesivas o abiertamente contradictorias.',
        'El sujeto muestra una tendencia clara a encadenar información falsa. Una mentira inicial modifica la interpretación de un detalle menor; la conclusión obtenida sirve de base para una segunda mentira; el proceso continúa hasta que el objetivo ya no distingue qué partes de su razonamiento vienen de observaciones reales y cuáles fueron introducidas por L1-4R.',
        'Un ejemplo operativo ilustra la secuencia: el objetivo interpreta que un sonido provino de un corredor lateral, luego identifica movimiento en la misma dirección, un sistema de vigilancia registra una silueta compatible, concluye que existe una amenaza en ese sector, abandona voluntariamente su posición y entra en una zona preparada por el equipo. L1-4R no lo obligó a desplazarse: le dio una sucesión de razones convincentes para hacerlo. Esta característica hace de la emisión una herramienta especialmente adecuada para reconocimiento, infiltración, apoyo y preparación del terreno.',
      ],
    },
    {
      id: 'l1r-enganos',
      label: 'Tipos de engaño',
      type: 'folder',
      children: [
        {
          id: 'l1r-sensorial',
          label: 'Engaño sensorial',
          type: 'leaf',
          paragraphs: [
            'Las aplicaciones sensoriales son la forma más directa y estable de L1-4R. El sujeto puede alterar la interpretación de sonido, imagen, distancia, velocidad, dirección, movimiento, temperatura, vibración, equilibrio, contacto y presencia.',
            'Entre los casos documentados o considerados viables están unos pasos procedentes de una ubicación falsa, una silueta cruzando un corredor vacío, un disparo percibido desde una dirección incorrecta, una puerta interpretada como cerrada, una superficie estable percibida como insegura, la sensación de movimiento a espaldas del objetivo, una presencia inexistente dentro de una habitación o la posición de un aliado desplazada varios metros.',
            'Las falsedades sensoriales no necesitan ser completas; en la mayoría de los casos, un estímulo parcial resulta más convincente que una recreación perfecta. Una sombra sin cuerpo definido produce menos resistencia que una imagen totalmente construida, porque el objetivo completa por sí mismo la información faltante, usando sus propias expectativas.',
          ],
        },
        {
          id: 'l1r-corporal',
          label: 'Engaño corporal',
          type: 'leaf',
          paragraphs: [
            'L1-4R puede interferir con la información que el sistema nervioso utiliza para interpretar el estado del cuerpo. Sobre objetivos externos puede generar dolor inexistente, sensación de debilidad, falsa pérdida de equilibrio, percepción de inmovilidad, sensación de asfixia, confusión entre una extremidad sana y una lesionada, reacción defensiva ante un impacto inexistente, o una percepción incorrecta de la posición corporal.',
            'Estos efectos no producen daño estructural directo; su utilidad está en provocar respuestas. Un objetivo que cree haber recibido un golpe puede tensar el cuerpo, perder el equilibrio, interrumpir una acción o proteger la zona equivocada, y Eidon usa esas respuestas como apertura para sus aliados o para un ataque posterior. El engaño corporal es más efectivo cuando acompaña a un estímulo real: una vibración, un movimiento repentino o un impacto leve pueden servir de base para una falsedad mucho mayor.',
          ],
        },
        {
          id: 'l1r-mental',
          label: 'Engaño mental',
          type: 'leaf',
          paragraphs: [
            'Liar puede alterar interpretaciones, prioridades y procesos de decisión, pero esto no debe confundirse con un control absoluto de la voluntad. La emisión funciona mejor cuando la falsedad es plausible, coincide con el contexto, confirma una sospecha previa, se apoya en evidencia real, no contradice la identidad del objetivo, o ha sido preparada mediante mentiras anteriores.',
            'Entre las aplicaciones posibles están hacer que una persona considere segura una ruta, convencerla de que una orden ya fue emitida, hacer que interprete a un desconocido como personal autorizado, inducir la certeza de que una tarea ya fue completada, hacer que ignore un estímulo, hacer que considere irrelevante a un objetivo, o alterar la interpretación de sus propias decisiones recientes.',
            'Una orden directa e injustificada encuentra mayor resistencia. Una conclusión construida por el propio objetivo resulta mucho más estable. La emisión no obliga necesariamente a obedecer: hace que obedecer parezca razonable.',
          ],
        },
        {
          id: 'l1r-memoria',
          label: 'Engaño de memoria',
          type: 'leaf',
          paragraphs: [
            'La manipulación de memoria es una aplicación avanzada y de alto riesgo. L1-4R no necesita borrar completamente un recuerdo: puede alterar su accesibilidad, su orden, su contexto o su interpretación. Entre los usos considerados viables están ocultar temporalmente un recuerdo, sustituir un detalle específico, alterar el orden de una secuencia, hacer que el objetivo dude de haber presenciado un evento, insertar una explicación falsa para una acción reciente, modificar el rostro, la voz o la posición asociados a un recuerdo, o crear la impresión de que una conversación ya ocurrió.',
            'Los recuerdos recientes, incompletos o poco relevantes ofrecen menor resistencia; los antiguos, traumáticos o ligados a la identidad exigen una emisión mucho más compleja. Una memoria falsificada no siempre reemplaza a la originalambas pueden coexistir—, y esa superposición provoca contradicciones, dudas y reconstrucciones incorrectas. El mismo fenómeno se presenta en el propio Eidon cuando su Sanidad disminuye.',
          ],
        },
        {
          id: 'l1r-sistemas',
          label: 'Engaño de sistemas',
          type: 'leaf',
          paragraphs: [
            'L1-4R puede afectar sistemas artificiales siempre que estos dependan de sensores, protocolos, clasificaciones o interpretación de datos. No funciona como una intrusión informática convencional: no introduce código ni modifica archivos necesariamente. Hace que el sistema procese una entrada falsa como si fuera válida.',
            'Así, una cámara puede interpretar que un corredor está vacío, un sensor térmico puede registrar una temperatura ambiental normal, un micrófono puede clasificar pasos como ruido mecánico, un sistema biométrico puede aceptar una identidad incorrecta, una alarma puede considerar autorizada una apertura, un dron puede clasificar a un objetivo como personal aliado, una torreta puede reconocer una amenaza en una posición falsa, un sistema de rastreo puede recibir una firma incorrecta, o un implante médico puede interpretar datos fisiológicos falsos.',
            'La complejidad depende de cuántos sistemas estén implicados y de cuánto conozca Eidon sobre ellos: el sujeto no puede engañar con precisión un mecanismo cuyo principio desconoce por completo. Su formación como ingeniero en sistemas aumenta de forma notable la eficacia de L1-4R contra tecnología, redes e inteligencias artificiales.',
          ],
        },
        {
          id: 'l1r-interferencia',
          label: 'Interferencia de emisiones',
          type: 'leaf',
          paragraphs: [
            'L1-4R no cancela directamente otras emisiones; puede, en cambio, engañar los procesos de percepción, selección o interpretación de los que dependen. En teoría, una emisión guiada podría identificar un objetivo falso, una barrera podría interpretar a Eidon como un elemento autorizado, un sistema reactivo podría no clasificarlo como amenaza, una técnica de rastreo podría seguir una firma señuelo, un efecto de contacto podría interpretar que dicho contacto no ocurrió, o una habilidad de reconocimiento podría recibir información contradictoria.',
            'La viabilidad depende de que exista un mecanismo susceptible de ser engañado. Una emisión puramente destructiva y sin selección inteligente ofrece pocos puntos de interferencia; una que necesite identificar, perseguir, responder o clasificar es mucho más vulnerable. La neutralización no ocurre porque Liar destruya el fenómeno, sino porque hace que el fenómeno se equivoque.',
          ],
        },
      ],
    },
    {
      id: 'l1r-sanidad',
      label: 'Registro de estabilidad cognitiva',
      type: 'folder',
      children: [
        {
          id: 'l1r-sp',
          label: 'Índice de Sanidad (SP)',
          type: 'leaf',
          paragraphs: [
            'La Sanidad, abreviada SP, registra la capacidad de Eidon para diferenciar entre realidad observable, recuerdos legítimos, hipótesis, mentiras activas o canceladas, información falsa recibida e interpretaciones contaminadas. El índice oscila entre +45 y -45: +45 SP es máxima lucidez, 0 SP es equilibrio cognitivo, y -45 SP es la ruptura completa de la separación entre realidad y falsedad. Eidon inicia cada operación en +20 SP dentro del rango de Estabilidad operativa, pero en su extremo bajo: años de autoexperimentación con L1-4R ya le costaron parte del margen que tendría un Neohumano sin ese historial.',
            'La Sanidad no es una evaluación emocional general. Un sujeto con SP negativo puede permanecer tranquilo, cooperativo y aparentemente funcional; el problema no está necesariamente en su conducta, sino en que puede estar actuando dentro de una realidad incorrecta sin reconocerlo.',
            'Este índice no es un simple termómetro del estado mental de Eidon: es, al mismo tiempo, el medidor de rendimiento de L1-4R. Sanidad y emisión comparten el mismo combustible. No son dos sistemas que interactúan son la misma reserva vista desde dos lados.',
          ],
        },
        {
          id: 'l1r-consumo',
          label: 'Consumo y resultados',
          type: 'leaf',
          paragraphs: [
            'Toda activación de L1-4R produce una reducción inicial de SP. El desgaste base depende de la complejidad de la mentira, la cantidad de objetivos, la profundidad del efecto, su duración, el número de sistemas engañados, la cantidad de mentiras activas, el uso sobre el propio sujeto, la existencia de contradicciones, la preparación previa y la calidad de la información disponible.',
            'Sobre ese costo base actúa un multiplicador determinado por el rango de Sanidad en el que se encuentre Eidon al momento de emitir (ver Rendimiento según Sanidad). Una Virtud o Aflicción activa puede desplazar ese multiplicador un escalón, hacia arriba o hacia abajo, para el tipo de emisión que le corresponda nunca inventa un costo propio, solo mueve el existente.',
            'Resultado excepcional: la mentira es aceptada sin inconsistencias y produce una reacción favorable; puede generar recuperación de SP y mayor estabilidad. Resultado favorable: efecto previsto, recuperación parcial de SP. Resultado incompleto: aceptación parcial o consecuencia no prevista, sin recuperación. Resultado desfavorable: rechazo o identificación de la manipulación, pérdida adicional de SP. Resultado crítico: colisión con información incompatible, autoengaño o creación de un recuerdo falso el multiplicador de ese turno se trata como si estuviera un escalón más alto de lo real, sin importar el rango de SP en que ocurrió.',
          ],
        },
        {
          id: 'l1r-rendimiento',
          label: 'Rendimiento según Sanidad',
          type: 'leaf',
          paragraphs: [
            'Cada rango de Sanidad trae asociado un multiplicador de referencia sobre el costo base de una emisión no una fórmula rígida, sino un ancla común para que Virtudes y Aflicciones lo desplacen de forma consistente.',
            '+45 a +26 SP Precisión elevada · multiplicador ×0.75 (barato). Selección exacta, buena diferenciación mentira/realidad. Limitación: mentiras racionales y poco flexibles.',
            '+25 a +1 SP Estabilidad operativa · multiplicador ×1 (base). Funcionamiento normal, consumo predecible, encadenamiento seguro de falsedades. Eidon opera aquí en condiciones normales.',
            '0 a -15 SP Ambigüedad cognitiva · multiplicador ×1.5. Mayor intensidad e improvisación, pero primera Resolución Cognitiva al cruzar 0 SP y riesgo de autoengaño.',
            '-16 a -30 SP Contaminación · multiplicador ×2. Mayor penetración en mente/memoria, persistencia sin concentración plena, segunda Resolución Cognitiva al llegar a -25 SP.',
            '-31 a -44 SP Delirio operativo · multiplicador ×3. Emisiones extremadamente convincentes, pero a un costo que ya no es sostenible. Conserva capacidad operativa; no conserva fiabilidad, ni margen.',
            '-45 SP Ruptura · sin multiplicador aplicable. El combustible se agota por completo: L1-4R deja de responder. Eidon puede seguir desplazándose y comunicándose, pero sus decisiones quedan subordinadas a la última mentira dominante, sin capacidad de generar una nueva. La intervención externa resulta obligatoria; el descanso breve no produce recuperación suficiente.',
          ],
        },
      ],
    },
    {
      id: 'l1r-resoluciones',
      label: 'Resoluciones cognitivas',
      type: 'folder',
      children: [
        {
          id: 'l1r-res-def',
          label: 'Definición y umbrales',
          type: 'leaf',
          paragraphs: [
            'Una Resolución Cognitiva es una respuesta de emergencia que se genera cuando la mente de Eidon cruza un umbral de inestabilidad, e intenta reorganizar la información disponible mediante un patrón temporal. El resultado puede manifestarse como Virtud (respuesta adaptativa) o Aflicción (respuesta disfuncional). Ambas son temporales.',
            'Solo un estado (Virtud o Aflicción) permanece activo a la vez. El segundo umbral no añade un segundo estado: reemplaza o intensifica el primero. Excepciones: (1) si la condición de cierre del primer estado nunca se cumplió antes de cruzar el segundo umbral, ambos coexisten la mente no alcanzó a cerrar un capítulo antes de que se abriera el siguiente; (2) en Ruptura (-45 SP) pueden persistir residuos de varios estados sin resolver, porque ya no hay una Anima funcional arbitrando cuál domina.',
            'Primer umbral (0 SP): pérdida de corrección automática entre realidad y mentira. Virtudes posibles: Claridad, Hiperfoco, Testigo, Improvisación. Aflicciones: Verificación compulsiva, Sospecha, Obsesión leve, Conducta evasiva.',
            'Segundo umbral (-25 SP): el resultado reemplaza o intensifica el anterior, salvo las excepciones ya descritas. Virtudes posibles: Convicción, Lucidez delirante, Testigo absoluto, Improvisación extrema. Aflicciones: Paranoia, Obsesión severa, Despersonalización, Delirio, Histeria.',
          ],
        },
        {
          id: 'l1r-virtudes',
          label: 'Virtudes',
          type: 'leaf',
          paragraphs: [
            'Una Virtud no es un premio por estar mal. Es la reserva de combustible reorganizándose de forma momentáneamente favorable Eidon obtiene control a cambio de que ese control tenga fecha de caducidad.',
            'CLARIDAD : primera Resolución Cognitiva (0 SP), o decisión deliberada de "parar y separar" en medio de una investigación. Efecto: identificar contradicciones, cancelar mentiras activas y elegir objetivo cuesta el mínimo esfuerzo posible. Multiplicador: baja un escalón el costo de la siguiente emisión. Cierre: en cuanto esa claridad se usa para una decisión importante, o al finalizar la escena. En mesa: Eidon deja de sonreír un momento es la señal de que, por una vez, no está construyendo nada.',
            'TESTIGO : elegir de forma consciente a una persona, registro o dispositivo como ancla de realidad antes de entrar en una situación inestable. Efecto: mientras el Testigo esté presente o accesible, cualquier emisión dirigida a él es más estable. Multiplicador: baja un escalón para emisiones relacionadas con el Testigo; si el Testigo es dañado, mentido o corrompido, el multiplicador vuelve de golpe a su nivel normal. Cierre: se pierde en cuanto el Testigo deja de ser confiable. En mesa: es la única Virtud que puede fallar por culpa de alguien más, no solo de Eidon.',
            'HIPERFOCO : elegir concentrarse en una amenaza, contradicción o tarea específica, renunciando activamente a vigilar el resto del entorno. Efecto: máxima precisión sobre ese único objetivo. Multiplicador: baja un escalón para emisiones dirigidas al objetivo elegido; sube un escalón para cualquier emisión fuera de él. Cierre: automático al resolver la amenaza/tarea, o si algo fuera del foco obliga a Eidon a reaccionar. En mesa: el precio de esta Virtud lo paga otra persona del equipo, normalmente sin que Eidon se dé cuenta hasta después.',
            'CONVICCIÓN : segunda Resolución Cognitiva (-25 SP), o la decisión de actuar pese a no tener toda la información. Efecto: resistencia notable a la duda y a la presión externa. Multiplicador: congela el multiplicador actual, sin dejar que suba mientras Convicción esté activa, aunque el SP siga bajando es un colchón temporal, no recuperación real. Cierre: al resolver la contradicción que la originó, o al finalizar la escena sin colchón, el multiplicador salta de golpe al nivel que le correspondería. En mesa: Eidon suena más seguro de lo que debería, y eso es exactamente la señal de alerta.',
            'IMPROVISACIÓN : cualquier momento en que un plan preparado se rompe y Eidon necesita construir una mentira nueva sobre la marcha. Efecto: puede combinar falsedades simples ya activas en una nueva sin pagar el costo completo de una emisión desde cero. Multiplicador: baja un escalón, pero solo si la emisión se apoya en al menos una mentira previa todavía activa; si no hay ninguna en pie, no hay descuento. Cierre: en cuanto la situación se estabiliza o dispone de tiempo para preparar algo con calma. En mesa: premia haber sembrado mentiras antes, no solo mentir rápido ahora.',
            'LUCIDEZ DELIRANTE : segunda Resolución Cognitiva, específicamente cuando el resultado favorece una respuesta adaptativa pese al SP muy bajo. Efecto: alta resistencia a ilusiones y manipulaciones externas. Multiplicador: baja dos escalones para la emisión inmediata el mayor descuento posible en todo el sistema, pero al terminar el estado se cobra una pérdida adicional de SP fija, sin excepción. Cierre: automático tras un número limitado de usos o al finalizar la escena; nunca se cancela voluntariamente sin pagar el costo de salida. En mesa: la única Virtud que Eidon no debería querer tener, aunque lo ayude en el momento.',
          ],
        },
        {
          id: 'l1r-aflicciones',
          label: 'Aflicciones',
          type: 'leaf',
          paragraphs: [
            'Una Aflicción no es un castigo narrativo aislado del sistema es la misma reserva de combustible pidiendo intereses. Da poder real. También decide, en parte, cómo se gasta ese poder sin que Eidon lo autorice del todo.',
            'VERIFICACIÓN COMPULSIVA : primera Resolución Cognitiva con resultado disfuncional. Efecto: Eidon no puede actuar sobre información sin confirmarla primero. Multiplicador: confirmar una contradicción importante baja un escalón la próxima emisión; que la evidencia contradiga un recuerdo ya aceptado sube uno. Cierre: al obtener la confirmación que busca, o al finalizar la escena. En mesa: ralentiza al grupo entero el costo lo pagan también los aliados que esperan.',
            'PARANOIA : segunda Resolución Cognitiva con resultado disfuncional, tras un evento de traición real o percibida. Efecto: detecta incongruencias con facilidad inusual, pero le cuesta compartir información con aliados. Multiplicador: baja un escalón para emisiones defensivas; sube uno para cualquier emisión que dependa de confiar en información ajena. Cierre: al resolver la sospecha específica (confirmada o desmentida) o con estabilización externa. En mesa: el riesgo real es que Eidon deje de compartir con su propio equipo justo cuando más lo necesitan.',
            'OBSESIÓN : cualquier contradicción sin resolver que Eidon decide no soltar, con o sin Resolución Cognitiva de por medio. Efecto: rendimiento notablemente mejor contra ese elemento específico; rechazo abierto a tareas no relacionadas. Multiplicador: baja un escalón para emisiones dirigidas al objeto de la obsesión; si la contradicción sigue sin resolverse tras varias escenas, sube un escalón para todo lo demás. Cierre: al resolver la contradicción no antes. Forzar el cierre sin resolverla cuesta SP adicional de golpe. En mesa: dale a Eidon un misterio que no puede cerrar, y tiene una mecánica entera reaccionando a eso.',
            'DESPERSONALIZACIÓN : segunda Resolución Cognitiva relacionada con daño físico ignorado repetidamente (ver Cuerpo). Efecto: menor percepción de dolor y miedo, mayor resistencia a efectos dirigidos a su identidad. Multiplicador: baja un escalón para emisiones sobre el propio cuerpo lo que incentiva justo el comportamiento que ya lo pone en riesgo. Cierre: con estabilización externa o descanso prolongado; rara vez se resuelve solo. En mesa: recompensa la autodestrucción a corto plazo, que es exactamente el punto: hace tentador seguir usándola.',
            'DELIRIO : segunda Resolución Cognitiva cuando una mentira propia (a otros o a sí mismo) se sostiene tanto tiempo que se vuelve marco de referencia. Efecto: mejor rendimiento mientras actúe conforme al delirio; rechazo activo de evidencia contradictoria. Multiplicador: baja un escalón para emisiones que refuerzan la narrativa delirante; la primera evidencia irrefutable que la rompe fuerza una pérdida severa de SP de golpe, no gradual. Cierre: únicamente ante evidencia irrefutable. En mesa: es la más peligrosa de las seis porque se siente bien mientras dura.',
            'HISTERIA : segunda Resolución Cognitiva con resultado desfavorable o crítico en una emisión de alto riesgo. Efecto: velocidad de respuesta y alcance de emisión aumentados; precisión reducida. Multiplicador: baja un escalón para activar la emisión, pero el resultado se resuelve como un escalón más inestable de lo real mayor probabilidad de Resultado incompleto o crítico incluso con buena intención. Cierre: al finalizar la escena o con intervención directa de un aliado (equivalente funcional de un Testigo activo). En mesa: puede sabotear una infiltración discreta sin que nadie del grupo haga nada mal el problema es puramente interno.',
          ],
        },
      ],
    },
  ],
};

const equipamiento = {
  id: 'equipo',
  label: 'Equipamiento',
  type: 'folder',
  children: [
    {
      id: 'equipo-ffnatt',
      label: 'FF-NATT',
      type: 'leaf',
      images: [
        { src: '/Gadget 2.png', alt: 'Dispositivo FF-NATT', caption: 'Dispositivo Field Forensic Neural Analysis and Transmission Token.' },
      ],
      paragraphs: [
        'Dispositivo Field Forensic Neural Analysis and Transmission Token.',
        '',
        'Diseñador: Eidon. Cantidad operativa: cinco unidades. Forma: dispositivo circular, del tamaño aproximado de una moneda. Función: reconocimiento, análisis ambiental y aplicación remota de L1-4R.',
        '',
        'Origen: Los FF-NATT fueron desarrollados por Eidon como extensión de su formación en ingeniería de sistemas y de su especialidad operativa. Cada unidad se adhiere a la mayoría de superficies y funciona de manera independiente, sin necesitar conexión directa con las demás. La red se forma cuando Eidon recibe e integra la información transmitida por cada dispositivo a través de su terminal portátil.',
        '',
        'Capacidades de reconocimiento: cada FF-NATT registra la geometría del entorno (paredes, habitaciones, pasillos, escaleras, mobiliario), además de movimiento, vibraciones, temperatura, sonido, presión, actividad electromagnética y sistemas electrónicos activos. Los dispositivos no identifican automáticamente la naturaleza de todo lo detectado: proporcionan datos, y la interpretación corresponde al sujeto.',
        '',
        'Emisión remota: cada FF-NATT contiene una pequeña reserva de medio L1-4R. El dispositivo no crea una mentira por sí mismo: Eidon formula la falsedad y usa la unidad como punto remoto de dispersión. Las aplicaciones incluyen sonido localizado, imagen falsa, sensación corporal, presencia inexistente, señal electrónica incorrecta, lectura térmica falsa, distorsión de sensores o interpretación errónea de movimiento.',
        '',
        'Trampas: la función táctica no es causar daño directo, sino provocar una decisión equivocada Desvío auditivo, Punto ciego, Presencia falsa, Ruta segura, Cobertura aparente, Alarma falsa, Dirección errónea.',
        '',
        'Cortina de humo: cada unidad puede liberar humo físico que interrumpe la visión y satura sensores; L1-4R puede alterar su interpretación (más denso, siluetas, posición desplazada). La combinación de humo real e información falsa es especialmente eficaz.',
      ],
    },
    {
      id: 'equipo-ffnatt-distribucion',
      label: 'FF-NATT · Distribución',
      type: 'leaf',
      paragraphs: [
        'Los dispositivos ofrecen más valor de reconocimiento cuando se distribuyen en sectores separados: ruta de entrada, ruta de retirada, zona elevada, sector cercano al objetivo, pasillo de aproximación, punto de vigilancia, área oculta. Concentrar varias unidades en un mismo sector aumenta la información disponible sobre esa zona, pero reduce la cobertura general.',
        'No existe una distribución universalmente óptima; depende del objetivo de la misión, el diseño del terreno, el nivel de infiltración, la presencia de sensores, las rutas posibles y el tiempo disponible. La red es más útil cuando Eidon conoce el terreno o dispone de tiempo para desplegarla antes del contacto.',
      ],
    },
    {
      id: 'equipo-terminal',
      label: 'Terminal portátil',
      type: 'leaf',
      paragraphs: [
        'Eidon utiliza un dispositivo portátil que recibe, organiza y representa los datos transmitidos por los FF-NATT: mapa tridimensional, posición estimada de movimientos, historial de señales, registro temporal, comparación entre unidades, visualización de zonas sin cobertura, detección de contradicciones, seguimiento de rutas, supervisión de sistemas electrónicos y registro de mentiras activadas desde cada unidad.',
        'El terminal funciona también como apoyo cognitivo, permitiendo comparar información sin procesar, interpretaciones automáticas, registros previos, mentiras activas, datos confirmados y datos dudosos. Con Sanidad elevada, Eidon distingue correctamente estas capas; con Sanidad reducida, puede interpretar información antigua como actual, olvidar qué estímulos fueron fabricados, o desconfiar de registros legítimos. El dispositivo conserva datos objetivos eso no garantiza que el sujeto los interprete correctamente.',
      ],
    },
  ],
};

const memoria = {
  id: 'memoria',
  label: 'Memoria',
  type: 'folder',
  children: [
    {
      id: 'memoria-corpus',
      label: 'Corpus la verdad',
      type: 'leaf',
      images: [
        { src: '/Corpus.png', alt: 'Corpus', caption: 'Corpus' },
      ],
      paragraphs: [
        'No elabora, no interpreta. Pero tampoco es inocente lleva años entrenado para hablar distinto.',
        'Corpus reporta lo que hay: una frecuencia cardíaca, una tensión muscular, una fractura. Eso no ha cambiado. Lo que cambió es cómo Eidon aprendió a escucharlo. Años usando L1-4R sobre su propio sistema nervioso le dieron una conciencia corporal anormalmente precisa percibe variaciones mínimas que un cuerpo promedio ni siquiera registra pero también le enseñaron un hábito peligroso: tratar el dolor como un dato entre muchos, no como una alarma que exige detenerse. Corpus sigue diciendo la verdad. El problema es que Eidon ya no le da prioridad automática la archiva junto a todo lo demás, y sigue moviéndose.',
        'Esto significa que Corpus, paradójicamente, casi nunca gana la primera discusión. No porque mienta, sino porque compite contra una costumbre: la de tratar sus propias advertencias como información diferida en lugar de instrucción inmediata. Cuando por fin logra imponerse, generalmente es porque el daño ya escaló lo suficiente como para que ignorarlo deje de ser una opción.',
      ],
    },
    {
      id: 'memoria-mentis',
      label: 'Mentis la mentira',
      type: 'leaf',
      images: [
        { src: '/Mentis.png', alt: 'Mentis', caption: 'Mentis' },
      ],
      paragraphs: [
        'No inventa por necesidad de escapar de algo. Inventa porque necesita ver qué pasa después.',
        'Mentis es donde vive el oficio, pero no de la forma esperada. No es una voz calculadora que miente para proteger a Eidon miente porque no soporta bien la certeza. Diversos especialistas lo señalaron sin entender del todo el fenómeno: el sujeto introduce información falsa en conversaciones cotidianas sin un objetivo funcional aparente, no para manipular, sino por una necesidad casi compulsiva de observar cómo reacciona el mundo frente a una contradicción. Mentis es esa curiosidad hecha voz divaga, responde preguntas con preguntas, y se siente más cómoda dentro de la incertidumbre que dentro de una conversación completamente honesta.',
        'Debajo de esa fachada errática está la verdadera arma: una capacidad para reconstruir secuencias, detectar inconsistencias y sostener varias hipótesis a la vez sin necesitar que ninguna sea la definitiva. Mentis no razona en línea recta conecta anomalías pequeñas hasta que una explicación completa emerge sola. Por eso es tan buena mintiendo: construye una falsedad exactamente como construye una teoría del caso, y a veces ni ella misma sabe en qué momento dejó de investigar y empezó a inventar.',
      ],
    },
    {
      id: 'memoria-anima',
      label: 'Anima el peso',
      type: 'leaf',
      images: [
        { src: '/Anima.png', alt: 'Anima', caption: 'Anima' },
      ],
      paragraphs: [
        'No cree en la verdad. No tiene por qué nunca estuvo convencido de que existiera una a la que apelar.',
        'Anima no es la voz que distingue lo real de lo alterado, porque Eidon dejó de creer hace tiempo que esa distinción fuera posible. Su filosofía es simple y consistente: toda percepción es una reconstrucción incompleta hecha de recuerdos, emociones y sesgos la mentira, bajo esa premisa, no es una traición a la verdad, sino una versión más de lo mismo que ya hace cualquier mente humana sin ayuda de ningún combustible. Así que Anima no arbitra buscando qué es cierto. Arbitra buscando qué ha sostenido a Eidon en pie antes.',
        'Cada vez que Corpus acierta, gana peso. Cada vez que una mentira de Mentis lo mantiene funcional un turno más, también gana peso. Anima simplemente sigue la balanza lo que la convierte, mecánicamente, en un reflejo directo de la Sanidad: con SP alto, tiende a Corpus, porque la costumbre de verificar todavía manda. Con SP bajo, se inclina hacia Mentis, no porque la mentira convenza más ese día, sino porque ya fue reforzada tantas veces que dejó de sentirse como mentira.',
        'Esto debería aterrar a Eidon más de lo que admite y de hecho lo hace: es el único de los tres que teme perder la capacidad de distinguir su propia voz de la del combustible de memoria. Por eso mantiene, de forma casi compulsiva, registros físicos de cada caso, cada conversación, cada hallazgo. No son solo notas de investigación. Son el único punto fijo externo al que Anima puede recurrir cuando la balanza interna ya no es confiable. Anima no es la voz de Eidon. Es el historial de quién ha estado ganando la discusión, sostenido por el único archivo que él aún se atreve a creer que no manipuló.',
      ],
    },
  ],
};

// Árbol raíz: carpeta madre = número de serie del Neohumano.
export const TREE = {
  id: SERIAL,
  label: SERIAL,
  type: 'folder',
  defaultOpen: true,
  children: [informacionPersonal, l1r, equipamiento, memoria],
};

export { SERIAL };
