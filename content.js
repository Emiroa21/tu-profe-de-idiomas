/* ===== Contenido del curso ===== */
const LEVELS = ['A1','A2','B1','B2','C1','C2'];
const LEVEL_NAMES = {A1:'Principiante',A2:'Elemental',B1:'Intermedio',B2:'Intermedio alto',C1:'Avanzado',C2:'Maestría'};
const LANGS = {
  en:{name:'Inglés', target:'inglés', cert:'Cambridge (FCE, CAE, CPE)', flag:'EN'},
  fr:{name:'Francés', target:'francés', cert:'DELF / DALF', flag:'FR'},
  pt:{name:'Portugués', target:'portugués', cert:'CELPE-Bras', flag:'PT'},
  it:{name:'Italiano', target:'italiano', cert:'CILS / CELI', flag:'IT'},
  de:{name:'Alemán', target:'alemán', cert:'Goethe-Zertifikat', flag:'DE'}
};
const GOALS = [
  {id:'fce', label:'Aprobar el FCE (B2 First)', target:'B2', en:true},
  {id:'cae', label:'Aprobar el CAE (C1 Advanced)', target:'C1', en:true},
  {id:'cpe', label:'Aprobar el CPE (C2 Proficiency)', target:'C2', en:true},
  {id:'work', label:'Usarlo en el trabajo', target:'B2'},
  {id:'travel', label:'Viajar y conversar', target:'B1'},
  {id:'study', label:'Estudiar en el extranjero', target:'C1'},
  {id:'master', label:'Dominarlo por completo', target:'C2'}
];

const TOPICS = {
  en: {
    A1:['Saludos y presentaciones','El verbo "to be"','Números, fechas y la hora','Tu rutina diaria (presente simple)'],
    A2:['El pasado simple','Comparativos y superlativos','Planes futuros: going to y will','Preposiciones de tiempo: at, on, in'],
    B1:['Presente perfecto vs. pasado simple','Mails y comunicación en el trabajo','Condicionales 0, 1 y 2','La voz pasiva'],
    B2:['Tercer condicional y mixtos','Estilo indirecto','Phrasal verbs esenciales','Conectores y cohesión (Writing FCE)'],
    C1:['Inversión para dar énfasis','Collocations avanzadas','Cleft sentences','Hedging y lenguaje académico'],
    C2:['Modales en pasado y deducción','Idioms y lenguaje figurado','Nominalización y registro','Elipsis y sustitución']
  },
  gen: {
    A1:['Saludos y presentaciones','Verbos básicos en presente','Números, fechas y la hora','Tu rutina diaria'],
    A2:['Hablar del pasado','Comparaciones','Planes para el futuro','Lugares y preposiciones'],
    B1:['Experiencias y tiempos compuestos','Mails y comunicación en el trabajo','Condiciones e hipótesis','Dar y defender opiniones'],
    B2:['Hipótesis sobre el pasado','Estilo indirecto','Expresiones idiomáticas frecuentes','Conectores y cohesión'],
    C1:['Registro formal e informal','Colocaciones avanzadas','Estructuras de énfasis','Lenguaje académico'],
    C2:['Matices de modalidad','Lenguaje figurado','Estilo y registro literario','Cultura, humor e ironía']
  }
};

/* Lecciones integradas de inglés. q: s = frase con ___, o = opciones, a = índice correcto, e = regla.
   Tipo fill: ans = respuestas aceptadas. */
const LESSONS_EN = {
 'A1-0':{min:10,icon:'chat',intro:'Las primeras palabras de cualquier conversación: saludar, decir quién eres y preguntar por la otra persona.',
  sections:[
   {h:'Saludar',p:'"Hello" sirve en cualquier situación; "Hi" es más informal. Según la hora: "Good morning" (hasta mediodía), "Good afternoon" (tarde) y "Good evening" (desde que oscurece). "Good night" solo se usa para despedirse antes de dormir.'},
   {h:'Presentarte',p:'Usa "I\'m + nombre" o "My name is + nombre". Para tu origen: "I\'m from Mexico". Para tu trabajo: "I\'m a designer" (con "a/an" delante de la profesión).'},
   {h:'Preguntar',p:'"What\'s your name?", "Where are you from?" y "How are you?". Al conocer a alguien se responde "Nice to meet you", y la otra persona contesta "Nice to meet you too".'}],
  examples:[['Hi, I\'m Laura. I\'m from Bogotá.','Hola, soy Laura. Soy de Bogotá.'],['Nice to meet you, Laura.','Encantado de conocerte, Laura.'],['I\'m an engineer.','Soy ingeniero.']],
  tip:'En inglés la profesión siempre lleva artículo: "I\'m a teacher", nunca "I\'m teacher".',
  questions:[
   {s:'___ to meet you.',o:['Nice','Good','Fine','Well'],a:0,e:'"Nice to meet you" es una expresión fija para cuando conoces a alguien.'},
   {type:'fill',s:'Where ___ you from?',ans:['are'],e:'Con "you" el verbo "to be" es "are": "Where are you from?".'}],
  vocab:[['greeting','saludo'],['nice to meet you','encantado de conocerte'],['surname','apellido'],['job','trabajo']]},
 'A1-1':{min:10,icon:'book',intro:'"To be" significa ser y estar a la vez. Es el verbo más usado del inglés.',
  sections:[
   {h:'Afirmativo',p:'I am (I\'m), you are (you\'re), he/she/it is (he\'s), we/they are (we\'re). Las contracciones son lo normal al hablar.'},
   {h:'Negativo',p:'Añade "not": I\'m not, you aren\'t, she isn\'t, they aren\'t.'},
   {h:'Preguntas',p:'Invierte el orden: "Are you tired?", "Is he at home?". Respuestas cortas: "Yes, I am." / "No, he isn\'t."'}],
  examples:[['She is a doctor.','Ella es doctora.'],['We aren\'t at the office.','No estamos en la oficina.'],['Is it cold today?','¿Hace frío hoy?']],
  tip:'En respuestas cortas afirmativas no se contrae: "Yes, I am", nunca "Yes, I\'m".',
  questions:[
   {s:'She ___ a teacher.',o:['am','is','are','be'],a:1,e:'Con he, she e it se usa "is".'},
   {type:'fill',s:'They ___ not at home.',ans:['are'],e:'Con "they" el verbo es "are".'}],
  vocab:[['tired','cansado'],['at home','en casa'],['busy','ocupado'],['ready','listo']]},
 'A1-2':{min:12,icon:'clock',intro:'Números, fechas y horas aparecen en cualquier situación real: citas, viajes, compras.',
  sections:[
   {h:'Números ordinales para fechas',p:'Las fechas usan ordinales: first (1st), second (2nd), third (3rd), fourth (4th)... Se dice "the fifth of May" o "May the fifth".'},
   {h:'La hora',p:'"What time is it?" — "It\'s three o\'clock" (3:00), "It\'s half past three" (3:30), "It\'s quarter past three" (3:15), "It\'s quarter to four" (3:45).'},
   {h:'Preposiciones básicas',p:'"on" con fechas ("on the 12th of March") y "at" con horas ("at 7 o\'clock").'}],
  examples:[['My birthday is on the 3rd of June.','Mi cumpleaños es el 3 de junio.'],['The class starts at half past six.','La clase empieza a las seis y media.']],
  tip:'Para 3:45 también puedes decir simplemente "three forty-five".',
  questions:[
   {s:'It\'s 3:30. It\'s ___ past three.',o:['half','quarter','thirty','middle'],a:0,e:'"Half past" significa "y media".'},
   {s:'My birthday is ___ the 12th of March.',o:['in','at','on','to'],a:2,e:'Con fechas concretas se usa "on".'}],
  vocab:[['o\'clock','en punto'],['quarter','cuarto'],['birthday','cumpleaños'],['appointment','cita']]},
 'A1-3':{min:12,icon:'sun',intro:'El presente simple describe hábitos y rutinas: lo que haces normalmente.',
  sections:[
   {h:'La regla de la -s',p:'Con he, she e it el verbo lleva -s: "I work" → "she works". Verbos en -ch, -sh, -o añaden -es: "watches", "goes".'},
   {h:'Preguntas y negativas',p:'Usa el auxiliar "do/does": "Do you work on Saturdays?", "Does she drink coffee?". Negativa: "I don\'t", "he doesn\'t". Con "does" el verbo pierde la -s.'},
   {h:'Adverbios de frecuencia',p:'always, usually, often, sometimes, never. Van antes del verbo principal: "I usually get up at 7".'}],
  examples:[['He gets up at seven.','Él se levanta a las siete.'],['Does she work from home?','¿Ella trabaja desde casa?'],['I never eat breakfast.','Nunca desayuno.']],
  tip:'Error típico: "Does he works?". Con "does" el verbo va en forma base: "Does he work?".',
  questions:[
   {s:'He ___ coffee every morning.',o:['drink','drinks','drinking','is drink'],a:1,e:'Tercera persona del singular en presente simple: verbo + s.'},
   {type:'fill',s:'___ you work on Saturdays?',ans:['do'],e:'Para preguntar en presente simple con "you" se usa el auxiliar "Do".'}],
  vocab:[['get up','levantarse'],['commute','trayecto al trabajo'],['usually','normalmente'],['chores','tareas de la casa']]},
 'A2-0':{min:12,icon:'book',intro:'El pasado simple cuenta acciones terminadas en un momento concreto.',
  sections:[
   {h:'Verbos regulares',p:'Añaden -ed: work → worked, play → played, study → studied.'},
   {h:'Verbos irregulares',p:'Tienen forma propia y hay que memorizarlos: go → went, see → saw, buy → bought, have → had.'},
   {h:'Negativas y preguntas',p:'Con "did" y el verbo en forma base: "I didn\'t see it", "Did you go?". Nunca "didn\'t saw".'}],
  examples:[['We went to Lisbon last year.','Fuimos a Lisboa el año pasado.'],['Did you call the client?','¿Llamaste al cliente?'],['She didn\'t buy anything.','Ella no compró nada.']],
  tip:'Marcadores típicos: yesterday, last week, two days ago, in 2019.',
  questions:[
   {s:'We ___ to the beach last summer.',o:['go','went','gone','goed'],a:1,e:'"Go" es irregular: su pasado es "went".'},
   {type:'fill',s:'She didn\'t ___ the email. (see)',ans:['see'],e:'Después de "didn\'t" el verbo va en forma base.'}],
  vocab:[['last year','el año pasado'],['ago','hace (tiempo)'],['trip','viaje'],['bought','compró']]},
 'A2-1':{min:12,icon:'scale',intro:'Para comparar cosas y destacar la mejor o la peor.',
  sections:[
   {h:'Comparativos',p:'Adjetivos cortos: + -er + than ("cheaper than"). Adjetivos largos: more + adjetivo + than ("more expensive than").'},
   {h:'Superlativos',p:'Cortos: the + -est ("the cheapest"). Largos: the most + adjetivo ("the most expensive").'},
   {h:'Irregulares',p:'good → better → the best; bad → worse → the worst; far → further → the furthest.'}],
  examples:[['This phone is cheaper than that one.','Este móvil es más barato que ese.'],['It\'s the best day of my life.','Es el mejor día de mi vida.']],
  tip:'Adjetivos de dos sílabas en -y cambian a -ier: easy → easier → the easiest.',
  questions:[
   {s:'This hotel is ___ than the other one.',o:['more cheap','cheaper','cheapest','most cheap'],a:1,e:'"Cheap" es corto: comparativo con -er.'},
   {type:'fill',s:'It\'s the ___ day of my life. (good)',ans:['best'],e:'"Good" es irregular: good → better → the best.'}],
  vocab:[['cheap','barato'],['expensive','caro'],['worse','peor'],['crowded','lleno de gente']]},
 'A2-2':{min:12,icon:'calendar',intro:'Inglés tiene varias formas de hablar del futuro, cada una con su uso.',
  sections:[
   {h:'Going to',p:'Planes ya decididos ("I\'m going to study tonight") y predicciones con evidencia ("Look at those clouds! It\'s going to rain").'},
   {h:'Will',p:'Decisiones en el momento ("The phone is ringing. I\'ll get it!"), promesas y predicciones sin evidencia ("I think she\'ll win").'},
   {h:'Presente continuo',p:'Citas organizadas con hora y lugar: "I\'m meeting Ana at 5".'}],
  examples:[['I\'m going to start a new course.','Voy a empezar un curso nuevo.'],['I\'ll help you with that.','Te ayudo con eso.']],
  tip:'Si ya lo decidiste antes de hablar, usa "going to". Si lo decides al hablar, "will".',
  questions:[
   {s:'Look at those clouds! It ___ rain.',o:['will','is going to','goes to','rains'],a:1,e:'Predicción con evidencia visible: "going to".'},
   {s:'The phone is ringing. I ___ get it!',o:['\'ll','am going to','get','am getting'],a:0,e:'Decisión tomada en ese mismo momento: "will".'}],
  vocab:[['plan','plan'],['arrangement','cita acordada'],['promise','promesa'],['forecast','pronóstico']]},
 'A2-3':{min:10,icon:'calendar',intro:'"At", "on" e "in" son las preposiciones de tiempo que más errores causan.',
  sections:[
   {h:'At',p:'Horas y momentos puntuales: at 9 o\'clock, at noon, at night, at the weekend (británico).'},
   {h:'On',p:'Días y fechas específicas: on Monday, on the 5th of May, on my birthday.'},
   {h:'In',p:'Periodos largos: in May, in 2025, in summer, in the morning.'}],
  examples:[['I\'ll send you the report on Monday.','Te envío el informe el lunes.'],['The meeting starts at 9.','La reunión empieza a las 9.'],['She was born in 1998.','Ella nació en 1998.']],
  tip:'Regla visual: in (grande) > on (mediano) > at (punto exacto).',
  questions:[
   {s:'I\'ll send you the report ___ Monday.',o:['at','on','in','to'],a:1,e:'Se usa "on" para días específicos.'},
   {s:'The meeting starts ___ 9 o\'clock.',o:['in','on','at','by'],a:2,e:'Con horas exactas se usa "at".'}],
  vocab:[['weekend','fin de semana'],['deadline','fecha límite'],['noon','mediodía'],['schedule','agenda']]},
 'B1-0':{min:14,icon:'book',intro:'La diferencia entre "I have done" y "I did" depende de si el tiempo está terminado o no.',
  sections:[
   {h:'Presente perfecto',p:'have/has + participio. Para experiencias sin momento concreto ("I have been to Japan"), acciones que llegan al presente ("She has worked here since 2019") y resultados recientes ("I\'ve lost my keys").'},
   {h:'Pasado simple',p:'Para un momento terminado y concreto: "I went to Japan in 2018". Si dices cuándo, usa pasado simple.'},
   {h:'For y since',p:'"for" + duración (for three years); "since" + punto de inicio (since 2019, since Monday).'}],
  examples:[['Have you ever tried sushi?','¿Alguna vez has probado el sushi?'],['I haven\'t finished yet.','Todavía no he terminado.'],['We met in 2020.','Nos conocimos en 2020.']],
  tip:'Nunca uses presente perfecto con "yesterday" o "last week".',
  questions:[
   {s:'I ___ to Japan twice.',o:['have been','went','was','have gone'],a:0,e:'Experiencia sin momento concreto: presente perfecto. "Been" indica que fuiste y volviste.'},
   {s:'She ___ here since 2019.',o:['has worked','worked','works','is working'],a:0,e:'Acción que empezó en el pasado y sigue ahora, con "since": presente perfecto.'}],
  vocab:[['ever','alguna vez'],['already','ya'],['yet','todavía / ya (preguntas)'],['since','desde']]},
 'B1-1':{min:12,icon:'mail',intro:'Escribir correos profesionales claros es una de las habilidades más útiles del inglés laboral.',
  sections:[
   {h:'Saludo y propósito',p:'Formal: "Dear Ms Taylor,". Semiformal: "Hi Tom,". Explica el motivo en la primera línea: "I\'m writing to ask about...", "I\'m writing regarding...".'},
   {h:'Peticiones educadas',p:'"Could you send me...?", "Would it be possible to...?", "I\'d appreciate it if you could...". Evita el imperativo directo.'},
   {h:'Adjuntos y cierre',p:'"Please find attached the report." Cierre: "I look forward to hearing from you." Despedida: "Best regards," o "Kind regards,".'}],
  examples:[['I\'m writing to confirm our meeting on Thursday.','Le escribo para confirmar nuestra reunión del jueves.'],['Could you let me know by Friday?','¿Podría avisarme antes del viernes?'],['Please find attached the updated report.','Adjunto el informe actualizado.']],
  tip:'"Look forward to" va seguido de -ing: "I look forward to hearing from you".',
  questions:[
   {s:'Please find ___ the updated report.',o:['attached','attach','attaching','enclosed in'],a:0,e:'La fórmula fija es "Please find attached...".'},
   {s:'I look forward to ___ from you.',o:['hear','hearing','heard','to hear'],a:1,e:'En "look forward to", "to" es preposición, así que va seguido de -ing.'}],
  vocab:[['attachment','archivo adjunto'],['regarding','en relación con'],['follow up','dar seguimiento'],['kind regards','saludos cordiales']]},
 'B1-2':{min:14,icon:'branch',intro:'Los condicionales expresan qué pasa (o pasaría) si se cumple una condición.',
  sections:[
   {h:'Condicional 0',p:'Verdades generales: If + presente, presente. "If you heat ice, it melts."'},
   {h:'Condicional 1',p:'Situaciones reales y probables: If + presente, will + verbo. "If it rains, we\'ll stay at home."'},
   {h:'Condicional 2',p:'Situaciones imaginarias en el presente: If + pasado, would + verbo. "If I had more time, I would learn Italian." Con "to be" se prefiere "were": "If I were you...".'}],
  examples:[['If I see her, I\'ll tell her.','Si la veo, se lo diré.'],['If I were you, I\'d accept the offer.','Yo que tú, aceptaría la oferta.']],
  tip:'Nunca pongas "will" o "would" en la parte del "if".',
  questions:[
   {s:'If I ___ more time, I would learn Italian.',o:['have','had','will have','would have'],a:1,e:'Condicional 2: if + pasado simple, would + verbo.'},
   {s:'If it rains, we ___ at home.',o:['stay','will stay','would stay','stayed'],a:1,e:'Condicional 1: if + presente, will + verbo.'}],
  vocab:[['unless','a menos que'],['as long as','siempre que'],['offer','oferta'],['otherwise','de lo contrario']]},
 'B1-3':{min:12,icon:'cog',intro:'La voz pasiva pone el foco en la acción o en quien la recibe, no en quien la hace.',
  sections:[
   {h:'Estructura',p:'be (en el tiempo necesario) + participio: "is written", "was built", "has been sent", "will be delivered".'},
   {h:'Cuándo usarla',p:'Cuando quién lo hizo no importa o es obvio: "My car was stolen". Es muy común en informes y textos formales.'},
   {h:'By',p:'Si quieres decir quién lo hizo, usa "by": "The report was written by the manager".'}],
  examples:[['English is spoken all over the world.','El inglés se habla en todo el mundo.'],['The package will be delivered tomorrow.','El paquete se entregará mañana.']],
  tip:'Muchas frases con "se" en español se traducen con pasiva: "Se construyó en 1900" → "It was built in 1900".',
  questions:[
   {s:'The report ___ by the manager yesterday.',o:['wrote','was written','is written','has written'],a:1,e:'Pasiva en pasado simple: was/were + participio.'},
   {type:'fill',s:'English is ___ all over the world. (speak)',ans:['spoken'],e:'El participio de "speak" es "spoken".'}],
  vocab:[['deliver','entregar'],['build / built','construir / construido'],['launch','lanzar'],['approve','aprobar']]},
 'B2-0':{min:14,icon:'branch',intro:'El tercer condicional habla de un pasado que no ocurrió; los mixtos conectan pasado y presente.',
  sections:[
   {h:'Tercer condicional',p:'If + had + participio, would have + participio. "If she had left earlier, she would have caught the train." (No salió antes, perdió el tren.)'},
   {h:'Mixto: pasado → presente',p:'If + had + participio, would + verbo. "If I had studied medicine, I would be a doctor now."'},
   {h:'Mixto: presente → pasado',p:'If + pasado, would have + participio. "If I weren\'t so shy, I would have spoken to her."'}],
  examples:[['If we had booked earlier, we would have saved money.','Si hubiéramos reservado antes, habríamos ahorrado dinero.'],['If I had taken the job, I would live in London now.','Si hubiera aceptado el trabajo, ahora viviría en Londres.']],
  tip:'En el FCE es común la inversión: "Had I known, I would have come" = "If I had known...".',
  questions:[
   {s:'If she had left earlier, she ___ the train.',o:['would catch','would have caught','had caught','will catch'],a:1,e:'Tercer condicional: would have + participio.'},
   {s:'If I had studied medicine, I ___ a doctor now.',o:['would be','would have been','am','had been'],a:0,e:'Mixto: condición en el pasado, resultado en el presente ("now"): would + verbo.'}],
  vocab:[['regret','arrepentirse'],['book','reservar'],['miss','perder (un transporte)'],['in hindsight','en retrospectiva']]},
 'B2-1':{min:14,icon:'quote',intro:'El estilo indirecto sirve para contar lo que otra persona dijo o preguntó.',
  sections:[
   {h:'Cambio de tiempos',p:'Cuando el verbo introductorio está en pasado, el tiempo retrocede: "I am tired" → She said she was tired; "I will call" → He said he would call.'},
   {h:'Say vs. tell',p:'"Tell" necesita persona: "She told me that...". "Say" no: "She said that...".'},
   {h:'Preguntas indirectas',p:'Orden de frase afirmativa y sin auxiliar "do": "Where do you live?" → He asked me where I lived. Sí/no: "if/whether".'}],
  examples:[['She told me she was leaving.','Me dijo que se iba.'],['He asked if I had finished.','Me preguntó si había terminado.']],
  tip:'Cambian también expresiones de tiempo: tomorrow → the next day, here → there.',
  questions:[
   {s:'She told me that she ___ tired.',o:['is','was','has','be'],a:1,e:'Con verbo introductorio en pasado, el presente pasa a pasado: "was".'},
   {s:'He asked me where ___.',o:['did I live','I lived','do I live','I live'],a:1,e:'Pregunta indirecta: orden afirmativo y retroceso de tiempo.'}],
  vocab:[['claim','afirmar'],['deny','negar'],['whether','si (condicional)'],['admit','admitir']]},
 'B2-2':{min:12,icon:'puzzle',intro:'Los phrasal verbs son esenciales en el FCE y en el inglés de todos los días.',
  sections:[
   {h:'Qué son',p:'Verbo + partícula con un significado nuevo: "put off" = posponer, "turn down" = rechazar, "carry out" = llevar a cabo.'},
   {h:'Los más útiles',p:'come up with (idear), run out of (quedarse sin), look into (investigar), get over (superar), set up (montar), take on (asumir).'},
   {h:'Separables',p:'Muchos admiten el objeto en medio: "put the meeting off". Con pronombre es obligatorio: "put it off", nunca "put off it".'}],
  examples:[['We\'ve run out of milk.','Nos hemos quedado sin leche.'],['She came up with a great idea.','Se le ocurrió una gran idea.']],
  tip:'Aprende cada phrasal verb con una frase de ejemplo, no como palabra suelta.',
  questions:[
   {s:'We\'ve ___ milk. Can you buy some?',o:['run out of','run off','run over','run into'],a:0,e:'"Run out of" significa quedarse sin algo.'},
   {s:'They ___ the meeting until next week.',o:['put off','put on','put up','put out'],a:0,e:'"Put off" significa posponer.'}],
  vocab:[['put off','posponer'],['turn down','rechazar'],['carry out','llevar a cabo'],['come up with','idear']]},
 'B2-3':{min:14,icon:'link',intro:'Los conectores dan cohesión a tus textos y son clave en el Writing del FCE.',
  sections:[
   {h:'Contraste',p:'However (al inicio de frase, con coma), although + frase, despite / in spite of + sustantivo o -ing.'},
   {h:'Adición',p:'Moreover, furthermore, in addition, what is more.'},
   {h:'Causa y resultado',p:'Because of + sustantivo, due to, therefore, as a result, consequently.'}],
  examples:[['Despite the rain, we enjoyed the trip.','A pesar de la lluvia, disfrutamos el viaje.'],['The plan was expensive. However, it was approved.','El plan era caro. Sin embargo, se aprobó.']],
  tip:'"Despite" nunca lleva "of": "despite the rain", no "despite of".',
  questions:[
   {s:'___ the rain, we enjoyed the trip.',o:['Although','Despite','However','Even'],a:1,e:'"Despite" va seguido de sustantivo; "although" necesita una frase con verbo.'},
   {s:'The plan was expensive. ___, it was approved.',o:['However','Although','Despite','Because'],a:0,e:'"However" enlaza dos frases separadas y va seguido de coma.'}],
  vocab:[['moreover','además'],['therefore','por lo tanto'],['whereas','mientras que'],['nevertheless','no obstante']]},
 'C1-0':{min:14,icon:'swap',intro:'La inversión da un tono formal y enfático, y es muy evaluada en el CAE.',
  sections:[
   {h:'Adverbios negativos al inicio',p:'Never, rarely, seldom, little + auxiliar + sujeto: "Never have I seen such chaos."'},
   {h:'Estructuras fijas',p:'"Not only did he arrive late, but he also...", "No sooner had we sat down than...", "Hardly had I... when...".'},
   {h:'Only y not until',p:'"Only then did I understand", "Not until the end did I realise the truth".'}],
  examples:[['Rarely do we see such talent.','Pocas veces vemos tanto talento.'],['Not only is it cheap, but it\'s also fast.','No solo es barato, sino también rápido.']],
  tip:'"No sooner" va con "than"; "hardly/scarcely" van con "when".',
  questions:[
   {s:'Not only ___ late, but he also forgot the documents.',o:['he arrived','did he arrive','he did arrive','arrived he'],a:1,e:'Tras "Not only" al inicio: auxiliar + sujeto + verbo.'},
   {s:'No sooner had we sat down ___ the phone rang.',o:['when','than','that','then'],a:1,e:'"No sooner... than" es la pareja fija.'}],
  vocab:[['seldom','rara vez'],['scarcely','apenas'],['under no circumstances','bajo ninguna circunstancia'],['little did I know','poco sabía yo']]},
 'C1-1':{min:12,icon:'link',intro:'Las collocations son combinaciones de palabras que suenan naturales para un nativo.',
  sections:[
   {h:'Verbo + sustantivo',p:'do research, make progress, pay attention, reach an agreement, meet a deadline.'},
   {h:'Adverbio + adjetivo',p:'highly unlikely, bitterly disappointed, deeply concerned, fully aware, widely known.'},
   {h:'Adjetivo + sustantivo',p:'heavy rain, strong coffee, fierce competition, a sharp rise, a narrow escape.'}],
  examples:[['It\'s highly unlikely that they\'ll agree.','Es muy poco probable que acepten.'],['We need to meet the deadline.','Tenemos que cumplir el plazo.']],
  tip:'En Reading and Use of English Part 1 casi siempre se evalúan collocations.',
  questions:[
   {s:'It\'s ___ unlikely that they\'ll agree.',o:['highly','strongly','deeply','heavily'],a:0,e:'La collocation natural es "highly unlikely".'},
   {s:'Scientists ___ a lot of research on sleep.',o:['make','do','give','have'],a:1,e:'Con "research" se usa "do": "do research".'}],
  vocab:[['meet a deadline','cumplir un plazo'],['fierce competition','competencia feroz'],['bitterly','amargamente'],['narrow escape','salvarse por poco']]},
 'C1-2':{min:12,icon:'focus',intro:'Las cleft sentences dividen una frase en dos para destacar una parte.',
  sections:[
   {h:'It-cleft',p:'It + be + elemento destacado + who/that: "It was Sarah who found the mistake."'},
   {h:'Wh-cleft',p:'What + frase + be + elemento destacado: "What I need is a long holiday."'},
   {h:'All / The thing',p:'"All I want is some peace", "The thing that annoys me is the noise".'}],
  examples:[['What surprised me was his reaction.','Lo que me sorprendió fue su reacción.'],['It was in Paris that they met.','Fue en París donde se conocieron.']],
  tip:'Muy útil en key word transformations con palabras clave como WHAT o IT.',
  questions:[
   {s:'___ I need is a long holiday.',o:['What','That','Which','It'],a:0,e:'Wh-cleft: "What I need is...".'},
   {s:'It was Sarah ___ found the mistake.',o:['who','what','which','whose'],a:0,e:'It-cleft con persona: "who" (o "that").'}],
  vocab:[['emphasis','énfasis'],['highlight','destacar'],['annoy','molestar'],['reaction','reacción']]},
 'C1-3':{min:14,icon:'scale',intro:'El hedging suaviza afirmaciones. Es clave en textos académicos y en el Writing del CAE.',
  sections:[
   {h:'Verbos y modales',p:'may, might, could, tend to, appear to, seem to: "The results seem to suggest..."'},
   {h:'Estructuras impersonales',p:'"It would appear that...", "It is widely believed that...", "There is some evidence that..."'},
   {h:'Adverbios',p:'arguably, presumably, to some extent, relatively, in most cases.'}],
  examples:[['This is arguably the best solution.','Podría decirse que es la mejor solución.'],['Prices tend to rise in summer.','Los precios suelen subir en verano.']],
  tip:'Evita afirmaciones absolutas ("always", "proves") en ensayos.',
  questions:[
   {s:'The results ___ suggest a link between diet and sleep.',o:['would seem to','are sure to','must','certainly'],a:0,e:'"Would seem to" suaviza la afirmación: hedging típico académico.'},
   {s:'This is, ___, the best solution available.',o:['arguably','argue','arguing','argued'],a:0,e:'"Arguably" = se puede argumentar que...'}],
  vocab:[['arguably','podría decirse'],['presumably','presumiblemente'],['to some extent','hasta cierto punto'],['evidence','evidencia']]},
 'C2-0':{min:14,icon:'search',intro:'Los modales en pasado sirven para deducir, criticar y especular sobre lo que pasó.',
  sections:[
   {h:'Deducción',p:'must have + participio (seguro que sí), can\'t / couldn\'t have (seguro que no), might / may have (quizás).'},
   {h:'Crítica',p:'should have / ought to have + participio: "You should have told me".'},
   {h:'Needn\'t have vs. didn\'t need to',p:'"You needn\'t have brought an umbrella" = lo trajiste y no hacía falta. "I didn\'t need to bring one" = no hacía falta (probablemente no lo trajiste).'}],
  examples:[['She must have forgotten.','Seguro que se le olvidó.'],['He can\'t have seen us.','Es imposible que nos haya visto.']],
  tip:'Para negar una deducción en pasado: "can\'t have", nunca "mustn\'t have".',
  questions:[
   {s:'You ___ brought an umbrella; it didn\'t rain.',o:['needn\'t have','mustn\'t have','can\'t have','shouldn\'t'],a:0,e:'Lo trajiste y resultó innecesario: "needn\'t have" + participio.'},
   {s:'He ___ been at the office; I saw him at the gym.',o:['can\'t have','mustn\'t have','needn\'t have','shouldn\'t have'],a:0,e:'Deducción negativa con seguridad: "can\'t have".'}],
  vocab:[['deduce','deducir'],['speculate','especular'],['blame','culpar'],['ought to','debería']]},
 'C2-1':{min:12,icon:'spark',intro:'Las expresiones idiomáticas dan naturalidad y aparecen en el CPE.',
  sections:[
   {h:'Situaciones',p:'a blessing in disguise (un mal que trajo algo bueno), the last straw (la gota que colmó el vaso), once in a blue moon (muy de vez en cuando).'},
   {h:'Comportamiento',p:'beat around the bush (andarse con rodeos), cut corners (hacer algo mal para ahorrar), pull someone\'s leg (tomar el pelo).'},
   {h:'Uso',p:'Úsalas con moderación y en el registro adecuado: la mayoría son informales.'}],
  examples:[['Losing that job was a blessing in disguise.','Perder ese trabajo fue una bendición disfrazada.'],['Stop beating around the bush.','Deja de andarte con rodeos.']],
  tip:'En el CPE Writing, una o dos expresiones bien usadas suman; muchas restan.',
  questions:[
   {s:'Stop beating around the ___ and tell me.',o:['bush','tree','house','field'],a:0,e:'La expresión es "beat around the bush".'},
   {s:'Losing that job was a blessing in ___.',o:['disguise','secret','hiding','costume'],a:0,e:'"A blessing in disguise": algo malo que resultó bueno.'}],
  vocab:[['cut corners','hacer algo a la ligera'],['the last straw','la gota que colmó el vaso'],['pull someone\'s leg','tomar el pelo'],['once in a blue moon','muy de vez en cuando']]},
 'C2-2':{min:14,icon:'cog',intro:'Nominalizar es convertir verbos y adjetivos en sustantivos para lograr un registro formal.',
  sections:[
   {h:'De verbo a sustantivo',p:'"We decided to expand" → "The decision to expand...". "They introduced a new policy" → "The introduction of a new policy...".'},
   {h:'Sufijos frecuentes',p:'-tion, -ment, -ance/-ence, -ity, -ure, -al: failure, development, reliance, reliability, refusal.'},
   {h:'Efecto',p:'Textos más impersonales y densos, propios de informes y del CPE Writing.'}],
  examples:[['The failure of the project surprised everyone.','El fracaso del proyecto sorprendió a todos.'],['Their refusal to cooperate caused delays.','Su negativa a cooperar causó retrasos.']],
  tip:'En Word formation revisa siempre si hace falta plural o prefijo negativo.',
  questions:[
   {s:'The ___ of the new policy caused confusion. (introduce)',o:['introduction','introducing','introduced','introducement'],a:0,e:'Sustantivo de "introduce": "introduction".'},
   {type:'fill',s:'The project\'s ___ surprised everyone. (fail)',ans:['failure'],e:'Sustantivo de "fail": "failure".'}],
  vocab:[['refusal','negativa'],['reliance','dependencia'],['expansion','expansión'],['reliability','fiabilidad']]},
 'C2-3':{min:12,icon:'scissors',intro:'Elipsis y sustitución evitan repeticiones y hacen el inglés más natural.',
  sections:[
   {h:'So y not',p:'Sustituyen una frase entera: "Will it be ready? — I hope so / I hope not." También "I think so", "I\'m afraid not".'},
   {h:'Do so y one',p:'"He asked me to help, and I did so." "One/ones" sustituyen sustantivos contables: "the red one".'},
   {h:'Elipsis tras auxiliar',p:'"She can swim, but I can\'t." "I would if I could."'}],
  examples:[['Is she coming? — I don\'t think so.','¿Viene? — Creo que no.'],['I asked him to tidy up, and he did so.','Le pedí que ordenara y lo hizo.']],
  tip:'Con "think" y "believe" la forma natural es "I don\'t think so", no "I think not" (muy formal).',
  questions:[
   {s:'Will it be ready? — I hope ___.',o:['so','it','that','yes'],a:0,e:'"So" sustituye la frase completa: "I hope so".'},
   {s:'I asked him to tidy up, and he did ___.',o:['so','it','that','such'],a:0,e:'"Do so" sustituye la acción mencionada.'}],
  vocab:[['tidy up','ordenar'],['substitute','sustituir'],['omit','omitir'],['I\'m afraid not','me temo que no']]}
};

/* Prueba de nivel (inglés): 2 preguntas por banda */
const PLACEMENT_EN = [
 {s:'My name ___ Ana.',o:['am','is','are','be'],a:1,band:'A1'},
 {s:'___ you like coffee?',o:['Are','Does','Do','Is'],a:2,band:'A1'},
 {s:'Yesterday I ___ a great film.',o:['see','seen','saw','have seen'],a:2,band:'A2'},
 {s:'She\'s ___ than her brother.',o:['more tall','taller','tallest','the taller'],a:1,band:'A2'},
 {s:'I ___ here since January.',o:['live','am living','lived','have lived'],a:3,band:'B1'},
 {s:'If I ___ rich, I\'d travel the world.',o:['am','were','will be','would be'],a:1,band:'B1'},
 {s:'If you had told me, I ___ you.',o:['would help','will help','would have helped','had helped'],a:2,band:'B2'},
 {s:'He denied ___ the money.',o:['to take','taking','take','took'],a:1,band:'B2'},
 {s:'Not until the end ___ the truth.',o:['I realised','did I realise','I did realise','realised I'],a:1,band:'C1'},
 {s:'It\'s high time you ___ a job.',o:['get','got','will get','getting'],a:1,band:'C1'},
 {s:'___ he to resign, the company would collapse.',o:['If','Should','Were','Had'],a:2,band:'C2'},
 {s:'The project, ___ to say, was a disaster.',o:['needless','needed','needing','unneeded'],a:0,band:'C2'}
];

/* Banco Cambridge: Reading and Use of English */
const CAMBRIDGE = [
 {part:1,lv:'B2',s:'The company decided to ___ the meeting until next month.',o:['put off','call off','set off','take off'],a:0,e:'"Put off" = posponer. "Call off" sería cancelar, pero "until next month" indica aplazamiento.'},
 {part:1,lv:'B2',s:'She ___ a lot of effort into the project.',o:['put','made','did','gave'],a:0,e:'Collocation: "put effort into something".'},
 {part:1,lv:'B2',s:'Let\'s ___ the most of the good weather.',o:['make','do','take','get'],a:0,e:'Expresión fija: "make the most of".'},
 {part:1,lv:'C1',s:'The proposal was met with ___ opposition.',o:['fierce','hard','heavy','high'],a:0,e:'Collocation: "fierce opposition".'},
 {part:1,lv:'C2',s:'Her argument simply doesn\'t ___ water.',o:['hold','keep','carry','bear'],a:0,e:'"Hold water" = ser convincente o lógico.'},
 {part:1,lv:'C2',s:'It goes without ___ that we\'ll support you.',o:['saying','telling','speaking','mentioning'],a:0,e:'Expresión fija: "it goes without saying".'},
 {part:2,lv:'B2',s:'I\'m not used ___ getting up so early.',ans:['to'],e:'"Be used to + -ing" = estar acostumbrado a.'},
 {part:2,lv:'B2',s:'___ matter how hard I try, I can\'t do it.',ans:['no'],e:'"No matter how..." = por mucho que...'},
 {part:2,lv:'C1',s:'Hardly ___ I closed my eyes when the alarm went off.',ans:['had'],e:'Inversión: "Hardly had + sujeto + participio... when".'},
 {part:2,lv:'C2',s:'___ it not been for your help, we would have failed.',ans:['had'],e:'Inversión del tercer condicional: "Had it not been for..." = "If it hadn\'t been for...".'},
 {part:3,lv:'B2',s:'The ___ of the bridge took three years.',stem:'CONSTRUCT',ans:['construction'],e:'Sustantivo de "construct": construction.'},
 {part:3,lv:'B2',s:'She answered every question ___.',stem:'CONFIDENT',ans:['confidently'],e:'Hace falta un adverbio que modifique "answered".'},
 {part:3,lv:'B2',s:'It is ___ to drive without a licence.',stem:'LEGAL',ans:['illegal'],e:'Prefijo negativo: il- + legal.'},
 {part:3,lv:'C1',s:'His ___ to compromise caused the deal to fail.',stem:'WILLING',ans:['unwillingness'],e:'Sustantivo con prefijo negativo: un- + willing + -ness.'},
 {part:3,lv:'C1',s:'The results were ___ inconclusive.',stem:'FRUSTRATE',ans:['frustratingly'],e:'Adverbio que modifica al adjetivo "inconclusive".'},
 {part:3,lv:'C2',s:'The minister\'s speech was full of ___.',stem:'CONTRADICT',ans:['contradictions'],e:'Sustantivo en plural tras "full of".'},
 {part:4,lv:'B2',first:'I haven\'t been to the cinema for months.',key:'LAST',s:'It\'s months ___ to the cinema.',ans:['since i last went','since i went last'],e:'"It\'s + tiempo + since + sujeto + last + pasado".'},
 {part:4,lv:'B2',first:'It wasn\'t necessary for you to bring food.',key:'NEED',s:'You ___ food.',ans:['didn\'t need to bring','did not need to bring','needn\'t have brought','need not have brought'],e:'"Didn\'t need to" o "needn\'t have + participio".'},
 {part:4,lv:'B2',first:'People think the thief escaped through the window.',key:'THOUGHT',s:'The thief ___ escaped through the window.',ans:['is thought to have'],e:'Pasiva impersonal: "is thought to have + participio" para el pasado.'},
 {part:4,lv:'C1',first:'I regret not studying harder at school.',key:'WISH',s:'I ___ harder at school.',ans:['wish i had studied','wish i\'d studied'],e:'Arrepentimiento sobre el pasado: "wish + past perfect".'},
 {part:4,lv:'C1',first:'As soon as he arrived, the meeting started.',key:'SOONER',s:'No ___ the meeting started.',ans:['sooner had he arrived than'],e:'Inversión: "No sooner had + sujeto + participio + than".'},
 {part:4,lv:'C2',first:'She was not at all surprised by the news.',key:'LEAST',s:'She ___ by the news.',ans:['was not in the least surprised','wasn\'t in the least surprised','was not the least surprised','wasn\'t the least surprised'],e:'"Not in the least" = en absoluto.'}
];
const PART_NAMES = {1:'Part 1 · Multiple-choice cloze',2:'Part 2 · Open cloze',3:'Part 3 · Word formation',4:'Part 4 · Key word transformation'};
