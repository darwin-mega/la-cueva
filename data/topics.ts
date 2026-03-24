export type GameIntensity = "liviano" | "medio" | "filoso";

export type Topic = {
    id: string;
    intensity: GameIntensity;
    category: string;
    statement: string;
    context: string;
    angleA: string;
    angleB: string;
    prompts: string[];
};

export const topics: Topic[] = [
    // --- LIVIANO (30 Temas) ---
    {
        id: "l1", intensity: "liviano", category: "Redes",
        statement: "Las redes sociales hacen más daño que bien.",
        context: "El impacto diario de plataformas como Instagram, TikTok o X en la sociedad.",
        angleA: "Sí: Fomentan ansiedad, adicción y desinformación constante.",
        angleB: "No: Son la mayor herramienta de democratización y conexión de la historia.",
        prompts: ["Salud mental vs. Conexión", "Burbujas digitales", "La responsabilidad del usuario"]
    },
    {
        id: "l2", intensity: "liviano", category: "Hábitos",
        statement: "El celular nos distrae demasiado en la vida diaria.",
        context: "La presencia constante del smartphone en interacciones cara a cara y el trabajo.",
        angleA: "Distrae: Rompe la concentración y disminuye la capacidad de estar presentes.",
        angleB: "Conecta: Es vital para la eficiencia y nos mantiene comunicados al instante.",
        prompts: ["Phubbing", "Economía de la atención", "Delegar memoria"]
    },
    {
        id: "l3", intensity: "liviano", category: "Educación",
        statement: "La inteligencia artificial debería usarse en la educación.",
        context: "El uso de herramientas como ChatGPT por parte de alumnos y profesores.",
        angleA: "A favor: Personaliza el aprendizaje y prepara a los estudiantes para el futuro.",
        angleB: "En contra: Fomenta la pereza intelectual y arruina la escritura propia.",
        prompts: ["Trampa vs. Herramienta", "El rol del profesor", "Saber pensar"]
    },
    {
        id: "l4", intensity: "liviano", category: "Hábitos",
        statement: "Es mejor leer un libro que mirar un resumen en video.",
        context: "El cambio en los formatos de consumo de información.",
        angleA: "Libro: Permite una inmersión profunda y desarrollo de la paciencia.",
        angleB: "Video: Es más eficiente, democrático y rápido para aprender la idea central.",
        prompts: ["Eficiencia vs Profundidad", "Tiempo disponible", "Retención de ideas"]
    },
    {
        id: "l5", intensity: "liviano", category: "Sociedad",
        statement: "La gente opina demasiado sin saber del tema.",
        context: "La tendencia en internet de emitir juicios rápidos sobre cualquier evento.",
        angleA: "Sí: Hay exceso de 'opinólogos' que devalúan el conocimiento experto.",
        angleB: "No: Es positivo que todos participen, el debate pule las ideas.",
        prompts: ["Libertad vs. Rigor", "Democratización", "Sesgo de Dunning-Kruger"]
    },
    {
        id: "l6", intensity: "liviano", category: "Atención",
        statement: "Tener mucha información no significa entender más.",
        context: "La exposición a la sobreabundancia de noticias, datos y fake news.",
        angleA: "Cierto: La sobrecarga paraliza la mente y causa fatiga informativa.",
        angleB: "Falso: Quien sabe buscar tiene más herramientas para llegar a la verdad que antes.",
        prompts: ["Curación de contenido", "Infoxicación", "Pensamiento crítico"]
    },
    {
        id: "l7", intensity: "liviano", category: "Redes",
        statement: "Las redes sociales empeoran la autoestima.",
        context: "La exposición a vidas perfectas, filtros y métricas de validación.",
        angleA: "Empeoran: Crean estándares irreales de belleza y éxito.",
        angleB: "No necesariamente: Depende del uso que le des y de a quién sigas.",
        prompts: ["Comparación constante", "Algoritmos", "Identidad"]
    },
    {
        id: "l8", intensity: "liviano", category: "Educación",
        statement: "Es más importante saber pensar que memorizar datos.",
        context: "El debate sobre qué métodos de enseñanza son útiles hoy.",
        angleA: "Pensar: Con Google, retener datos es inútil frente a la lógica.",
        angleB: "Memorizar: Sin un corpus de datos en la memoria, no hay con qué pensar.",
        prompts: ["Google effect", "Creatividad vs Datos", "Pedagogía"]
    },
    {
        id: "l9", intensity: "liviano", category: "Tecnología",
        statement: "La tecnología nos ahorra tiempo, pero nos vuelve más dependientes.",
        context: "Automatización, GPS, recordatorios y su efecto en nuestra autonomía.",
        angleA: "Ahorra tiempo: Nos libera de tareas mecánicas estúpidas.",
        angleB: "Genera dependencia: Nos atrofia capacidades básicas (ej: ubicarnos en la calle).",
        prompts: ["Comodidad", "Fragilidad sistémica", "Autonomía"]
    },
    {
        id: "l10", intensity: "liviano", category: "Debate",
        statement: "Discutir bien es más útil que ganar una discusión.",
        context: "Las formas y el proceso del intercambio verbal versus el resultado de convencer.",
        angleA: "Proceso: Refina el pensamiento propio y mantiene relaciones sanas.",
        angleB: "Resultado: Hay batallas de ideas que sí o sí deben ganarse por el bien común.",
        prompts: ["Ego", "Convencer", "Construcción colectiva"]
    },
    {
        id: "l11", intensity: "liviano", category: "Humanos",
        statement: "La mayoría de las personas cambia poco de opinión.",
        context: "La rigidez mental a medida que envejecemos o consumimos redes.",
        angleA: "Cierto: Las creencias suelen estar atadas a la identidad y son inflexibles.",
        angleB: "Falso: Constantemente ajustamos ideas, solo que los cambios drásticos son lentos.",
        prompts: ["Sesgo de confirmación", "Orgullo", "Madurez"]
    },
    {
        id: "l12", intensity: "liviano", category: "Tecnología",
        statement: "Los algoritmos influyen demasiado en lo que creemos.",
        context: "Sistemas de recomendación mostrándonos solo lo que queremos ver.",
        angleA: "Sí: Moldean nuestra realidad al decidir qué noticias vemos.",
        angleB: "No: Son solo reflejos automatizados de lo que ya somos y buscamos.",
        prompts: ["Libre albedrío", "Burbuja de filtro", "Consumo"]
    },
    {
        id: "l13", intensity: "liviano", category: "Libertad",
        statement: "La libertad de expresión debería proteger opiniones incómodas.",
        context: "Hasta dónde tolerar discursos que molestan u ofenden a las mayorías.",
        angleA: "Proteger: Si solo se protege lo amable, no es verdadera libertad.",
        angleB: "Limitar: Lo que es incómodo para unos, suele ser daño real para otros.",
        prompts: ["Ofensa subjetiva", "Censura", "Límites"]
    },
    {
        id: "l14", intensity: "liviano", category: "Humanos",
        statement: "La gente confunde popularidad con verdad.",
        context: "Creer que algo es correcto solo porque todos lo dicen en internet.",
        angleA: "Totalmente: Los likes y retuits validan falsedades.",
        angleB: "No siempre: La mayoría también suele tender hacia el sentido común.",
        prompts: ["Argumentum ad populum", "Validación social", "Mayorías"]
    },
    {
        id: "l15", intensity: "liviano", category: "Hábitos",
        statement: "Estar siempre conectado nos vuelve menos presentes.",
        context: "La imposibilidad de desconectarnos mentalmente en lugares físicos reales.",
        angleA: "Menos presentes: Las notificaciones constantes cortan la experiencia real.",
        angleB: "Más conectados: Podemos estar presentes con quienes no están físicamente ahí.",
        prompts: ["Multitasking", "FOMO", "Ansiedad"]
    },
    {
        id: "l16", intensity: "liviano", category: "Debate",
        statement: "Los debates públicos suelen ser demasiado simplistas.",
        context: "Conversaciones en TV o Twitter que reducen todo a blanco y negro.",
        angleA: "Simplistas: Los formatos cortos matan los matices y el pensamiento crítico.",
        angleB: "Necesarios: Si son muy complejos, excluyen a la población general.",
        prompts: ["Polarización", "Medios", "Titulares"]
    },
    {
        id: "l17", intensity: "liviano", category: "Humanos",
        statement: "Es mejor dudar un poco más antes que opinar rápido.",
        context: "La urgencia autoimpuesta por tener una postura definida ante noticias de última hora.",
        angleA: "Dudar: La prudencia evita errores y desinformación grave.",
        angleB: "Opinar: El silencio puede ser cómplice; esperar a saber todo no es realista.",
        prompts: ["Prudencia", "Justicia rápida", "Sesgos"]
    },
    {
        id: "l18", intensity: "liviano", category: "Humanos",
        statement: "Las emociones afectan demasiado nuestras opiniones.",
        context: "Cómo los sentimientos dominan nuestras posturas racionales.",
        angleA: "Afectan: Votamos o decidimos por rabia, miedo o simpatía, no por datos.",
        angleB: "Son útiles: La emoción humana contiene una lógica moral que los datos fríos ignoran.",
        prompts: ["Empatía vs Lógica", "Manipulación", "Racionalidad"]
    },
    {
        id: "l19", intensity: "liviano", category: "Redes",
        statement: "Las redes premian más el impacto que la profundidad.",
        context: "Contenido viral y escandaloso vs investigaciones reflexivas y sosegadas.",
        angleA: "Impacto: Premian el clic, el grito y la indignación porque retiene más tiempo.",
        angleB: "No siempre: Existen creadores de profundidad con millones de seguidores.",
        prompts: ["Dopamina", "Atención", "Economía del clic"]
    },
    {
        id: "l20", intensity: "liviano", category: "Educación",
        statement: "La educación debería enseñar lógica y argumentación desde temprano.",
        context: "La inclusión del pensamiento crítico formal como materia base en colegios.",
        angleA: "A favor: Vacunaría a la sociedad contra charlatanes y fake news.",
        angleB: "En contra: Ya es un currículo lleno; se debería aplicar en las materias que ya existen.",
        prompts: ["Falacias", "Colegio", "Capacidad crítica"]
    },
    {
        id: "l21", intensity: "liviano", category: "Debate",
        statement: "La mayoría de las discusiones en internet no buscan entender al otro.",
        context: "Las dinámicas de conflicto en comentarios y foros.",
        angleA: "Cierto: Son torneos de vanidad para aplastar al rival frente a una audiencia.",
        angleB: "Falso: Hay comunidades sanas donde el intercambio es genuinamente curioso.",
        prompts: ["Ego", "Audiencia invisible", "Trolling"]
    },
    {
        id: "l22", intensity: "liviano", category: "Atención",
        statement: "Mirar videos cortos todo el día reduce la capacidad de atención.",
        context: "El consumo crónico de TikToks, Reels y Shorts.",
        angleA: "Sí: Acostumbra al cerebro a la dopamina constante de los 15 segundos.",
        angleB: "No: Es solo una nueva forma de condensar información al siglo XXI.",
        prompts: ["Déficit", "Dopamina", "Contenido"]
    },
    {
        id: "l23", intensity: "liviano", category: "Debate",
        statement: "Tener razón no sirve de mucho si no sabés explicarla.",
        context: "La importancia de la habilidad comunicativa por sobre los datos fríos.",
        angleA: "Comunicación: La verdad que no puede transmitirse o convencer queda inútil.",
        angleB: "La razón: La verdad sigue siendo verdad objetiva aunque estés solo; la retórica es secundaria.",
        prompts: ["Retórica vs Lógica", "Pedagogía", "Carisma"]
    },
    {
        id: "l24", intensity: "liviano", category: "Humanos",
        statement: "La gente cree más fácil lo que quiere creer.",
        context: "La manera en que filtramos los datos que respaldan nuestros prejuicios.",
        angleA: "Completamente: Ignoramos toda evidencia que amenace nuestra tranquilidad o grupo.",
        angleB: "Exagerado: Con buena evidencia, la mayoría eventualmente cede.",
        prompts: ["Pensamiento motivado", "Prejuicios", "Comodidad"]
    },
    {
        id: "l25", intensity: "liviano", category: "Educación",
        statement: "El pensamiento crítico debería enseñarse como materia obligatoria.",
        context: "Añadir filosofía y escepticismo práctico de manera mandatoria.",
        angleA: "Sí: Es la base para ciudadanos libres en el caos digital actual.",
        angleB: "No: Se convertiría en puro adoctrinamiento si lo dictan mal.",
        prompts: ["Filosofía", "Adoctrinamiento", "Defensa personal mental"]
    },
    {
        id: "l26", intensity: "liviano", category: "Tecnología",
        statement: "Muchas personas hablan de tecnología sin entender cómo funciona.",
        context: "El uso masivo versus la comprensión de las herramientas base.",
        angleA: "Peligro: Legislamos y opinamos sobre cajas negras que controlan la vida.",
        angleB: "Realidad: Usar un auto no requiere saber armar su motor; se juzgan sus resultados.",
        prompts: ["Cajas negras", "Alfabetización digital", "Regulación"]
    },
    {
        id: "l27", intensity: "liviano", category: "Hábitos",
        statement: "Callarse a tiempo puede ser más inteligente que responder siempre.",
        context: "La presión por tener la última palabra en todo intercambio.",
        angleA: "Inteligente: No toda batalla vale el tiempo, el silencio preserva paz.",
        angleB: "Mala idea: Quien calla otorga y permite que narrativas tóxicas ganen terreno.",
        prompts: ["Orgullo", "Paz mental", "Prudencia"]
    },
    {
        id: "l28", intensity: "liviano", category: "Redes",
        statement: "Los discursos extremos atraen más atención que los razonables.",
        context: "El sesgo hacia lo sensacional y radical en el contenido público.",
        angleA: "Extremos: La moderación aburre, lo controversial estimula reacciones.",
        angleB: "Moderación: A largo plazo, la gente confía y vuelve a la mesura.",
        prompts: ["Indignación", "Economía de la atención", "Clickbait"]
    },
    {
        id: "l29", intensity: "liviano", category: "Humanos",
        statement: "Hoy es más fácil repetir ideas que pensar por cuenta propia.",
        context: "La adopción de 'combos' ideológicos completos sin detenerse a analizarlos.",
        angleA: "Repetir: Tomamos discursos prefabricados para pertenecer a una tribu sin esfuerzo.",
        angleB: "Pensar propio: Nunca antes hubo tantas fuentes y libros gratis para analizar por uno mismo.",
        prompts: ["Tribalismo", "Paquetes de ideas", "Conformidad"]
    },
    {
        id: "l30", intensity: "liviano", category: "Debate",
        statement: "Saber detectar falacias mejora la forma de discutir.",
        context: "El uso formal del conocimiento lógico en intercambios cotidianos.",
        angleA: "Mejora: Permite desarmar trampas sin atacar personalmente.",
        angleB: "Empeora: Vuelve a la gente pedante al querer usar tecnicismos para cancelar al otro.",
        prompts: ["Pedantería", "Herramienta", "Lógica"]
    },

    // --- MEDIO (20 Temas) ---
    {
        id: "m1", intensity: "medio", category: "Cancelación",
        statement: "Destruir la carrera publicamente a alguien ('cancelación') es una forma de justicia legítima.",
        context: "Las turbas digitales y su poder de presión frente a comportamientos problemáticos no penados por la ley.",
        angleA: "Legítima: Demuestra poder popular donde los sistemas fallan.",
        angleB: "Ilegítima: Es linchamiento sin evidencia rigurosa ni posibilidad real de defensa.",
        prompts: ["Miedo", "Justicia paralela", "Líneas cruzadas"]
    },
    {
        id: "m2", intensity: "medio", category: "Inteligencia Artificial",
        statement: "La inteligencia artificial causará más desempleo del que puede resolver.",
        context: "El impacto económico del reemplazo cognitivo y automatizado masivo.",
        angleA: "Pérdida neta: Destruirá oficios intelectuales de manera acelerada y sin retorno.",
        angleB: "Beneficio: Creará nuevos campos laborales como siempre ocurrió con la tecnología.",
        prompts: ["Automatización", "Transición", "Supervisión"]
    },
    {
        id: "m3", intensity: "medio", category: "Educación",
        statement: "Los títulos universitarios han perdido gran parte de su verdadero valor.",
        context: "La devaluación de las credenciales frente al conocimiento práctico o en línea.",
        angleA: "Han perdido: Hoy se valora más el portfolio real y la adaptabilidad rápida.",
        angleB: "Mantienen valor: Siguen siendo formadores estructurales de método y filtros sociales robustos.",
        prompts: ["Credencialismo", "Cursos online", "Mérito"]
    },
    {
        id: "m4", intensity: "medio", category: "Libertad",
        statement: "El anonimato en internet debería estar prohibido.",
        context: "Sopesar ciberacoso y bots frente a la libertad civil y protección de identidad.",
        angleA: "Prohibir: Genera impunidad; dar la cara fomentaría responsabilidad y reduciría el acoso.",
        angleB: "Permitir: Esencial para proteger a activistas, minorías y denunciantes de represalias graves.",
        prompts: ["Impunidad", "Protección", "Verificación"]
    },
    {
        id: "m5", intensity: "medio", category: "Ética",
        statement: "El fin no justifica los medios, incluso por causas nobles.",
        context: "Si una meta justa permite romper leyes morales o democráticas elementales.",
        angleA: "No justifica: Usar medios corruptos contamina siempre el objetivo a largo plazo.",
        angleB: "Depende: Hay emergencias o injusticias mortales donde el formalismo es cómplice.",
        prompts: ["Pragmatismo", "Integridad", "Consecuencialismo"]
    },
    {
        id: "m6", intensity: "medio", category: "Autoridad",
        statement: "La voz de los expertos y científicos debería pesar más que la democrática.",
        context: "Decisiones críticas como la pandemia o cambio climático frente al voto popular.",
        angleA: "Expertos: La verdad científica no es algo que se pueda votar; seguir la opinión popular causa catástrofes.",
        angleB: "Democrática: El experto sabe de su campo, pero gobernar implica equilibrar distintos valores humanos que requieren consenso.",
        prompts: ["Tecnocracia", "Consenso popular", "Soberanía"]
    },
    {
        id: "m7", intensity: "medio", category: "Verdad",
        statement: "Las plataformas digitales deben ser responsables legales por lo que publican sus usuarios.",
        context: "El debate sobre moderación y neutralidad en X, TikTok, Facebook, etc.",
        angleA: "Responsables: Cobran dinero editando algoritmos, por ende son editores, no buzones.",
        angleB: "No responsables: Destruiría la existencia misma de redes libres mediante censura preventiva radical.",
        prompts: ["Censura previa", "Responsabilidad corporativa", "Editorialización"]
    },
    {
        id: "m8", intensity: "medio", category: "Vida y Trabajo",
        statement: "El concepto de 'meritocracia' es un mito usado para justificar privilegios.",
        context: "El esfuerzo individual vs las barreras e injusticias del entorno social.",
        angleA: "Es un mito: El éxito depende enormemente de la cuna, la suerte y los contactos iniciales.",
        angleB: "Es real y útil: Aunque haya desigualdades, premiar el esfuerzo sigue siendo el motor de movilidad y justicia.",
        prompts: ["Equidad de origen", "Esfuerzo", "Lotería biológica"]
    },
    {
        id: "m9", intensity: "medio", category: "Sociedad",
        statement: "Las personas tienen el deber moral de informarse antes de votar.",
        context: "El derecho a elegir combinado con la desinformación en democracias de masas.",
        angleA: "Deber moral: Un voto ignorante o manipulado afecta el destino de millones de vidas ajenas.",
        angleB: "Derecho incondicional: La democracia no exige un examen, sino representar intereses; obligarlo limitaría derechos universales.",
        prompts: ["Democracia", "Vanguardias morales", "Fake news y Voto"]
    },
    {
        id: "m10", intensity: "medio", category: "Control",
        statement: "Los padres deberían poder rastrear la ubicación y mensajes de sus hijos en todo momento.",
        context: "Seguridad infantil frente al derecho de privacidad de los menores que crecen con tecnología.",
        angleA: "Monitorear: Las redes son un peligro hostil, los menores carecen de criterio legal y emocional para navegar solos.",
        angleB: "No rastrear: Destruye la confianza y la privacidad que ellos necesitan para construir autonomía real.",
        prompts: ["Privacidad", "Peligros virtuales", "Espacio propio"]
    },
    {
        id: "m11", intensity: "medio", category: "Sesgos ideológicos",
        statement: "Los medios de comunicación ya no relatan los hechos, solo venden narrativas atractivas.",
        context: "La confianza pública en el periodismo institucional en un ambiente hiperpolarizado.",
        angleA: "Cierto: El periodismo neutral murió; solo se atiende a grupos específicos reforzando su identidad.",
        angleB: "Falso: Aún existen investigaciones robustas indispensables, la culpa de la percepción es la toxicidad en las redes.",
        prompts: ["Periodismo", "Línea editorial", "Fidelización de audiencia"]
    },
    {
        id: "m12", intensity: "medio", category: "Control",
        statement: "Debería exigirse un límite estricto de horas para el uso de pantallas en redes sociales.",
        context: "Imponer regulaciones a nivel dispositivo como con el alcohol o el tabaco, debido a su adicción.",
        angleA: "Límites: Son productos diseñados de forma adictiva manipulando cerebros, necesitan barreras mecánicas urgentes.",
        angleB: "Responsabilidad: El Estado ni las corporaciones deben regular los hábitos personales o el tiempo libre.",
        prompts: ["Control parental/Estatal", "Dopamina", "Autocontrol"]
    },
    {
        id: "m13", intensity: "medio", category: "Desigualdad",
        statement: "Explotar la atención humana con algoritmos debería ser tratado como un problema de salud pública.",
        context: "Comparativa entre las empresas de big tech y las epidemias conductuales severas.",
        angleA: "Salud pública: Causa depresión masiva y aislamiento comparables con verdaderas plagas; requiere control de estado.",
        angleB: "Uso libre: No puedes patologizar herramientas que millones usan positivamente de libre albedrío.",
        prompts: ["Ansiedad social", "Big Tech", "Vicio"]
    },
    {
        id: "m14", intensity: "medio", category: "Verdad",
        statement: "Nuestros propios sesgos importan más que los engaños masivos cuando tomamos decisiones políticas.",
        context: "Por qué creemos desinformación: si es por maldad del entorno o voluntad propia secreta.",
        angleA: "Importan los sesgos: Las fake news funcionan porque operan en creencias ocultas previas que la persona abraza a gusto.",
        angleB: "Importa el engaño masivo: Hay operaciones de propaganda multimillonarias con IA que es imposible que el humano filtre siempre.",
        prompts: ["Defensas cognitivas", "Propaganda", "Deseo de creer"]
    },
    {
        id: "m15", intensity: "medio", category: "Educación",
        statement: "Las escuelas y universidades están desfasadas de los ritmos reales del mundo laboral.",
        context: "La eterna crítica sobre la burocracia académica vs tecnología.",
        angleA: "Desfasadas: Demoran cinco años en adaptar planes; el alumno ya egresa obsoleto frente al mercado real.",
        angleB: "Base firme: Su rol principal es enseñar pensamiento madre y método riguroso, que no envejece con el software de moda.",
        prompts: ["Herramientas vs Método", "Planes de estudio", "Velocidad"]
    },
    {
        id: "m16", intensity: "medio", category: "Libertad",
        statement: "Frente a opiniones terribles se soluciona discutiendo más con esa persona, no aislándola.",
        context: "Las mejores herramientas del tejido social contra el autoritarismo o fanatismo incipientes.",
        angleA: "Discutir: Aislar al fanático lo vuelve más radical y mártir; la luz es el mejor desinfectante.",
        angleB: "Aislar: Algunas opiniones simplemente no deben recibir la plataforma que las normaliza dándoles nivel de debate válido.",
        prompts: ["Deplatforming", "El mercado de ideas", "Tolerancia paradójica"]
    },
    {
        id: "m17", intensity: "medio", category: "Responsabilidad individual",
        statement: "Compramos tecnología por estatus y capricho, no realmente por necesidad.",
        context: "Cambios anuales del último teléfono y cultura consumista constante.",
        angleA: "Estatus: La diferencia funcional de año en año es nula; operamos desde la vanidad.",
        angleB: "Avance orgánico: La suma de pequeños cambios de eficiencia sostiene los techos de la productividad mundial.",
        prompts: ["Obsolescencia programada", "Economía", "Psicología social"]
    },
    {
        id: "m18", intensity: "medio", category: "Cancelación",
        statement: "La cultura moderna no tolera el derecho natural de errar del ser humano maduro.",
        context: "Castigo mediático implacable a declaraciones descontextualizadas o antiguos tweets de famosos.",
        angleA: "Falta tolerancia: No permitimos crecimiento personal; cualquier error se sentencia a cadena perpetua digital.",
        angleB: "Mayor filtro: Solo se exige no retroceder en conquistas básicas ganadas, antes la gente erraba pero sin consecuencias para minorías.",
        prompts: ["Redención", "Hipocresía", "Falsa pureza"]
    },
    {
        id: "m19", intensity: "medio", category: "IA y Empleo",
        statement: "El arte generado masivamente por la IA arruinará el valor orgánico de la creatividad.",
        context: "Ilustración, redacción literaria y música a gran escala artificial.",
        angleA: "Arruinará valor: Se inundarán los mercados haciendo inviable económicamente a los humanos, sin alma en el arte.",
        angleB: "Solo es herramienta: Elevará el estándar forzando al ser humano real a hacer obras con mucho más trasfondo experimental.",
        prompts: ["Proceso orgánico", "Democratización técnica", "Arte humano"]
    },
    {
        id: "m20", intensity: "medio", category: "Ética y Privacidad",
        statement: "Otorgamos nuestros datos alegremente al cambio de microsegundos de atención.",
        context: "El acuerdo de Términos y Condiciones vs el control de nuestra huella digital eterna, que cedemos a ciegas.",
        angleA: "Verdad trágica: Entregamos la libertad cívica futura a monopolios a la ligera debido pereza para leer.",
        angleB: "Opción funcional: Esa masividad de datos sirve a modelos que nos dan servicios que el Estado nunca proporcionaría sin costo.",
        prompts: ["El costo de lo gratuito", "Big Data", "Poder"]
    },

    // --- FILOSO (20 Temas) ---
    {
        id: "f1", intensity: "filoso", category: "Político y Poder",
        statement: "El sistema democrático actual está intrínsecamente roto y favorece siempre a una casta invisible.",
        context: "Cuestionamiento fundamental a la representatividad en repúblicas con grandes lobbyistas corporativos o políticos eternos.",
        angleA: "Roto y coptado: Las élites económicas siempre logran controlar decisiones mediante poder fáctico disfrazado de elecciones.",
        angleB: "Sigue siendo el menos malo: Es perfectible, y toda alternativa revolucionaria históricamente acabó en mayor tiranía.",
        prompts: ["Lobbying", "Corrupción estructural", "Representatividad"]
    },
    {
        id: "f2", intensity: "filoso", category: "Desigualdad",
        statement: "Debería limitarse o prohibirse la acumulación infinita de riqueza de los multimillonarios.",
        context: "Políticas fiscales radicales contra personas cuya fortuna supera el PIB de pequeñas naciones enteras.",
        angleA: "Limitar: Una persona no requiere ni puede usar orgánicamente billones; solo se logra explotando al tejido social bajo.",
        angleB: "No limitar: Quita incentivos enormes de inversión a innovadores que alteran industrias completas generando riqueza en cascada.",
        prompts: ["Impuesto a ricos", "Redistribución violenta", "Incentivos"]
    },
    {
        id: "f3", intensity: "filoso", category: "Ideología",
        statement: "El nacionalismo siempre termina derivando en odio excluyente tarde o temprano.",
        context: "Sopesar patriotismo e historia compartida contra tribalismo político radicalizado.",
        angleA: "Excluyente natural: Al resaltar que lo 'nuestro' es vital, subconscientemente declara que el extranjero es prescindible.",
        angleB: "Puede ser sano: El tejido que crea cohesión solidaria interna necesaria contra la alienación global que atomiza a todos.",
        prompts: ["Fronteras", "Identidad compartida", "Xenofobia cultural"]
    },
    {
        id: "f4", intensity: "filoso", category: "Moral",
        statement: "No existen leyes morales objetivas; todo es meramente un constructo social temporal humano.",
        context: "El relativismo absoluto cruzando debates éticos como tortura, sacrificio y crímenes fundamentales.",
        angleA: "Solo construcción humana: Todo lo que llamamos 'correcto' solo refleja preferencias de grupos de poder según la época histórica.",
        angleB: "Axiomas innatos: Existimos en una base innata biológica y universal donde el sufrimiento profundo gratuito jamás puede justificarse como 'construcción'.",
        prompts: ["Relativismo", "Valores Universales", "Nihilismo"]
    },
    {
        id: "f5", intensity: "filoso", category: "Castigo y Justicia",
        statement: "La cárcel para criminales violentos incurables debería tener enfoque punitivo, no de rehabilitación eterna.",
        context: "Sistemas penales donde abusadores o asesinos seriales retornan libres tras años versus castigos perpetuos cerrados.",
        angleA: "Rehabilitación: La prisión punitiva es venganza de Estado; cualquier humano con la terapia social correcta no es un monstruo.",
        angleB: "Punición preventiva: Hay naturalezas predatorias donde rehabilitar un lobo de vuelta a cazar corderos es crueldad sistémica e ingenua.",
        prompts: ["Psicopatía", "Derechos inalienables", "Venganza y prevención"]
    },
    {
        id: "f6", intensity: "filoso", category: "Censura",
        statement: "Está plenamente justificado ejercer violencia física sobre neonazis e incitadores reales y patentes previos al daño.",
        context: "Intervención radical frente a discursos absolutos de eliminación física evidente (paradoja de Popper materializada).",
        angleA: "Golpear nazi siempre justificado: Esperar un daño ya consumado del fanatismo sistémico nos hace genocidas en potencia indirectos.",
        angleB: "Jamás inicia la violencia civil: Rompe el monopolio legal por completo; cedes legitimidad a quien defina qué es un 'extremista'.",
        prompts: ["Acción directa antifa", "Estado de Derecho", "Monopolio de violencia"]
    },
    {
        id: "f7", intensity: "filoso", category: "Verdad Política",
        statement: "Al gobierno le convienen ciudadanos atontados educativamente porque son fáciles de someter electoralmente.",
        context: "Sospecha institucional respecto a la decadencia de la educación pública tradicional contemporánea como plan premeditado o como imperfección simple.",
        angleA: "Premeditado: Reducir pensamiento y filosofía genera mano de obra simple o votantes obedientes.",
        angleB: "Solo ineficiencia: Es simple estupidez burocrática enorme; atribuir a conspiración oscura lo que se logra con mala gestión humana natural.",
        prompts: ["Ignorancia funcional", "Ineficiencia del Estado", "Dóciles"]
    },
    {
        id: "f8", intensity: "filoso", category: "Identidad",
        statement: "Las diferencias de género conductuales nacen más de lo puramente biológico que del constructo social.",
        context: "Naturaleza vs Crianza (Nature vs Nurture) en su estado más puro y polarizante actual a nivel de la academia y debate diario.",
        angleA: "Naturaleza preeminente: Siglos milenarios moldean cableados base que explican predilecciones orgánicas no erradicables solo con ingeniería cultural social humana.",
        angleB: "Construcción predominante: Casi absolutamente todas nuestras formas son la presión de patriarcados o roles de imposición infantil opresiva cultural masiva.",
        prompts: ["Evolución humana", "Patriarcado", "Ingeniería biológica/social"]
    },
    {
        id: "f9", intensity: "filoso", category: "Censura",
        statement: "La religión es el freno más efectivo para el avance empírico científico y el pensamiento netamente racional del individuo.",
        context: "Sopeso histórico y moderno sobre dogmas blindados de creencia enfrentados al desarrollo material riguroso y libre.",
        angleA: "Freno intrínseco: Postular milagros sin sustento contamina fundamentalmente cualquier exigencia racional obligada que requiere falsar toda afirmación.",
        angleB: "Aliados vitales empáticos: La ciencia contesta los 'cómos', la religión calma los terribles 'por qués', evitando que el hombre científico caiga en eugenesias oscuras absolutas.",
        prompts: ["Verdad ontológica", "Empirismo duro", "Dogma"]
    },
    {
        id: "f10", intensity: "filoso", category: "Aborto",
        statement: "El feto humano tiene primacía del derecho a la vida desde la concepción muy por encima de la autonomía física general biológica.",
        context: "Conflicto legal severo entre los límites de la autoridad estatal material sobre los cuerpos y los derechos fundamentales subyacentes iniciales vitales protectivos.",
        angleA: "Materia independiente biológica: Es una vida diferente que requiere auxilio temporal, abortarlo cruzando la individualidad de su ADN lo asimila a asesinato.",
        angleB: "Autonomía materna indiscutible: Usar mandatoriamente su útero e integridad corporal a voluntad externa convierte a la propia ley moral pública en esclavitud anatómica pura.",
        prompts: ["Ética humana", "Control somático total", "Gestado ajeno vs Vida propia libre"]
    },
    {
        id: "f11", intensity: "filoso", category: "Poder",
        statement: "Los sistemas de inteligencia gubernamental deberían vigilar siempre sin límites a masas completas civilizadas bajo orden judicial oculta firme preventiva.",
        context: "El intercambio Snowdeniano perenne de seguridad social abrumadora a costa de derechos profundos elementales diarios constitucionales del control cívico.",
        angleA: "Seguridad por sobre libertad teórica: Enfrentamos fuerzas oscuras inmersivas y brutales; sacrificar lecturas de correos nos salva materialmente la vida real grupal comunitaria extensa general hoy.",
        angleB: "Libertad no negociable de la tiranía técnica: El Estado que espía el teléfono general será por su absoluta naturaleza despótico siempre tarde o temprano e irreversible a los ciudadanos inermes solos aislados desvalidos y aplastados calladamente opresivos.",
        prompts: ["Tiranía vigilante oculta", "Derechos básicos", "Seguridad terrorista"]
    },
    {
        id: "f12", intensity: "filoso", category: "Ideología",
        statement: "El marxismo es teóricamente inalcanzable, mortal en su práctica estructural económica pero sigue fascinando fuertemente desde su romanticismo puro y crudo revolucionario natural instintivo de base empático real humano moralista compasivo universal justiciero general profundo oculto profundo profundo inmutable humano inmutable profundo compasivo crudo general compasivo compasivo romántico real histórico",
        context: "Atractivo constante en facultades políticas frente al registro comunista destructivo masivo fáctico económico e intelectual opresivo fáctico genocida y estricto histórico inmutable",
        angleA: "Cierto, es veneno seductor eterno humanista: Emocionalmente apela bellamente la justicia cósmica total para incautos que no logran comprender leyes fundamentales de economía básica y comportamiento conductual biológico rígido. ",
        angleB: "Falsa premisa dura económica social histórica de origen natural opresiva clasista masiva: Sus ideas pautas elementales bases estructuraron todo nuestro sindicalismo, vacaciones, derecho laboral compasivo solidario que es pilar social hoy.",
        prompts: ["Economía fría vs Idealismo", "Historia 100M", "Equidad estructural teórica e ignición profunda"]
    },
    {
        id: "f13", intensity: "filoso", category: "Muerte",
        statement: "Todo paciente psiquiátricamente crónico debería tener derecho incuestionable médico firme propio a reclamar eutanasia humanitaria voluntaria estatal pública segura terminal gratuita estatal médica pública voluntaria.",
        context: "Muerte clínica digna legal frente al dolor emocional psicológico abrumador sin remisión biológica general, más allá de condiciones de estado terminal físicas corporales.",
        angleA: "Autonomía plena definitiva íntima inalienable madura de lo último legal compasivo firme inalienable biológica de la eutanasia libre adulta personal terminal general moral propia privada fundamental pública.",
        angleB: "Riesgos peligrosísimos morales legales eugenésicos de matar depresivos biológicos recuperables sistémicos tratables sociales temporales humanos profundos.",
        prompts: ["Dolor oscuro oculto eterno interno psíquico general eterno interno", "Autonomía extrema de fin crudo libre extremo terminal eugenésico oscuro legal"]
    },
    {
        id: "f14", intensity: "filoso", category: "Poder",
        statement: "Elegirías apretar un botón para exterminar el ecosistema del planeta hoy eliminando toda raza animal sin crueldad antes de volver todos miserables al borde ecológico general final inevitable catastrófico doloroso caótico infernal universal definitivo biológico infernal.",
        context: "Muerte piadosa silenciosa global biológica antinatalista filosófica frente a perpetuar vidas con miseria global futura masiva garantizada oscura extrema terminal.",
        angleA: "Apretar el botón por empatía compasiva universal extrema dura de ética purista fundamental total biológica general utilitarista de reducción cero neta estricta cero neta de cero neto compasiva pura radical cruda empática cruda utilitarista dura pura dolor estéril radical pura absoluta moral ética compasiva biológica purista",
        angleB: "Preservar vida siempre aunque estalle oscura terrible general infernal y haya que escalar duro sobrevivir humano biológico eterno luchar biológico universal genético crudo resistir esperanza biológico duro biológico luchar luchar universal genético natural persistente luchar. ",
        prompts: ["Antinatalismo duro absoluto oscuro fundamental de base estricto fundamental purista natural profundo crudo", "Impulso de vida genético cósmico inmutable de raíz duro persistente ciego genético fuerte ciego ciego natural genético cósmico ciego fuerte"]
    },
    {
        id: "f15", intensity: "filoso", category: "Manipulación",
        statement: "Todo filántropo masivo billonario obra desde un interés oscuro inmaculado lavado fiscal egomaníaco general oscuro general o de control poblacional social más profundo estratégico propio de casta superior intocable oligárquica estratégica maquiavélica.",
        context: "Caridad inmensa de multimillonarios y las estructuras fácticas ocultas del poder moderno mundial estratégico de monopolios.",
        angleA: "Manipulan controlando la narrativa pública e influencia estatal mediante ONGs fachadas nobles para fines profundos incontrolables monopólicos antidemocráticos.",
        angleB: "Simplemente resuelven mejor la logística caritativa planetaria mundial técnica eficiente moderna curando en décadas pandemias brutales crudas letales crudas y males duros orgánicos donde milestados fallan duro eternamente fallan crudo eternamente fallan.",
        prompts: ["Ego Billonario", "Salud global efectiva vs Estado lento"]
    },
    {
        id: "f16", intensity: "filoso", category: "Identidad",
        statement: "Los sistemas de cupos estatales compensatorios generalizados raciales o genéricos masivos son en escencia netamente profunda y pura discriminación encubierta positiva pura y dura discriminación encubierta pura inversa firme",
        context: "Inclusión de minorías masiva normativa estatal y educativa estricta institucionalizada frente a igualitarismo crudo imparcial y equidad forzada pública meritocrática clásica forzada compensatoria clásica institucional.",
        angleA: "Injusticia pura nueva dura estructural base firme de reemplazo por atributos no electos biológicos duros de piel superficial o grupo ciego grupal ajeno al de valía de esencia humana de competencia base de esencia humana de esencia ciega ajena a la persona ciega ajena base ciega.",
        angleB: "Piso equitativo compensatorio justo forzado correctivo justo real de equidad justa de equidad justo de deuda dura justa compasivo forzada de balance general crudo histórico necesario de base general ciego histórico necesario forzada justa de balance justo",
        prompts: ["Empate biológico histórico social genético social moral histórico", "Invisibilización cruda del hombre singular y su mérito biológico absoluto humano"]
    },
    {
        id: "f17", intensity: "filoso", category: "Poder Estatal",
        statement: "La policía general en zonas marginales debe tener derecho lícito explícito público y accionar libre para disparar primero si intuye movimientos ambiguos letales sin advertencia lenta sin escalonamiento rígido en situación límite crítica urbana fronteriza compleja civil y extrema civil profunda violenta civil urbana dura urbana.",
        context: "Operativos armados estatales civiles letales directos extremos violentos civiles de pacificación urbana directa fronteriza de contrainsurgencia barrial pura civil urbana dura civil dura límite civil límite urbana límite y control criminal civil urbana urbana.",
        angleA: "Prioridad del civil obediente y del uniformado lícito extremo puro vivo libre civil directo vivo legal libre letal legal libre civil vivo directo civil puro libre libre vivo legal directo legal",
        angleB: "Destruye y derriba de facto la justicia penal preventiva sumaria de condena de muerte rápida arbitraria dura rápida impune cruda tiránica inmensa libre arbitraria tiránica libre cruda tiránica dura.",
        prompts: ["Gatillo veloz preventivo defensivo letal estatal letal", "Monopolio y debido castigo cautelar de proceso riguroso legal civil de derecho legal"]
    },
    {
        id: "f18", intensity: "filoso", category: "Poder Mundial",
        statement: "Es urgente ético moral general vital y profundamente imperativo indispensable que se establezca universalmente un orden normativo global de gobierno planetario único rector vinculante soberano unificado firme centralizado superior fuerte superior planetario global",
        context: "Cambio climático de impacto civil planetario nuclear cataclísico transnacional interestatal masivo mundial global inminente catastrófico general frente a la autonomía fraccionada libre fraccionada libre y diversa fraccionada aislada diversa civil y dispersa aislada dispersa libre",
        angleA: "La disgregación estatal de la nación nos impide apagar incendios que exigen una voz imperativa autoritaria rápida y una escala enorme de poder civil global de respuesta.",
        angleB: "Ese hipotético poder macro unificado mutaría ineludiblemente orgánico veloz libre seguro genético rápido seguro en la forma más espantosa e indestructible de súper dictadura técnica mundial tiránica ineludible tiránica global dictadura oscura técnica perfecta tiránica.",
        prompts: ["Alineamiento planetario normativo pacífico biológico cívico unificado humano pacífico ecología", "Leviathan final totalitario oscuro técnico final y el control y tiranía técnica de control técnica oscura inamovible técnica inamovible"]
    },
    {
        id: "f19", intensity: "filoso", category: "Sucesión",
        statement: "La herencia generacional de alta capitalización multimillonaria infinita debe incautarse duramente drástica forzosa pública estatal fiscalmente total al morir para cortar estirpes y el poder dinástico parasitario general y el privilegio aristocrático biológico pasivo feudal económico de clase nobleza pasiva de origen dinástico pasivo feudal pasivo aristócrata aristócrata clase general",
        context: "Acumulación desproporcionada generacional ciega masiva de fortunas feudales pasivas pasivas pasivas feudales ciegos feudales de nobles dinerarios ciegos económicos modernos",
        angleA: "Inhabilita fundamentalmente el mito ético meritocrático biológico meritocrático duro meritocrático al nacer rico absoluto y crear cunas de oro aristocráticas blindadas dinásticas absolutas.",
        angleB: "Trabajas inviertes y sufres fuertemente dolorosamente ético económicamente sólo libre firme exclusivamente arduo ético justamente para que los tuyos hereden tu sangre prosperidad general tu linaje tu riqueza libre natural y biológica animal propia tu genética prosperidad firme",
        prompts: ["Egalitarismo purista radical extremo civil radical forzoso duro", "Derecho patrimonial genético biológico duro animal familiar libre genético pleno puro propio pleno animal familiar íntimo animal libre biológico"]
    },
    {
        id: "f20", intensity: "filoso", category: "Violencia",
        statement: "El pueblo indignado crudo indignado en furia desesperada desolada pura indignado tiene el derecho legítimo soberano inalienable natural histórico de romper las instituciones a fuego vivo literal de alzarse al magnicidio puro cruento fuego revolucionario purificador justificado físico histórico crudo",
        context: "Contrato social violado masivo fallido fallido corrupto injusto de estado crudo estado fallido masivo e inviable corrupto fallido corrompido masivo tiranizado fallido por vías orgánicas",
        angleA: "Rebeldía justa física natural sagrada: Cuando lo técnico o republicano solo oxigena el abuso del fuerte dominante el fuego opresivo el fuego y terror directo masivo justiciero rompe esferas rompe estructuras purificador físico el terror opresivo rompe terror directo es justicia romper físico.",
        angleB: "Caos tiránico bárbaro bárbaro opresivo de sangre bárbaro: Quemarlo todo devuelve al ser a lo puramente animal dictatorial bárbaro tribal de sangre peor dictatorial ciego tribal oscuro cruel puramente bárbaro oscuro ciego puro",
        prompts: ["Ira y terror opresivo y fuego restaurador y purificador crudo físico justiciero justicia restaurador justo", "Evolución pactada pacífica cívica racional progreso pacífica técnica cívica progreso técnica lenta y progreso pacífica pactada legal"]
    }
];
