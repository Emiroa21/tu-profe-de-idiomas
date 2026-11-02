/* Contenido ampliado: 6 lecciones más por nivel (inglés) */
TOPICS.en.A1.push(...["Artículos y plurales", "This, that y los posesivos", "There is y there are", "Can: habilidades y permisos", "Lectura: Mi nueva vida en Londres", "Escucha: En la cafetería"]);
TOPICS.en.A2.push(...["El pasado continuo", "Some, any, much y many", "Obligación: have to, must y should", "Presente continuo vs. presente simple", "Lectura: Un fin de semana en la montaña", "Escucha: Reservando un hotel"]);
TOPICS.en.B1.push(...["Gerundios e infinitivos", "Oraciones de relativo", "Used to y would: hábitos del pasado", "Deducción en presente: must, might, can't", "Lectura: Trabajar desde casa", "Escucha: Una entrevista de trabajo"]);
TOPICS.en.B2.push(...["Wish e if only", "Pasiva avanzada y causativa", "Futuro continuo y futuro perfecto", "Word formation: prefijos y sufijos", "Lectura FCE: La economía colaborativa", "Escucha FCE: Un podcast sobre el sueño"]);
TOPICS.en.C1.push(...["Participle clauses", "Subjuntivo y estructuras formales", "Phrasal verbs avanzados", "Comparaciones avanzadas", "Lectura CAE: La memoria en la era digital", "Escucha CAE: Charla sobre urbanismo"]);
TOPICS.en.C2.push(...["Inversión condicional", "Sinónimos con matices", "Verbos de reporte avanzados", "Adverbios de actitud y comentario", "Lectura CPE: El valor del aburrimiento", "Escucha CPE: Debate sobre la traducción automática"]);
Object.assign(LESSONS_EN, {
"A1-4": {
"min": 10,
"icon": "book",
"intro": "Cuándo usar a, an y the, y cómo formar el plural de los sustantivos.",
"sections": [
{
"h": "A y an",
"p": "Significan \"un/una\" y solo van con sustantivos contables en singular. \"a\" va antes de sonido consonante (a book, a university) y \"an\" antes de sonido vocal (an apple, an hour)."
},
{
"h": "The",
"p": "Se usa cuando ya sabemos de qué hablamos: \"I bought a car. The car is red.\" No se usa para hablar en general: \"I like music\", no \"I like the music\"."
},
{
"h": "Plurales",
"p": "Casi siempre se añade -s (books). Tras -s, -sh, -ch, -x se añade -es (buses, watches). Irregulares: man → men, woman → women, child → children, person → people."
}
],
"examples": [
[
"I have a brother and an older sister.",
"Tengo un hermano y una hermana mayor."
],
[
"The children are in the garden.",
"Los niños están en el jardín."
],
[
"She's an engineer.",
"Ella es ingeniera."
]
],
"tip": "Fíjate en el sonido, no en la letra: \"an hour\" (la h no suena) pero \"a university\" (suena \"iu\").",
"questions": [
{
"s": "I'm waiting for ___ hour.",
"o": [
"a",
"an",
"the",
"—"
],
"a": 1,
"e": "\"Hour\" empieza con sonido vocal porque la h es muda: \"an hour\"."
},
{
"type": "fill",
"s": "There are three ___ in the class. (child)",
"ans": [
"children"
],
"e": "\"Child\" tiene plural irregular: \"children\"."
}
],
"vocab": [
[
"child / children",
"niño / niños"
],
[
"person / people",
"persona / gente"
],
[
"hour",
"hora"
],
[
"garden",
"jardín"
]
]
},
"A1-5": {
"min": 10,
"icon": "book",
"intro": "Para señalar cosas y decir de quién son.",
"sections": [
{
"h": "This / these",
"p": "Cosas cercanas: \"this book\" (singular), \"these books\" (plural)."
},
{
"h": "That / those",
"p": "Cosas lejanas: \"that house\", \"those houses\"."
},
{
"h": "Adjetivos posesivos",
"p": "my, your, his, her, its, our, their. No cambian con el plural: \"my friends\". Para personas también se usa 's: \"Ana's car\" = el coche de Ana."
}
],
"examples": [
[
"Is this your phone?",
"¿Este es tu teléfono?"
],
[
"Those are my parents.",
"Esos son mis padres."
],
[
"This is Tom's sister.",
"Esta es la hermana de Tom."
]
],
"tip": "\"His\" es de él y \"her\" es de ella: depende del dueño, no de la cosa. \"Ana and her brother\".",
"questions": [
{
"s": "___ shoes over there are very expensive.",
"o": [
"This",
"That",
"These",
"Those"
],
"a": 3,
"e": "Plural y lejos: \"those\"."
},
{
"s": "Maria lives with ___ brother.",
"o": [
"his",
"her",
"their",
"its"
],
"a": 1,
"e": "El dueño es Maria (ella): \"her\"."
}
],
"vocab": [
[
"over there",
"allí"
],
[
"parents",
"padres"
],
[
"shoes",
"zapatos"
],
[
"whose",
"de quién"
]
]
},
"A1-6": {
"min": 10,
"icon": "book",
"intro": "La forma de decir \"hay\" en inglés.",
"sections": [
{
"h": "Singular y plural",
"p": "\"There is\" (there's) con singular o incontables: \"There's a bank near here\". \"There are\" con plural: \"There are two parks\"."
},
{
"h": "Negativa y pregunta",
"p": "\"There isn't any milk\", \"There aren't any chairs\". Pregunta: \"Is there a pharmacy?\" / \"Are there any buses?\"."
},
{
"h": "Some y any",
"p": "\"some\" en afirmativas y \"any\" en negativas y preguntas."
}
],
"examples": [
[
"There's a supermarket on the corner.",
"Hay un supermercado en la esquina."
],
[
"Are there any good restaurants here?",
"¿Hay buenos restaurantes aquí?"
],
[
"There aren't any tickets left.",
"No quedan entradas."
]
],
"tip": "No digas \"It has a bank\" para \"hay un banco\": en inglés es \"There is a bank\".",
"questions": [
{
"s": "___ two cats in the garden.",
"o": [
"There is",
"There are",
"It has",
"Is there"
],
"a": 1,
"e": "Con plural se usa \"There are\"."
},
{
"type": "fill",
"s": "Is there ___ milk in the fridge?",
"ans": [
"any"
],
"e": "En preguntas se usa \"any\"."
}
],
"vocab": [
[
"corner",
"esquina"
],
[
"near",
"cerca"
],
[
"fridge",
"nevera"
],
[
"left",
"que queda"
]
]
},
"A1-7": {
"min": 10,
"icon": "chat",
"intro": "\"Can\" sirve para decir lo que sabes hacer, pedir permiso y pedir favores.",
"sections": [
{
"h": "Habilidad",
"p": "\"I can swim\", \"She can't drive\". El verbo después de \"can\" va en forma base y nunca lleva \"to\"."
},
{
"h": "Permiso y peticiones",
"p": "\"Can I open the window?\", \"Can you help me?\". \"Could\" es más educado: \"Could you repeat that, please?\"."
},
{
"h": "Forma",
"p": "\"can\" es igual para todas las personas: \"he can\", no \"he cans\"."
}
],
"examples": [
[
"I can speak two languages.",
"Sé hablar dos idiomas."
],
[
"Can I pay by card?",
"¿Puedo pagar con tarjeta?"
],
[
"Could you speak more slowly, please?",
"¿Podría hablar más despacio, por favor?"
]
],
"tip": "Frase de supervivencia: \"Sorry, can you say that again?\" (Perdón, ¿puedes repetirlo?).",
"questions": [
{
"s": "She can ___ the piano very well.",
"o": [
"plays",
"to play",
"play",
"playing"
],
"a": 2,
"e": "Después de \"can\" el verbo va en forma base: \"play\"."
},
{
"s": "___ you help me with my bag, please?",
"o": [
"Do",
"Can",
"Are",
"Does"
],
"a": 1,
"e": "Para pedir un favor: \"Can you...?\"."
}
],
"vocab": [
[
"swim",
"nadar"
],
[
"by card",
"con tarjeta"
],
[
"slowly",
"despacio"
],
[
"again",
"otra vez"
]
]
},
"A1-8": {
"kind": "reading",
"min": 8,
"icon": "book",
"intro": "Lee el texto de Lucía y responde las preguntas.",
"text": [
"Hi! My name is Lucía and I'm from Valencia, in Spain. I'm 24 years old and I live in London now. I work in a small café near the river.",
"I get up at six o'clock every day because the café opens at seven. I like my job because the people are very friendly. I don't like the weather: it rains a lot!",
"In the evening, I study English at a school. There are twelve students in my class. My teacher is from Scotland and she is very funny. On Saturdays I go to the market with my friends."
],
"questions": [
{
"s": "Where does Lucía work?",
"o": [
"In a school",
"In a café",
"In a market",
"In a shop"
],
"a": 1,
"e": "\"I work in a small café near the river.\"",
"ctx": true
},
{
"s": "Why does she get up at six?",
"o": [
"Because she studies early",
"Because the café opens at seven",
"Because she runs",
"Because it rains"
],
"a": 1,
"e": "\"...because the café opens at seven.\"",
"ctx": true
},
{
"s": "What doesn't she like about London?",
"o": [
"The people",
"Her job",
"The weather",
"Her teacher"
],
"a": 2,
"e": "\"I don't like the weather: it rains a lot!\"",
"ctx": true
}
],
"vocab": [
[
"river",
"río"
],
[
"friendly",
"amable"
],
[
"weather",
"el clima"
],
[
"funny",
"gracioso/a"
]
],
"tip": "Lee primero las preguntas: así sabes qué información buscar en el texto."
},
"A1-9": {
"kind": "listening",
"min": 6,
"icon": "chat",
"intro": "Escucha la conversación y responde. Puedes repetirla las veces que quieras.",
"script": [
[
"Waiter",
"Good morning! What can I get you?"
],
[
"Customer",
"Hi. Can I have a large coffee with milk, please?"
],
[
"Waiter",
"Sure. Anything to eat?"
],
[
"Customer",
"Yes, a chocolate muffin, please. How much is that?"
],
[
"Waiter",
"That's five pounds fifty."
],
[
"Customer",
"Can I pay by card?"
],
[
"Waiter",
"Of course. Here you are. Have a nice day!"
]
],
"questions": [
{
"s": "What does the customer drink?",
"o": [
"Tea",
"A large coffee with milk",
"A small black coffee",
"Orange juice"
],
"a": 1,
"e": "\"Can I have a large coffee with milk, please?\"",
"ctx": true
},
{
"s": "What does the customer eat?",
"o": [
"A sandwich",
"A cookie",
"A chocolate muffin",
"Nothing"
],
"a": 2,
"e": "\"Yes, a chocolate muffin, please.\"",
"ctx": true
},
{
"s": "How much does it cost?",
"o": [
"£5.15",
"£5.50",
"£15.50",
"£50"
],
"a": 1,
"e": "\"That's five pounds fifty\" = £5.50.",
"ctx": true
}
],
"vocab": [
[
"What can I get you?",
"¿Qué le pongo?"
],
[
"How much is that?",
"¿Cuánto es?"
],
[
"Here you are",
"Aquí tiene"
],
[
"muffin",
"magdalena"
]
],
"tip": "\"Five pounds fifty\" significa 5,50 libras: los peniques se dicen después sin \"and\"."
},
"A2-4": {
"min": 12,
"icon": "clock",
"intro": "Describe lo que estaba pasando en un momento del pasado.",
"sections": [
{
"h": "Forma",
"p": "was/were + verbo en -ing: \"I was working\", \"They were sleeping\"."
},
{
"h": "Acción interrumpida",
"p": "El pasado continuo es la acción larga y el pasado simple la que interrumpe: \"I was cooking when the phone rang\"."
},
{
"h": "While",
"p": "\"while\" va con la acción larga: \"While I was walking, I saw an accident\"."
}
],
"examples": [
[
"What were you doing at 8 last night?",
"¿Qué estabas haciendo anoche a las 8?"
],
[
"It was raining when we left.",
"Estaba lloviendo cuando salimos."
],
[
"She was studying while I was cooking.",
"Ella estudiaba mientras yo cocinaba."
]
],
"tip": "Truco: \"when\" + pasado simple (acción corta) y \"while\" + pasado continuo (acción larga).",
"questions": [
{
"s": "I ___ a shower when the lights went out.",
"o": [
"took",
"was taking",
"am taking",
"take"
],
"a": 1,
"e": "Acción larga interrumpida: pasado continuo."
},
{
"s": "While they ___ TV, someone knocked at the door.",
"o": [
"watched",
"were watching",
"was watching",
"watch"
],
"a": 1,
"e": "\"While\" + pasado continuo; con \"they\" es \"were\"."
}
],
"vocab": [
[
"knock",
"llamar a la puerta"
],
[
"lights went out",
"se fue la luz"
],
[
"while",
"mientras"
],
[
"ring / rang",
"sonar / sonó"
]
]
},
"A2-5": {
"min": 12,
"icon": "scale",
"intro": "Cuantificadores para hablar de cantidades.",
"sections": [
{
"h": "Contables e incontables",
"p": "Contables: se pueden contar (apples, chairs). Incontables: no llevan plural (water, money, information, advice)."
},
{
"h": "Much y many",
"p": "\"many\" con contables (how many apples?) y \"much\" con incontables (how much money?). En afirmativas se prefiere \"a lot of\"."
},
{
"h": "A few y a little",
"p": "\"a few\" + contables (a few friends) y \"a little\" + incontables (a little sugar)."
}
],
"examples": [
[
"How much water do you drink?",
"¿Cuánta agua bebes?"
],
[
"I don't have many friends here.",
"No tengo muchos amigos aquí."
],
[
"Can I have a little sugar?",
"¿Me das un poco de azúcar?"
]
],
"tip": "\"Information\", \"advice\" y \"news\" son incontables en inglés: \"some advice\", nunca \"an advice\".",
"questions": [
{
"s": "How ___ people came to the party?",
"o": [
"much",
"many",
"a little",
"any"
],
"a": 1,
"e": "\"People\" es contable plural: \"how many\"."
},
{
"s": "I need ___ advice about my CV.",
"o": [
"an",
"a few",
"some",
"many"
],
"a": 2,
"e": "\"Advice\" es incontable: \"some advice\"."
}
],
"vocab": [
[
"advice",
"consejo(s)"
],
[
"sugar",
"azúcar"
],
[
"a lot of",
"mucho/s"
],
[
"enough",
"suficiente"
]
]
},
"A2-6": {
"min": 12,
"icon": "scale",
"intro": "Para hablar de obligaciones, prohibiciones y consejos.",
"sections": [
{
"h": "Have to y must",
"p": "\"have to\" = obligación externa (normas): \"I have to wear a uniform\". \"must\" = obligación que siente quien habla: \"I must call my mum\"."
},
{
"h": "Mustn't vs. don't have to",
"p": "\"mustn't\" = está prohibido. \"don't have to\" = no es necesario. \"You mustn't smoke here\" ≠ \"You don't have to come\"."
},
{
"h": "Should",
"p": "Para consejos: \"You should sleep more\", \"You shouldn't eat so late\"."
}
],
"examples": [
[
"You don't have to pay, it's free.",
"No tienes que pagar, es gratis."
],
[
"You mustn't use your phone in the exam.",
"No puedes usar el teléfono en el examen."
],
[
"You should see a doctor.",
"Deberías ir al médico."
]
],
"tip": "\"Must\" no tiene pasado: se usa \"had to\": \"Yesterday I had to work late\".",
"questions": [
{
"s": "It's free. You ___ pay.",
"o": [
"mustn't",
"don't have to",
"shouldn't",
"can't"
],
"a": 1,
"e": "No es necesario pagar: \"don't have to\"."
},
{
"s": "You look tired. You ___ go to bed early.",
"o": [
"should",
"must not",
"have",
"don't have to"
],
"a": 0,
"e": "Consejo: \"should\"."
}
],
"vocab": [
[
"uniform",
"uniforme"
],
[
"free",
"gratis"
],
[
"rule",
"norma"
],
[
"allowed",
"permitido"
]
]
},
"A2-7": {
"min": 12,
"icon": "clock",
"intro": "Lo que haces normalmente frente a lo que estás haciendo ahora.",
"sections": [
{
"h": "Presente simple",
"p": "Hábitos y verdades: \"I work in a bank\", \"Water boils at 100 °C\"."
},
{
"h": "Presente continuo",
"p": "am/is/are + -ing. Acciones de ahora o temporales: \"I'm working from home this week\"."
},
{
"h": "Verbos de estado",
"p": "like, love, know, want, need, understand casi nunca van en continuo: \"I know\", no \"I'm knowing\"."
}
],
"examples": [
[
"She usually drives, but today she's taking the bus.",
"Normalmente conduce, pero hoy va en autobús."
],
[
"What are you doing?",
"¿Qué estás haciendo?"
],
[
"I don't understand this word.",
"No entiendo esta palabra."
]
],
"tip": "Palabras pista: now, at the moment, this week → continuo; always, usually, every day → simple.",
"questions": [
{
"s": "Listen! Someone ___ at the door.",
"o": [
"knocks",
"is knocking",
"knock",
"knocked"
],
"a": 1,
"e": "Acción que pasa ahora mismo: presente continuo."
},
{
"s": "I ___ what you mean.",
"o": [
"understand",
"am understanding",
"understanding",
"am understand"
],
"a": 0,
"e": "\"Understand\" es verbo de estado: presente simple."
}
],
"vocab": [
[
"at the moment",
"en este momento"
],
[
"usually",
"normalmente"
],
[
"boil",
"hervir"
],
[
"mean",
"querer decir"
]
]
},
"A2-8": {
"kind": "reading",
"min": 10,
"icon": "book",
"intro": "Lee el correo de Daniel y responde.",
"text": [
"Hi Sara, last weekend I went to the mountains with my cousins. We left on Friday afternoon and drove for three hours. The hotel was small but very comfortable, and the food was amazing.",
"On Saturday we walked to a lake. It was sunny in the morning, but while we were having lunch it started to rain. We didn't have umbrellas, so we got very wet! In the evening we played cards and watched a film.",
"On Sunday my cousin Leo wanted to go climbing, but I was too tired. I stayed at the hotel and read a book. We came back on Sunday night. Next time you have to come with us! Daniel"
],
"questions": [
{
"s": "How did they travel to the mountains?",
"o": [
"By train",
"By car",
"By bus",
"On foot"
],
"a": 1,
"e": "\"We ... drove for three hours\": fueron en coche.",
"ctx": true
},
{
"s": "What happened during lunch on Saturday?",
"o": [
"It started to rain",
"They lost their umbrellas",
"They saw a film",
"Leo went climbing"
],
"a": 0,
"e": "\"while we were having lunch it started to rain\".",
"ctx": true
},
{
"s": "What did Daniel do on Sunday?",
"o": [
"He went climbing",
"He walked to the lake",
"He read a book at the hotel",
"He drove home in the morning"
],
"a": 2,
"e": "\"I stayed at the hotel and read a book.\"",
"ctx": true
}
],
"vocab": [
[
"cousin",
"primo/a"
],
[
"comfortable",
"cómodo"
],
[
"get wet",
"mojarse"
],
[
"climbing",
"escalada"
]
],
"tip": "Las preguntas siguen el orden del texto: busca la respuesta de la pregunta 2 después de la 1."
},
"A2-9": {
"kind": "listening",
"min": 7,
"icon": "chat",
"intro": "Escucha la llamada al hotel y responde.",
"script": [
[
"Receptionist",
"Good afternoon, Hotel Bellview. How can I help you?"
],
[
"Guest",
"Hello, I'd like to book a room for next weekend, please."
],
[
"Receptionist",
"Certainly. For how many nights?"
],
[
"Guest",
"Two nights, Friday and Saturday. A double room, please."
],
[
"Receptionist",
"We have a double room with a sea view for ninety euros a night. Breakfast is included."
],
[
"Guest",
"Perfect. Is there parking at the hotel?"
],
[
"Receptionist",
"Yes, it's free for guests. Can I have your name, please?"
],
[
"Guest",
"Yes, it's Martin. M-A-R-T-I-N."
]
],
"questions": [
{
"s": "How many nights does the guest want?",
"o": [
"One",
"Two",
"Three",
"A week"
],
"a": 1,
"e": "\"Two nights, Friday and Saturday.\"",
"ctx": true
},
{
"s": "How much is the room per night?",
"o": [
"€19",
"€80",
"€90",
"€99"
],
"a": 2,
"e": "\"ninety euros a night\".",
"ctx": true
},
{
"s": "What is true about the parking?",
"o": [
"It's not available",
"It costs ten euros",
"It's free for guests",
"It's near the beach"
],
"a": 2,
"e": "\"Yes, it's free for guests.\"",
"ctx": true
}
],
"vocab": [
[
"book a room",
"reservar una habitación"
],
[
"double room",
"habitación doble"
],
[
"sea view",
"vista al mar"
],
[
"included",
"incluido"
]
],
"tip": "Ojo con los números que suenan parecido: nineteen (19) y ninety (90). En -teen el acento va al final."
},
"B1-4": {
"min": 14,
"icon": "puzzle",
"intro": "Algunos verbos van seguidos de -ing y otros de \"to\" + infinitivo.",
"sections": [
{
"h": "Verbo + -ing",
"p": "enjoy, avoid, mind, finish, suggest, keep, consider: \"I enjoy reading\", \"She avoided answering\". También después de preposiciones: \"interested in learning\"."
},
{
"h": "Verbo + to",
"p": "want, decide, hope, plan, agree, refuse, manage, afford: \"We decided to leave\"."
},
{
"h": "Cambian de significado",
"p": "\"stop smoking\" (dejar de fumar) vs. \"stop to smoke\" (parar para fumar); \"remember to call\" (no olvidar) vs. \"remember calling\" (recordar haberlo hecho)."
}
],
"examples": [
[
"Would you mind closing the window?",
"¿Te importaría cerrar la ventana?"
],
[
"I can't afford to buy a new car.",
"No puedo permitirme comprar un coche nuevo."
],
[
"Remember to send the invoice.",
"Acuérdate de enviar la factura."
]
],
"tip": "Aprende los verbos en grupo con una frase de ejemplo; es la forma más rápida de fijarlos.",
"questions": [
{
"s": "I really enjoy ___ new languages.",
"o": [
"learn",
"to learn",
"learning",
"learned"
],
"a": 2,
"e": "\"Enjoy\" va seguido de -ing."
},
{
"s": "They refused ___ the contract.",
"o": [
"signing",
"to sign",
"sign",
"signed"
],
"a": 1,
"e": "\"Refuse\" va seguido de \"to\" + infinitivo."
}
],
"vocab": [
[
"avoid",
"evitar"
],
[
"afford",
"permitirse"
],
[
"invoice",
"factura"
],
[
"refuse",
"negarse"
]
]
},
"B1-5": {
"min": 14,
"icon": "link",
"intro": "Who, which, that y where sirven para dar más información sin empezar otra frase.",
"sections": [
{
"h": "Who, which, that",
"p": "\"who\" para personas, \"which\" para cosas y \"that\" para ambas en oraciones especificativas: \"The man who called...\", \"The book which/that I read...\"."
},
{
"h": "Where y whose",
"p": "\"where\" para lugares (the city where I was born) y \"whose\" para posesión (the girl whose phone was stolen)."
},
{
"h": "Explicativas",
"p": "Van entre comas y dan información extra; en ellas no se usa \"that\": \"My brother, who lives in Paris, is a chef.\""
}
],
"examples": [
[
"That's the restaurant where we met.",
"Ese es el restaurante donde nos conocimos."
],
[
"The woman who interviewed me was very kind.",
"La mujer que me entrevistó fue muy amable."
],
[
"He's the student whose essay won.",
"Es el estudiante cuyo ensayo ganó."
]
],
"tip": "Si el relativo es el objeto, puedes omitirlo: \"The film (that) we saw was great\".",
"questions": [
{
"s": "This is the town ___ I grew up.",
"o": [
"which",
"who",
"where",
"whose"
],
"a": 2,
"e": "Para lugares: \"where\"."
},
{
"s": "I met a man ___ brother is a famous actor.",
"o": [
"who",
"whose",
"which",
"that"
],
"a": 1,
"e": "Posesión: \"whose brother\"."
}
],
"vocab": [
[
"grow up",
"crecer"
],
[
"essay",
"ensayo"
],
[
"kind",
"amable"
],
[
"chef",
"cocinero/a"
]
]
},
"B1-6": {
"min": 12,
"icon": "clock",
"intro": "Para hablar de cosas que hacías antes y ya no haces.",
"sections": [
{
"h": "Used to",
"p": "\"used to\" + verbo para hábitos y estados del pasado: \"I used to live in Lima\", \"She used to have long hair\"."
},
{
"h": "Negativa y pregunta",
"p": "\"I didn't use to like coffee\", \"Did you use to play football?\" (sin -d)."
},
{
"h": "Would",
"p": "También para acciones repetidas, nunca para estados: \"Every summer we would go to the beach\". No: \"I would live in Lima\"."
}
],
"examples": [
[
"I used to be very shy.",
"Antes era muy tímido."
],
[
"We would spend hours playing outside.",
"Pasábamos horas jugando afuera."
],
[
"Did you use to wear glasses?",
"¿Antes usabas gafas?"
]
],
"tip": "No confundas con \"be used to + -ing\" (estar acostumbrado): \"I'm used to working at night\".",
"questions": [
{
"s": "I ___ smoke, but I stopped five years ago.",
"o": [
"use to",
"used to",
"am used to",
"would to"
],
"a": 1,
"e": "Hábito pasado que ya no existe: \"used to\"."
},
{
"s": "When I was a child, I ___ a dog called Max.",
"o": [
"would have",
"used to have",
"was having",
"use to have"
],
"a": 1,
"e": "\"Have\" aquí es estado: se usa \"used to\", no \"would\"."
}
],
"vocab": [
[
"shy",
"tímido"
],
[
"glasses",
"gafas"
],
[
"childhood",
"infancia"
],
[
"anymore",
"ya no"
]
]
},
"B1-7": {
"min": 12,
"icon": "search",
"intro": "Para hacer suposiciones lógicas sobre el presente.",
"sections": [
{
"h": "Must",
"p": "Estás casi seguro de que algo es verdad: \"He's been working all day. He must be tired.\""
},
{
"h": "Might / may / could",
"p": "Es posible: \"She might be at home\", \"It could be true\"."
},
{
"h": "Can't",
"p": "Estás casi seguro de que algo no es verdad: \"That can't be Tom. He's in Japan.\" No uses \"mustn't\" para esto."
}
],
"examples": [
[
"You must be hungry after the trip.",
"Debes de tener hambre después del viaje."
],
[
"The keys might be in the car.",
"Puede que las llaves estén en el coche."
],
[
"It can't be 10 o'clock already!",
"¡No pueden ser ya las 10!"
]
],
"tip": "Para deducciones sobre el pasado: must have / can't have + participio (lo verás en C2).",
"questions": [
{
"s": "She's not answering. She ___ be in a meeting.",
"o": [
"must",
"might",
"can't",
"should"
],
"a": 1,
"e": "Es una posibilidad, no una certeza: \"might\"."
},
{
"s": "He ___ be at the gym; I saw him at the office a minute ago.",
"o": [
"must",
"might",
"can't",
"mustn't"
],
"a": 2,
"e": "Estás seguro de que no: \"can't\"."
}
],
"vocab": [
[
"guess",
"adivinar / suponer"
],
[
"hungry",
"hambriento"
],
[
"already",
"ya"
],
[
"certain",
"seguro"
]
]
},
"B1-8": {
"kind": "reading",
"min": 12,
"icon": "book",
"intro": "Lee el artículo y elige la mejor respuesta.",
"text": [
"Since 2020, millions of people have started working from home, at least part of the week. For many, the biggest advantage is time: without a daily commute, the average worker saves almost an hour a day.",
"However, not everyone is happy with the change. Some employees say they feel lonely and miss the conversations they used to have in the office. Others find it difficult to stop working at the end of the day, because their laptop is always on the kitchen table.",
"Experts suggest a few simple rules: having a fixed place to work, taking regular breaks and switching off notifications after work. Many companies now offer a hybrid model, where employees spend two or three days in the office and the rest at home."
],
"questions": [
{
"s": "According to the text, what is the main advantage of working from home?",
"o": [
"Higher salaries",
"Saving time",
"Meeting new people",
"Better laptops"
],
"a": 1,
"e": "\"the biggest advantage is time: without a daily commute...\"",
"ctx": true
},
{
"s": "Why do some people find it hard to stop working?",
"o": [
"Their boss calls them at night",
"Their work is always nearby",
"They have too many meetings",
"They live far from the office"
],
"a": 1,
"e": "\"their laptop is always on the kitchen table\".",
"ctx": true
},
{
"s": "What is a hybrid model?",
"o": [
"Working only at home",
"Working in two companies",
"Combining office and home days",
"Working at night"
],
"a": 2,
"e": "\"employees spend two or three days in the office and the rest at home\".",
"ctx": true
}
],
"vocab": [
[
"commute",
"trayecto al trabajo"
],
[
"lonely",
"solo / aislado"
],
[
"switch off",
"apagar / desconectar"
],
[
"break",
"descanso"
]
],
"tip": "Las respuestas correctas suelen decir lo mismo que el texto con otras palabras (parafraseo)."
},
"B1-9": {
"kind": "listening",
"min": 8,
"icon": "chat",
"intro": "Escucha parte de una entrevista y responde.",
"script": [
[
"Interviewer",
"So, tell me a bit about your current job."
],
[
"Candidate",
"I've been working as a marketing assistant for two years. I mainly manage our social media accounts."
],
[
"Interviewer",
"Why are you interested in this position?"
],
[
"Candidate",
"I'd like more responsibility, and I really admire your company's work with environmental projects."
],
[
"Interviewer",
"What would you say is your biggest weakness?"
],
[
"Candidate",
"I used to find public speaking difficult, but I've been taking a course and I'm much more confident now."
],
[
"Interviewer",
"Great. When could you start?"
],
[
"Candidate",
"I need to give one month's notice, so from the first of March."
]
],
"questions": [
{
"s": "How long has the candidate been in her current job?",
"o": [
"Six months",
"One year",
"Two years",
"Four years"
],
"a": 2,
"e": "\"I've been working as a marketing assistant for two years.\"",
"ctx": true
},
{
"s": "Why does she want the new job?",
"o": [
"Better salary",
"More responsibility",
"Shorter commute",
"More holidays"
],
"a": 1,
"e": "\"I'd like more responsibility...\"",
"ctx": true
},
{
"s": "When can she start?",
"o": [
"Immediately",
"In two weeks",
"From the first of March",
"Next year"
],
"a": 2,
"e": "\"...so from the first of March.\"",
"ctx": true
}
],
"vocab": [
[
"current",
"actual"
],
[
"weakness",
"debilidad"
],
[
"confident",
"seguro de sí mismo"
],
[
"give notice",
"avisar con antelación (renuncia)"
]
],
"tip": "En una entrevista, \"I've been + -ing\" muestra experiencia continuada: úsalo al hablar de tu trabajo."
},
"B2-4": {
"min": 14,
"icon": "spark",
"intro": "Para expresar deseos y arrepentimientos.",
"sections": [
{
"h": "Deseos sobre el presente",
"p": "wish + pasado simple: \"I wish I had more time\" (no tengo). Con \"be\": \"I wish I were taller\"."
},
{
"h": "Arrepentimientos sobre el pasado",
"p": "wish + past perfect: \"I wish I had studied more\" (no estudié)."
},
{
"h": "Quejas sobre otros",
"p": "wish + would: \"I wish you would stop interrupting\". No se usa \"would\" contigo mismo: no \"I wish I would\"."
}
],
"examples": [
[
"If only I had listened to you!",
"¡Ojalá te hubiera hecho caso!"
],
[
"I wish I could speak Japanese.",
"Ojalá supiera hablar japonés."
],
[
"I wish it would stop raining.",
"Ojalá dejara de llover."
]
],
"tip": "\"If only\" es igual que \"I wish\" pero más enfático. Es muy común en key word transformations.",
"questions": [
{
"s": "I wish I ___ to the party last night. It was great!",
"o": [
"went",
"had gone",
"would go",
"go"
],
"a": 1,
"e": "Arrepentimiento sobre el pasado: wish + past perfect."
},
{
"s": "I wish my neighbours ___ so much noise.",
"o": [
"didn't make",
"wouldn't make",
"hadn't made",
"don't make"
],
"a": 1,
"e": "Queja sobre el comportamiento de otros: wish + would."
}
],
"vocab": [
[
"regret",
"lamentar"
],
[
"neighbour",
"vecino"
],
[
"interrupt",
"interrumpir"
],
[
"if only",
"ojalá"
]
]
},
"B2-5": {
"min": 14,
"icon": "cog",
"intro": "Estructuras pasivas que aparecen mucho en el FCE.",
"sections": [
{
"h": "Causativa",
"p": "have/get + objeto + participio: algo que otra persona hace por ti. \"I had my car repaired\", \"She's getting her hair cut\"."
},
{
"h": "Pasiva impersonal",
"p": "\"It is said that...\" o \"He is said to be...\": \"The company is believed to be in trouble\"."
},
{
"h": "Pasiva con modales",
"p": "modal + be + participio: \"It must be done today\", \"It could have been avoided\"."
}
],
"examples": [
[
"We're having the kitchen painted.",
"Nos están pintando la cocina."
],
[
"He is thought to be the richest man in town.",
"Se cree que es el hombre más rico del pueblo."
],
[
"The problem should have been reported earlier.",
"El problema debería haberse informado antes."
]
],
"tip": "\"I cut my hair\" = me lo corté yo. \"I had my hair cut\" = me lo cortó otra persona.",
"questions": [
{
"s": "I'm going to ___ my eyes tested next week.",
"o": [
"have",
"make",
"do",
"let"
],
"a": 0,
"e": "Causativa: have + objeto + participio."
},
{
"s": "The thief is believed ___ the country.",
"o": [
"to leave",
"to have left",
"leaving",
"that he left"
],
"a": 1,
"e": "Pasiva impersonal sobre el pasado: \"to have + participio\"."
}
],
"vocab": [
[
"repair",
"reparar"
],
[
"haircut",
"corte de pelo"
],
[
"in trouble",
"en problemas"
],
[
"avoid",
"evitar"
]
]
},
"B2-6": {
"min": 14,
"icon": "calendar",
"intro": "Para situar acciones en un punto concreto del futuro.",
"sections": [
{
"h": "Futuro continuo",
"p": "will be + -ing: acción en curso en un momento futuro. \"This time tomorrow I'll be flying to Rome.\""
},
{
"h": "Futuro perfecto",
"p": "will have + participio: acción terminada antes de un momento futuro. \"By 2027 I'll have finished my degree.\""
},
{
"h": "By y by the time",
"p": "\"by Friday\" = no más tarde del viernes. \"By the time you arrive, I'll have cooked dinner.\""
}
],
"examples": [
[
"Don't call at 9; we'll be having dinner.",
"No llames a las 9; estaremos cenando."
],
[
"She'll have left by the time you get there.",
"Ya se habrá ido cuando llegues."
],
[
"Will you be using the car tonight?",
"¿Vas a usar el coche esta noche? (pregunta educada)"
]
],
"tip": "\"Will you be + -ing?\" es una forma muy educada de preguntar por los planes de alguien.",
"questions": [
{
"s": "By next June, I ___ here for ten years.",
"o": [
"will work",
"will be working",
"will have worked",
"work"
],
"a": 2,
"e": "Acción completada antes de un momento futuro: futuro perfecto."
},
{
"s": "This time next week, we ___ on a beach in Mexico.",
"o": [
"will lie",
"will be lying",
"will have lain",
"lie"
],
"a": 1,
"e": "Acción en curso en un momento futuro: futuro continuo."
}
],
"vocab": [
[
"by the time",
"para cuando"
],
[
"degree",
"carrera / título"
],
[
"this time tomorrow",
"mañana a esta hora"
],
[
"deadline",
"plazo"
]
]
},
"B2-7": {
"min": 14,
"icon": "puzzle",
"intro": "La Part 3 del FCE pide transformar palabras. Estas son las reglas clave.",
"sections": [
{
"h": "Sufijos de sustantivo",
"p": "-tion (inform → information), -ment (develop → development), -ness (happy → happiness), -ity (able → ability), -ance/-ence (perform → performance)."
},
{
"h": "Sufijos de adjetivo y adverbio",
"p": "-ful (help → helpful), -less (care → careless), -ous (danger → dangerous), -able (comfort → comfortable), -ly para adverbios (quick → quickly)."
},
{
"h": "Prefijos negativos",
"p": "un- (unhappy), in- (incorrect), im- (impossible), il- (illegal), ir- (irregular), dis- (disagree), mis- (misunderstand)."
}
],
"examples": [
[
"Her performance was outstanding.",
"Su actuación fue excelente."
],
[
"It's impossible to finish it today.",
"Es imposible terminarlo hoy."
],
[
"He made a careless mistake.",
"Cometió un error por descuido."
]
],
"tip": "Mira la palabra antes y después del hueco: te dice si falta sustantivo, adjetivo o adverbio, y si es plural o negativo.",
"questions": [
{
"type": "fill",
"s": "Her ___ to the project was invaluable. (CONTRIBUTE)",
"ans": [
"contribution"
],
"e": "Hace falta un sustantivo después de \"Her\": contribute + -ion."
},
{
"type": "fill",
"s": "Thank you, you've been very ___. (HELP)",
"ans": [
"helpful"
],
"e": "Hace falta un adjetivo después de \"very\": help + -ful."
}
],
"vocab": [
[
"outstanding",
"sobresaliente"
],
[
"careless",
"descuidado"
],
[
"ability",
"capacidad"
],
[
"misunderstand",
"malinterpretar"
]
]
},
"B2-8": {
"kind": "reading",
"min": 14,
"icon": "book",
"intro": "Texto con preguntas al estilo del FCE Reading Part 5.",
"text": [
"When Maya Hollis rented out her spare room for the first time, she was nervous. \"I kept thinking about what could go wrong,\" she admits. Five years later, she has hosted more than three hundred guests and considers the extra income essential.",
"Maya is part of what economists call the sharing economy: a system in which individuals rent out things they own but rarely use, from cars to power tools. Supporters argue that it makes better use of resources and allows ordinary people to earn money independently.",
"Critics, however, are less enthusiastic. In several cities, residents complain that short-term rentals have pushed up housing prices, making it harder for local families to find somewhere to live. Some governments have responded by limiting the number of nights a property can be rented each year.",
"Maya understands both sides. \"It has changed my life,\" she says, \"but I can see why my neighbours worry. There has to be a balance.\""
],
"questions": [
{
"s": "How did Maya feel when she started renting her room?",
"o": [
"Excited",
"Anxious",
"Indifferent",
"Proud"
],
"a": 1,
"e": "\"she was nervous. 'I kept thinking about what could go wrong'\": ansiosa.",
"ctx": true
},
{
"s": "What is the main criticism of the sharing economy in the text?",
"o": [
"It is not profitable",
"It increases housing costs",
"Guests are badly behaved",
"It is illegal everywhere"
],
"a": 1,
"e": "\"short-term rentals have pushed up housing prices\".",
"ctx": true
},
{
"s": "What is Maya's attitude at the end?",
"o": [
"She wants to stop renting",
"She thinks critics are wrong",
"She sees advantages and problems",
"She plans to buy more flats"
],
"a": 2,
"e": "\"I can see why my neighbours worry. There has to be a balance.\"",
"ctx": true
}
],
"vocab": [
[
"spare room",
"habitación libre"
],
[
"income",
"ingresos"
],
[
"push up",
"hacer subir"
],
[
"short-term",
"a corto plazo"
]
],
"tip": "En la Part 5, las preguntas de actitud (\"How did she feel?\") se responden con el tono de las palabras, no solo con datos."
},
"B2-9": {
"kind": "listening",
"min": 9,
"icon": "chat",
"intro": "Escucha un fragmento de podcast y responde.",
"script": [
[
"Host",
"Today we're talking to Dr Sarah Klein, who has been studying sleep for over twenty years. Sarah, are we sleeping less than we used to?"
],
[
"Dr Klein",
"On average, yes. Adults today sleep about an hour less than they did fifty years ago, and screens are a big part of the problem."
],
[
"Host",
"Because of the blue light?"
],
[
"Dr Klein",
"Partly. But I'd say the bigger issue is that phones keep our brains active. We check one more message, watch one more video, and suddenly it's midnight."
],
[
"Host",
"So what do you recommend?"
],
[
"Dr Klein",
"Keep the phone out of the bedroom, if you can. And try to go to bed at the same time every night, even at weekends. Consistency matters more than people think."
]
],
"questions": [
{
"s": "How long has Dr Klein been studying sleep?",
"o": [
"Over ten years",
"Over twenty years",
"Fifty years",
"One year"
],
"a": 1,
"e": "\"who has been studying sleep for over twenty years\".",
"ctx": true
},
{
"s": "According to Dr Klein, what is the bigger problem with phones?",
"o": [
"The blue light",
"They keep our brains active",
"They are too expensive",
"They make noise at night"
],
"a": 1,
"e": "\"the bigger issue is that phones keep our brains active\".",
"ctx": true
},
{
"s": "What does she say about bedtime?",
"o": [
"It should change at weekends",
"It's not important",
"It should be consistent",
"It should be after midnight"
],
"a": 2,
"e": "\"go to bed at the same time every night... Consistency matters\".",
"ctx": true
}
],
"vocab": [
[
"on average",
"de media"
],
[
"partly",
"en parte"
],
[
"issue",
"problema / tema"
],
[
"consistency",
"constancia"
]
],
"tip": "En el Listening del FCE suelen mencionar varias opciones y descartar algunas (\"partly...\"). Escucha hasta el final de la idea."
},
"C1-4": {
"min": 14,
"icon": "cog",
"intro": "Oraciones con participio para escribir de forma más compacta y formal.",
"sections": [
{
"h": "Participio presente (-ing)",
"p": "Acciones simultáneas o causa: \"Feeling tired, she went to bed early\" (= Because she felt tired...)."
},
{
"h": "Participio pasado",
"p": "Sentido pasivo: \"Built in 1890, the bridge is still in use\" (= It was built...)."
},
{
"h": "Perfecto",
"p": "Having + participio para una acción anterior: \"Having finished the report, he went home.\""
}
],
"examples": [
[
"Walking along the beach, we found a bottle.",
"Paseando por la playa, encontramos una botella."
],
[
"Written in plain English, the guide is easy to follow.",
"Escrita en un inglés sencillo, la guía es fácil de seguir."
],
[
"Having lived abroad, she adapts easily.",
"Como ha vivido en el extranjero, se adapta con facilidad."
]
],
"tip": "El sujeto de las dos partes debe ser el mismo. \"Walking home, the rain started\" es incorrecto (la lluvia no camina).",
"questions": [
{
"s": "___ the email, I realised I had made a mistake.",
"o": [
"Having sent",
"Sent",
"Having been sent",
"To send"
],
"a": 0,
"e": "Acción anterior con el mismo sujeto (yo): \"Having sent\"."
},
{
"s": "___ in 1998, the company now employs 500 people.",
"o": [
"Founding",
"Founded",
"Having founded",
"To found"
],
"a": 1,
"e": "Sentido pasivo (la empresa fue fundada): \"Founded\"."
}
],
"vocab": [
[
"abroad",
"en el extranjero"
],
[
"plain",
"sencillo"
],
[
"realise",
"darse cuenta"
],
[
"employ",
"emplear"
]
]
},
"C1-5": {
"min": 14,
"icon": "doc",
"intro": "Estructuras formales muy útiles para el Writing del CAE.",
"sections": [
{
"h": "Subjuntivo",
"p": "Tras verbos y adjetivos de recomendación o necesidad se usa la forma base: \"I suggest that he apply\", \"It is essential that she be informed\"."
},
{
"h": "Verbos que lo piden",
"p": "suggest, recommend, insist, demand, propose, request; adjetivos: essential, vital, crucial, important."
},
{
"h": "Alternativa con should",
"p": "En inglés británico también: \"It is vital that everyone should attend.\""
}
],
"examples": [
[
"The board insisted that the policy be reviewed.",
"La junta insistió en que se revisara la política."
],
[
"It is crucial that every student have access.",
"Es crucial que todos los estudiantes tengan acceso."
],
[
"I recommend that he not sign yet.",
"Recomiendo que no firme todavía."
]
],
"tip": "La negación del subjuntivo es \"not\" + forma base, sin \"don't\": \"that he not sign\".",
"questions": [
{
"s": "The doctor recommended that she ___ more rest.",
"o": [
"gets",
"get",
"got",
"will get"
],
"a": 1,
"e": "Subjuntivo tras \"recommend that\": forma base \"get\"."
},
{
"s": "It is essential that the report ___ finished by Friday.",
"o": [
"is",
"be",
"will be",
"was"
],
"a": 1,
"e": "Subjuntivo tras \"It is essential that\": \"be\"."
}
],
"vocab": [
[
"board",
"junta directiva"
],
[
"policy",
"política / norma"
],
[
"insist",
"insistir"
],
[
"attend",
"asistir"
]
]
},
"C1-6": {
"min": 14,
"icon": "puzzle",
"intro": "Phrasal verbs frecuentes en el CAE y en el inglés profesional.",
"sections": [
{
"h": "Trabajo",
"p": "draw up (redactar), iron out (resolver detalles), follow through (llevar hasta el final), step down (dimitir), take over (asumir el control)."
},
{
"h": "Ideas",
"p": "come across (encontrar por casualidad / parecer), bring about (provocar), rule out (descartar), play down (restar importancia)."
},
{
"h": "Registro",
"p": "En textos formales suele preferirse el verbo latino: \"investigate\" en vez de \"look into\", \"postpone\" en vez de \"put off\"."
}
],
"examples": [
[
"We need to iron out a few problems.",
"Tenemos que resolver algunos problemas."
],
[
"The police have ruled out an accident.",
"La policía ha descartado un accidente."
],
[
"He came across as very arrogant.",
"Dio la impresión de ser muy arrogante."
]
],
"tip": "En el Writing del CAE mezcla registros con cuidado: phrasal verbs en cartas informales, verbos formales en informes.",
"questions": [
{
"s": "The CEO decided to ___ after the scandal.",
"o": [
"step down",
"step up",
"step in",
"step out"
],
"a": 0,
"e": "\"Step down\" = dimitir de un cargo."
},
{
"s": "Investigators haven't ___ the possibility of fraud.",
"o": [
"ruled out",
"run out",
"turned out",
"left over"
],
"a": 0,
"e": "\"Rule out\" = descartar."
}
],
"vocab": [
[
"draw up",
"redactar"
],
[
"rule out",
"descartar"
],
[
"bring about",
"provocar"
],
[
"play down",
"restar importancia"
]
]
},
"C1-7": {
"min": 12,
"icon": "scale",
"intro": "Estructuras comparativas que suenan naturales y suben la nota.",
"sections": [
{
"h": "The more..., the more...",
"p": "\"The more you practise, the better you get.\" \"The sooner, the better.\""
},
{
"h": "Modificadores",
"p": "far / much / a great deal + comparativo (far better); slightly / a bit (slightly cheaper); by far + superlativo (by far the best)."
},
{
"h": "Nowhere near y not nearly",
"p": "Para diferencias grandes: \"It's nowhere near as good as the original\", \"not nearly as expensive\"."
}
],
"examples": [
[
"The harder you work, the luckier you get.",
"Cuanto más trabajas, más suerte tienes."
],
[
"This is by far the best option.",
"Esta es, con diferencia, la mejor opción."
],
[
"The sequel is nowhere near as good.",
"La secuela no es ni de lejos tan buena."
]
],
"tip": "\"Twice as... as\" y \"three times as... as\" expresan multiplicadores: \"twice as fast as\".",
"questions": [
{
"s": "The ___ you leave, the earlier you'll arrive.",
"o": [
"soon",
"sooner",
"soonest",
"more soon"
],
"a": 1,
"e": "Estructura \"The + comparativo..., the + comparativo\"."
},
{
"s": "Her new book is ___ better than her first one.",
"o": [
"far",
"very",
"too",
"so"
],
"a": 0,
"e": "\"Far\" intensifica comparativos; \"very\" no puede."
}
],
"vocab": [
[
"by far",
"con diferencia"
],
[
"slightly",
"ligeramente"
],
[
"sequel",
"secuela"
],
[
"nowhere near",
"ni de lejos"
]
]
},
"C1-8": {
"kind": "reading",
"min": 15,
"icon": "book",
"intro": "Texto al estilo del CAE Reading. Elige la mejor respuesta.",
"text": [
"It has become something of a cliché to claim that smartphones are making us forgetful. Why memorise a phone number, the argument goes, when a device will do it for us? Yet the research paints a more nuanced picture than the headlines suggest.",
"Psychologists have long known that people remember information less well when they believe it will be available later, a phenomenon dubbed the 'Google effect'. Far from being a sign of decline, however, some researchers see this as a sensible allocation of mental resources: we remember where to find knowledge rather than the knowledge itself.",
"The real concern, they argue, lies elsewhere. Constant interruptions fragment our attention, and it is attention, not storage, that determines what is encoded into long-term memory. In other words, the problem is not that we outsource facts, but that we rarely give anything our undivided focus."
],
"questions": [
{
"s": "What does the writer suggest about the claim that smartphones make us forgetful?",
"o": [
"It is completely true",
"It oversimplifies the issue",
"It has never been studied",
"It only applies to young people"
],
"a": 1,
"e": "\"the research paints a more nuanced picture than the headlines suggest\".",
"ctx": true
},
{
"s": "How do some researchers view the 'Google effect'?",
"o": [
"As evidence of mental decline",
"As an efficient use of memory",
"As a temporary trend",
"As a problem for schools"
],
"a": 1,
"e": "\"a sensible allocation of mental resources\".",
"ctx": true
},
{
"s": "According to the final paragraph, what is the real problem?",
"o": [
"Phones store too much data",
"We forget where information is",
"Our attention is constantly divided",
"We read fewer books"
],
"a": 2,
"e": "\"Constant interruptions fragment our attention... we rarely give anything our undivided focus.\"",
"ctx": true
}
],
"vocab": [
[
"cliché",
"tópico"
],
[
"nuanced",
"matizado"
],
[
"dub",
"apodar / denominar"
],
[
"undivided",
"total / exclusiva"
]
],
"tip": "En el CAE, palabras como \"Yet\", \"however\" o \"In other words\" marcan el giro del argumento: suelen esconder la respuesta."
},
"C1-9": {
"kind": "listening",
"min": 10,
"icon": "chat",
"intro": "Escucha un fragmento de una charla y responde.",
"script": [
[
"Speaker",
"When we talk about making cities more liveable, people usually think of parks. And parks matter, of course. But the single most effective change, in my view, is far less glamorous: slowing down traffic."
],
[
"Speaker",
"In one district of Barcelona, reducing the speed limit to twenty kilometres an hour, and closing certain streets to through traffic, led to a dramatic increase in the number of people walking and cycling."
],
[
"Speaker",
"Local shops, which had initially opposed the scheme, reported higher sales within a year. That surprised a lot of people, including, I must admit, me."
],
[
"Speaker",
"Now, I'm not suggesting this would work everywhere. Cities have very different needs. But the evidence suggests we've been underestimating how much the street itself shapes the way we live."
]
],
"questions": [
{
"s": "What does the speaker consider the most effective change?",
"o": [
"Building more parks",
"Slowing down traffic",
"Building wider roads",
"Opening more shops"
],
"a": 1,
"e": "\"the single most effective change... is... slowing down traffic\".",
"ctx": true
},
{
"s": "How did local shops react at first?",
"o": [
"They supported the plan",
"They were against it",
"They closed down",
"They didn't notice"
],
"a": 1,
"e": "\"Local shops, which had initially opposed the scheme...\"",
"ctx": true
},
{
"s": "How did the speaker feel about the results for shops?",
"o": [
"Disappointed",
"Unsurprised",
"Surprised",
"Angry"
],
"a": 2,
"e": "\"That surprised a lot of people, including, I must admit, me.\"",
"ctx": true
}
],
"vocab": [
[
"liveable",
"habitable"
],
[
"through traffic",
"tráfico de paso"
],
[
"scheme",
"plan / proyecto"
],
[
"underestimate",
"subestimar"
]
],
"tip": "En el CAE Listening, frases como \"I must admit\" o \"in my view\" revelan la opinión del hablante: préstales atención."
},
"C2-4": {
"min": 14,
"icon": "swap",
"intro": "Condicionales sin \"if\", típicas del registro formal y del CPE.",
"sections": [
{
"h": "Should",
"p": "Primer condicional formal: \"Should you need help, call me\" (= If you need help...)."
},
{
"h": "Were",
"p": "Segundo condicional: \"Were I in your position, I'd resign\". Con otros verbos: \"Were she to find out, she'd be furious\"."
},
{
"h": "Had",
"p": "Tercer condicional: \"Had we known, we would have acted sooner\". Negativa: \"Had it not been for...\"."
}
],
"examples": [
[
"Should you have any questions, do not hesitate to contact us.",
"Si tiene alguna pregunta, no dude en contactarnos."
],
[
"Were it not for her support, I would have given up.",
"De no ser por su apoyo, habría abandonado."
],
[
"Had I known, I would have come.",
"Si lo hubiera sabido, habría venido."
]
],
"tip": "En la inversión negativa no se contrae: \"Had it not been\", nunca \"Hadn't it been\".",
"questions": [
{
"s": "___ you require further information, please contact the office.",
"o": [
"Were",
"Had",
"Should",
"Would"
],
"a": 2,
"e": "Primer condicional formal: \"Should you require...\"."
},
{
"s": "___ the weather been better, the event would have been a success.",
"o": [
"Were",
"Had",
"Should",
"If"
],
"a": 1,
"e": "Tercer condicional con inversión: \"Had the weather been...\"."
}
],
"vocab": [
[
"hesitate",
"dudar"
],
[
"further",
"adicional"
],
[
"give up",
"rendirse"
],
[
"require",
"requerir"
]
]
},
"C2-5": {
"min": 14,
"icon": "search",
"intro": "En C2 importa elegir la palabra exacta entre sinónimos cercanos.",
"sections": [
{
"h": "Mirar",
"p": "glance (vistazo rápido), stare (mirar fijamente), gaze (mirar largo rato, con admiración), peer (mirar con dificultad), glare (mirar con enfado)."
},
{
"h": "Reír",
"p": "giggle (risita nerviosa), chuckle (risa suave, para uno mismo), snigger (risa burlona), roar with laughter (carcajada)."
},
{
"h": "Cambiar",
"p": "alter (modificar algo), adjust (ajustar un poco), transform (cambiar por completo), amend (corregir un texto o ley)."
}
],
"examples": [
[
"She glared at me when I interrupted.",
"Me fulminó con la mirada cuando la interrumpí."
],
[
"He chuckled at his own joke.",
"Se rió por lo bajo de su propio chiste."
],
[
"The contract was amended last week.",
"El contrato se modificó la semana pasada."
]
],
"tip": "Las collocations deciden muchas veces la respuesta: se dice \"amend a law\", pero \"alter a dress\".",
"questions": [
{
"s": "He ___ at the old photograph for a long time, lost in memories.",
"o": [
"glanced",
"gazed",
"glared",
"peered"
],
"a": 1,
"e": "Mirar largo rato, con emoción: \"gaze\"."
},
{
"s": "Parliament voted to ___ the law.",
"o": [
"amend",
"adjust",
"alter",
"transform"
],
"a": 0,
"e": "Con leyes y textos legales: \"amend\"."
}
],
"vocab": [
[
"glare",
"mirar con enfado"
],
[
"gaze",
"contemplar"
],
[
"chuckle",
"reírse por lo bajo"
],
[
"amend",
"enmendar"
]
]
},
"C2-6": {
"min": 14,
"icon": "quote",
"intro": "Más allá de \"say\" y \"tell\": verbos que muestran la intención del hablante.",
"sections": [
{
"h": "Verbo + that",
"p": "allege (afirmar sin pruebas), concede (admitir a regañadientes), maintain (sostener), acknowledge (reconocer)."
},
{
"h": "Verbo + objeto + to",
"p": "urge (instar), advise, warn, remind, persuade: \"She urged him to reconsider.\""
},
{
"h": "Verbo + -ing o preposición",
"p": "deny + -ing, accuse someone of + -ing, apologise for + -ing, insist on + -ing."
}
],
"examples": [
[
"He conceded that the plan had flaws.",
"Admitió que el plan tenía fallos."
],
[
"She accused him of lying.",
"Lo acusó de mentir."
],
[
"Experts urged the government to act.",
"Los expertos instaron al gobierno a actuar."
]
],
"tip": "Estos verbos son clave en el Writing del CPE para resumir opiniones de un texto con precisión.",
"questions": [
{
"s": "The minister ___ that mistakes had been made, but refused to resign.",
"o": [
"conceded",
"urged",
"accused",
"denied"
],
"a": 0,
"e": "Admitir algo a regañadientes: \"concede\"."
},
{
"s": "They accused the company ___ the data.",
"o": [
"to hide",
"of hiding",
"for hiding",
"hiding"
],
"a": 1,
"e": "Estructura: accuse someone of + -ing."
}
],
"vocab": [
[
"allege",
"alegar / afirmar"
],
[
"concede",
"conceder / admitir"
],
[
"urge",
"instar"
],
[
"flaw",
"defecto"
]
]
},
"C2-7": {
"min": 12,
"icon": "quote",
"intro": "Adverbios que expresan tu postura sobre lo que dices.",
"sections": [
{
"h": "Actitud",
"p": "admittedly (hay que reconocer), frankly (francamente), understandably (comprensiblemente), ironically (irónicamente), regrettably (lamentablemente)."
},
{
"h": "Certeza",
"p": "undoubtedly, presumably, seemingly, conceivably (es concebible que)."
},
{
"h": "Posición",
"p": "Suelen ir al inicio y seguidos de coma: \"Admittedly, the price is high, but...\"."
}
],
"examples": [
[
"Admittedly, the hotel was expensive, but it was worth it.",
"Hay que reconocer que el hotel era caro, pero valió la pena."
],
[
"Ironically, the fire station burned down.",
"Irónicamente, el cuartel de bomberos se quemó."
],
[
"Understandably, the fans were disappointed.",
"Comprensiblemente, los aficionados estaban decepcionados."
]
],
"tip": "\"Admittedly\" anticipa una concesión: después suele venir \"but\" o \"however\".",
"questions": [
{
"s": "___, the safety inspector failed his own safety test.",
"o": [
"Ironically",
"Admittedly",
"Presumably",
"Hopefully"
],
"a": 0,
"e": "Contraste inesperado y llamativo: \"Ironically\"."
},
{
"s": "___, the plan has some weaknesses, but it's the best we have.",
"o": [
"Ironically",
"Admittedly",
"Regrettably",
"Seemingly"
],
"a": 1,
"e": "Concesión seguida de \"but\": \"Admittedly\"."
}
],
"vocab": [
[
"admittedly",
"hay que admitir que"
],
[
"seemingly",
"aparentemente"
],
[
"regrettably",
"lamentablemente"
],
[
"conceivably",
"posiblemente"
]
]
},
"C2-8": {
"kind": "reading",
"min": 15,
"icon": "book",
"intro": "Texto al estilo del CPE Reading. Elige la mejor respuesta.",
"text": [
"Boredom has rarely enjoyed a good reputation. Moralists have condemned it as the root of mischief; parents treat it as a problem to be solved, preferably with a screen. And yet a growing body of research suggests that we may have been too quick to dismiss it.",
"In one frequently cited experiment, participants who first completed a deliberately tedious task went on to generate more original ideas than those who had not. The explanation, researchers propose, is that boredom acts less as a void than as a signal: a nudge to seek out something more stimulating, which the wandering mind duly provides.",
"None of this is to romanticise tedium. Chronic boredom is associated with poorer wellbeing, and no one is suggesting that schools should become deliberately dull. The point is subtler: in rushing to eliminate every idle moment, we may be depriving ourselves of the very conditions in which reflection, and with it creativity, tends to flourish."
],
"questions": [
{
"s": "What does the writer imply about common attitudes to boredom?",
"o": [
"They are well supported by research",
"They may be unjustifiably negative",
"They have recently become positive",
"They differ between parents and moralists"
],
"a": 1,
"e": "\"we may have been too quick to dismiss it\".",
"ctx": true
},
{
"s": "How do the researchers interpret boredom?",
"o": [
"As an empty state with no purpose",
"As a cause of misbehaviour",
"As a prompt to look for stimulation",
"As a symptom of poor health"
],
"a": 2,
"e": "\"boredom acts less as a void than as a signal: a nudge to seek out something more stimulating\".",
"ctx": true
},
{
"s": "In the final paragraph, the writer is careful to",
"o": [
"recommend more boring lessons",
"reject the experiment's findings",
"avoid overstating the benefits of boredom",
"criticise the use of screens"
],
"a": 2,
"e": "\"None of this is to romanticise tedium... The point is subtler\".",
"ctx": true
}
],
"vocab": [
[
"mischief",
"travesura / maldad"
],
[
"tedious",
"tedioso"
],
[
"nudge",
"empujoncito"
],
[
"flourish",
"florecer"
]
],
"tip": "En el CPE, las preguntas sobre lo que el autor \"implies\" exigen inferir: rara vez la respuesta está literal en el texto."
},
"C2-9": {
"kind": "listening",
"min": 10,
"icon": "chat",
"intro": "Escucha el debate y responde.",
"script": [
[
"Presenter",
"Machine translation has improved enormously. Elena, as a professional translator, should you be worried?"
],
[
"Elena",
"Worried isn't quite the word. For routine texts, instruction manuals, say, the tools are remarkably good, and I'd be foolish to pretend otherwise."
],
[
"Presenter",
"But for literature?"
],
[
"Elena",
"That's where it gets interesting. A novel isn't just information; it's rhythm, ambiguity, cultural reference. The software can produce something fluent, but fluency and fidelity are not the same thing."
],
[
"Mark",
"If I could come in there: I think Elena slightly underestimates how quickly that gap is closing. Five years ago, I'd have agreed with her entirely."
],
[
"Elena",
"Perhaps. But someone still has to decide what a good translation is. That judgement, I'd argue, remains stubbornly human."
]
],
"questions": [
{
"s": "How does Elena feel about machine translation for routine texts?",
"o": [
"She thinks it's useless",
"She admits it works very well",
"She refuses to use it",
"She thinks it's dangerous"
],
"a": 1,
"e": "\"the tools are remarkably good, and I'd be foolish to pretend otherwise\".",
"ctx": true
},
{
"s": "What distinction does Elena make about literature?",
"o": [
"Between speed and cost",
"Between fluency and fidelity",
"Between poetry and prose",
"Between old and new novels"
],
"a": 1,
"e": "\"fluency and fidelity are not the same thing\".",
"ctx": true
},
{
"s": "What is Mark's position?",
"o": [
"He fully agrees with Elena",
"He thinks the gap is closing faster than she believes",
"He thinks translators will never be replaced",
"He has no opinion"
],
"a": 1,
"e": "\"Elena slightly underestimates how quickly that gap is closing\".",
"ctx": true
}
],
"vocab": [
[
"remarkably",
"notablemente"
],
[
"fidelity",
"fidelidad"
],
[
"come in (in a debate)",
"intervenir"
],
[
"stubbornly",
"obstinadamente"
]
],
"tip": "En el CPE Listening, los matices (\"slightly underestimates\", \"isn't quite the word\") son la clave: casi nunca hay acuerdo o desacuerdo total."
}
});
