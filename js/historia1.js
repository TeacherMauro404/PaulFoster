/* =========================================================
   BANCO DE PREGUNTAS — HISTORIA, GEOGRAFÍA Y CS. SOCIALES · 1° MEDIO
   Basado en las Bases Curriculares y el Programa de Estudio (Mineduc):
   U1 Estado-nación y sociedad burguesa en Europa y América (s. XIX)
   U2 Progreso, industrialización y crisis
   U3 Configuración del territorio chileno y sus dinámicas geográficas
   U4 El orden liberal y las transformaciones sociales en Chile · Formación económica
   Formato: [nivel 1–5, pregunta, [opciones], índice correcto]
   (las opciones se mezclan al azar en el juego)
   ========================================================= */
(function(){
function T(id,name,icon,tag,desc,cats,top5){return {id:id,name:name,icon:icon,tag:tag,desc:desc,top5:top5,cats:cats.map(function(c,i){return {id:id+'_'+i,name:c[0],icon:c[1],q:c[2]};})};}
window.HIST1=[

T("h1lib","Liberalismo y Estados nación","🗽","1° Medio · Unidad 1","Ideas liberales · revoluciones · nacionalismo · unificaciones · Estado-nación",[
 ["Ideas liberales","🗽",[
  [1,"¿Qué idea defendía el liberalismo del siglo XIX?",["Las libertades individuales y un gobierno limitado por una constitución","El poder absoluto del rey sin límites","La eliminación de toda propiedad privada","El gobierno exclusivo de la Iglesia"],0],
  [1,"Para un liberal del siglo XIX, ¿qué documento debía limitar el poder de los gobernantes?",["Una constitución","Un decreto del rey","Una bula papal","Un tratado comercial"],0],
  [2,"¿Qué significa 'separación de poderes'?",["Dividir el poder en Ejecutivo, Legislativo y Judicial","Separar la Iglesia de las escuelas","Dividir un país en provincias","Separar a ricos y pobres"],0],
  [3,"¿Qué pensador propuso la separación de poderes en 'El espíritu de las leyes'?",["Montesquieu","Napoleón Bonaparte","Karl Marx","Otto von Bismarck"],0],
  [3,"En el siglo XIX, el sufragio censitario permitía votar…",["Solo a hombres con cierto nivel de riqueza o propiedades","A todas las personas mayores de 18 años","Solo a las mujeres","A todos los hombres y mujeres"],0],
  [4,"¿Qué principio liberal afirma que el poder viene del pueblo y no de Dios ni del rey?",["La soberanía nacional o popular","El derecho divino","El mercantilismo","El feudalismo"],0],
  [5,"¿Qué diferenciaba a liberales y conservadores en el siglo XIX?",["Los liberales buscaban ampliar libertades y limitar el poder; los conservadores defendían el orden tradicional y la Iglesia","Los conservadores querían eliminar la religión","Los liberales defendían la monarquía absoluta","No había diferencias entre ellos"],0]]],
 ["Revoluciones liberales","🔥",[
  [1,"¿En qué país comenzó en 1789 la revolución que inspiró las ideas liberales del siglo XIX?",["Francia","Rusia","Chile","Japón"],0],
  [2,"¿Cuál era el lema de la Revolución Francesa?",["Libertad, igualdad, fraternidad","Orden y progreso","Por la razón o la fuerza","Paz, pan y tierra"],0],
  [2,"¿Qué se conoció como 'la Primavera de los Pueblos'?",["Las revoluciones de 1848 en Europa","La independencia de América","La Revolución Industrial","El fin de la Segunda Guerra Mundial"],0],
  [3,"¿Qué documento de 1789 proclamó derechos para los ciudadanos?",["La Declaración de los Derechos del Hombre y del Ciudadano","La Carta de las Naciones Unidas","La Constitución de 1833","El Tratado de Versalles"],0],
  [4,"Tras la derrota de Napoleón, las monarquías europeas intentaron restaurar el orden antiguo en el…",["Congreso de Viena (1815)","Congreso de Berlín (1884)","Tratado de Tordesillas","Plan Marshall"],0],
  [4,"¿Qué buscaban principalmente los revolucionarios de 1830 y 1848?",["Constituciones, más derechos políticos y, en algunos casos, independencia nacional","Volver al feudalismo","Fortalecer el absolutismo","Prohibir la prensa"],0],
  [5,"¿Por qué las independencias de Hispanoamérica (1810–1825) se relacionan con las ideas liberales?",["Porque defendían la soberanía popular y gobiernos republicanos con constitución","Porque buscaban fortalecer el poder del rey de España","Porque rechazaban toda forma de constitución","Porque querían volver al sistema de encomiendas"],0]]],
 ["Nacionalismo","🚩",[
  [1,"El nacionalismo es la idea de que…",["Cada nación con lengua, cultura e historia comunes debe tener su propio Estado","Todos los países deben unirse en uno solo","El rey es dueño del territorio","Las fronteras no importan"],0],
  [2,"¿Cuál de estos elementos suele unir a una nación?",["Lengua, historia y tradiciones compartidas","El mismo equipo de fútbol","El mismo color de pelo","Tener la misma edad"],0],
  [2,"¿Qué símbolos se usaron en el siglo XIX para fortalecer la identidad nacional?",["Himnos, banderas y héroes patrios","Memes y stickers","Logos de empresas","Cartas de naipe"],0],
  [3,"¿Qué institución fue clave para difundir la identidad nacional en el siglo XIX?",["La escuela pública","Los castillos feudales","Las redes sociales","Los monasterios medievales"],0],
  [4,"¿Qué imperio multinacional se vio amenazado por los nacionalismos de húngaros, checos y otros pueblos?",["El Imperio austríaco (austrohúngaro)","El Imperio inca","El Imperio británico en la India","El Imperio azteca"],0],
  [5,"¿Qué consecuencia negativa tuvo el nacionalismo extremo a fines del siglo XIX?",["Rivalidades entre potencias que contribuyeron a la Primera Guerra Mundial","La desaparición de todas las fronteras","El fin de las guerras en Europa","La unión de todos los países en un imperio"],0]]],
 ["Unificaciones","🧩",[
  [1,"¿Qué dos países europeos se unificaron en la segunda mitad del siglo XIX?",["Italia y Alemania","Francia e Inglaterra","España y Portugal","Rusia y Polonia"],0],
  [2,"¿Quién fue el 'canciller de hierro' que lideró la unificación alemana?",["Otto von Bismarck","Giuseppe Garibaldi","Napoleón III","Simón Bolívar"],0],
  [2,"¿Qué líder italiano dirigió la expedición de los 'camisas rojas'?",["Giuseppe Garibaldi","Otto von Bismarck","Luis XVI","Benito Mussolini"],0],
  [3,"¿Qué reino lideró la unificación de Alemania?",["Prusia","Baviera","Austria","Sajonia"],0],
  [3,"¿Qué reino lideró la unificación italiana?",["Piamonte-Cerdeña","Nápoles","Los Estados Pontificios","Venecia"],0],
  [4,"¿Dónde se proclamó el Imperio alemán en 1871?",["En el Palacio de Versalles, Francia","En el Coliseo de Roma","En el Kremlin de Moscú","En el Big Ben de Londres"],0],
  [5,"¿Qué ciudad se incorporó al Reino de Italia en 1870 y pasó a ser su capital?",["Roma","Turín","Milán","Florencia"],0]]],
 ["Estado-nación","🏛️",[
  [1,"¿Qué elementos forman un Estado?",["Territorio, población y gobierno soberano","Solo un rey y un castillo","Una bandera y un equipo de fútbol","Solo un ejército"],0],
  [2,"¿Qué es la soberanía?",["El poder de un Estado para gobernarse sin depender de otro","El dinero que tiene un país","La religión oficial","El idioma de un país"],0],
  [3,"Tras la independencia, los nuevos Estados americanos debieron…",["Organizar gobiernos, dictar constituciones y definir fronteras","Volver a depender de España","Eliminar todas las ciudades","Adoptar la monarquía absoluta"],0],
  [3,"¿Qué diferencia hay entre 'nación' y 'Estado'?",["La nación es una comunidad cultural; el Estado es la organización política con gobierno y territorio","Son exactamente lo mismo","El Estado es una canción y la nación una bandera","La nación solo existe en Europa"],0],
  [4,"¿Qué problema enfrentaron muchos Estados americanos en el siglo XIX?",["Guerras civiles y disputas entre caudillos","Exceso de población en el campo","La invención del automóvil","La falta total de recursos naturales"],0],
  [5,"La construcción de los Estados nacionales en América implicó muchas veces…",["Imponer una identidad nacional que invisibilizó a pueblos indígenas y afrodescendientes","Respetar plenamente la autonomía de todos los pueblos originarios","Eliminar las fronteras entre países","Volver al sistema colonial"],0]]]
],[
 ["Derechos o libertades que defendía el liberalismo 🗽",["libertad de expresión","libertad de prensa","propiedad privada","igualdad ante la ley","derecho a voto"],"libertad de culto, libertad de asociación, seguridad individual"],
 ["Símbolos de una nación 🚩",["bandera","himno","escudo","héroes patrios","idioma"],"fiestas patrias, monumentos, moneda, comidas típicas"]]),

T("h1burg","Cultura burguesa y progreso","🎩","1° Medio · Unidad 1","Burguesía · ciencia · vida cotidiana · arte · Belle Époque",[
 ["La burguesía","🎩",[
  [1,"¿Quiénes formaban la burguesía en el siglo XIX?",["Comerciantes, banqueros, industriales y profesionales","Reyes y nobles","Campesinos y siervos","Monjes y sacerdotes"],0],
  [2,"¿Qué valores eran muy importantes para la burguesía?",["El trabajo, el ahorro y el mérito personal","La guerra y la conquista","La pobreza voluntaria","La herencia de títulos nobiliarios"],0],
  [2,"¿Dónde vivía principalmente la burguesía?",["En las ciudades","En castillos medievales","En monasterios","En el desierto"],0],
  [3,"¿Qué institución era central en el ideal de vida burgués?",["La familia","El gremio medieval","El ejército","El feudo"],0],
  [4,"En el modelo burgués, ¿qué rol se esperaba de la mujer?",["Dedicarse al hogar y la crianza (ámbito privado)","Gobernar el país","Dirigir las fábricas","Ser soldado"],0],
  [5,"¿Por qué se dice que la burguesía fue la clase 'triunfadora' del siglo XIX?",["Porque concentró el poder económico y político tras las revoluciones liberales e industriales","Porque ganó todas las guerras","Porque era la clase más numerosa","Porque vivía en el campo"],0]]],
 ["Ciencia y progreso","🔬",[
  [1,"¿Qué significaba la idea de 'progreso' en el siglo XIX?",["Creer que la humanidad avanzaría siempre gracias a la ciencia y la técnica","Volver a las costumbres medievales","Rechazar los inventos","Vivir sin tecnología"],0],
  [2,"¿Quién propuso la teoría de la evolución por selección natural?",["Charles Darwin","Isaac Newton","Albert Einstein","Galileo Galilei"],0],
  [2,"¿Qué científico desarrolló la vacuna contra la rabia y la pasteurización?",["Louis Pasteur","Marie Curie","Thomas Edison","Charles Darwin"],0],
  [3,"¿Qué corriente de pensamiento afirmaba que solo es válido el conocimiento comprobado científicamente?",["El positivismo","El romanticismo","El absolutismo","El mercantilismo"],0],
  [3,"¿Qué invento de Thomas Edison cambió la vida nocturna de las ciudades?",["La ampolleta (bombilla eléctrica)","La rueda","La imprenta","El telescopio"],0],
  [4,"¿Para qué se organizaban las Exposiciones Universales, como la de París de 1889?",["Para mostrar los avances técnicos e industriales de los países","Para elegir al rey de Europa","Para declarar guerras","Para firmar tratados de paz"],0],
  [5,"¿Qué científica ganó dos premios Nobel por sus estudios sobre la radiactividad?",["Marie Curie","Ada Lovelace","Rosalind Franklin","Gabriela Mistral"],0]]],
 ["Vida cotidiana","☕",[
  [1,"¿Qué medio de transporte revolucionó los viajes en el siglo XIX?",["El ferrocarril","El avión","El automóvil eléctrico","El metro"],0],
  [2,"¿Qué lugares de encuentro eran típicos de la vida social burguesa?",["Los cafés, teatros y salones","Los torneos medievales","Los centros comerciales","Los cibercafés"],0],
  [3,"¿Qué invento permitió enviar mensajes a larga distancia en segundos en el siglo XIX?",["El telégrafo","El correo electrónico","La paloma mensajera","El fax"],0],
  [3,"¿Qué se buscaba con la educación pública en el siglo XIX?",["Formar ciudadanos y trabajadores para la nación","Formar caballeros feudales","Que solo estudiaran los reyes","Eliminar la lectura"],0],
  [4,"La moda burguesa del siglo XIX era una forma de…",["Mostrar el estatus social y la respetabilidad","Rebelarse contra la familia","Imitar a los campesinos","Ocultar la riqueza"],0],
  [5,"¿Qué cambios urbanos impulsó el barón Haussmann en París?",["Grandes avenidas (bulevares), alcantarillado y parques","Nuevas murallas medievales","Calles más estrechas","Un castillo en cada barrio"],0]]],
 ["Arte y cultura","🎨",[
  [1,"¿Qué movimiento artístico destacó los sentimientos, la naturaleza y el pasado nacional?",["El romanticismo","El cubismo","El pop art","El arte rupestre"],0],
  [2,"¿Qué movimiento quiso retratar la vida real, incluso la pobreza y el trabajo?",["El realismo","El surrealismo","El barroco","El gótico"],0],
  [3,"¿Qué pintores buscaron captar la luz y el instante, como Claude Monet?",["Los impresionistas","Los cubistas","Los muralistas mexicanos","Los renacentistas"],0],
  [3,"¿Qué escritor francés escribió 'Los miserables', que retrata la pobreza del siglo XIX?",["Victor Hugo","William Shakespeare","Miguel de Cervantes","Pablo Neruda"],0],
  [4,"¿Qué novelista inglés denunció la vida de los niños pobres en 'Oliver Twist'?",["Charles Dickens","Charles Darwin","Julio Verne","Mark Twain"],0],
  [5,"¿Qué autor francés imaginó viajes a la Luna y bajo el mar, reflejando la fe en el progreso?",["Julio Verne","Victor Hugo","Gustave Flaubert","Alejandro Dumas"],0]]],
 ["Belle Époque","🗼",[
  [1,"¿Qué famoso monumento se construyó para la Exposición Universal de París de 1889?",["La Torre Eiffel","El Coliseo","La Estatua de la Libertad","El Big Ben"],0],
  [2,"¿Cómo se llamó el período de optimismo y prosperidad en Europa entre 1871 y 1914?",["Belle Époque","Edad Media","Guerra Fría","Siglo de Oro"],0],
  [3,"¿Qué nuevo entretenimiento nació con los hermanos Lumière en 1895?",["El cine","La televisión","La radio","Los videojuegos"],0],
  [4,"¿Cómo llegó la cultura burguesa europea a Chile en el siglo XIX?",["La élite imitó la moda, la arquitectura y las costumbres de París y Londres","Chile la prohibió por ley","Llegó recién en el año 2000","Nunca llegó"],0],
  [4,"¿Qué edificio de Santiago, inaugurado en 1857, refleja la influencia europea del siglo XIX?",["El Teatro Municipal","El Costanera Center","La Torre Entel","El Estadio Nacional"],0],
  [5,"¿Por qué la Belle Époque no fue 'bella' para todos?",["Porque la prosperidad convivió con la pobreza obrera y la explotación colonial","Porque nadie podía ir al cine","Porque se prohibieron los cafés","Porque no existía la electricidad"],0]]]
],[
 ["Inventos del siglo XIX 💡",["ferrocarril","telégrafo","teléfono","ampolleta","fotografía"],"cine, automóvil, vacunas, máquina de coser, barco a vapor"],
 ["Valores de la burguesía 🎩",["trabajo","ahorro","familia","educación","esfuerzo"],"orden, progreso, mérito, respetabilidad, propiedad"]]),

T("h1ind","Revolución Industrial","🏭","1° Medio · Unidad 2","Inicios · inventos y energía · trabajo en la fábrica · ciudades · movimiento obrero",[
 ["Inicios en Gran Bretaña","⚙️",[
  [1,"¿En qué país comenzó la Revolución Industrial?",["Gran Bretaña (Inglaterra)","Chile","China","Brasil"],0],
  [1,"¿En qué siglo comenzó la Revolución Industrial?",["Siglo XVIII","Siglo XII","Siglo XX","Siglo V"],0],
  [2,"¿Qué recursos abundaban en Inglaterra y fueron claves para la industria?",["Carbón y hierro","Petróleo y litio","Oro y plata","Cobre y salitre"],0],
  [3,"¿Qué sector fue el primero en mecanizarse?",["La industria textil (algodón)","La industria del software","La aviación","La industria automotriz"],0],
  [4,"¿Qué cambio en el campo ayudó a la industrialización?",["Una mayor productividad agrícola y los cercamientos, que liberaron mano de obra hacia las ciudades","La prohibición de cultivar","La vuelta al feudalismo","El fin de la ganadería"],0],
  [5,"¿Qué diferencia a la producción industrial de la artesanal?",["Usa máquinas, fábricas y división del trabajo para producir en masa","Se hace a mano en casa","Produce piezas únicas y lentas","No necesita trabajadores"],0]]],
 ["Inventos y energía","🚂",[
  [1,"¿Qué máquina perfeccionó James Watt?",["La máquina de vapor","El computador","El teléfono celular","La guillotina"],0],
  [2,"¿Qué transporte movido a vapor unió ciudades y puertos?",["La locomotora o ferrocarril","El avión","El cohete","La bicicleta"],0],
  [2,"¿Qué energía impulsó la Primera Revolución Industrial?",["El vapor obtenido con carbón","La energía solar","La energía nuclear","Solo el viento de los molinos"],0],
  [3,"¿Qué nuevas fuentes de energía caracterizaron la Segunda Revolución Industrial (fines del s. XIX)?",["La electricidad y el petróleo","El carbón vegetal y la leña","La fuerza humana","La energía eólica"],0],
  [4,"¿Qué invento atribuido a Alexander Graham Bell transformó las comunicaciones?",["El teléfono","La radio","El telégrafo","Internet"],0],
  [5,"¿Qué sistema de producción en cadena aplicó Henry Ford a comienzos del siglo XX?",["La cadena de montaje","El trabajo a domicilio","El trueque","El gremio artesanal"],0]]],
 ["Trabajo en la fábrica","🏭",[
  [1,"¿Cómo se llamaba a los trabajadores de las fábricas?",["Obreros o proletarios","Señores feudales","Burgueses","Hidalgos"],0],
  [2,"¿Cuántas horas podía durar una jornada laboral en una fábrica a inicios del siglo XIX?",["Entre 12 y 16 horas","4 horas","8 horas con viernes libre","Solo los fines de semana"],0],
  [2,"¿Por qué los dueños de fábricas contrataban niños?",["Porque les pagaban menos y eran pequeños para manejar algunas máquinas","Porque eran expertos ingenieros","Porque lo exigía la ley","Porque trabajaban menos horas"],0],
  [3,"¿Qué hacían los 'luditas' en Inglaterra?",["Destruían máquinas porque creían que les quitaban el trabajo","Inventaban nuevas máquinas","Eran dueños de fábricas","Construían ferrocarriles"],0],
  [4,"¿Qué es el salario?",["El pago que recibe el trabajador por su trabajo","Un impuesto al rey","Una máquina textil","Un tipo de carbón"],0],
  [5,"¿Qué es la división del trabajo?",["Repartir la producción en tareas simples y repetitivas","Que cada obrero haga el producto completo","Trabajar solo la mitad del día","Dividir las ganancias en partes iguales"],0]]],
 ["Ciudades industriales","🏙️",[
  [1,"¿Qué ocurrió con las ciudades durante la Revolución Industrial?",["Crecieron rápidamente por la migración desde el campo","Quedaron vacías","Desaparecieron","Se convirtieron en bosques"],0],
  [2,"¿Qué ciudad inglesa fue símbolo de la industria textil?",["Manchester","Roma","París","Madrid"],0],
  [3,"¿Cómo eran las viviendas obreras en las ciudades industriales?",["Pequeñas, hacinadas y con poca higiene","Grandes casas con jardín","Castillos","Departamentos de lujo"],0],
  [3,"¿Qué enfermedad se propagaba por el agua contaminada en las ciudades industriales?",["El cólera","La diabetes","La miopía","La gripe aviar"],0],
  [4,"¿Qué problema ambiental trajo la industrialización?",["Contaminación del aire y de los ríos por el humo y los desechos","Exceso de bosques","Desaparición del carbón del planeta","Enfriamiento de los océanos"],0],
  [5,"¿Cómo se llama el traslado masivo de población del campo a la ciudad?",["Éxodo rural (migración campo-ciudad)","Globalización","Colonización","Trashumancia"],0]]],
 ["Movimiento obrero e ideologías","✊",[
  [1,"¿Qué organizaciones formaron los obreros para defender sus derechos?",["Sindicatos","Bancos","Monasterios","Ejércitos privados"],0],
  [2,"¿Qué es una huelga?",["Paralizar el trabajo como forma de presión","Un tipo de máquina","Una fiesta de la fábrica","Un sueldo extra"],0],
  [2,"¿Quiénes escribieron el 'Manifiesto comunista' (1848)?",["Karl Marx y Friedrich Engels","Adam Smith y David Ricardo","Darwin y Pasteur","Bismarck y Garibaldi"],0],
  [3,"¿Qué ideología buscaba abolir el Estado y toda forma de autoridad?",["El anarquismo","El liberalismo","El absolutismo","El mercantilismo"],0],
  [4,"¿Qué proponía el socialismo?",["Que los medios de producción fueran colectivos para reducir la desigualdad","Que el rey fuera dueño de todo","Eliminar los sindicatos","Bajar los sueldos"],0],
  [4,"¿Qué documento de la Iglesia católica (1891) abordó los problemas de los obreros?",["La encíclica Rerum Novarum","La Biblia de Gutenberg","El Código Civil","La Carta Magna"],0],
  [5,"¿Qué se recuerda cada 1° de mayo?",["El Día Internacional de los Trabajadores, en memoria de los mártires de Chicago (1886)","El fin de la Primera Guerra Mundial","La llegada de Colón a América","La independencia de Chile"],0]]]
],[
 ["Inventos de la Revolución Industrial ⚙️",["máquina de vapor","ferrocarril","telar mecánico","barco a vapor","telégrafo"],"lanzadera volante, hiladora, teléfono, ampolleta, automóvil"],
 ["Problemas de los obreros del siglo XIX 🏭",["largas jornadas","bajos salarios","trabajo infantil","malas viviendas","enfermedades"],"accidentes, hacinamiento, falta de higiene, despidos, contaminación"]]),

T("h1imp","Imperialismo europeo","🌍","1° Medio · Unidad 2","Causas · reparto de África · Asia · justificaciones · consecuencias",[
 ["Causas del imperialismo","💰",[
  [1,"¿Qué es el imperialismo?",["El dominio de potencias sobre otros territorios y pueblos","Un tipo de gobierno democrático","La unión de países iguales","Un estilo de arte"],0],
  [2,"¿Qué buscaban las potencias industriales en las colonias?",["Materias primas, mercados y mano de obra barata","Turismo y vacaciones","Aprender idiomas","Deshacerse de sus fábricas"],0],
  [2,"¿Qué potencia tuvo el imperio más extenso a fines del siglo XIX?",["Gran Bretaña","Suiza","Bolivia","Islandia"],0],
  [3,"¿Por qué se dice que el imperialismo también tuvo causas políticas?",["Porque las colonias daban prestigio y poder frente a otras potencias","Porque los reyes querían descansar","Porque las colonias pedían ser invadidas","Porque estaba prohibido comerciar"],0],
  [4,"¿Qué potencias no europeas también practicaron el imperialismo?",["Estados Unidos y Japón","Paraguay y Bolivia","Etiopía y Liberia","Uruguay y Ecuador"],0],
  [5,"¿Qué relación tuvo la Segunda Revolución Industrial con el imperialismo?",["Las industrias necesitaban más materias primas (caucho, petróleo, minerales) y nuevos mercados","Ninguna, ocurrieron en siglos distintos","La industria terminó con las colonias","Las colonias producían los trenes de Europa"],0]]],
 ["Reparto de África","🦁",[
  [1,"¿Qué continente fue repartido casi completamente entre potencias europeas?",["África","Oceanía","Antártica","América del Norte"],0],
  [2,"¿En qué conferencia (1884–1885) las potencias acordaron reglas para repartirse África?",["La Conferencia de Berlín","El Congreso de Viena","La Conferencia de Yalta","El Tratado de Versalles"],0],
  [3,"¿Qué dos países africanos se mantuvieron independientes hacia 1914?",["Etiopía y Liberia","Egipto y Sudáfrica","Congo y Nigeria","Marruecos y Argelia"],0],
  [3,"¿Qué rey europeo tuvo el Congo como propiedad personal, con terribles abusos contra la población?",["Leopoldo II de Bélgica","Napoleón III","Víctor Manuel II","Guillermo II"],0],
  [4,"¿Por qué muchas fronteras africanas actuales son líneas rectas?",["Porque fueron trazadas por europeos sin considerar a los pueblos que vivían allí","Porque los ríos son rectos","Porque los africanos las votaron así","Porque siguen las montañas"],0],
  [5,"¿Qué batalla de 1896 fue una famosa victoria africana contra un ejército europeo?",["Adua (Etiopía derrotó a Italia)","Waterloo","Trafalgar","Maipú"],0]]],
 ["Asia y el imperialismo","🏯",[
  [1,"¿Qué colonia era llamada 'la joya de la corona británica'?",["La India","Australia","Canadá","Jamaica"],0],
  [2,"¿Qué guerras enfrentaron a China y Gran Bretaña por el comercio de una droga?",["Las Guerras del Opio","Las Guerras Púnicas","La Guerra de los Cien Años","La Guerra del Pacífico"],0],
  [3,"¿Qué ciudad china pasó a manos británicas en 1842 y fue devuelta en 1997?",["Hong Kong","Pekín","Shanghái","Tokio"],0],
  [3,"¿Qué país asiático se modernizó en la Era Meiji y se convirtió en potencia imperialista?",["Japón","India","Vietnam","Filipinas"],0],
  [4,"¿Qué potencia europea controlaba Indochina (actuales Vietnam, Laos y Camboya)?",["Francia","Alemania","Rusia","Portugal"],0],
  [5,"¿Qué fue la rebelión de los cipayos (1857)?",["Un levantamiento de soldados indios contra el dominio británico","Una revolución obrera en Inglaterra","Una guerra entre Japón y China","Una revuelta de colonos en Australia"],0]]],
 ["Justificaciones","📖",[
  [1,"¿Cómo justificaban los europeos la conquista de otros pueblos?",["Decían tener una misión 'civilizadora'","Decían que los otros pueblos los habían invitado","Decían que era un juego","No daban ninguna justificación"],0],
  [2,"¿Qué teoría racista aplicó ideas de Darwin a las sociedades humanas?",["El darwinismo social","El liberalismo económico","El positivismo jurídico","El romanticismo"],0],
  [3,"¿Qué poema de Rudyard Kipling expresó la idea de la 'misión civilizadora'?",["'La carga del hombre blanco'","'La Araucana'","'Canto general'","'Los miserables'"],0],
  [4,"Hoy sabemos que la idea de razas 'superiores' e 'inferiores' es…",["Falsa y sin base científica; sirvió para justificar la dominación","Correcta según la biología","Una ley de la física","Aceptada por la ONU"],0],
  [5,"¿Qué papel cumplieron muchas misiones religiosas en las colonias?",["Evangelizar y educar, muchas veces imponiendo la cultura europea","Organizar rebeliones contra Europa","Construir fábricas de armas","Prohibir la educación"],0]]],
 ["Consecuencias","⚖️",[
  [1,"¿Qué consecuencias tuvo el imperialismo para los pueblos colonizados?",["Pérdida de tierras, explotación y daño a sus culturas","Mayor libertad política","El fin de la pobreza","Respeto a sus gobiernos"],0],
  [2,"¿Qué construyeron los europeos en las colonias para extraer recursos?",["Ferrocarriles, puertos y plantaciones","Pirámides y templos","Castillos medievales","Satélites"],0],
  [3,"¿Qué es un monocultivo, típico de las economías coloniales?",["Cultivar un solo producto para exportar","Cultivar muchos productos para el consumo local","Cultivar solo en invierno","Una técnica de pesca"],0],
  [4,"¿Cómo influyeron las rivalidades imperialistas en la historia europea?",["Aumentaron las tensiones que llevaron a la Primera Guerra Mundial","Unieron a todas las potencias en paz","Terminaron con los ejércitos","No tuvieron ningún efecto"],0],
  [5,"¿Qué proceso del siglo XX puso fin a la mayoría de los imperios coloniales?",["La descolonización","La Revolución Industrial","El Renacimiento","La Reforma protestante"],0]]]
],[
 ["Potencias imperialistas del siglo XIX 🌍",["Gran Bretaña","Francia","Alemania","Bélgica","Estados Unidos"],"Japón, Italia, Rusia, Países Bajos, Portugal, España"],
 ["Recursos que buscaban en las colonias 💰",["oro","diamantes","caucho","algodón","té"],"cacao, café, marfil, petróleo, especias, cobre"]]),

T("h1rep","La República en Chile (s. XIX)","🇨🇱","1° Medio · Unidad 1","Organización de la República · Constitución de 1833 · gobiernos · educación · economía",[
 ["Primeros pasos de la República","🏛️",[
  [1,"¿En qué año se formó la Primera Junta Nacional de Gobierno en Chile?",["1810","1818","1833","1879"],0],
  [1,"¿En qué año se firmó el Acta de Independencia de Chile?",["1818","1810","1891","1925"],0],
  [2,"¿Quién fue el primer Director Supremo de Chile tras la independencia?",["Bernardo O'Higgins","Diego Portales","Arturo Prat","José Manuel Balmaceda"],0],
  [3,"¿Cómo se conoce al período 1823–1830, con varios intentos de organizar el país?",["Ensayos constitucionales u organización de la República","Patria Vieja","Reconquista","República Parlamentaria"],0],
  [4,"¿Qué ensayo de 1826 intentó organizar a Chile como una federación de provincias?",["Las leyes federales","La Constitución moralista","La Constitución de 1833","La Constitución de 1925"],0],
  [5,"¿Qué batalla de 1830 puso fin a la guerra civil y dio el triunfo a los conservadores?",["Lircay","Maipú","Rancagua","Chacabuco"],0]]],
 ["Constitución de 1833","📜",[
  [1,"¿Qué ministro se asocia al orden conservador y a la Constitución de 1833?",["Diego Portales","Manuel Rodríguez","Salvador Allende","Pedro de Valdivia"],0],
  [2,"¿Qué característica tenía el Presidente según la Constitución de 1833?",["Mucho poder (presidencialismo autoritario)","Ningún poder","Era elegido por el rey de España","Gobernaba solo un año"],0],
  [3,"¿Qué religión era oficial según la Constitución de 1833?",["La católica, apostólica y romana","Ninguna","La protestante","Todas por igual"],0],
  [3,"¿Por qué se habla de los 'decenios' en Chile entre 1831 y 1871?",["Porque los presidentes gobernaban dos períodos seguidos de 5 años","Porque cada presidente gobernaba un año","Porque había elecciones cada 10 días","Porque Chile tenía diez presidentes a la vez"],0],
  [4,"¿Quiénes podían votar según la Constitución de 1833?",["Hombres mayores de edad, que supieran leer y escribir y tuvieran propiedades o renta","Todos los habitantes","Hombres y mujeres mayores de 18 años","Solo el Presidente"],0],
  [5,"¿Hasta qué año rigió la Constitución de 1833?",["1925","1891","1973","1980"],0]]],
 ["Gobiernos del siglo XIX","👔",[
  [1,"¿Qué presidente gobernaba Chile cuando comenzó la Guerra del Pacífico (1879)?",["Aníbal Pinto","Manuel Montt","José Joaquín Prieto","Pedro Montt"],0],
  [2,"¿Durante el gobierno de qué presidente se fundó la Universidad de Chile en 1842?",["Manuel Bulnes","Bernardo O'Higgins","Arturo Alessandri","Eduardo Frei"],0],
  [3,"¿Qué presidente se enfrentó al Congreso en la Guerra Civil de 1891?",["José Manuel Balmaceda","Manuel Bulnes","Ramón Freire","José Joaquín Prieto"],0],
  [3,"¿Qué período comenzó tras la Guerra Civil de 1891, con un Congreso muy poderoso?",["La República Parlamentaria","La Patria Vieja","La Reconquista","La Unidad Popular"],0],
  [4,"¿Qué reformas impulsaron los liberales en la segunda mitad del siglo XIX?",["Leyes laicas: cementerios laicos, matrimonio y registro civil","Volver a la monarquía","Prohibir la educación pública","Eliminar el Congreso"],0],
  [5,"¿Qué presidente gobernó durante el decenio de 1851 a 1861?",["Manuel Montt","Manuel Bulnes","José Joaquín Prieto","Federico Errázuriz"],0]]],
 ["Cultura y educación","📚",[
  [1,"¿Qué universidad se fundó en Chile en 1842?",["La Universidad de Chile","La Universidad de Harvard","La Universidad de Salamanca","La Universidad Católica"],0],
  [2,"¿Qué intelectual venezolano fue el primer rector de la Universidad de Chile?",["Andrés Bello","Simón Bolívar","Domingo F. Sarmiento","Rubén Darío"],0],
  [3,"¿Qué importante código redactó Andrés Bello, vigente hasta hoy con modificaciones?",["El Código Civil","El Código de Hammurabi","El Código Penal de 2020","El Código del Trabajo"],0],
  [3,"¿Qué argentino dirigió en Chile la primera Escuela Normal de Preceptores (1842)?",["Domingo Faustino Sarmiento","José de San Martín","Juan Manuel de Rosas","Bartolomé Mitre"],0],
  [4,"¿Qué ley de 1860 estableció la educación primaria gratuita a cargo del Estado?",["La Ley Orgánica de Instrucción Primaria","La Ley de Matrimonio Civil","La Ley de Educación Superior","La Ley Maldita"],0],
  [5,"¿Qué permitió a las mujeres el decreto Amunátegui de 1877?",["Rendir exámenes válidos para ingresar a la universidad","Votar en elecciones presidenciales","Ser elegidas diputadas","Trabajar en fábricas"],0]]],
 ["Economía del siglo XIX","🌾",[
  [1,"¿Qué producto agrícola exportaba Chile a California y Australia a mediados del siglo XIX?",["Trigo","Café","Plátanos","Cacao"],0],
  [2,"¿Qué mineral se descubrió en Chañarcillo (1832), impulsando la minería?",["Plata","Salitre","Litio","Petróleo"],0],
  [3,"¿Entre qué ciudades se construyó el primer ferrocarril de Chile (1851)?",["Caldera y Copiapó","Santiago y Valparaíso","Arica y Tacna","Concepción y Talcahuano"],0],
  [3,"¿Qué puerto chileno fue el más importante del Pacífico sur en el siglo XIX?",["Valparaíso","Puerto Montt","Arica","San Antonio"],0],
  [4,"¿Qué nombre recibe un modelo económico basado en exportar materias primas?",["Modelo primario-exportador","Industrialización por sustitución de importaciones","Economía digital","Economía feudal"],0],
  [5,"¿Qué hecho de 1914 hizo perder importancia al puerto de Valparaíso?",["La apertura del Canal de Panamá","La Revolución Francesa","La invención del avión","El fin del salitre"],0]]]
],[
 ["Gobernantes de Chile del siglo XIX 👔",["Bernardo O'Higgins","Manuel Bulnes","Manuel Montt","José Manuel Balmaceda","Aníbal Pinto"],"José Joaquín Prieto, José Joaquín Pérez, Federico Errázuriz Zañartu, Domingo Santa María"],
 ["Instituciones o leyes creadas en Chile en el siglo XIX 📚",["Universidad de Chile","Código Civil","Escuela Normal","Registro Civil","Constitución de 1833"],"Instituto Nacional, Biblioteca Nacional, Ley de Instrucción Primaria, matrimonio civil"]]),

T("h1terr","El territorio chileno","🗺️","1° Medio · Unidad 3","Guerra del Pacífico · Araucanía · Magallanes · Rapa Nui · geografía de Chile",[
 ["Guerra del Pacífico","⚓",[
  [1,"¿Qué países se enfrentaron a Chile en la Guerra del Pacífico (1879–1884)?",["Perú y Bolivia","Argentina y Brasil","Ecuador y Colombia","Paraguay y Uruguay"],0],
  [2,"¿Qué recurso natural estaba en el centro del conflicto?",["El salitre","El cobre","El litio","El oro"],0],
  [2,"¿Qué marino chileno murió en el Combate Naval de Iquique el 21 de mayo de 1879?",["Arturo Prat","Bernardo O'Higgins","Manuel Rodríguez","Lord Cochrane"],0],
  [3,"¿Qué hecho desencadenó la guerra?",["Bolivia cobró un nuevo impuesto a una salitrera chilena, contra lo pactado en el tratado de 1874","Chile invadió Lima sin motivo","Perú cerró sus puertos al trigo","Un terremoto en Antofagasta"],0],
  [4,"¿Qué buque peruano, comandado por Miguel Grau, hundió a la Esmeralda?",["El Huáscar","La Covadonga","El Cochrane","La Independencia"],0],
  [4,"¿Qué territorios incorporó Chile tras la guerra?",["Tarapacá y Antofagasta (y luego Arica)","Mendoza y San Juan","Lima y Cusco","La Patagonia argentina"],0],
  [5,"¿Qué consecuencia tuvo la guerra para Bolivia?",["Perdió su acceso soberano al mar","Ganó territorio en el Pacífico","Se unió a Chile","Se convirtió en potencia naval"],0]]],
 ["Ocupación de la Araucanía","🌲",[
  [1,"¿Qué pueblo habitaba la Araucanía antes de su ocupación por el Estado chileno?",["El pueblo mapuche","El pueblo aymara","El pueblo rapanui","El pueblo inca"],0],
  [2,"¿Qué nombre dio el Estado chileno a la ocupación militar de la Araucanía (1861–1883)?",["'Pacificación' de la Araucanía","Conquista del desierto","Reconquista","Revolución en libertad"],0],
  [3,"¿Qué militar chileno dirigió el avance de la línea de fuertes en la década de 1860?",["Cornelio Saavedra","Manuel Baquedano","Arturo Prat","Ignacio Carrera Pinto"],0],
  [3,"¿Qué ciudad se fundó en 1881 durante la ocupación de la Araucanía?",["Temuco","Valdivia","Concepción","La Serena"],0],
  [4,"¿Qué consecuencias tuvo la ocupación para el pueblo mapuche?",["Pérdida de gran parte de sus tierras, reducciones y empobrecimiento","Aumento de su territorio","Independencia total","Ninguna"],0],
  [5,"¿Qué eran las 'reducciones' o títulos de merced?",["Pequeñas porciones de tierra asignadas a comunidades mapuche","Descuentos en impuestos","Fuertes militares","Leyes de educación"],0]]],
 ["Sur austral y Magallanes","🧭",[
  [1,"¿Qué estrecho del sur de Chile une los océanos Atlántico y Pacífico?",["El Estrecho de Magallanes","El Estrecho de Gibraltar","El Canal de Panamá","El Estrecho de Bering"],0],
  [2,"¿Qué fuerte fundó Chile en 1843 para tomar posesión del Estrecho de Magallanes?",["Fuerte Bulnes","Fuerte Niebla","Fuerte Esmeralda","Fuerte Apache"],0],
  [3,"¿Qué inmigrantes colonizaron la zona del lago Llanquihue desde 1850?",["Alemanes","Japoneses","Rusos","Árabes"],0],
  [3,"¿Qué agente de colonización organizó la llegada de colonos alemanes al sur?",["Vicente Pérez Rosales","Benjamín Vicuña Mackenna","Diego Portales","Andrés Bello"],0],
  [4,"¿Qué tratado de 1881 definió gran parte de la frontera entre Chile y Argentina?",["El Tratado de Límites de 1881","El Tratado de Ancón","El Tratado de Tordesillas","El Tratado de Versalles"],0],
  [5,"¿Qué actividad económica impulsó el poblamiento de Magallanes a fines del siglo XIX?",["La ganadería ovina","El cultivo de plátanos","La minería del salitre","La industria automotriz"],0],
  [5,"¿Qué pueblo originario de Tierra del Fuego fue casi exterminado durante la expansión ganadera?",["Selk'nam (onas)","Aymara","Diaguita","Rapanui"],0]]],
 ["Rapa Nui","🗿",[
  [1,"¿En qué año se incorporó Rapa Nui (Isla de Pascua) a Chile?",["1888","1810","1973","1541"],0],
  [2,"¿Qué marino chileno firmó el Acuerdo de Voluntades con el ariki (rey) rapanui?",["Policarpo Toro","Arturo Prat","Lord Cochrane","Juan Fernández"],0],
  [2,"¿Cómo se llaman las grandes estatuas de piedra de Rapa Nui?",["Moai","Rehue","Chemamüll","Pucará"],0],
  [3,"¿En qué océano está Rapa Nui?",["Océano Pacífico","Océano Atlántico","Océano Índico","Océano Ártico"],0],
  [4,"¿Qué empresa arrendó la isla para criar ovejas, restringiendo la vida de los rapanui?",["La Compañía Explotadora de Isla de Pascua","La CORFO","Codelco","La Compañía Sudamericana de Vapores"],0],
  [5,"¿Qué buscaba Chile al incorporar Rapa Nui?",["Proyectar su presencia en el océano Pacífico","Conseguir salitre","Construir un aeropuerto en 1888","Exportar trigo a la isla"],0]]],
 ["Geografía de Chile","🏔️",[
  [1,"¿Qué cordillera, la más alta de Chile, lo recorre de norte a sur?",["La cordillera de los Andes","La cordillera de la Costa","El Himalaya","Los montes Urales"],0],
  [2,"¿Qué desierto, uno de los más áridos del mundo, está en el norte de Chile?",["El desierto de Atacama","El desierto del Sahara","El desierto de Gobi","El desierto de Kalahari"],0],
  [2,"¿Cuáles son las formas de relieve principales de Chile de este a oeste?",["Cordillera de los Andes, depresión intermedia, cordillera de la Costa y planicies litorales","Montañas, selvas, pampas y glaciares","Volcanes, islas, lagos y ríos","Mesetas, llanuras, deltas y bahías"],0],
  [3,"¿Qué significa que Chile es un país 'tricontinental'?",["Que tiene territorio en América, Oceanía (Rapa Nui) y la Antártica","Que habla tres idiomas","Que tiene tres capitales","Que limita con tres océanos"],0],
  [4,"¿Por qué Chile tiene tantos sismos y volcanes?",["Porque está en el Cinturón de Fuego del Pacífico, donde chocan placas tectónicas","Por su cercanía al Polo Norte","Por la gran cantidad de ríos","Porque es un país angosto"],0],
  [5,"¿Cuántas regiones administrativas tiene Chile actualmente?",["16","12","13","20"],0]]]
],[
 ["Territorios incorporados a Chile en el siglo XIX 🗺️",["Antofagasta","Tarapacá","Araucanía","Magallanes","Rapa Nui"],"Arica, Llanquihue, Tierra del Fuego, Fuerte Bulnes"],
 ["Batallas o combates de la Guerra del Pacífico ⚓",["Combate Naval de Iquique","Combate de Angamos","Toma del Morro de Arica","Batalla de La Concepción","Batalla de Chorrillos"],"Punta Gruesa, Batalla de Tacna, Batalla de Miraflores, Batalla de Dolores"]]),

T("h1sal","Salitre y cuestión social","⛏️","1° Medio · Unidad 4","Ciclo del salitre · oficinas · cuestión social · movimiento obrero · Guerra Civil de 1891",[
 ["El ciclo del salitre","⛏️",[
  [1,"¿Para qué se usaba principalmente el salitre?",["Como fertilizante y para fabricar explosivos","Para fabricar ropa","Como combustible de autos","Para hacer pan"],0],
  [2,"¿En qué zonas del norte se explotaba el salitre?",["Tarapacá y Antofagasta","Los Lagos y Aysén","Maule y Ñuble","Valparaíso y O'Higgins"],0],
  [2,"¿Cómo se llamaban los centros de explotación del salitre?",["Oficinas salitreras","Haciendas","Estancias","Viñas"],0],
  [3,"¿Qué inversionista británico fue llamado 'el rey del salitre'?",["John Thomas North","Charles Darwin","Lord Cochrane","Agustín Edwards"],0],
  [4,"¿Qué recibía el Estado chileno gracias al salitre?",["Impuestos a la exportación que financiaron obras públicas y educación","Nada","Solo pagos en trigo","Arriendos de casas"],0],
  [5,"¿Qué provocó la crisis final del salitre natural chileno?",["La invención del salitre sintético en Alemania y la crisis de 1929","Un terremoto en Santiago","La Guerra del Pacífico","La independencia de Chile"],0]]],
 ["Vida en las oficinas","🏚️",[
  [1,"¿Cómo se llamaba al trabajador del salitre?",["Pampino","Gaucho","Huaso","Pirquinero"],0],
  [2,"¿Qué eran las 'fichas' en las oficinas salitreras?",["Monedas propias de la empresa que solo servían en su pulpería","Cartas de juego","Documentos de identidad","Premios deportivos"],0],
  [2,"¿Qué era la pulpería?",["El almacén de la oficina salitrera","Una fiesta pampina","Un tipo de herramienta","La casa del administrador"],0],
  [3,"¿Qué oficinas salitreras son hoy Patrimonio de la Humanidad?",["Humberstone y Santa Laura","Chuquicamata y El Teniente","Lota y Coronel","Sewell y Potrerillos"],0],
  [4,"¿Por qué el sistema de fichas perjudicaba a los trabajadores?",["Los obligaba a comprar a precios altos solo en la pulpería de la empresa","Les daba descuentos","Les permitía ahorrar en bancos","Les pagaba el doble"],0],
  [5,"¿Qué condiciones de trabajo había en la pampa?",["Jornadas largas, calor extremo, accidentes y escasa protección","Jornada de 4 horas con vacaciones pagadas","Trabajo bajo techo con aire acondicionado","Seguro de salud para todos"],0]]],
 ["La cuestión social","😷",[
  [1,"¿Qué se conoce como 'la cuestión social'?",["Los graves problemas de pobreza y desigualdad de los trabajadores a fines del s. XIX e inicios del XX","Una fiesta de la élite","Un concurso de preguntas","Una ley de 1833"],0],
  [2,"¿Cómo se llamaban las viviendas colectivas con una pieza por familia en las ciudades?",["Conventillos","Mansiones","Palacios","Rucas"],0],
  [3,"¿Qué grave problema de salud afectaba a los niños pobres a inicios del siglo XX?",["Una altísima mortalidad infantil","Exceso de vacunas","Obesidad por comida rápida","Uso excesivo de pantallas"],0],
  [3,"¿Qué enfermedades eran comunes por la falta de higiene en los conventillos?",["Tuberculosis, viruela y tifus","Diabetes y miopía","Gripe aviar y COVID","Alergias al polen"],0],
  [4,"¿Qué profesor denunció la cuestión social en 'Sinceridad: Chile íntimo en 1910'?",["Alejandro Venegas (Dr. J. Valdés Canje)","Pablo Neruda","Andrés Bello","Eduardo Frei"],0],
  [5,"¿Qué leyes de 1924 marcaron el inicio de la legislación social en Chile?",["Leyes sobre contrato de trabajo, sindicatos y seguro obrero","La ley de divorcio","La ley de voto femenino","La ley de gratuidad universitaria"],0]]],
 ["Movimiento obrero en Chile","✊",[
  [1,"¿Qué matanza ocurrió en 1907 en Iquique contra obreros del salitre en huelga?",["La matanza de la Escuela Santa María","La masacre de Ránquil","La batalla de Rancagua","El Combate Naval de Iquique"],0],
  [2,"¿Qué líder obrero fundó el Partido Obrero Socialista en 1912?",["Luis Emilio Recabarren","Arturo Alessandri","Diego Portales","Manuel Montt"],0],
  [3,"¿Qué eran las sociedades mutuales?",["Organizaciones de ayuda mutua entre trabajadores (salud, funerales, ahorro)","Bancos extranjeros","Clubes de la élite","Empresas salitreras"],0],
  [3,"¿Qué eran las mancomunales?",["Organizaciones obreras que defendían derechos y organizaban huelgas, sobre todo en el norte","Haciendas del valle central","Iglesias evangélicas","Partidos conservadores"],0],
  [4,"¿Qué obra musical de Quilapayún recuerda la matanza de 1907?",["La Cantata Santa María de Iquique","'Gracias a la vida'","'El derecho de vivir en paz'","'Te recuerdo Amanda'"],0],
  [5,"¿Contra qué protestaba la 'huelga de la carne' de 1905 en Santiago?",["Contra un impuesto al ganado argentino que encarecía la carne","Contra las vacaciones de los carniceros","Contra la comida vegetariana","Contra los futbolistas"],0]]],
 ["Guerra Civil de 1891","⚔️",[
  [1,"¿Entre quiénes fue la Guerra Civil de 1891?",["El Presidente Balmaceda y el Congreso","Chile y Perú","Mapuches y españoles","Obreros y empresas salitreras"],0],
  [2,"¿Qué bando ganó la Guerra Civil de 1891?",["El Congreso (congresistas)","Balmaceda","Bolivia","Nadie"],0],
  [3,"¿Qué rama de las Fuerzas Armadas apoyó mayoritariamente al Congreso?",["La Armada","Todo el Ejército","La Fuerza Aérea","Carabineros"],0],
  [3,"¿Qué hizo Balmaceda tras su derrota?",["Se suicidó en la legación argentina","Huyó a Europa","Fue elegido nuevamente","Se convirtió en senador"],0],
  [4,"¿Qué buscaba Balmaceda con los ingresos del salitre?",["Invertir en obras públicas, educación y ferrocarriles con mayor control estatal","Regalar el salitre a Inglaterra","Cerrar las escuelas","Disolver el país"],0],
  [5,"¿En qué batallas de 1891 fueron derrotadas las fuerzas balmacedistas?",["Concón y Placilla","Maipú y Chacabuco","Yungay y Lircay","Tacna y Arica"],0]]]
],[
 ["Problemas de la cuestión social 😷",["pobreza","conventillos","enfermedades","mortalidad infantil","alcoholismo"],"hacinamiento, bajos sueldos, analfabetismo, falta de agua potable"],
 ["Cosas que encontrabas en una oficina salitrera ⛏️",["pulpería","fichas","campamento","escuela","iglesia"],"teatro, plaza, máquinas, ferrocarril, filarmónica"]]),

T("h1eco","Economía y mercado","💰","1° Medio · Formación económica","Escasez · oferta y demanda · agentes económicos · ahorro y crédito · consumo responsable",[
 ["Necesidades y escasez","🤔",[
  [1,"¿Cuál es el problema económico fundamental?",["Las necesidades son ilimitadas y los recursos escasos","Hay demasiado dinero","Los recursos son infinitos","Nadie tiene necesidades"],0],
  [2,"¿Cuál de estas es una necesidad básica?",["Alimentación","Tener la última consola","Ir a un concierto","Comprar zapatillas de marca"],0],
  [2,"¿Qué es un bien?",["Un objeto material que satisface una necesidad","Un servicio que no se puede tocar","Un tipo de impuesto","Un banco"],0],
  [3,"¿Cuál de estos es un servicio?",["Una consulta médica","Un lápiz","Una mochila","Un pan"],0],
  [3,"¿Qué es el 'costo de oportunidad'?",["Lo que dejas de obtener al elegir una alternativa","El precio de una oferta","Un descuento","El valor de un regalo"],0],
  [4,"Si tienes $5.000 y eliges ir al cine en vez de comprar un libro, ¿cuál es tu costo de oportunidad?",["El libro que no compraste","La entrada al cine","Los $5.000","Nada"],0],
  [5,"¿Qué preguntas económicas básicas debe responder toda sociedad?",["¿Qué producir?, ¿cómo producir? y ¿para quién producir?","¿Quién es el rey?, ¿dónde vive?, ¿qué come?","¿Cuándo llueve?, ¿cuánto llueve?, ¿dónde llueve?","¿Qué estudiar?, ¿dónde estudiar?, ¿con quién?"],0]]],
 ["Oferta y demanda","📈",[
  [1,"En economía, ¿qué es la demanda?",["La cantidad de un bien que los consumidores quieren y pueden comprar","Lo que producen las empresas","Un juicio en tribunales","Un impuesto"],0],
  [2,"¿Qué es la oferta?",["La cantidad de un bien que los productores están dispuestos a vender","Un descuento del 50%","La cantidad que la gente quiere comprar","Un regalo"],0],
  [2,"Si hay muy pocas entradas para un concierto muy popular, ¿qué pasa con el precio?",["Sube","Baja","Se vuelve gratis","Nunca cambia"],0],
  [3,"Si en verano hay muchísimas sandías en las ferias, ¿qué suele pasar con su precio?",["Baja","Sube muchísimo","Desaparece","Se duplica"],0],
  [4,"¿Qué es el precio de equilibrio?",["El precio en que la cantidad ofrecida es igual a la demandada","El precio más alto posible","El precio que fija el colegio","El precio de liquidación"],0],
  [5,"¿Qué es un monopolio?",["Un mercado con un solo vendedor, que puede fijar los precios","Un juego de mesa sin reglas","Un mercado con miles de vendedores","Una cooperativa de consumidores"],0]]],
 ["Agentes económicos","🏦",[
  [1,"¿Cuáles son los principales agentes económicos?",["Familias, empresas y Estado","Profesores, alumnos y apoderados","Bomberos, carabineros y médicos","Perros, gatos y aves"],0],
  [2,"¿Qué aportan las familias a las empresas?",["Trabajo y consumo de bienes y servicios","Leyes","Impuestos de aduana","Billetes impresos"],0],
  [3,"¿Para qué usa el Estado lo que recauda con los impuestos?",["Para financiar salud, educación, seguridad y obras públicas","Para regalos de cumpleaños","Para comprar productos agrícolas a los vecinos","Para nada"],0],
  [3,"¿Qué impuesto pagas cada vez que compras algo en Chile?",["El IVA (Impuesto al Valor Agregado)","El impuesto al ganado","El diezmo","El tributo indígena"],0],
  [4,"¿Qué institución chilena controla la inflación y emite los billetes?",["El Banco Central","El SERNAC","El Registro Civil","La Contraloría"],0],
  [5,"¿Qué es la inflación?",["El aumento generalizado y sostenido de los precios","La baja de todos los precios","El aumento del número de bancos","Un tipo de crédito"],0]]],
 ["Dinero, ahorro y crédito","💳",[
  [1,"Antes de existir el dinero, ¿cómo se intercambiaban los bienes?",["Mediante el trueque","Con tarjetas de crédito","Con transferencias","Con cheques"],0],
  [1,"¿Qué es ahorrar?",["Guardar parte del dinero para usarlo en el futuro","Gastar todo de inmediato","Pedir dinero prestado","Regalar dinero"],0],
  [2,"¿Qué es un crédito?",["Dinero prestado que se debe devolver con intereses","Dinero regalado","Un descuento","Un billete falso"],0],
  [3,"¿Qué es el interés de un préstamo?",["El costo adicional que se paga por usar dinero prestado","Un premio por gastar","Un impuesto al ahorro","La cuota mensual sin costo"],0],
  [4,"¿Qué significa 'CAE' en un crédito de consumo?",["Carga Anual Equivalente: el costo total del crédito en un año","Cuenta de Ahorro Escolar","Crédito Automático del Estado","Compra Al Extranjero"],0],
  [5,"¿Qué es el sobreendeudamiento?",["Tener deudas que no se pueden pagar con los ingresos","Ahorrar demasiado","Ganar más de lo que se gasta","No tener tarjetas"],0]]],
 ["Consumo responsable","🛒",[
  [1,"¿Qué institución chilena protege los derechos de los consumidores?",["El SERNAC","El SII","La FIFA","El SAG"],0],
  [2,"¿Qué significa consumir de forma responsable?",["Comprar pensando en necesidades reales, el presupuesto y el impacto ambiental","Comprar todo lo que está en oferta","Comprar solo marcas caras","No comprar nunca nada"],0],
  [2,"¿Qué puede exigir un consumidor si un producto nuevo viene fallado?",["Cambio, reparación o devolución del dinero (garantía legal)","Nada","Solo quejarse en redes","Pagarlo de nuevo"],0],
  [3,"¿Qué conviene revisar en la etiqueta de un alimento?",["Ingredientes, fecha de vencimiento y sellos 'ALTO EN'","Solo el color del envase","El nombre del dueño de la fábrica","La música del comercial"],0],
  [4,"¿Qué es la publicidad engañosa?",["Anuncios con información falsa para convencer de comprar","Cualquier anuncio de televisión","Ofertas reales","Catálogos gratuitos"],0],
  [5,"¿Qué es el comercio justo?",["Un sistema que busca pagar precios dignos a los productores y cuidar el ambiente","Comprar lo más barato posible","Un mercado sin reglas","Vender solo en el extranjero"],0]]]
],[
 ["Necesidades básicas del ser humano 🤔",["alimentación","vivienda","salud","educación","vestuario"],"agua, seguridad, abrigo, descanso, afecto"],
 ["Cosas en que gasta dinero un estudiante 💸",["comida","transporte","ropa","celular","salidas"],"útiles escolares, videojuegos, regalos, música, entradas"]])
];
})();
