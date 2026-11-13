/* =========================================================
   RETOS DE HISTORIA — desafíos variados además de las preguntas
   mcq: pregunta · order: línea de tiempo · tf: verdadero o falso relámpago
   who: ¿quién soy? (pistas) · speak: ¡explica! · mime: mímica
   draw: dibuja y adivina · duel: duelo · mystery: cofre misterioso
   ========================================================= */
window.RETOS = {
types:{
  mcq:{i:'❓',n:'Pregunta',pts:200,c:'#2f5f86'},
  order:{i:'🧭',n:'Línea de tiempo',pts:200,c:'#b5592b'},
  tf:{i:'✅❌',n:'Verdadero o falso relámpago',pts:0,c:'#4c7d3f'},
  who:{i:'🕵️',n:'¿Quién soy?',pts:300,c:'#6b4a8a'},
  speak:{i:'🎤',n:'¡Explica!',pts:300,c:'#9c2f3f'},
  mime:{i:'🎭',n:'Mímica histórica',pts:200,c:'#8a1f2d'},
  draw:{i:'🎨',n:'Dibuja y adivina',pts:200,c:'#c48a2c'},
  duel:{i:'⚔️',n:'Duelo',pts:300,c:'#5a4785'},
  mystery:{i:'🗝️',n:'Cofre misterioso',pts:0,c:'#3b2716'}
},
/* línea de tiempo: [hecho, año] por curso */
timeline:{
 g1:[["Revolución Francesa",1789],["Primera Junta Nacional de Gobierno en Chile",1810],["Acta de Independencia de Chile",1818],["Congreso de Viena",1815],["Batalla de Lircay",1830],
  ["Constitución de 1833",1833],["Fundación de la Universidad de Chile",1842],["Toma de posesión del Estrecho de Magallanes (Fuerte Bulnes)",1843],["Revoluciones de 1848 en Europa",1848],
  ["Manifiesto comunista",1848],["Primer ferrocarril de Chile (Caldera–Copiapó)",1851],["Código Civil chileno entra en vigencia",1857],["El origen de las especies, de Darwin",1859],
  ["Unificación de Alemania (Imperio alemán)",1871],["Conferencia de Berlín (inicio)",1884],["Inicio de la Guerra del Pacífico",1879],["Fundación de Temuco",1881],["Tratado de límites con Argentina",1881],
  ["Incorporación de Rapa Nui",1888],["Torre Eiffel (Exposición Universal)",1889],["Guerra Civil chilena",1891],["Encíclica Rerum Novarum",1891],["Matanza de la Escuela Santa María de Iquique",1907],
  ["Fundación del Partido Obrero Socialista",1912],["Leyes sociales en Chile",1924]],
 g2:[["Inicio de la Primera Guerra Mundial",1914],["Revolución Rusa",1917],["Tratado de Versalles",1919],["Constitución de 1925",1925],["Crisis de 1929 (jueves negro)",1929],
  ["Hitler llega al poder",1933],["Frente Popular gana en Chile",1938],["Creación de la CORFO",1939],["Invasión alemana de Polonia",1939],["Ataque a Pearl Harbor",1941],["Desembarco de Normandía",1944],
  ["Bombas de Hiroshima y Nagasaki",1945],["Creación de la ONU",1945],["Gabriela Mistral gana el Nobel",1945],["Independencia de la India",1947],["Declaración Universal de los Derechos Humanos",1948],
  ["Voto femenino universal en Chile",1949],["Revolución Cubana",1959],["Terremoto de Valdivia",1960],["Construcción del Muro de Berlín",1961],["Crisis de los misiles en Cuba",1962],
  ["Llegada a la Luna",1969],["Elección de Salvador Allende",1970],["Nacionalización del cobre",1971],["Golpe de Estado en Chile",1973],["Constitución de 1980",1980],["Plebiscito del Sí y el No",1988],
  ["Caída del Muro de Berlín",1989],["Patricio Aylwin asume la presidencia",1990],["Disolución de la URSS",1991],["Informe Valech",2004],["Michelle Bachelet asume la presidencia",2006]]
},
/* verdadero o falso: [afirmación, verdadera?] */
tf:{
 g1:[["La Revolución Industrial comenzó en Gran Bretaña.",true],["La Constitución de 1833 estableció la libertad de culto total.",false],["Andrés Bello fue el primer rector de la Universidad de Chile.",true],
  ["Bolivia ganó la Guerra del Pacífico.",false],["El salitre se usaba como fertilizante y para fabricar explosivos.",true],["Rapa Nui se incorporó a Chile en 1888.",true],
  ["La Conferencia de Berlín repartió América del Sur.",false],["Otto von Bismarck lideró la unificación de Italia.",false],["Las fichas salitreras solo servían en la pulpería de la empresa.",true],
  ["El liberalismo defendía el poder absoluto del rey.",false],["La Guerra Civil de 1891 enfrentó a Balmaceda con el Congreso.",true],["Darwin propuso la teoría de la evolución por selección natural.",true],
  ["El primer ferrocarril de Chile unió Santiago y Puerto Montt.",false],["Los conventillos eran viviendas de lujo de la élite.",false],["La burguesía valoraba el trabajo, el ahorro y la familia.",true],
  ["Cuando un producto escasea y muchos lo quieren, su precio suele subir.",true],["El SERNAC protege los derechos de los consumidores.",true],["El IVA es un impuesto que se paga al comprar.",true],
  ["Etiopía derrotó a Italia en la batalla de Adua.",true],["El Estrecho de Magallanes une los océanos Pacífico e Índico.",false],["Arturo Prat murió en el Combate Naval de Iquique.",true],
  ["La ocupación de la Araucanía aumentó las tierras del pueblo mapuche.",false]],
 g2:[["La Primera Guerra Mundial comenzó en 1914.",true],["El Tratado de Versalles favoreció a Alemania.",false],["Lenin dirigió a los bolcheviques en 1917.",true],
  ["La crisis de 1929 comenzó en la bolsa de Nueva York.",true],["Mussolini fue el líder del nazismo alemán.",false],["La ONU se creó en 1945.",true],["El Holocausto fue el genocidio de unos seis millones de judíos.",true],
  ["En la Guerra Fría, EE.UU. y la URSS se enfrentaron directamente en una gran guerra.",false],["El Muro de Berlín cayó en 1989.",true],["Las mujeres chilenas votaron en una elección presidencial por primera vez en 1952.",true],
  ["La CORFO se creó para impulsar la industrialización de Chile.",true],["Salvador Allende fue elegido en 1970.",true],["La nacionalización del cobre fue aprobada por unanimidad en el Congreso.",true],
  ["En el plebiscito de 1988 ganó la opción SÍ.",false],["Patricio Aylwin fue el primer presidente tras la dictadura.",true],["El Informe Rettig investigó la reforma agraria.",false],
  ["La Constitución de 1980 fue redactada en democracia por una asamblea electa.",false],["Gandhi lideró la independencia de la India con la no violencia.",true],
  ["El Congreso Nacional funciona en Valparaíso.",true],["En Chile se puede votar desde los 16 años.",false],["La Declaración Universal de los Derechos Humanos es de 1948.",true],
  ["El Plan Marshall ayudó a reconstruir Europa occidental.",true],["Japón formaba parte de los Aliados en la Segunda Guerra Mundial.",false]]
},
/* ¿quién soy?: [respuesta, [pista 1 (difícil), pista 2, pista 3 (fácil)]] */
who:{
 g1:[["Bernardo O'Higgins",["Fui hijo de un virrey del Perú.","Abdiqué en 1823.","Fui el primer Director Supremo de Chile."]],
  ["Diego Portales",["Fui comerciante del estanco del tabaco.","Fui asesinado en 1837.","Soy símbolo del orden conservador y la Constitución de 1833."]],
  ["Andrés Bello",["Nací en Caracas.","Redacté el Código Civil.","Fui el primer rector de la Universidad de Chile."]],
  ["Arturo Prat",["Fui abogado y marino.","Mi barco era la Esmeralda.","Morí en el Combate Naval de Iquique en 1879."]],
  ["José Manuel Balmaceda",["Impulsé obras públicas con el dinero del salitre.","Me enfrenté al Congreso.","Fui el presidente derrotado en la Guerra Civil de 1891."]],
  ["Luis Emilio Recabarren",["Fui tipógrafo y periodista obrero.","Fui elegido diputado, pero no me dejaron asumir.","Fundé el Partido Obrero Socialista en 1912."]],
  ["Otto von Bismarck",["Fui ministro-presidente de Prusia.","Me llamaban el 'canciller de hierro'.","Unifiqué Alemania en 1871."]],
  ["Giuseppe Garibaldi",["Luché también en Sudamérica.","Dirigí a los 'camisas rojas'.","Fui héroe de la unificación italiana."]],
  ["Charles Darwin",["Visité Chile a bordo del Beagle.","Estudié pinzones en Galápagos.","Escribí 'El origen de las especies'."]],
  ["Karl Marx",["Nací en Tréveris, Alemania.","Escribí 'El capital'.","Fui coautor del 'Manifiesto comunista'."]],
  ["James Watt",["Fui un ingeniero escocés.","Una unidad de potencia lleva mi nombre.","Perfeccioné la máquina de vapor."]],
  ["Policarpo Toro",["Fui capitán de la Armada de Chile.","Firmé un acuerdo con el ariki Atamu Tekena.","Incorporé Rapa Nui a Chile en 1888."]]],
 g2:[["Salvador Allende",["Fui médico y senador.","Lideré la Unidad Popular.","Fui elegido presidente en 1970 y morí en La Moneda en 1973."]],
  ["Adolf Hitler",["Nací en Austria.","Escribí 'Mi lucha'.","Fui el líder del partido nazi."]],
  ["Winston Churchill",["Gané el Nobel de Literatura.","Hablé de un 'telón de acero'.","Fui primer ministro británico en la Segunda Guerra Mundial."]],
  ["Lenin",["Mi nombre real era Vladímir Uliánov.","Viví exiliado en Suiza.","Lideré la Revolución Rusa de octubre de 1917."]],
  ["Gabriela Mistral",["Fui profesora rural en el valle de Elqui.","Mi nombre real era Lucila Godoy.","Fui la primera latinoamericana en ganar el Nobel de Literatura."]],
  ["Pedro Aguirre Cerda",["Fui profesor y abogado.","Creé la CORFO.","Mi lema fue 'Gobernar es educar'."]],
  ["Mahatma Gandhi",["Fui abogado en Sudáfrica.","Lideré la Marcha de la Sal.","Logré la independencia de la India con la no violencia."]],
  ["Ana Frank",["Nací en Fráncfort.","Me escondí en una casa de Ámsterdam.","Escribí un diario durante el Holocausto."]],
  ["Fidel Castro",["Fui abogado.","Desembarqué del yate Granma.","Lideré la Revolución Cubana en 1959."]],
  ["Mijaíl Gorbachov",["Gané el Nobel de la Paz en 1990.","Impulsé la perestroika.","Fui el último líder de la URSS."]],
  ["Elena Caffarena",["Fui abogada.","Fundé el MEMCH en 1935.","Luché por el voto femenino en Chile."]],
  ["Patricio Aylwin",["Fui senador demócrata cristiano.","Lideré la campaña del NO.","Fui el primer presidente tras la dictadura, en 1990."]],
  ["Michelle Bachelet",["Soy médica cirujana.","Fui ministra de Salud y de Defensa.","Fui la primera mujer Presidenta de Chile."]]]
},
/* ¡Explica!: por tema (id del banco) y genéricas */
speak:{
 _:["Expliquen en 30 segundos una causa y una consecuencia del tema.","Nombren 3 conceptos clave del tema y expliquen uno de ellos.","Expliquen por qué este tema es importante para entender el Chile actual.","Relacionen el tema con algo que vean hoy en las noticias."],
 general:["Elijan un personaje histórico y den 3 datos sobre él o ella.","Expliquen qué hecho histórico les gustaría haber presenciado y por qué.","Nombren 3 hechos del siglo XIX y 3 del siglo XX."],
 h1lib:["Expliquen qué es el liberalismo con un ejemplo.","Expliquen la diferencia entre nación y Estado.","Expliquen qué es la separación de poderes."],
 h1burg:["Describan un día en la vida de una familia burguesa del siglo XIX.","Expliquen qué significaba la idea de progreso."],
 h1ind:["Describan cómo era la vida de un niño obrero en 1830.","Expliquen 2 cambios que trajo la Revolución Industrial a las ciudades.","Expliquen qué es un sindicato y para qué sirve."],
 h1imp:["Expliquen 2 causas del imperialismo.","Expliquen por qué muchas fronteras de África son líneas rectas."],
 h1rep:["Expliquen qué características tenía la Constitución de 1833.","Expliquen por qué fue importante la fundación de la Universidad de Chile."],
 h1terr:["Expliquen las causas de la Guerra del Pacífico.","Expliquen las consecuencias de la ocupación de la Araucanía para el pueblo mapuche.","Expliquen cómo se incorporó Rapa Nui a Chile."],
 h1sal:["Describan la vida en una oficina salitrera.","Expliquen qué fue la cuestión social con 2 ejemplos."],
 h1eco:["Expliquen el problema de la escasez con un ejemplo de su vida.","Expliquen qué pasa con el precio cuando sube la demanda.","Den 3 consejos de consumo responsable."],
 h2gm1:["Expliquen 3 causas de la Primera Guerra Mundial.","Describan la vida en una trinchera."],
 h2rus:["Expliquen 2 causas de la Revolución Rusa.","Expliquen la diferencia entre la revolución de febrero y la de octubre de 1917."],
 h2tot:["Expliquen 3 características de un régimen totalitario.","Expliquen por qué la crisis de 1929 afectó tanto a Chile."],
 h2gm2:["Expliquen por qué es importante recordar el Holocausto.","Expliquen 2 consecuencias de la Segunda Guerra Mundial."],
 h2gf:["Expliquen por qué se llamó 'Guerra Fría'.","Expliquen cómo influyó la Guerra Fría en América Latina."],
 h2ch1:["Expliquen qué fue el modelo de industrialización por sustitución de importaciones (ISI).","Expliquen la importancia del voto femenino en Chile."],
 h2up:["Expliquen qué es un detenido desaparecido y por qué es importante la memoria.","Expliquen qué fue la nacionalización del cobre."],
 h2dem:["Expliquen qué pasó en el plebiscito de 1988.","Nombren 2 movimientos sociales recientes y sus demandas."],
 h2ciu:["Expliquen qué son los tres poderes del Estado.","Expliquen 2 formas de participar en democracia siendo estudiantes.","Expliquen qué es el Estado de derecho."]
},
mime:["un obrero en una fábrica textil","Napoleón Bonaparte","un pampino trabajando el salitre","un soldado en una trinchera","Arturo Prat saltando al abordaje","un maquinista de ferrocarril","una sufragista votando por primera vez",
  "un minero del carbón","un astronauta llegando a la Luna","un rey perdiendo su corona","un burgués tomando té","un periodista con su máquina de escribir","una telegrafista enviando un mensaje",
  "derribar el Muro de Berlín","un explorador con un mapa","un campesino arando la tierra","un científico descubriendo algo","un cartero del siglo XIX","una enfermera en la Primera Guerra Mundial","un niño vendiendo diarios"],
draw:["ferrocarril","máquina de vapor","moai","Torre Eiffel","tanque","trinchera","Muro de Berlín","urna de votación","barco a vapor","fábrica con chimeneas","conventillo","balanza de la justicia",
  "bandera de Chile","oficina salitrera","Esmeralda","cohete espacial","bomba atómica","mapa de Chile","telégrafo","Congreso Nacional","constitución","sindicato","carabela","pirámide"],
mystery:[["🎉","¡Tesoro encontrado! +300 puntos","add",300],["😱","¡Saqueo! −100 puntos","add",-100],["🎊","¡Armisticio! Todos los equipos ganan +100","all",100],["🦹","¡Piratas! Quita 200 puntos al equipo que va primero","steal",200],
  ["⭐","¡Medalla al mérito! Tu próximo acierto vale el doble","double",0],["💨","Cofre vacío… pasa el turno","none",0],["🔄","¡Revolución! Intercambia tu puntaje con el equipo que va último","swap",0],["🍀","¡Monedas de oro! +150 puntos","add",150]]
};

/* ---------- motor de retos ---------- */
var CH={cur:null,dbl:{},
  course:function(){var k=S.bank==='__mix'?(BK().ids[Math.floor(Math.random()*BK().ids.length)]):S.bank,g=(BANKS[k]||{}).group;return g==='g1'||g==='g2'?g:(Math.random()<.5?'g1':'g2');},
  bankId:function(){return S.bank==='__mix'?(BK().ids[Math.floor(Math.random()*BK().ids.length)]):S.bank;},
  word:function(){var w=[];catsActive().forEach(function(c){c.q.forEach(function(q){var x=q[2][q[3]];if(/^[A-Za-z]{5,12}$/.test(x))w.push(x);});});return w.length>8&&Math.random()<.6?w[Math.floor(Math.random()*w.length)]:RETOS.spell[Math.floor(Math.random()*RETOS.spell.length)];},
  sentences:function(){var out=[];catsActive().forEach(function(c){c.q.forEach(function(q){var t=q[1],a=q[2][q[3]];
      if(t.indexOf('___')>=0&&!/→|↔|=|answers|goes with|\+|—|:/.test(t)){var s=t.replace(/\s*\([^)]*\)/g,'').replace(/^[^A-Za-z_]+/,'').replace('___',a).replace(/\s+/g,' ').trim();
        var wr=q[2].filter(function(o,i){return i!==q[3];});var n=s.split(' ').length;if(n>=3&&n<=12&&/^[A-Z]/.test(s))out.push({s:s,wrong:t.replace(/\s*\([^)]*\)/g,'').replace(/^[^A-Za-z_]+/,'').replace('___',wr[0]).replace(/\s+/g,' ').trim(),lv:q[0]});}
      else if(/^Correct it|^Choose the correct|^Which (is|sentence)/.test(t)&&/[.?!]$/.test(a)&&a.split(' ').length>=3&&a.split(' ').length<=12)out.push({s:a,wrong:q[2][(q[3]+1)%q[2].length],lv:q[0]});});});
    return out;},
  pickType:function(allowed){var a=allowed||['mcq','order','tf','who','speak','mime','draw','duel','mystery'],w={mcq:3,order:3,tf:2.5,who:2.5,speak:1.5,mime:1.5,draw:1.5,duel:2,mystery:1.5};
    if(S.teams.length<2)a=a.filter(function(x){return x!=='duel';});var tot=a.reduce(function(s,x){return s+(w[x]||1);},0),r=Math.random()*tot;
    for(var i=0;i<a.length;i++){r-=w[a[i]]||1;if(r<=0)return a[i];}return a[0];},
  make:function(type){var T=RETOS.types[type],ch={type:type,t:T,time:30};
    if(type==='mcq'||type==='duel'){ch.q=anyQ();ch.pts=type==='duel'?300:ch.q.lv*50+100;ch.time=type==='duel'?20:30;
      if(type==='duel'){var others=S.teams.map(function(_,i){return i;}).filter(function(i){return i!==S.turn;});ch.rival=others[Math.floor(Math.random()*others.length)];}}
    else if(type==='order'){var P=shuffle(RETOS.timeline[this.course()]),pick=[],yrs={};for(var i=0;i<P.length&&pick.length<4;i++){if(!yrs[P[i][1]]){yrs[P[i][1]]=1;pick.push(P[i]);}}
      pick.sort(function(x,y){return x[1]-y[1];});ch.ev=pick;ch.s=pick.map(function(x){return x[0];}).join(' | ');var sh=shuffle(pick.slice()),k=0;while(sh.map(function(x){return x[0];}).join(' | ')===ch.s&&k++<9)sh=shuffle(pick.slice());ch.words=sh.map(function(x){return x[0];});ch.pts=250;ch.time=45;}
    else if(type==='tf'){ch.items=shuffle(RETOS.tf[this.course()]).slice(0,5).map(function(x){return {s:x[0],ok:x[1]};});ch.i=0;ch.hits=0;ch.time=30;ch.pts=60;}
    else if(type==='who'){var W=RETOS.who[this.course()],x=W[Math.floor(Math.random()*W.length)];ch.w=x[0];ch.clues=x[1];ch.ci=1;ch.pts=300;ch.time=60;}
    else if(type==='speak'){var bk=this.bankId(),P2=(RETOS.speak[bk]||[]).concat(RETOS.speak._);ch.p=P2[Math.floor(Math.random()*P2.length)];ch.topic=BANKS[bk]?BANKS[bk].name:'';ch.pts=300;ch.time=40;}
    else if(type==='mime'||type==='draw'){var M=RETOS[type];ch.w=M[Math.floor(Math.random()*M.length)];ch.pts=200;ch.time=60;}
    else if(type==='spell'){ch.w=this.word();ch.pts=150;ch.time=30;}
    else if(type==='twister'){ch.w=RETOS.twister[Math.floor(Math.random()*RETOS.twister.length)];ch.pts=200;ch.time=20;}
    else if(type==='mystery'){ch.m=RETOS.mystery[Math.floor(Math.random()*RETOS.mystery.length)];ch.time=0;}
    if(this.dbl[S.turn]&&ch.pts){ch.pts*=2;ch.doubled=true;}
    return ch;},
  /* HTML del contenido del reto; fin(ok) se llama al resolver los retos autocorregibles */
  body:function(ch){var T=ch.t,team=S.teams[S.turn],L='ABCD',h='';
    var hint={order:'Hagan clic en los hechos del MÁS ANTIGUO al MÁS RECIENTE.',tf:'¿Verdadero o falso? Respondan rápido: 5 afirmaciones.',speak:'Un integrante del equipo explica en voz alta. El profesor decide si lo logró.',who:'Adivinen el personaje. Cada pista extra resta 100 puntos.',
      mime:'Un integrante actúa SIN hablar. Su equipo adivina qué o a quién representa.',draw:'Un integrante dibuja en la pizarra SIN letras ni números. Su equipo adivina.',
      duel:'¡Duelo! Responde primero quien pulse su tecla (o levante la mano).',mcq:'Elijan la alternativa correcta.'}[ch.type]||'';
    if(hint)h+='<p style="text-align:center;color:#7d5f3f;font-weight:700;margin:4px 0 10px">'+hint+'</p>';
    if(ch.type==='mcq'||ch.type==='duel'){var q=ch.q;
      if(ch.type==='duel')h+='<div style="text-align:center;font-family:Playfair Display;font-size:28px;font-weight:600;margin-bottom:6px">'+team.emoji+' '+esc(team.name)+' ⚔️ '+S.teams[ch.rival].emoji+' '+esc(S.teams[ch.rival].name)+'</div>';
      h+='<div class="qtext">'+esc(q.text)+'</div><div class="opts" id="iopts">'+q.opts.map(function(x,i){return '<button class="op" data-i="'+i+'" '+(ch.type==='mcq'?'onclick="CH.mcq('+i+')"':'onclick="this.classList.toggle(\'pick\')"')+'><span class="l">'+L[i]+'</span>'+esc(x)+'</button>';}).join('')+'</div>';}
    else if(ch.type==='order'){h+='<div class="chipsw" id="ow" style="justify-content:center">'+ch.words.map(function(w,i){return '<button class="w" data-k="'+i+'" onclick="CH.ow(this)">'+esc(w)+'</button>';}).join('')+'</div><div class="built" id="ob"></div>';}
    else if(ch.type==='tf'){h+='<div id="tfbox"></div>';}
    else if(ch.type==='who'){h+='<div id="whobox">'+CH.whoHtml(ch)+'</div><div class="secret" id="secret"></div>';}
    else if(ch.type==='speak'){h+='<div class="qtext">🎤 '+esc(ch.p)+'</div>'+(ch.topic?'<p style="text-align:center;font-weight:800;color:#a66bff">Tema: '+esc(ch.topic)+'</p>':'');}
    else if(ch.type==='mime'||ch.type==='draw'){h+='<div class="secret" id="secret"><button class="btn" onclick="CH.peek()">👀 Ver la palabra (solo el '+(ch.type==='mime'?'actor':'dibujante')+')</button></div>';}
    else if(ch.type==='spell'){h+='<div style="text-align:center"><button class="btn big" onclick="say(CH.cur.w)">🔊 Escuchar la palabra</button><div class="secret" id="secret" style="margin-top:12px"><button class="btn sec" onclick="CH.show()">👁 Mostrar la palabra</button></div></div>';}
    else if(ch.type==='twister'){h+='<div class="qtext">😜 '+esc(ch.w)+'</div><div style="text-align:center"><button class="spk" onclick="say(CH.cur.w)">🔊 Escuchar</button></div>';}
    else if(ch.type==='mystery'){h+='<div class="mbox2"><div class="mbx">🎁</div></div>';}
    return h;},
  head:function(ch,label){var T=ch.t;return '<div class="mtop"><span class="mcat" style="color:'+T.c+'">'+T.i+' '+(label||'')+T.n+'</span>'+(ch.pts?'<span class="mval">'+(ch.doubled?'⭐ ':'')+ch.pts+' pts</span>':'')+(ch.time?'<span class="timer" id="qtimer"></span>':'')+'</div>';},
  /* reto en ventana (tablero/ruleta) */
  inModal:function(ch,label,awardHtml,onAuto){this.cur=ch;this.onAuto=onAuto;stopTimer();QC.q={text:(ch.t.i+' '+ch.t.n+': '+(ch.s||ch.p||ch.w||(ch.q&&ch.q.text)||'')),cat:{name:ch.t.n,icon:ch.t.i},ans:ch.s||ch.w||(ch.q?ch.q.opts[ch.q.a]:'')};
    QC.o={mode:ch.type==='duel'?'teacher':'retos'};QC.done=false;QC.t0=null;QC.tStop=null;QC.limit=0;QC.buzz=null;QC.out=[];
    $('mbox').innerHTML=this.head(ch,label)+this.body(ch)+'<div class="buzz" id="qbuzz"></div><div class="answer" id="qans"></div><div class="award" id="qaward">'+awardHtml+'</div>';$('mo').classList.add('open');
    this.after();},
  after:function(){var ch=this.cur;if(ch.time)startTimer(ch.time,function(){if(ch.done)return;if(ch.type==='tf')CH.tfEnd();else if(ch.type==='mcq')CH.mcq(-1);
      else if(ch.type==='order'){ch.done=true;$('qans').innerHTML='⏰ ✅ '+ch.ev.map(function(x){return esc(x[0])+' ('+x[1]+')';}).join(' → ');$('qans').classList.add('show');sBad();CH.fin(false);}});
    if(ch.type==='tf')this.tfShow();if(ch.type==='mystery')setTimeout(function(){CH.mystery();},900);},
  whoHtml:function(ch){return ch.clues.slice(0,ch.ci).map(function(c,i){return '<div class="qtext" style="font-size:clamp(20px,2.6vw,32px);margin:6px 0">🔎 Pista '+(i+1)+': '+esc(c)+'</div>';}).join('')+
      (ch.ci<ch.clues.length&&!ch.done?'<div style="text-align:center"><button class="btn sec" onclick="CH.clue()">➕ Otra pista (−100)</button></div>':'');},
  clue:function(){var ch=this.cur;if(ch.ci>=ch.clues.length||ch.done)return;ch.ci++;ch.pts=Math.max(100,ch.pts-100);$('whobox').innerHTML=this.whoHtml(ch);var b=document.querySelector('#qaward button');if(b&&/Lo lograron/.test(b.textContent))b.textContent='✅ ¡Lo lograron! (+'+ch.pts+')';tone(660,.08);},
  peek:function(){var b=$('secret');b.innerHTML='<div class="qtext" style="margin:6px 0">'+esc(this.cur.w)+'</div><p style="text-align:center">Se ocultará en 3 segundos…</p>';
    setTimeout(function(){if($('secret'))$('secret').innerHTML='<p style="text-align:center;font-weight:800">🤫 ¡A '+(CH.cur.type==='mime'?'actuar':'dibujar')+'! <button class="spk" onclick="CH.show()">👁 Mostrar a todos</button></p>';},3000);},
  show:function(){var ch=this.cur;if(ch.type==='who'){ch.done=true;ch.ci=ch.clues.length;$('whobox').innerHTML=this.whoHtml(ch);}$('secret').innerHTML='<div class="qtext" style="margin:6px 0">'+(ch.type==='who'?'🕵️ ':'')+esc(ch.w)+'</div>';},
  mcq:function(k){var ch=this.cur;if(ch.done)return;ch.done=true;stopTimer();markInline(k,ch.q.a);var ok=k===ch.q.a;ok?sOk():sBad();this.fin(ok);},
  ow:function(b){var ob=$('ob');var c=document.createElement('button');c.className='w';c.textContent=b.textContent;
    c.onclick=function(){if(CH.cur.done)return;b.classList.remove('used');c.remove();};ob.appendChild(c);b.classList.add('used');
    if(!document.querySelector('#ow .w:not(.used)')){var got=[].map.call(ob.querySelectorAll('.w'),function(x){return x.textContent;}).join(' | ');var ok=got===this.cur.s;this.cur.done=true;stopTimer();
      ob.style.background=ok?'#d9f7e8':'#ffe0e6';$('qans').innerHTML=(ok?'🎉 ':'✅ ')+this.cur.ev.map(function(x){return esc(x[0])+' ('+x[1]+')';}).join(' → ');$('qans').classList.add('show');ok?sOk():sBad();this.fin(ok);}},
  tfShow:function(){var ch=this.cur,it=ch.items[ch.i];if(!it)return this.tfEnd();
    $('tfbox').innerHTML='<p style="text-align:center;font-weight:800;color:#7d5f3f">'+(ch.i+1)+' / '+ch.items.length+' · ✅ '+ch.hits+'</p><div class="qtext">'+esc(it.s)+'</div><div class="opts"><button class="op" style="background:#4c7d3f" onclick="CH.tf(true)">✅ Correct</button><button class="op" style="background:#b3313f" onclick="CH.tf(false)">❌ Wrong</button></div>';},
  tf:function(v){var ch=this.cur;if(ch.done||ch.lock)return;ch.lock=true;var it=ch.items[ch.i],ok=v===it.ok;if(ok){ch.hits++;tone(880,.08);}else tone(200,.15);
    var ops=document.querySelectorAll('#tfbox .op');ops[v?0:1].style.outline='5px solid '+(ok?'#0f8a52':'#3b2716');
    setTimeout(function(){ch.lock=false;ch.i++;if(ch.i>=ch.items.length)CH.tfEnd();else CH.tfShow();},ok?350:800);},
  tfEnd:function(){var ch=this.cur;if(ch.done)return;ch.done=true;stopTimer();ch.pts=ch.hits*60*(ch.doubled?2:1);$('tfbox').innerHTML='<div class="qtext">✅ '+ch.hits+' de '+ch.items.length+' correctas</div>';ch.hits>=3?sOk():sBad();this.fin(ch.hits>=3,ch.pts);},
  fin:function(ok,pts){if(this.onAuto)this.onAuto(ok,pts!=null?pts:this.cur.pts);},
  mystery:function(){if(!this.cur||!this.cur.m)return;var m=this.cur.m,t=S.turn,team=S.teams[t];var box=document.querySelector('.mbx');if(box){box.textContent=m[0];box.classList.add('open');}
    $('qans').innerHTML=m[1];$('qans').classList.add('show');
    if(m[2]==='add'){team.score+=m[3];floatPts(t,(m[3]>0?'+':'−')+Math.abs(m[3]),m[3]<0);m[3]>0?sOk():sBad();}
    else if(m[2]==='all'){S.teams.forEach(function(x,i){x.score+=m[3];floatPts(i,'+'+m[3]);});sOk();}
    else if(m[2]==='steal'){var lead=S.teams.map(function(x,i){return i;}).filter(function(i){return i!==t;}).sort(function(a,b){return S.teams[b].score-S.teams[a].score;})[0];if(lead!=null){S.teams[lead].score-=m[3];team.score+=m[3];floatPts(lead,'−'+m[3],true);floatPts(t,'+'+m[3]);}sOk();}
    else if(m[2]==='double'){this.dbl[t]=true;sOk();}
    else if(m[2]==='swap'){var last=S.teams.map(function(x,i){return i;}).filter(function(i){return i!==t;}).sort(function(a,b){return S.teams[a].score-S.teams[b].score;})[0];if(last!=null){var tmp=team.score;team.score=S.teams[last].score;S.teams[last].score=tmp;}tone(600,.2);tone(400,.2,.15);}
    else sBad();
    renderScore();logR(t,true,0,{text:'🎁 '+m[1],cat:{name:'Caja misteriosa'},ans:''});if(this.onAuto)this.onAuto(null,0,true);}
};

/* ---------- juego: Retos locos ---------- */
var RT={
  init:function(){CH.dbl={};this.intro();},
  intro:function(){var t=S.teams[S.turn];
    $('stage').innerHTML='<div class="introcard"><div class="deck" onclick="RT.draw()"><span>🎲</span></div><h2>Turno de '+t.emoji+' '+esc(t.name)+'</h2>'+(CH.dbl[S.turn]?'<p style="color:var(--yellow);font-weight:900">⭐ ¡Su próximo reto vale el doble!</p>':'')+
      '<p style="opacity:.85">Saquen una carta: puede ser una pregunta, una línea de tiempo, verdadero o falso, ¿quién soy?, explicar, mímica, dibujar, un duelo… ¡o un cofre misterioso!</p>'+
      '<div class="row" style="justify-content:center;margin-top:12px"><button class="btn big" onclick="RT.draw()">🎴 ¡Sacar reto!</button></div>'+
      '<div class="rtypes">'+Object.keys(RETOS.types).map(function(k){var T=RETOS.types[k];return '<span style="background:'+T.c+'">'+T.i+' '+T.n+'</span>';}).join('')+'</div></div>';renderScore();},
  draw:function(){var self=this;$('stage').innerHTML='<div class="introcard"><div class="deck flipping"><span>🎴</span></div><h2>…</h2></div>';tone(500,.08);tone(700,.08,.1);tone(900,.12,.2);
    setTimeout(function(){self.show(CH.make(CH.pickType()));},700);},
  show:function(ch){CH.cur=ch;var T=ch.t,team=S.teams[S.turn],self=this;if(ch.doubled)CH.dbl[S.turn]=false;
    var judge=(ch.type==='speak'||ch.type==='mime'||ch.type==='draw'||ch.type==='who');
    var act=judge?'<button style="background:#4c7d3f" onclick="RT.res(true)">✅ ¡Lo lograron! (+'+ch.pts+')</button><button style="background:#b3313f" onclick="RT.res(false)">❌ No lo lograron</button>':
      ch.type==='duel'?'<button style="background:'+COLORS[S.turn]+'" onclick="RT.duel('+S.turn+')">'+team.emoji+' '+esc(team.name)+' ✅</button><button style="background:'+COLORS[ch.rival]+'" onclick="RT.duel('+ch.rival+')">'+S.teams[ch.rival].emoji+' '+esc(S.teams[ch.rival].name)+' ✅</button><button style="background:#555" onclick="RT.duel(null)">😶 Nadie</button><button class="spk" onclick="CH.duelReveal()">💡 Mostrar respuesta</button>':'';
    $('stage').innerHTML='<div class="qcard flipin" style="border-top:10px solid '+T.c+'">'+CH.head(ch,team.emoji+' '+team.name+' · ')+CH.body(ch)+'<div class="buzz" id="qbuzz"></div><div class="answer" id="qans"></div><div class="award" id="qaward">'+act+'</div></div>';
    CH.onAuto=function(ok,pts,myst){if(myst){$('qaward').innerHTML='<button style="background:var(--yellow);color:#3b2716" onclick="RT.next()">▶ Siguiente equipo</button>';return;}
      var p=0;if(ok){p=award(S.turn,pts);}else miss(S.turn);logR(S.turn,!!ok,p,{text:T.n+': '+(ch.s||(ch.q&&ch.q.text)||''),cat:{name:T.i+' '+T.n},ans:ch.s||(ch.q?ch.q.opts[ch.q.a]:'')});
      $('qaward').innerHTML='<div style="width:100%;text-align:center;font-weight:900;font-size:20px">'+(ok?'🎉 +'+p+' pts':'😅 ¡Casi!')+'</div><button style="background:var(--yellow);color:#3b2716" onclick="RT.next()">▶ Siguiente equipo</button>';};
    QC.o={mode:ch.type==='duel'?'teacher':'retos'};QC.done=false;QC.buzz=null;QC.out=[];CH.after();},
  res:function(ok){stopTimer();var ch=CH.cur;if(ch.type==='mime'||ch.type==='draw'||ch.type==='who'){if($('secret'))CH.show();}ok?sOk():sBad();CH.onAuto(ok,ch.pts);},
  duel:function(i){stopTimer();var ch=CH.cur;CH.duelReveal();var p=0;if(i!=null){p=award(i,ch.pts);sOk();}else sBad();if(i!==S.turn)miss(S.turn);
    logR(i,i!=null,p,{text:'⚔️ '+ch.q.text,cat:{name:'⚔️ Duelo'},ans:ch.q.opts[ch.q.a]});
    $('qaward').innerHTML='<div style="width:100%;text-align:center;font-weight:900;font-size:20px">'+(i!=null?'🏆 '+S.teams[i].name+' gana el duelo (+'+p+')':'Nadie gana el duelo')+'</div><button style="background:var(--yellow);color:#3b2716" onclick="RT.next()">▶ Siguiente equipo</button>';},
  next:function(){stopTimer();if(window.countTurn&&countTurn())return;S.turn=(S.turn+1)%S.teams.length;this.intro();}
};
CH.duelReveal=function(){var ch=CH.cur;if(!ch||!ch.q)return;markInline(-1,ch.q.a);$('qans').innerHTML='✅ '+esc(ch.q.opts[ch.q.a]);$('qans').classList.add('show');};
