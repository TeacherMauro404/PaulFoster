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
  [1,"¿Qué idea defendía el liberalismo del siglo XIX?",["Las libertades individuales y un gobierno limitado por una constitución","El poder absoluto del rey, sin parlamento ni constitución escrita","La propiedad colectiva de la tierra y de todas las fábricas","Un gobierno dirigido por la Iglesia y los grandes nobles"],0],
  [1,"Para un liberal del siglo XIX, ¿qué documento debía limitar el poder de los gobernantes?",["Una constitución","Un decreto del rey","Una bula papal","Un tratado comercial"],0],
  [2,"¿Qué significa 'separación de poderes'?",["Dividir el poder en Ejecutivo, Legislativo y Judicial","Separar el poder de la Iglesia del poder de los militares","Dividir el país en provincias con gobiernos autónomos","Repartir el poder entre el rey, la nobleza y el clero"],0],
  [3,"¿Qué pensador propuso la separación de poderes en 'El espíritu de las leyes'?",["Montesquieu","Napoleón Bonaparte","Karl Marx","Otto von Bismarck"],0],
  [3,"En el siglo XIX, el sufragio censitario permitía votar…",["Solo a hombres con cierto nivel de riqueza o propiedades","A todos los hombres y mujeres mayores de 21 años","Solo a quienes pertenecían a la nobleza por nacimiento","A todos los hombres, sin importar su riqueza o educación"],0],
  [4,"¿Qué principio liberal afirma que el poder viene del pueblo y no de Dios ni del rey?",["La soberanía nacional o popular","El derecho divino de los reyes","El principio de legitimidad","El absolutismo ilustrado"],0],
  [5,"¿Qué diferenciaba a liberales y conservadores en el siglo XIX?",["Los liberales buscaban ampliar libertades y limitar el poder; los conservadores defendían el orden tradicional y la Iglesia","Los conservadores querían limitar al rey; los liberales, devolverle todo el poder y el apoyo de la Iglesia","Los liberales defendían el voto femenino; los conservadores, el voto universal masculino sin restricciones","Los liberales querían una monarquía absoluta; los conservadores, una república federal y laica"],0]]],
 ["Revoluciones liberales","🔥",[
  [1,"¿En qué país comenzó en 1789 la revolución que inspiró las ideas liberales del siglo XIX?",["Francia","Rusia","Chile","Japón"],0],
  [2,"¿Cuál era el lema de la Revolución Francesa?",["Libertad, igualdad, fraternidad","Libertad, propiedad y seguridad","Dios, patria y rey","Orden, progreso y unidad"],0],
  [2,"¿Qué se conoció como 'la Primavera de los Pueblos'?",["Las revoluciones de 1848 en Europa","La independencia de América","La Revolución Industrial","El fin de la Segunda Guerra Mundial"],0],
  [3,"¿Qué documento de 1789 proclamó derechos para los ciudadanos?",["La Declaración de los Derechos del Hombre y del Ciudadano","La Declaración de Independencia de los Estados Unidos","La Carta de las Naciones Unidas sobre los Derechos","El Acta final del Congreso de Viena de 1789"],0],
  [4,"Tras la derrota de Napoleón, las monarquías europeas intentaron restaurar el orden antiguo en el…",["Congreso de Viena (1815)","Congreso de Berlín (1884)","Tratado de Tordesillas","Plan Marshall"],0],
  [4,"¿Qué buscaban principalmente los revolucionarios de 1830 y 1848?",["Constituciones, más derechos políticos y, en algunos casos, independencia nacional","Restaurar a las antiguas monarquías absolutas y el poder de la nobleza","Eliminar la propiedad privada y crear Estados comunistas en toda Europa","Unir a todos los países europeos bajo un solo emperador y una constitución"],0],
  [5,"¿Por qué las independencias de Hispanoamérica (1810–1825) se relacionan con las ideas liberales?",["Porque defendían la soberanía popular y gobiernos republicanos con constitución","Porque buscaban fortalecer el poder del rey de España en todas las colonias","Porque proponían monarquías absolutas gobernadas por nobles criollos","Porque rechazaban cualquier constitución escrita y el voto de los ciudadanos"],0]]],
 ["Nacionalismo","🚩",[
  [1,"El nacionalismo es la idea de que…",["Cada nación con lengua, cultura e historia comunes debe tener su propio Estado","Todos los pueblos deben unirse en un solo Estado mundial sin fronteras","El rey es dueño del territorio y de todas las personas que viven en él","Cada región debe gobernarse sola, sin ningún gobierno central ni Estado"],0],
  [2,"¿Cuál de estos elementos suele unir a una nación?",["Lengua, historia y tradiciones compartidas","La misma religión obligatoria para todos","Pertenecer a la misma clase social","Vivir bajo un mismo rey absoluto"],0],
  [2,"¿Qué símbolos se usaron en el siglo XIX para fortalecer la identidad nacional?",["Himnos, banderas y héroes patrios","Escudos de las familias nobles","Retratos oficiales de los papas","Monedas de oro de otros países"],0],
  [3,"¿Qué institución fue clave para difundir la identidad nacional en el siglo XIX?",["La escuela pública","Los castillos feudales","Las redes sociales","Los monasterios medievales"],0],
  [4,"¿Qué imperio multinacional se vio amenazado por los nacionalismos de húngaros, checos y otros pueblos?",["El Imperio austríaco (austrohúngaro)","El Imperio inca","El Imperio británico en la India","El Imperio azteca"],0],
  [5,"¿Qué consecuencia negativa tuvo el nacionalismo extremo a fines del siglo XIX?",["Rivalidades entre potencias que contribuyeron a la Primera Guerra Mundial","La desaparición de casi todas las fronteras entre países europeos","El fin de la industrialización y el regreso a la economía agrícola","La unión pacífica de todos los imperios en una sola federación"],0]]],
 ["Unificaciones","🧩",[
  [1,"¿Qué dos países europeos se unificaron en la segunda mitad del siglo XIX?",["Italia y Alemania","Francia e Inglaterra","España y Portugal","Rusia y Polonia"],0],
  [2,"¿Quién fue el 'canciller de hierro' que lideró la unificación alemana?",["Otto von Bismarck","Giuseppe Garibaldi","Napoleón III","Simón Bolívar"],0],
  [2,"¿Qué líder italiano dirigió la expedición de los 'camisas rojas'?",["Giuseppe Garibaldi","Otto von Bismarck","Luis XVI","Benito Mussolini"],0],
  [3,"¿Qué reino lideró la unificación de Alemania?",["Prusia","Baviera","Austria","Sajonia"],0],
  [3,"¿Qué reino lideró la unificación italiana?",["Piamonte-Cerdeña","Nápoles","Los Estados Pontificios","Venecia"],0],
  [4,"¿Dónde se proclamó el Imperio alemán en 1871?",["En el Palacio de Versalles, Francia","En el Palacio de Schönbrunn, Viena","En la catedral de Colonia, Alemania","En el Palacio Real de Berlín, Prusia"],0],
  [5,"¿Qué ciudad se incorporó al Reino de Italia en 1870 y pasó a ser su capital?",["Roma","Turín","Milán","Florencia"],0]]],
 ["Estado-nación","🏛️",[
  [1,"¿Qué elementos forman un Estado?",["Territorio, población y gobierno soberano","Rey, nobleza e Iglesia oficial","Ejército, bandera e himno nacional","Lengua, religión y costumbres"],0],
  [2,"¿Qué es la soberanía?",["El poder de un Estado para gobernarse sin depender de otro","El conjunto de riquezas y recursos naturales de un país","La obligación de obedecer las leyes de otro país más fuerte","El derecho de la Iglesia a nombrar a las autoridades"],0],
  [3,"Tras la independencia, los nuevos Estados americanos debieron…",["Organizar gobiernos, dictar constituciones y definir fronteras","Pagar tributos a España y mantener a sus virreyes","Unirse en un solo país gobernado desde Lima","Adoptar monarquías absolutas con reyes europeos"],0],
  [3,"¿Qué diferencia hay entre 'nación' y 'Estado'?",["La nación es una comunidad cultural; el Estado es la organización política con gobierno y territorio","El Estado es una comunidad cultural; la nación es la organización política con gobierno y territorio","La nación tiene ejército y leyes propias; el Estado solo tiene lengua, costumbres y tradiciones","Son sinónimos: ambos designan el territorio de un país y su gobierno, sin ninguna diferencia"],0],
  [4,"¿Qué problema enfrentaron muchos Estados americanos en el siglo XIX?",["Guerras civiles y disputas entre caudillos","La sobrepoblación de las grandes ciudades","La invasión de ejércitos asiáticos","La falta total de recursos naturales"],0],
  [5,"La construcción de los Estados nacionales en América implicó muchas veces…",["Imponer una identidad nacional que invisibilizó a pueblos indígenas y afrodescendientes","Respetar plenamente la autonomía y las tierras de todos los pueblos originarios","Eliminar las fronteras entre países para formar una sola gran nación americana","Devolver el gobierno a las autoridades españolas para mantener el orden colonial"],0]]]
],[
 ["Derechos o libertades que defendía el liberalismo 🗽",["libertad de expresión","libertad de prensa","propiedad privada","igualdad ante la ley","derecho a voto"],"libertad de culto, libertad de asociación, seguridad individual"],
 ["Símbolos de una nación 🚩",["bandera","himno","escudo","héroes patrios","idioma"],"fiestas patrias, monumentos, moneda, comidas típicas"]]),

T("h1burg","Cultura burguesa y progreso","🎩","1° Medio · Unidad 1","Burguesía · ciencia · vida cotidiana · arte · Belle Époque",[
 ["La burguesía","🎩",[
  [1,"¿Quiénes formaban la burguesía en el siglo XIX?",["Comerciantes, banqueros, industriales y profesionales","Nobles, obispos y altos oficiales del ejército","Campesinos, artesanos y obreros de las fábricas","Reyes, príncipes y miembros de las cortes reales"],0],
  [2,"¿Qué valores eran muy importantes para la burguesía?",["El trabajo, el ahorro y el mérito personal","La guerra, la conquista y el honor militar","La pobreza voluntaria y la vida religiosa","Los títulos nobiliarios y la herencia"],0],
  [2,"¿Dónde vivía principalmente la burguesía?",["En las ciudades","En castillos medievales","En monasterios","En el desierto"],0],
  [3,"¿Qué institución era central en el ideal de vida burgués?",["La familia","El gremio medieval","El ejército","El feudo"],0],
  [4,"En el modelo burgués, ¿qué rol se esperaba de la mujer?",["Dedicarse al hogar y la crianza","Dirigir los negocios familiares","Participar en la vida política","Trabajar en las fábricas textiles"],0],
  [5,"¿Por qué se dice que la burguesía fue la clase 'triunfadora' del siglo XIX?",["Porque concentró el poder económico y político tras las revoluciones liberales e industriales","Porque recuperó los privilegios feudales que había perdido con la Revolución Francesa","Porque logró que los obreros obtuvieran el poder político en la mayoría de los países","Porque era la clase más numerosa y vivía principalmente en el campo"],0]]],
 ["Ciencia y progreso","🔬",[
  [1,"¿Qué significaba la idea de 'progreso' en el siglo XIX?",["Creer que la humanidad avanzaría siempre gracias a la ciencia y la técnica","Creer que la sociedad debía volver a las costumbres y valores de la Edad Media","Pensar que la ciencia era peligrosa y que los inventos debían prohibirse","Creer que el destino de la humanidad dependía solo de la voluntad de los reyes"],0],
  [2,"¿Quién propuso la teoría de la evolución por selección natural?",["Charles Darwin","Isaac Newton","Albert Einstein","Galileo Galilei"],0],
  [2,"¿Qué científico desarrolló la vacuna contra la rabia y la pasteurización?",["Louis Pasteur","Marie Curie","Thomas Edison","Charles Darwin"],0],
  [3,"¿Qué corriente de pensamiento afirmaba que solo es válido el conocimiento comprobado científicamente?",["El positivismo","El romanticismo","El absolutismo","El mercantilismo"],0],
  [3,"¿Qué invento de Thomas Edison cambió la vida nocturna de las ciudades?",["La ampolleta eléctrica","El telégrafo eléctrico","El motor de combustión","La máquina de escribir"],0],
  [4,"¿Para qué se organizaban las Exposiciones Universales, como la de París de 1889?",["Para mostrar los avances técnicos e industriales de los países","Para elegir a los gobernantes de los países europeos","Para firmar los tratados de paz entre las potencias","Para repartir colonias entre los países industrializados"],0],
  [5,"¿Qué científica ganó dos premios Nobel por sus estudios sobre la radiactividad?",["Marie Curie","Ada Lovelace","Rosalind Franklin","Gabriela Mistral"],0]]],
 ["Vida cotidiana","☕",[
  [1,"¿Qué medio de transporte revolucionó los viajes en el siglo XIX?",["El ferrocarril","El avión","El automóvil eléctrico","El metro"],0],
  [2,"¿Qué lugares de encuentro eran típicos de la vida social burguesa?",["Los cafés, teatros y salones","Los torneos medievales","Los centros comerciales","Los cibercafés"],0],
  [3,"¿Qué invento permitió enviar mensajes a larga distancia en segundos en el siglo XIX?",["El telégrafo","El correo electrónico","La paloma mensajera","El fax"],0],
  [3,"¿Qué se buscaba con la educación pública en el siglo XIX?",["Formar ciudadanos y trabajadores para la nación","Que solo estudiaran los hijos de la nobleza","Reemplazar la familia por internados estatales","Formar sacerdotes para todas las parroquias"],0],
  [4,"La moda burguesa del siglo XIX era una forma de…",["Mostrar el estatus social y la respetabilidad","Imitar la vestimenta sencilla de los campesinos","Rechazar las costumbres de la nobleza europea","Ocultar la riqueza para no pagar impuestos"],0],
  [5,"¿Qué cambios urbanos impulsó el barón Haussmann en París?",["Grandes avenidas (bulevares), alcantarillado y parques","Nuevas murallas y fortificaciones alrededor de la ciudad","Calles estrechas y barrios cerrados para los obreros","Canales navegables en lugar de las calles principales"],0]]],
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
  [4,"¿Cómo llegó la cultura burguesa europea a Chile en el siglo XIX?",["La élite imitó la moda, la arquitectura y las costumbres de París y Londres","Los pueblos originarios la difundieron desde el sur hacia Santiago","El gobierno la prohibió para proteger las costumbres coloniales","Llegó recién en el siglo XX, con la televisión y el cine"],0],
  [4,"¿Qué edificio de Santiago, inaugurado en 1857, refleja la influencia europea del siglo XIX?",["El Teatro Municipal","El Costanera Center","La Torre Entel","El Estadio Nacional"],0],
  [5,"¿Por qué la Belle Époque no fue 'bella' para todos?",["Porque la prosperidad convivió con la pobreza obrera y la explotación colonial","Porque las guerras entre potencias europeas fueron constantes en ese período","Porque la ciencia y la técnica no avanzaron durante esos años","Porque la burguesía perdió su riqueza a manos de la nobleza"],0]]]
],[
 ["Inventos del siglo XIX 💡",["ferrocarril","telégrafo","teléfono","ampolleta","fotografía"],"cine, automóvil, vacunas, máquina de coser, barco a vapor"],
 ["Valores de la burguesía 🎩",["trabajo","ahorro","familia","educación","esfuerzo"],"orden, progreso, mérito, respetabilidad, propiedad"]]),

T("h1ind","Revolución Industrial","🏭","1° Medio · Unidad 2","Inicios · inventos y energía · trabajo en la fábrica · ciudades · movimiento obrero",[
 ["Inicios en Gran Bretaña","⚙️",[
  [1,"¿En qué país comenzó la Revolución Industrial?",["Gran Bretaña","Francia","Alemania","Países Bajos"],0],
  [1,"¿En qué siglo comenzó la Revolución Industrial?",["Siglo XVIII","Siglo XII","Siglo XX","Siglo V"],0],
  [2,"¿Qué recursos abundaban en Inglaterra y fueron claves para la industria?",["Carbón y hierro","Petróleo y litio","Oro y plata","Cobre y salitre"],0],
  [3,"¿Qué sector fue el primero en mecanizarse?",["La industria textil (algodón)","La industria del software","La aviación","La industria automotriz"],0],
  [4,"¿Qué cambio en el campo ayudó a la industrialización?",["Una mayor productividad agrícola y los cercamientos, que liberaron mano de obra hacia las ciudades","La vuelta al sistema feudal, que obligó a los campesinos a quedarse en sus tierras","La prohibición de cultivar trigo, que hizo que todos se dedicaran a la ganadería","El reparto de tierras entre todos los campesinos, que frenó la migración a las ciudades"],0],
  [5,"¿Qué diferencia a la producción industrial de la artesanal?",["Usa máquinas, fábricas y división del trabajo para producir en masa","Se hace a mano en talleres pequeños, con pocas piezas únicas","Usa solo la fuerza humana y animal, sin máquinas ni fábricas","Cada trabajador fabrica el producto completo de principio a fin"],0]]],
 ["Inventos y energía","🚂",[
  [1,"¿Qué máquina perfeccionó James Watt?",["La máquina de vapor","El computador","El teléfono celular","La guillotina"],0],
  [2,"¿Qué transporte movido a vapor unió ciudades y puertos?",["La locomotora o ferrocarril","El tranvía eléctrico","El automóvil a gasolina","El dirigible de hidrógeno"],0],
  [2,"¿Qué energía impulsó la Primera Revolución Industrial?",["El vapor obtenido con carbón","La energía solar","La energía nuclear","Solo el viento de los molinos"],0],
  [3,"¿Qué nuevas fuentes de energía caracterizaron la Segunda Revolución Industrial (fines del s. XIX)?",["La electricidad y el petróleo","El carbón vegetal y la leña","La fuerza humana","La energía eólica"],0],
  [4,"¿Qué invento atribuido a Alexander Graham Bell transformó las comunicaciones?",["El teléfono","La radio","El telégrafo","Internet"],0],
  [5,"¿Qué sistema de producción en cadena aplicó Henry Ford a comienzos del siglo XX?",["La cadena de montaje","El trabajo a domicilio","El trueque","El gremio artesanal"],0]]],
 ["Trabajo en la fábrica","🏭",[
  [1,"¿Cómo se llamaba a los trabajadores de las fábricas?",["Obreros o proletarios","Señores feudales","Burgueses","Hidalgos"],0],
  [2,"¿Cuántas horas podía durar una jornada laboral en una fábrica a inicios del siglo XIX?",["Entre 12 y 16 horas","4 horas","8 horas con viernes libre","Solo los fines de semana"],0],
  [2,"¿Por qué los dueños de fábricas contrataban niños?",["Porque les pagaban menos y eran pequeños para manejar algunas máquinas","Porque la ley los obligaba a contratar a un niño por cada adulto","Porque los niños tenían más experiencia con las máquinas textiles","Porque trabajaban menos horas y así las fábricas ahorraban energía"],0],
  [3,"¿Qué hacían los 'luditas' en Inglaterra?",["Destruían máquinas porque creían que les quitaban el trabajo","Inventaban máquinas para reemplazar el trabajo de los niños","Organizaban partidos políticos para llegar al Parlamento","Construían ferrocarriles para unir las ciudades industriales"],0],
  [4,"¿Qué es el salario?",["El pago que recibe el trabajador por su trabajo","El impuesto que paga el obrero al Estado","La ganancia que obtiene el dueño de la fábrica","El préstamo que el banco entrega al trabajador"],0],
  [5,"¿Qué es la división del trabajo?",["Repartir la producción en tareas simples y repetitivas","Que cada obrero fabrique el producto completo","Trabajar solo la mitad de la jornada habitual","Dividir las ganancias en partes iguales entre todos"],0]]],
 ["Ciudades industriales","🏙️",[
  [1,"¿Qué ocurrió con las ciudades durante la Revolución Industrial?",["Crecieron rápidamente por la migración desde el campo","Se despoblaron porque la gente volvió al campo","Se amurallaron para impedir la llegada de campesinos","Se redujeron porque las fábricas se instalaron en el campo"],0],
  [2,"¿Qué ciudad inglesa fue símbolo de la industria textil?",["Manchester","Roma","París","Madrid"],0],
  [3,"¿Cómo eran las viviendas obreras en las ciudades industriales?",["Pequeñas, hacinadas y con poca higiene","Amplias, con jardín y agua potable","Casas de campo con huerto propio","Departamentos modernos con calefacción"],0],
  [3,"¿Qué enfermedad se propagaba por el agua contaminada en las ciudades industriales?",["El cólera","La diabetes","La miopía","La gripe aviar"],0],
  [4,"¿Qué problema ambiental trajo la industrialización?",["Contaminación del aire y de los ríos por el humo y los desechos","Un exceso de bosques que cubrió las ciudades y los campos","Un enfriamiento de los océanos por el uso de máquinas a vapor","La desaparición total del carbón en las minas de Europa"],0],
  [5,"¿Cómo se llama el traslado masivo de población del campo a la ciudad?",["Éxodo rural","Colonización interna","Trashumancia estacional","Globalización económica"],0]]],
 ["Movimiento obrero e ideologías","✊",[
  [1,"¿Qué organizaciones formaron los obreros para defender sus derechos?",["Sindicatos","Bancos","Monasterios","Ejércitos privados"],0],
  [2,"¿Qué es una huelga?",["Paralizar el trabajo como forma de presión","Un despido masivo de trabajadores","Una reunión de los dueños de fábricas","Un aumento de sueldo para los obreros"],0],
  [2,"¿Quiénes escribieron el 'Manifiesto comunista' (1848)?",["Karl Marx y Friedrich Engels","Adam Smith y David Ricardo","Darwin y Pasteur","Bismarck y Garibaldi"],0],
  [3,"¿Qué ideología buscaba abolir el Estado y toda forma de autoridad?",["El anarquismo","El liberalismo","El absolutismo","El mercantilismo"],0],
  [4,"¿Qué proponía el socialismo?",["Que los medios de producción fueran colectivos para reducir la desigualdad","Que el Estado desapareciera y cada persona se gobernara sin autoridad alguna","Que los dueños de fábricas tuvieran todo el poder político del país","Que la economía volviera al sistema feudal, con señores y campesinos"],0],
  [4,"¿Qué documento de la Iglesia católica (1891) abordó los problemas de los obreros?",["La encíclica Rerum Novarum","La Biblia de Gutenberg","El Código Civil","La Carta Magna"],0],
  [5,"¿Qué se recuerda cada 1° de mayo?",["El Día Internacional de los Trabajadores, en memoria de los mártires de Chicago (1886)","El fin de la Primera Guerra Mundial y la firma del Tratado de Versalles (1919)","El inicio de la Revolución Francesa con la toma de la Bastilla en París (1789)","La primera ley chilena que limitó la jornada laboral a ocho horas diarias (1924)"],0]]]
],[
 ["Inventos de la Revolución Industrial ⚙️",["máquina de vapor","ferrocarril","telar mecánico","barco a vapor","telégrafo"],"lanzadera volante, hiladora, teléfono, ampolleta, automóvil"],
 ["Problemas de los obreros del siglo XIX 🏭",["largas jornadas","bajos salarios","trabajo infantil","malas viviendas","enfermedades"],"accidentes, hacinamiento, falta de higiene, despidos, contaminación"]]),

T("h1imp","Imperialismo europeo","🌍","1° Medio · Unidad 2","Causas · reparto de África · Asia · justificaciones · consecuencias",[
 ["Causas del imperialismo","💰",[
  [1,"¿Qué es el imperialismo?",["El dominio de potencias sobre otros territorios y pueblos","La unión voluntaria de países iguales en una federación","Un sistema de gobierno basado en elecciones libres","El aislamiento de un país que no comercia con nadie"],0],
  [2,"¿Qué buscaban las potencias industriales en las colonias?",["Materias primas, mercados y mano de obra barata","Nuevas tierras para el turismo y el descanso","Pueblos que les enseñaran nuevas tecnologías","Lugares para trasladar todas sus fábricas"],0],
  [2,"¿Qué potencia tuvo el imperio más extenso a fines del siglo XIX?",["Gran Bretaña","Suiza","Bolivia","Islandia"],0],
  [3,"¿Por qué se dice que el imperialismo también tuvo causas políticas?",["Porque las colonias daban prestigio y poder frente a otras potencias","Porque los pueblos colonizados pidieron ser gobernados por las potencias","Porque la Iglesia obligó a los reyes a conquistar nuevos territorios","Porque el comercio entre países europeos estaba prohibido por ley"],0],
  [4,"¿Qué potencias no europeas también practicaron el imperialismo?",["Estados Unidos y Japón","Paraguay y Bolivia","Etiopía y Liberia","Uruguay y Ecuador"],0],
  [5,"¿Qué relación tuvo la Segunda Revolución Industrial con el imperialismo?",["Las industrias necesitaban más materias primas (caucho, petróleo, minerales) y nuevos mercados","Ninguna: la Segunda Revolución Industrial ocurrió un siglo después del reparto colonial","La industria hizo innecesarias las colonias, porque todo se producía en Europa","Las colonias fabricaban los trenes y barcos que luego se usaban en Europa"],0]]],
 ["Reparto de África","🦁",[
  [1,"¿Qué continente fue repartido casi completamente entre potencias europeas?",["África","Oceanía","Antártica","América del Norte"],0],
  [2,"¿En qué conferencia (1884–1885) las potencias acordaron reglas para repartirse África?",["La Conferencia de Berlín","El Congreso de Viena","La Conferencia de Yalta","El Tratado de Versalles"],0],
  [3,"¿Qué dos países africanos se mantuvieron independientes hacia 1914?",["Etiopía y Liberia","Egipto y Sudáfrica","Congo y Nigeria","Marruecos y Argelia"],0],
  [3,"¿Qué rey europeo tuvo el Congo como propiedad personal, con terribles abusos contra la población?",["Leopoldo II de Bélgica","Guillermo I de Países Bajos","Luis Felipe I de Francia","Alfonso XII de España"],0],
  [4,"¿Por qué muchas fronteras africanas actuales son líneas rectas?",["Porque fueron trazadas por los europeos, sin considerar a sus pueblos","Porque siguen el curso de los grandes ríos y cadenas de montañas","Porque los propios pueblos africanos las votaron en asambleas","Porque coinciden con las antiguas rutas de caravanas del desierto"],0],
  [5,"¿Qué batalla de 1896 fue una famosa victoria africana contra un ejército europeo?",["Adua (Etiopía derrotó a Italia)","Isandlwana (Zulúes ante Gran Bretaña)","Omdurman (Sudán ante Gran Bretaña)","Fashoda (Egipto ante Francia)"],0]]],
 ["Asia y el imperialismo","🏯",[
  [1,"¿Qué colonia era llamada 'la joya de la corona británica'?",["La India","Australia","Canadá","Jamaica"],0],
  [2,"¿Qué guerras enfrentaron a China y Gran Bretaña por el comercio de una droga?",["Las Guerras del Opio","Las Guerras Púnicas","La Guerra de los Cien Años","La Guerra del Pacífico"],0],
  [3,"¿Qué ciudad china pasó a manos británicas en 1842 y fue devuelta en 1997?",["Hong Kong","Pekín","Shanghái","Tokio"],0],
  [3,"¿Qué país asiático se modernizó en la Era Meiji y se convirtió en potencia imperialista?",["Japón","India","Vietnam","Filipinas"],0],
  [4,"¿Qué potencia europea controlaba Indochina (actuales Vietnam, Laos y Camboya)?",["Francia","Alemania","Rusia","Portugal"],0],
  [5,"¿Qué fue la rebelión de los cipayos (1857)?",["Un levantamiento de soldados indios contra los británicos","Una revolución de obreros textiles en Manchester","Una guerra entre China y Japón por el control de Corea","Una revuelta de colonos ingleses contra Londres en Australia"],0]]],
 ["Justificaciones","📖",[
  [1,"¿Cómo justificaban los europeos la conquista de otros pueblos?",["Decían tener una misión 'civilizadora'","Decían que los otros pueblos los habían invitado","Decían que era un juego","No daban ninguna justificación"],0],
  [2,"¿Qué teoría racista aplicó ideas de Darwin a las sociedades humanas?",["El darwinismo social","El liberalismo económico","El positivismo jurídico","El romanticismo"],0],
  [3,"¿Qué poema de Rudyard Kipling expresó la idea de la 'misión civilizadora'?",["'La carga del hombre blanco'","'El libro de la selva'","'La conquista del desierto'","'El corazón de las tinieblas'"],0],
  [4,"Hoy sabemos que la idea de razas 'superiores' e 'inferiores' es…",["Falsa y sin base científica; sirvió para justificar la dominación","Correcta según la biología moderna, aunque ya no se usa","Una teoría comprobada por los estudios genéticos actuales","Aceptada por la ONU solo en algunos países del mundo"],0],
  [5,"¿Qué papel cumplieron muchas misiones religiosas en las colonias?",["Evangelizar y educar, muchas veces imponiendo la cultura europea","Organizar ejércitos para expulsar a los europeos de África","Prohibir la educación para mantener a la población sin saber leer","Construir fábricas de armas para las potencias imperialistas"],0]]],
 ["Consecuencias","⚖️",[
  [1,"¿Qué consecuencias tuvo el imperialismo para los pueblos colonizados?",["Pérdida de tierras, explotación y daño a sus culturas","Mayor libertad política y respeto a sus gobiernos","El fin de la pobreza gracias al comercio libre","El fortalecimiento de sus lenguas y costumbres"],0],
  [2,"¿Qué construyeron los europeos en las colonias para extraer recursos?",["Ferrocarriles, puertos y plantaciones","Universidades y grandes hospitales","Castillos y catedrales góticas","Fábricas de automóviles y aviones"],0],
  [3,"¿Qué es un monocultivo, típico de las economías coloniales?",["Cultivar un solo producto para exportar","Cultivar muchos productos para el consumo local","Cultivar solo en invierno","Una técnica de pesca"],0],
  [4,"¿Cómo influyeron las rivalidades imperialistas en la historia europea?",["Aumentaron las tensiones que llevaron a la Primera Guerra Mundial","Unieron a todas las potencias en una alianza que duró todo el siglo XX","Terminaron con los ejércitos permanentes en la mayoría de los países","No tuvieron efectos en Europa, porque los conflictos ocurrían en las colonias"],0],
  [5,"¿Qué proceso del siglo XX puso fin a la mayoría de los imperios coloniales?",["La descolonización","La Revolución Industrial","El Renacimiento","La Reforma protestante"],0]]]
],[
 ["Potencias imperialistas del siglo XIX 🌍",["Gran Bretaña","Francia","Alemania","Bélgica","Estados Unidos"],"Japón, Italia, Rusia, Países Bajos, Portugal, España"],
 ["Recursos que buscaban en las colonias 💰",["oro","diamantes","caucho","algodón","té"],"cacao, café, marfil, petróleo, especias, cobre"]]),

T("h1rep","La República en Chile (s. XIX)","🇨🇱","1° Medio · Unidad 1","Organización de la República · Constitución de 1833 · gobiernos · educación · economía",[
 ["Primeros pasos de la República","🏛️",[
  [1,"¿En qué año se formó la Primera Junta Nacional de Gobierno en Chile?",["1810","1818","1833","1879"],0],
  [1,"¿En qué año se firmó el Acta de Independencia de Chile?",["1818","1810","1891","1925"],0],
  [2,"¿Quién fue el primer Director Supremo de Chile tras la independencia?",["Bernardo O'Higgins","Diego Portales","Arturo Prat","José Manuel Balmaceda"],0],
  [3,"¿Cómo se conoce al período 1823–1830, con varios intentos de organizar el país?",["Ensayos constitucionales","Patria Vieja","República Conservadora","Reconquista española"],0],
  [4,"¿Qué ensayo de 1826 intentó organizar a Chile como una federación de provincias?",["Las leyes federales","La Constitución moralista","La Constitución de 1833","La Constitución de 1925"],0],
  [5,"¿Qué batalla de 1830 puso fin a la guerra civil y dio el triunfo a los conservadores?",["Lircay","Maipú","Rancagua","Chacabuco"],0]]],
 ["Constitución de 1833","📜",[
  [1,"¿Qué ministro se asocia al orden conservador y a la Constitución de 1833?",["Diego Portales","Manuel Rodríguez","Salvador Allende","Pedro de Valdivia"],0],
  [2,"¿Qué característica tenía el Presidente según la Constitución de 1833?",["Tenía mucho poder","Tenía poco poder frente al Congreso","Era elegido por el Senado","Gobernaba solo un año"],0],
  [3,"¿Qué religión era oficial según la Constitución de 1833?",["La católica","La anglicana","Ninguna, era laica","La luterana"],0],
  [3,"¿Por qué se habla de los 'decenios' en Chile entre 1831 y 1871?",["Porque los presidentes gobernaban dos períodos seguidos de 5 años","Porque cada diez años se dictaba una nueva Constitución","Porque el Congreso solo sesionaba una vez cada diez años","Porque Chile fue gobernado por diez presidentes en ese período"],0],
  [4,"¿Quiénes podían votar según la Constitución de 1833?",["Hombres mayores de edad, que supieran leer y escribir y tuvieran propiedades o renta","Todos los hombres y mujeres mayores de 21 años, sin otros requisitos","Solo los miembros de la Iglesia, el ejército y la nobleza colonial","Todos los hombres mayores de 18 años, supieran o no leer y escribir"],0],
  [5,"¿Hasta qué año rigió la Constitución de 1833?",["1925","1891","1973","1980"],0]]],
 ["Gobiernos del siglo XIX","👔",[
  [1,"¿Qué presidente gobernaba Chile cuando comenzó la Guerra del Pacífico (1879)?",["Aníbal Pinto","Manuel Montt","José Joaquín Prieto","Pedro Montt"],0],
  [2,"¿Durante el gobierno de qué presidente se fundó la Universidad de Chile en 1842?",["Manuel Bulnes","Bernardo O'Higgins","Arturo Alessandri","Eduardo Frei"],0],
  [3,"¿Qué presidente se enfrentó al Congreso en la Guerra Civil de 1891?",["José Manuel Balmaceda","Manuel Bulnes","Ramón Freire","José Joaquín Prieto"],0],
  [3,"¿Qué período comenzó tras la Guerra Civil de 1891, con un Congreso muy poderoso?",["La República Parlamentaria","La República Liberal","La República Conservadora","El Estado de Compromiso"],0],
  [4,"¿Qué reformas impulsaron los liberales en la segunda mitad del siglo XIX?",["Leyes laicas: cementerios laicos, matrimonio y registro civil","Restablecer la monarquía y los títulos de nobleza","Entregar a la Iglesia el control de los registros","Prohibir la educación pública en todo el país"],0],
  [5,"¿Qué presidente gobernó durante el decenio de 1851 a 1861?",["Manuel Montt","Manuel Bulnes","José Joaquín Prieto","Federico Errázuriz"],0]]],
 ["Cultura y educación","📚",[
  [1,"¿Qué universidad se fundó en Chile en 1842?",["La Universidad de Chile","La Universidad de Harvard","La Universidad de Salamanca","La Universidad Católica"],0],
  [2,"¿Qué intelectual venezolano fue el primer rector de la Universidad de Chile?",["Andrés Bello","Simón Bolívar","Domingo F. Sarmiento","Rubén Darío"],0],
  [3,"¿Qué importante código redactó Andrés Bello, vigente hasta hoy con modificaciones?",["El Código Civil","El Código de Hammurabi","El Código Penal de 2020","El Código del Trabajo"],0],
  [3,"¿Qué argentino dirigió en Chile la primera Escuela Normal de Preceptores (1842)?",["Domingo Faustino Sarmiento","Juan Bautista Alberdi","Bartolomé Mitre","Esteban Echeverría"],0],
  [4,"¿Qué ley de 1860 estableció la educación primaria gratuita a cargo del Estado?",["La Ley Orgánica de Instrucción Primaria","La Ley de Educación Primaria Obligatoria","La Ley de Matrimonio Civil","La Ley de Cementerios Laicos"],0],
  [5,"¿Qué permitió a las mujeres el decreto Amunátegui de 1877?",["Rendir exámenes válidos para ingresar a la universidad","Votar en las elecciones municipales y presidenciales","Ser elegidas diputadas y senadoras de la República","Trabajar legalmente en las oficinas del Estado"],0]]],
 ["Economía del siglo XIX","🌾",[
  [1,"¿Qué producto agrícola exportaba Chile a California y Australia a mediados del siglo XIX?",["Trigo","Café","Plátanos","Cacao"],0],
  [2,"¿Qué mineral se descubrió en Chañarcillo (1832), impulsando la minería?",["Plata","Salitre","Litio","Petróleo"],0],
  [3,"¿Entre qué ciudades se construyó el primer ferrocarril de Chile (1851)?",["Caldera y Copiapó","Santiago y Valparaíso","Arica y Tacna","Concepción y Talcahuano"],0],
  [3,"¿Qué puerto chileno fue el más importante del Pacífico sur en el siglo XIX?",["Valparaíso","Puerto Montt","Arica","San Antonio"],0],
  [4,"¿Qué nombre recibe un modelo económico basado en exportar materias primas?",["Modelo primario-exportador","Industrialización por sustitución de importaciones","Economía digital","Economía feudal"],0],
  [5,"¿Qué hecho de 1914 hizo perder importancia al puerto de Valparaíso?",["La apertura del Canal de Panamá","El terremoto que destruyó el puerto","La apertura del ferrocarril transandino","El fin de la explotación del salitre"],0]]]
],[
 ["Gobernantes de Chile del siglo XIX 👔",["Bernardo O'Higgins","Manuel Bulnes","Manuel Montt","José Manuel Balmaceda","Aníbal Pinto"],"José Joaquín Prieto, José Joaquín Pérez, Federico Errázuriz Zañartu, Domingo Santa María"],
 ["Instituciones o leyes creadas en Chile en el siglo XIX 📚",["Universidad de Chile","Código Civil","Escuela Normal","Registro Civil","Constitución de 1833"],"Instituto Nacional, Biblioteca Nacional, Ley de Instrucción Primaria, matrimonio civil"]]),

T("h1terr","El territorio chileno","🗺️","1° Medio · Unidad 3","Guerra del Pacífico · Araucanía · Magallanes · Rapa Nui · geografía de Chile",[
 ["Guerra del Pacífico","⚓",[
  [1,"¿Qué países se enfrentaron a Chile en la Guerra del Pacífico (1879–1884)?",["Perú y Bolivia","Argentina y Brasil","Ecuador y Colombia","Paraguay y Uruguay"],0],
  [2,"¿Qué recurso natural estaba en el centro del conflicto?",["El salitre","El cobre","El litio","El oro"],0],
  [2,"¿Qué marino chileno murió en el Combate Naval de Iquique el 21 de mayo de 1879?",["Arturo Prat","Bernardo O'Higgins","Manuel Rodríguez","Lord Cochrane"],0],
  [3,"¿Qué hecho desencadenó la guerra?",["Bolivia cobró un nuevo impuesto a una salitrera chilena, contra lo pactado en el tratado de 1874","Perú ocupó Antofagasta para cobrar una deuda que Chile mantenía desde la independencia","Chile se negó a pagar a Bolivia los impuestos acordados por el uso del puerto de Arica","Bolivia expulsó a los mineros peruanos de Tarapacá y Chile intervino para defenderlos"],0],
  [4,"¿Qué buque peruano, comandado por Miguel Grau, hundió a la Esmeralda?",["El Huáscar","La Covadonga","El Cochrane","La Independencia"],0],
  [4,"¿Qué territorios incorporó Chile tras la guerra?",["Tarapacá y Antofagasta (y luego Arica)","Tacna y La Paz (y luego Oruro)","Lima y Arequipa (y luego Cusco)","Mendoza y Salta (y luego Jujuy)"],0],
  [5,"¿Qué consecuencia tuvo la guerra para Bolivia?",["Perdió su acceso soberano al mar","Ganó territorio en el Pacífico","Se unió a Chile","Se convirtió en potencia naval"],0]]],
 ["Ocupación de la Araucanía","🌲",[
  [1,"¿Qué pueblo habitaba la Araucanía antes de su ocupación por el Estado chileno?",["El pueblo mapuche","El pueblo aymara","El pueblo rapanui","El pueblo inca"],0],
  [2,"¿Qué nombre dio el Estado chileno a la ocupación militar de la Araucanía (1861–1883)?",["'Pacificación' de la Araucanía","Conquista del Desierto","Guerra de Arauco","Colonización del Sur"],0],
  [3,"¿Qué militar chileno dirigió el avance de la línea de fuertes en la década de 1860?",["Cornelio Saavedra","Manuel Baquedano","Arturo Prat","Ignacio Carrera Pinto"],0],
  [3,"¿Qué ciudad se fundó en 1881 durante la ocupación de la Araucanía?",["Temuco","Valdivia","Concepción","La Serena"],0],
  [4,"¿Qué consecuencias tuvo la ocupación para el pueblo mapuche?",["Pérdida de gran parte de sus tierras, reducciones y empobrecimiento","Aumento de su territorio y reconocimiento como nación independiente","Recibió escuelas bilingües y la propiedad de todas sus tierras ancestrales","Ninguna, porque el Estado respetó los parlamentos coloniales"],0],
  [5,"¿Qué eran las 'reducciones' o títulos de merced?",["Pequeñas porciones de tierra asignadas a comunidades mapuche","Rebajas de impuestos para colonos alemanes que se instalaban en el sur","Fuertes militares construidos a lo largo de la frontera del Biobío","Permisos para que los mapuche vendieran sus productos en las ciudades"],0]]],
 ["Sur austral y Magallanes","🧭",[
  [1,"¿Qué estrecho del sur de Chile une los océanos Atlántico y Pacífico?",["El Estrecho de Magallanes","El Estrecho de Gibraltar","El Canal de Panamá","El Estrecho de Bering"],0],
  [2,"¿Qué fuerte fundó Chile en 1843 para tomar posesión del Estrecho de Magallanes?",["Fuerte Bulnes","Fuerte Niebla","Fuerte Esmeralda","Fuerte Apache"],0],
  [3,"¿Qué inmigrantes colonizaron la zona del lago Llanquihue desde 1850?",["Alemanes","Japoneses","Rusos","Árabes"],0],
  [3,"¿Qué agente de colonización organizó la llegada de colonos alemanes al sur?",["Vicente Pérez Rosales","Benjamín Vicuña Mackenna","Diego Portales","Andrés Bello"],0],
  [4,"¿Qué tratado de 1881 definió gran parte de la frontera entre Chile y Argentina?",["El Tratado de Límites de 1881","El Tratado de Ancón","El Tratado de Tordesillas","El Tratado de Versalles"],0],
  [5,"¿Qué actividad económica impulsó el poblamiento de Magallanes a fines del siglo XIX?",["La ganadería ovina","El cultivo de plátanos","La minería del salitre","La industria automotriz"],0],
  [5,"¿Qué pueblo originario de Tierra del Fuego fue casi exterminado durante la expansión ganadera?",["Selk'nam","Aymara","Diaguita","Chango"],0]]],
 ["Rapa Nui","🗿",[
  [1,"¿En qué año se incorporó Rapa Nui (Isla de Pascua) a Chile?",["1888","1810","1973","1541"],0],
  [2,"¿Qué marino chileno firmó el Acuerdo de Voluntades con el ariki (rey) rapanui?",["Policarpo Toro","Arturo Prat","Lord Cochrane","Juan Fernández"],0],
  [2,"¿Cómo se llaman las grandes estatuas de piedra de Rapa Nui?",["Moai","Rehue","Chemamüll","Pucará"],0],
  [3,"¿En qué océano está Rapa Nui?",["Océano Pacífico","Océano Atlántico","Océano Índico","Océano Ártico"],0],
  [4,"¿Qué empresa arrendó la isla para criar ovejas, restringiendo la vida de los rapanui?",["La Compañía Explotadora de Isla de Pascua","La Sociedad Ganadera de Tierra del Fuego","La Compañía de Salitres de Antofagasta","La Sociedad Nacional de Agricultura"],0],
  [5,"¿Qué buscaba Chile al incorporar Rapa Nui?",["Proyectar su presencia en el océano Pacífico","Explotar las minas de salitre de la isla","Crear una colonia penal para presos políticos","Instalar una base naval contra el Perú"],0]]],
 ["Geografía de Chile","🏔️",[
  [1,"¿Qué cordillera, la más alta de Chile, lo recorre de norte a sur?",["La cordillera de los Andes","La cordillera de la Costa","El Himalaya","Los montes Urales"],0],
  [2,"¿Qué desierto, uno de los más áridos del mundo, está en el norte de Chile?",["El desierto de Atacama","El desierto del Sahara","El desierto de Gobi","El desierto de Kalahari"],0],
  [2,"¿Cuáles son las formas de relieve principales de Chile de este a oeste?",["Cordillera de los Andes, depresión intermedia, cordillera de la Costa y planicies litorales","Planicies litorales, cordillera de la Costa, depresión intermedia y cordillera de los Andes","Cordillera de la Costa, cordillera de los Andes, planicies litorales y depresión intermedia","Altiplano, pampa, valle central y archipiélagos, en ese orden de este a oeste"],0],
  [3,"¿Qué significa que Chile es un país 'tricontinental'?",["Que tiene territorio en América, Oceanía (Rapa Nui) y la Antártica","Que limita con tres océanos: Pacífico, Atlántico y Antártico","Que tiene tres zonas climáticas: desierto, templada y fría","Que su territorio está dividido en tres macrorregiones"],0],
  [4,"¿Por qué Chile tiene tantos sismos y volcanes?",["Porque está en el Cinturón de Fuego del Pacífico, donde chocan placas tectónicas","Porque la cordillera de los Andes se está hundiendo lentamente en el océano","Porque las corrientes marinas frías del Pacífico enfrían la corteza terrestre","Porque el país es tan angosto que la tierra se mueve con más facilidad"],0],
  [5,"¿Cuántas regiones administrativas tiene Chile actualmente?",["16","12","13","20"],0]]]
],[
 ["Territorios incorporados a Chile en el siglo XIX 🗺️",["Antofagasta","Tarapacá","Araucanía","Magallanes","Rapa Nui"],"Arica, Llanquihue, Tierra del Fuego, Fuerte Bulnes"],
 ["Batallas o combates de la Guerra del Pacífico ⚓",["Combate Naval de Iquique","Combate de Angamos","Toma del Morro de Arica","Batalla de La Concepción","Batalla de Chorrillos"],"Punta Gruesa, Batalla de Tacna, Batalla de Miraflores, Batalla de Dolores"]]),

T("h1sal","Salitre y cuestión social","⛏️","1° Medio · Unidad 4","Ciclo del salitre · oficinas · cuestión social · movimiento obrero · Guerra Civil de 1891",[
 ["El ciclo del salitre","⛏️",[
  [1,"¿Para qué se usaba principalmente el salitre?",["Como fertilizante y para fabricar explosivos","Para fabricar vidrio y cerámica","Como combustible para trenes y barcos","Para conservar carnes y pescados"],0],
  [2,"¿En qué zonas del norte se explotaba el salitre?",["Tarapacá y Antofagasta","Los Lagos y Aysén","Maule y Ñuble","Valparaíso y O'Higgins"],0],
  [2,"¿Cómo se llamaban los centros de explotación del salitre?",["Oficinas salitreras","Campamentos mineros","Haciendas del norte","Estancias pampinas"],0],
  [3,"¿Qué inversionista británico fue llamado 'el rey del salitre'?",["John Thomas North","Charles Darwin","Lord Cochrane","Agustín Edwards"],0],
  [4,"¿Qué recibía el Estado chileno gracias al salitre?",["Impuestos a la exportación que financiaron obras públicas y educación","La propiedad de todas las oficinas salitreras del norte","Préstamos sin interés de los bancos británicos","Pagos en trigo y carbón de los países compradores"],0],
  [5,"¿Qué provocó la crisis final del salitre natural chileno?",["La invención del salitre sintético en Alemania y la crisis de 1929","El agotamiento total de los yacimientos de Tarapacá a fines del siglo XIX","La nacionalización de las salitreras durante el gobierno de Balmaceda","La prohibición mundial de los fertilizantes tras la Primera Guerra Mundial"],0]]],
 ["Vida en las oficinas","🏚️",[
  [1,"¿Cómo se llamaba al trabajador del salitre?",["Pampino","Gaucho","Huaso","Pirquinero"],0],
  [2,"¿Qué eran las 'fichas' en las oficinas salitreras?",["Monedas de la empresa, válidas solo en su pulpería","Tarjetas que registraban las horas trabajadas","Bonos del Estado que se cobraban en Iquique","Entradas para el teatro y la filarmónica pampina"],0],
  [2,"¿Qué era la pulpería?",["El almacén de la oficina salitrera","La oficina del administrador","El hospital de la oficina","La escuela de la oficina"],0],
  [3,"¿Qué oficinas salitreras son hoy Patrimonio de la Humanidad?",["Humberstone y Santa Laura","Chuquicamata y El Teniente","Lota y Coronel","Sewell y Potrerillos"],0],
  [4,"¿Por qué el sistema de fichas perjudicaba a los trabajadores?",["Los obligaba a comprar a precios altos solo en la pulpería de la empresa","Porque solo se podían cambiar por pesos en los bancos de Santiago","Porque perdían su valor si no se usaban en la misma semana","Porque eran aceptadas en cualquier comercio, pero con impuestos altos"],0],
  [5,"¿Qué condiciones de trabajo había en la pampa?",["Jornadas largas, calor extremo, accidentes y escasa protección","Jornadas de ocho horas, con seguro de accidentes y vacaciones","Trabajo bajo techo, sueldos en pesos y atención médica gratuita","Turnos cortos por el calor, con descanso pagado al mediodía"],0]]],
 ["La cuestión social","😷",[
  [1,"¿Qué se conoce como 'la cuestión social'?",["Los graves problemas de pobreza y desigualdad de los trabajadores a fines del s. XIX e inicios del XX","El debate entre liberales y conservadores sobre las leyes laicas y el papel de la Iglesia","Las discusiones de la élite sobre la moda y las costumbres europeas en Santiago","Los conflictos limítrofes de Chile con Argentina y Bolivia a fines del siglo XIX"],0],
  [2,"¿Cómo se llamaban las viviendas colectivas con una pieza por familia en las ciudades?",["Conventillos","Mansiones","Palacios","Rucas"],0],
  [3,"¿Qué grave problema de salud afectaba a los niños pobres a inicios del siglo XX?",["Una altísima mortalidad infantil","Una epidemia de obesidad infantil","El exceso de vacunas obligatorias","La miopía por trabajar de noche"],0],
  [3,"¿Qué enfermedades eran comunes por la falta de higiene en los conventillos?",["Tuberculosis, viruela y tifus","Diabetes, gota y miopía","Malaria, dengue y fiebre amarilla","Asma, alergias y migrañas"],0],
  [4,"¿Qué profesor denunció la cuestión social en 'Sinceridad: Chile íntimo en 1910'?",["Alejandro Venegas","Valentín Letelier","Luis Emilio Recabarren","Benjamín Vicuña Mackenna"],0],
  [5,"¿Qué leyes de 1924 marcaron el inicio de la legislación social en Chile?",["Leyes sobre contrato de trabajo, sindicatos y seguro obrero","Leyes sobre voto femenino, divorcio y educación superior","Leyes sobre reforma agraria y nacionalización del cobre","Leyes sobre servicio militar, censura y estado de sitio"],0]]],
 ["Movimiento obrero en Chile","✊",[
  [1,"¿Qué matanza ocurrió en 1907 en Iquique contra obreros del salitre en huelga?",["La matanza de la Escuela Santa María","La matanza de La Coruña","La matanza de San Gregorio","La masacre de Ránquil"],0],
  [2,"¿Qué líder obrero fundó el Partido Obrero Socialista en 1912?",["Luis Emilio Recabarren","Arturo Alessandri","Diego Portales","Manuel Montt"],0],
  [3,"¿Qué eran las sociedades mutuales?",["Organizaciones de ayuda mutua entre trabajadores (salud, funerales, ahorro)","Bancos extranjeros que prestaban dinero a las salitreras","Clubes sociales de la élite santiaguina del siglo XIX","Empresas formadas por los dueños de las oficinas del norte"],0],
  [3,"¿Qué eran las mancomunales?",["Organizaciones obreras que defendían derechos y organizaban huelgas, sobre todo en el norte","Asociaciones de hacendados que controlaban el comercio del trigo en el valle central","Cooperativas de empresarios británicos que administraban las oficinas salitreras","Iglesias evangélicas que daban alimento y alojamiento a los obreros migrantes"],0],
  [4,"¿Qué obra musical de Quilapayún recuerda la matanza de 1907?",["La Cantata Santa María de Iquique","'Gracias a la vida'","'El derecho de vivir en paz'","'Te recuerdo Amanda'"],0],
  [5,"¿Contra qué protestaba la 'huelga de la carne' de 1905 en Santiago?",["Contra un impuesto al ganado argentino que encarecía la carne","Contra el cierre del matadero municipal de la ciudad","Contra la prohibición de vender carne los viernes","Contra el monopolio británico de las carnicerías"],0]]],
 ["Guerra Civil de 1891","⚔️",[
  [1,"¿Entre quiénes fue la Guerra Civil de 1891?",["El Presidente Balmaceda y el Congreso","Liberales y conservadores por las leyes laicas","El Ejército y los obreros del salitre","Chile y Perú por la ciudad de Tacna"],0],
  [2,"¿Qué bando ganó la Guerra Civil de 1891?",["El Congreso (congresistas)","El Ejército balmacedista","El presidente Balmaceda","Los mineros del salitre"],0],
  [3,"¿Qué rama de las Fuerzas Armadas apoyó mayoritariamente al Congreso?",["La Armada","Todo el Ejército","La Fuerza Aérea","Carabineros"],0],
  [3,"¿Qué hizo Balmaceda tras su derrota?",["Se suicidó en la legación argentina","Se exilió en Perú hasta su muerte","Fue juzgado y fusilado en Santiago","Volvió a postular y ganó en 1896"],0],
  [4,"¿Qué buscaba Balmaceda con los ingresos del salitre?",["Invertir en obras públicas, educación y ferrocarriles con mayor control estatal","Entregar las salitreras a las empresas británicas a cambio de préstamos","Reducir los impuestos de los hacendados del valle central","Financiar una guerra contra Argentina por la Patagonia"],0],
  [5,"¿En qué batallas de 1891 fueron derrotadas las fuerzas balmacedistas?",["Concón y Placilla","Maipú y Chacabuco","Yungay y Lircay","Tacna y Arica"],0]]]
],[
 ["Problemas de la cuestión social 😷",["pobreza","conventillos","enfermedades","mortalidad infantil","alcoholismo"],"hacinamiento, bajos sueldos, analfabetismo, falta de agua potable"],
 ["Cosas que encontrabas en una oficina salitrera ⛏️",["pulpería","fichas","campamento","escuela","iglesia"],"teatro, plaza, máquinas, ferrocarril, filarmónica"]]),

T("h1eco","Economía y mercado","💰","1° Medio · Formación económica","Escasez · oferta y demanda · agentes económicos · ahorro y crédito · consumo responsable",[
 ["Necesidades y escasez","🤔",[
  [1,"¿Cuál es el problema económico fundamental?",["Las necesidades son ilimitadas y los recursos escasos","Los recursos son ilimitados y las necesidades escasas","Hay demasiado dinero y muy pocos productos","Las empresas producen más de lo que se necesita"],0],
  [2,"¿Cuál de estas es una necesidad básica?",["Alimentación","Tener la última consola","Ir a un concierto","Comprar zapatillas de marca"],0],
  [2,"¿Qué es un bien?",["Un objeto material que satisface una necesidad","Una actividad que satisface una necesidad y no se puede tocar","Un impuesto que se paga al comprar un producto","Un documento que acredita la propiedad de un objeto"],0],
  [3,"¿Cuál de estos es un servicio?",["Una consulta médica","Un cuaderno","Una bicicleta","Un pan amasado"],0],
  [3,"¿Qué es el 'costo de oportunidad'?",["Lo que dejas de obtener al elegir una alternativa","El precio que se paga por una oferta especial","El dinero que se ahorra al comprar en liquidación","El valor total de todas las alternativas posibles"],0],
  [4,"Si tienes $5.000 y eliges ir al cine en vez de comprar un libro, ¿cuál es tu costo de oportunidad?",["El libro que no compraste","La entrada al cine","Los $5.000 completos","El vuelto que te sobra"],0],
  [5,"¿Qué preguntas económicas básicas debe responder toda sociedad?",["¿Qué producir?, ¿cómo producir? y ¿para quién producir?","¿Quién es el rey?, ¿dónde vive?, ¿qué come?","¿Cuándo llueve?, ¿cuánto llueve?, ¿dónde llueve?","¿Qué estudiar?, ¿dónde estudiar?, ¿con quién?"],0]]],
 ["Oferta y demanda","📈",[
  [1,"En economía, ¿qué es la demanda?",["La cantidad de un bien que los consumidores quieren y pueden comprar","La cantidad de un bien que los productores quieren vender","El número de empresas que fabrican un mismo producto","El precio máximo que fija el Estado para un producto"],0],
  [2,"¿Qué es la oferta?",["La cantidad de un bien que los productores están dispuestos a vender","La cantidad de un bien que los consumidores quieren comprar","El descuento que aplica una tienda en temporada de ventas","El dinero total que tienen las familias para consumir"],0],
  [2,"Si hay muy pocas entradas para un concierto muy popular, ¿qué pasa con el precio?",["Sube","Baja","Se vuelve gratis","Nunca cambia"],0],
  [3,"Si en verano hay muchísimas sandías en las ferias, ¿qué suele pasar con su precio?",["Baja","Sube muchísimo","Desaparece","Se duplica"],0],
  [4,"¿Qué es el precio de equilibrio?",["El precio en que la cantidad ofrecida es igual a la demandada","El precio más alto que un consumidor está dispuesto a pagar","El precio que fija el Estado para proteger a los consumidores","El precio promedio de un producto durante todo el año"],0],
  [5,"¿Qué es un monopolio?",["Un mercado con un solo vendedor, que puede fijar los precios","Un mercado con muchos vendedores que compiten entre sí por precio","Un acuerdo entre consumidores para comprar más barato","Un mercado donde el Estado reparte gratis los productos"],0]]],
 ["Agentes económicos","🏦",[
  [1,"¿Cuáles son los principales agentes económicos?",["Familias, empresas y Estado","Profesores, alumnos y apoderados","Bomberos, carabineros y médicos","Perros, gatos y aves"],0],
  [2,"¿Qué aportan las familias a las empresas?",["Trabajo y consumo","Leyes y permisos","Materias primas y maquinaria","Créditos y billetes"],0],
  [3,"¿Para qué usa el Estado lo que recauda con los impuestos?",["Para financiar salud, educación, seguridad y obras públicas","Para repartirlo en partes iguales entre todos los ciudadanos","Para pagar los sueldos de los trabajadores de empresas privadas","Para comprar acciones en las bolsas de otros países"],0],
  [3,"¿Qué impuesto pagas cada vez que compras algo en Chile?",["El IVA","El impuesto a la renta","El impuesto territorial","El impuesto de timbres"],0],
  [4,"¿Qué institución chilena controla la inflación y emite los billetes?",["El Banco Central","El SERNAC","El Registro Civil","La Contraloría"],0],
  [5,"¿Qué es la inflación?",["El aumento generalizado y sostenido de los precios","La baja generalizada y sostenida de los precios","El aumento del número de bancos en un país","El crecimiento de la producción de una empresa"],0]]],
 ["Dinero, ahorro y crédito","💳",[
  [1,"Antes de existir el dinero, ¿cómo se intercambiaban los bienes?",["Mediante el trueque","Con tarjetas de crédito","Con transferencias","Con cheques"],0],
  [1,"¿Qué es ahorrar?",["Guardar parte del dinero para usarlo en el futuro","Pedir un préstamo para comprar algo hoy","Gastar el dinero apenas se recibe","Invertir todo el dinero en un solo producto"],0],
  [2,"¿Qué es un crédito?",["Dinero prestado que se debe devolver con intereses","Dinero regalado que no se debe devolver","Un descuento que da la tienda al pagar al contado","Dinero que se guarda en el banco para el futuro"],0],
  [3,"¿Qué es el interés de un préstamo?",["El costo adicional que se paga por usar dinero prestado","El descuento que da el banco por pagar a tiempo","El monto total de dinero que se pide prestado","El impuesto que se paga por tener una cuenta de ahorro"],0],
  [4,"¿Qué significa 'CAE' en un crédito de consumo?",["Carga Anual Equivalente: el costo total del crédito en un año","Cuota Anual Estimada: lo que se paga cada mes durante un año","Crédito de Ahorro Estatal: préstamo con tasa fija del Estado","Costo Adicional Eventual: multa por pagar después del plazo"],0],
  [5,"¿Qué es el sobreendeudamiento?",["Tener deudas que no se pueden pagar con los ingresos","Ahorrar más dinero del que se gana cada mes","Tener varias tarjetas de crédito sin usarlas","Ganar más de lo que se gasta durante un año"],0]]],
 ["Consumo responsable","🛒",[
  [1,"¿Qué institución chilena protege los derechos de los consumidores?",["El SERNAC","El SII","La FIFA","El SAG"],0],
  [2,"¿Qué significa consumir de forma responsable?",["Comprar pensando en necesidades reales, el presupuesto y el impacto ambiental","Comprar todo lo que esté en oferta para ahorrar dinero a largo plazo","Comprar siempre las marcas más caras porque duran más tiempo","Comprar solo productos importados porque tienen mejor calidad"],0],
  [2,"¿Qué puede exigir un consumidor si un producto nuevo viene fallado?",["Cambio, reparación o devolución del dinero","Solo un vale para otra compra, nunca el dinero","Nada, si el producto ya fue sacado de su caja","Solo un descuento en su próxima compra"],0],
  [3,"¿Qué conviene revisar en la etiqueta de un alimento?",["Ingredientes, vencimiento y sellos","Solo el precio y el tamaño","El nombre y dirección de la fábrica","La marca y el país de origen"],0],
  [4,"¿Qué es la publicidad engañosa?",["Anuncios con información falsa para convencer de comprar","Cualquier anuncio que aparezca en la televisión o en internet","Las ofertas que bajan el precio de un producto por tiempo limitado","Los catálogos gratuitos que reparten las tiendas en la calle"],0],
  [5,"¿Qué es el comercio justo?",["Un sistema que busca pagar precios dignos a los productores y cuidar el ambiente","Un sistema en que el Estado fija los mismos precios para todos los productos del país","Una forma de comercio que busca siempre el precio más bajo para los consumidores","Un acuerdo entre grandes empresas para repartirse el mercado sin competencia"],0]]]
],[
 ["Necesidades básicas del ser humano 🤔",["alimentación","vivienda","salud","educación","vestuario"],"agua, seguridad, abrigo, descanso, afecto"],
 ["Cosas en que gasta dinero un estudiante 💸",["comida","transporte","ropa","celular","salidas"],"útiles escolares, videojuegos, regalos, música, entradas"]])
];
})();
