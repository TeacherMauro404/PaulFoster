/* =========================================================
   BANCO DE PREGUNTAS — HISTORIA, GEOGRAFÍA Y CS. SOCIALES · 2° MEDIO
   Basado en las Bases Curriculares y el Programa de Estudio (Mineduc):
   U1 Crisis, totalitarismo y guerra en la primera mitad del siglo XX
   U2 El mundo bipolar: proyectos políticos, transformaciones estructurales y quiebre de la democracia en Chile
   U3 Dictadura militar, transición política y los desafíos de la democracia en Chile
   U4 Formación ciudadana: Estado de derecho, sociedad y diversidad
   Formato: [nivel 1–5, pregunta, [opciones], índice correcto]
   ========================================================= */
(function(){
function T(id,name,icon,tag,desc,cats,top5){return {id:id,name:name,icon:icon,tag:tag,desc:desc,top5:top5,cats:cats.map(function(c,i){return {id:id+'_'+i,name:c[0],icon:c[1],q:c[2]};})};}
window.HIST2=[

T("h2gm1","Primera Guerra Mundial","🪖","2° Medio · Unidad 1","Causas · alianzas · trincheras · fin de la guerra · batallas y personajes",[
 ["Causas de la Gran Guerra","💥",[
  [1,"¿En qué años ocurrió la Primera Guerra Mundial?",["1914–1918","1939–1945","1879–1884","1810–1818"],0],
  [2,"¿Qué hecho desencadenó la guerra en 1914?",["El asesinato del archiduque Francisco Fernando en Sarajevo","La invasión alemana de Bélgica para atacar a Francia","El hundimiento del Lusitania por un submarino alemán","La anexión de Alsacia y Lorena por parte de Francia"],0],
  [3,"¿Qué factores de largo plazo provocaron la guerra?",["Nacionalismo, imperialismo, carrera armamentista y sistema de alianzas","La crisis económica, el comunismo y la caída de la bolsa","La Revolución Rusa, el fascismo y la Guerra Civil Española","Las independencias de América y la expansión de Napoleón"],0],
  [3,"¿Qué se conoce como 'paz armada'?",["El período previo a 1914 en que las potencias se armaban sin estar en guerra","El período de entreguerras en que Europa se desarmó por completo","El acuerdo de 1918 que puso fin a los combates en el frente occidental","La política de la Sociedad de Naciones para evitar nuevas guerras"],0],
  [4,"¿Qué región europea era llamada 'el polvorín de Europa'?",["Los Balcanes","Escandinavia","La península ibérica","Las islas británicas"],0],
  [5,"¿Qué territorios disputaban Francia y Alemania desde 1871?",["Alsacia y Lorena","Baviera y Sajonia","Normandía y Bretaña","Sicilia y Cerdeña"],0]]],
 ["Alianzas y frentes","🗺️",[
  [1,"¿Qué países formaban la Triple Entente?",["Francia, Gran Bretaña y Rusia","Alemania, Austria-Hungría e Italia","Japón, China y Corea","EE.UU., México y Canadá"],0],
  [2,"¿Qué países formaban la Triple Alianza original?",["Alemania, Austria-Hungría e Italia","Francia, Rusia y Gran Bretaña","España, Portugal y Grecia","Chile, Argentina y Brasil"],0],
  [3,"¿Qué país cambió de bando y luchó junto a la Entente desde 1915?",["Italia","Alemania","El Imperio otomano","Austria-Hungría"],0],
  [3,"¿Qué país se retiró de la guerra en 1917–1918 por su revolución interna?",["Rusia","Francia","Gran Bretaña","Estados Unidos"],0],
  [4,"¿Qué hechos llevaron a Estados Unidos a entrar en la guerra en 1917?",["La guerra submarina alemana y el telegrama Zimmermann","El ataque japonés a sus bases del Pacífico","La invasión alemana de Polonia y de Francia","La Revolución Rusa y el triunfo de Lenin"],0],
  [5,"¿Qué posición tuvo Chile durante la Primera Guerra Mundial?",["Se declaró neutral, aunque la guerra afectó sus exportaciones de salitre","Envió tropas a Francia para combatir junto a los Aliados en Verdún","Se alió con Alemania porque su ejército tenía instructores prusianos","Declaró la guerra a Alemania tras el hundimiento de un barco chileno"],0]]],
 ["Guerra de trincheras","🪖",[
  [1,"¿Cómo se llamaban las zanjas donde vivían y combatían los soldados?",["Trincheras","Búnkeres de lujo","Castillos","Túneles de metro"],0],
  [2,"¿Qué nueva arma química se usó a gran escala por primera vez?",["Gases tóxicos","El napalm incendiario","La bomba atómica","El agente naranja"],0],
  [3,"¿Qué nuevas armas aparecieron en esta guerra?",["Tanques, aviones y ametralladoras modernas","Misiles, helicópteros y radares","Bombas atómicas y portaaviones","Cañones de pólvora y caballería"],0],
  [3,"¿Qué batalla de 1916 en Francia fue una de las más largas y sangrientas?",["Verdún","Stalingrado","Waterloo","Normandía"],0],
  [4,"¿Por qué se dice que fue una 'guerra total'?",["Porque toda la sociedad y la economía se pusieron al servicio de la guerra","Porque participaron todos los países del mundo sin excepción alguna","Porque se combatió en todos los continentes al mismo tiempo","Porque fue la última guerra en que se usaron armas tradicionales"],0],
  [5,"¿Qué papel cumplieron las mujeres durante la guerra?",["Trabajaron en fábricas, hospitales y servicios, reemplazando a los hombres","Formaron los batallones de primera línea en el frente occidental","Ocuparon la mayoría de los cargos de gobierno en Europa","Se mantuvieron en el hogar, sin participar en la economía"],0]]],
 ["Fin de la guerra","🕊️",[
  [1,"¿En qué tratado se impusieron duras condiciones a Alemania en 1919?",["El Tratado de Versalles","El Tratado de Ancón","El Tratado de Tordesillas","El Tratado de Lima"],0],
  [2,"¿Qué organización internacional se creó para mantener la paz tras la guerra?",["La Sociedad de Naciones","La Organización de las Naciones Unidas (ONU)","La Liga de los Tres Emperadores","La Organización del Tratado del Atlántico Norte"],0],
  [3,"¿Qué imperios desaparecieron tras la guerra?",["El austrohúngaro, el otomano, el alemán y el ruso","El británico, el francés, el japonés y el italiano","El español, el portugués, el holandés y el belga","El chino, el persa, el mongol y el austrohúngaro"],0],
  [3,"¿Qué obligaciones impuso el Tratado de Versalles a Alemania?",["Pagar reparaciones de guerra, reducir su ejército y aceptar la culpa","Ceder Austria a Italia y devolver sus colonias a Francia","Entregar su flota a Rusia y pagar a los Estados Unidos","Unirse a Austria y aceptar un gobierno francés en Berlín"],0],
  [4,"¿Qué presidente de EE.UU. propuso los '14 puntos' para la paz?",["Woodrow Wilson","Franklin D. Roosevelt","Abraham Lincoln","John F. Kennedy"],0],
  [5,"¿Por qué se dice que Versalles sembró la semilla de otra guerra?",["Porque humilló a Alemania y generó un resentimiento que aprovechó el nazismo","Porque entregó a Alemania nuevas colonias en África, Asia y Oceanía","Porque disolvió los ejércitos de Francia y Gran Bretaña tras la victoria","Porque prohibió a Estados Unidos comerciar con los países de Europa"],0]]]
],[
 ["Países que participaron en la Primera Guerra Mundial 🪖",["Alemania","Francia","Gran Bretaña","Rusia","Estados Unidos"],"Austria-Hungría, Italia, Imperio otomano, Japón, Serbia, Bélgica"],
 ["Armas nuevas de la Gran Guerra 💣",["tanque","avión","ametralladora","gas tóxico","submarino"],"lanzallamas, zepelín, granada, artillería pesada"]]),

T("h2tot","Totalitarismos y crisis de 1929","📉","2° Medio · Unidad 1","Años veinte · crisis de 1929 · totalitarismos · fascismo y nazismo · estalinismo",[
 ["Los años veinte","🎷",[
  [1,"¿Cómo se conoce a la década de 1920 en Estados Unidos?",["Los locos años veinte","La Gran Depresión","La era progresista","La década perdida"],0],
  [2,"¿Qué estilo musical se hizo muy popular en los años veinte?",["El jazz","El reguetón","El trap","El K-pop"],0],
  [3,"¿Qué ley prohibió el alcohol en Estados Unidos entre 1920 y 1933?",["La Ley Seca","La Ley Maldita","Las Leyes de Indias","La Ley Corta"],0],
  [3,"¿Qué hábito de consumo se popularizó en los años veinte?",["Comprar a crédito autos, radios y electrodomésticos","Comprar por catálogo solo productos importados","Pagar todo al contado con monedas de oro","Racionar los alimentos con cupones del Estado"],0],
  [4,"¿Qué cambios vivieron muchas mujeres en los años veinte?",["Obtuvieron el voto en varios países y nuevas libertades en la moda y el trabajo","Perdieron el derecho a estudiar y a trabajar fuera del hogar en la mayoría de los países","Fueron obligadas a usar uniformes y se prohibió la música jazz en todo el país","Obtuvieron la presidencia de varios países europeos y de Estados Unidos"],0],
  [5,"¿Qué era la especulación bursátil de los años veinte?",["Comprar acciones esperando venderlas más caras, muchas veces con dinero prestado","Guardar el dinero en bancos estatales con interés fijo y sin ningún riesgo","Comprar solo oro y plata para protegerse de la inflación y las crisis","Prohibir la venta de acciones para evitar que los precios subieran"],0]]],
 ["Crisis de 1929","📉",[
  [1,"¿Cómo se llamó el día de 1929 en que comenzó el derrumbe de la bolsa de Nueva York?",["El 'jueves negro' (24 de octubre)","El 'lunes rojo' (4 de noviembre)","El 'viernes santo' (29 de marzo)","El 'martes azul' (8 de agosto)"],0],
  [2,"¿En qué ciudad estaba la bolsa de valores donde comenzó la crisis?",["Nueva York (Wall Street)","Chicago (La Salle Street)","Londres (The City)","Berlín (Unter den Linden)"],0],
  [2,"¿Qué es el desempleo?",["La situación de personas que quieren trabajar y no encuentran empleo","La situación de quienes trabajan más horas de las que permite la ley","El período de vacaciones pagadas que tienen todos los trabajadores","El número de personas que tienen dos o más empleos a la vez"],0],
  [3,"¿Cómo se llamó el plan de Franklin D. Roosevelt para salir de la crisis?",["New Deal","Plan Marshall","Plan Cóndor","Alianza para el Progreso"],0],
  [4,"¿Qué economista propuso que el Estado invirtiera para reactivar la economía?",["John Maynard Keynes","Adam Smith","Milton Friedman","Karl Marx"],0],
  [4,"Según un informe de la Sociedad de Naciones, ¿qué país fue de los más afectados del mundo por la crisis?",["Chile","Suiza","Noruega","Islandia"],0],
  [5,"¿Por qué la crisis afectó tanto a Chile?",["Porque cayeron fuertemente las exportaciones de salitre y cobre","Porque un gran terremoto destruyó las principales ciudades del país","Porque Chile tenía la mayor parte de su dinero invertido en Wall Street","Porque Chile no exportaba productos y dependía de la ayuda extranjera"],0]]],
 ["Totalitarismos","⚠️",[
  [1,"¿Qué es un régimen totalitario?",["Un Estado que controla todos los aspectos de la vida y elimina las libertades","Un gobierno elegido por todos los ciudadanos que respeta la división de poderes","Una monarquía en que el rey reina, pero el Parlamento gobierna con elecciones libres","Un Estado con muchos partidos que se alternan pacíficamente en el poder"],0],
  [2,"¿Qué características comparten los totalitarismos?",["Partido único, culto al líder y represión de opositores","Muchos partidos, prensa libre y elecciones periódicas","Separación de poderes y tribunales independientes","Gobiernos de coalición y respeto a la oposición"],0],
  [3,"¿Qué herramientas usaban los totalitarismos para controlar a la población?",["La propaganda y la policía secreta","Las redes sociales libres","Los tribunales independientes","Los plebiscitos libres"],0],
  [3,"¿Cuáles fueron los principales regímenes totalitarios de entreguerras?",["El fascismo italiano, el nazismo alemán y el estalinismo soviético","El laborismo británico, el radicalismo francés y el New Deal estadounidense","La monarquía española, el imperio japonés y la república de Weimar","Las democracias escandinavas, la república checa y la monarquía belga"],0],
  [4,"¿Por qué la crisis de 1929 favoreció el ascenso de los totalitarismos?",["Porque el desempleo y la pobreza llevaron a muchos a apoyar líderes que prometían orden","Porque la riqueza que trajo la crisis permitió financiar grandes ejércitos y partidos","Porque la Sociedad de Naciones obligó a los países a elegir gobiernos de partido único","Porque el fin del desempleo hizo innecesarias las elecciones en la mayoría de los países"],0],
  [5,"¿Qué significa 'culto a la personalidad'?",["Presentar al líder como un ser casi perfecto al que se debe admirar","Respetar la individualidad y las opiniones de cada ciudadano","Elegir libremente a los líderes en elecciones periódicas","Criticar públicamente a los gobernantes en la prensa"],0]]],
 ["Fascismo y nazismo","🏴",[
  [1,"¿Quién fue el líder del fascismo italiano?",["Benito Mussolini","Adolf Hitler","Francisco Franco","Iósif Stalin"],0],
  [1,"¿Quién fue el líder del partido nazi en Alemania?",["Adolf Hitler","Benito Mussolini","Otto von Bismarck","Winston Churchill"],0],
  [2,"¿Qué marcha llevó a Mussolini al poder en 1922?",["La Marcha sobre Roma","La Larga Marcha","La Marcha de la Sal","La Marcha de los Pingüinos"],0],
  [3,"¿En qué año llegó Hitler al poder como canciller?",["1933","1918","1945","1923"],0],
  [3,"¿Qué ideas centrales tenía el nazismo?",["Racismo y antisemitismo, con la idea de una supuesta 'raza superior'","La igualdad de todas las personas y la cooperación internacional","El liberalismo económico y la libertad de prensa sin restricciones","El pacifismo y el desarme de Alemania tras el Tratado de Versalles"],0],
  [4,"¿Cómo se llamaba la república democrática alemana que el nazismo destruyó?",["La República de Weimar","La República de Vichy","El Tercer Reich","La República Federal"],0],
  [5,"¿Qué leyes de 1935 quitaron la ciudadanía a los judíos alemanes?",["Las Leyes de Núremberg","Las Leyes de Indias","Las Leyes de Reforma","Las Leyes de Burgos"],0]]],
 ["Estalinismo y propaganda","📢",[
  [1,"¿Quién gobernó la URSS de forma totalitaria desde fines de los años veinte hasta 1953?",["Stalin","Lenin","Gorbachov","Trotsky"],0],
  [2,"¿Qué eran los planes quinquenales de Stalin?",["Planes económicos de 5 años para industrializar la URSS","Elecciones cada cinco años para elegir el Sóviet","Reformas para devolver la tierra a los campesinos","Tratados de paz de cinco años con las potencias"],0],
  [3,"¿Qué eran los gulags?",["Campos de trabajo forzado en la URSS","Granjas colectivas de los campesinos","Cuarteles de la policía secreta zarista","Escuelas del Partido Comunista soviético"],0],
  [3,"¿Qué hizo Stalin con la agricultura?",["La colectivizó por la fuerza, provocando hambrunas","La privatizó y repartió la tierra entre los campesinos ricos","La abandonó para concentrarse solo en la industria pesada","La devolvió a los antiguos nobles que la tenían antes de 1917"],0],
  [4,"¿Qué fueron las 'purgas' o el Gran Terror?",["Persecución, juicios y ejecuciones de supuestos enemigos del régimen","Campañas de vacunación masiva para eliminar enfermedades en la URSS","Elecciones internas del Partido Comunista para renovar a sus líderes","Reformas para limpiar las ciudades soviéticas y mejorar la higiene"],0],
  [5,"¿Qué ministro nazi dirigía la propaganda del régimen?",["Joseph Goebbels","Heinrich Himmler","Rudolf Hess","Hermann Göring"],0]]]
],[
 ["Características de un régimen totalitario ⚠️",["partido único","culto al líder","propaganda","censura","represión"],"policía secreta, control de la educación, nacionalismo extremo, persecución de minorías"],
 ["Consecuencias de la crisis de 1929 📉",["desempleo","pobreza","quiebra de bancos","cierre de empresas","caída del comercio"],"hambre, migraciones, protestas, ascenso de los totalitarismos, proteccionismo"]]),

T("h2gm2","Segunda Guerra Mundial","✈️","2° Medio · Unidad 1","Camino a la guerra · batallas · Holocausto · fin de la guerra · ONU y DD.HH.",[
 ["Camino a la guerra","🛤️",[
  [1,"¿En qué años ocurrió la Segunda Guerra Mundial?",["1939–1945","1914–1918","1945–1991","1929–1933"],0],
  [2,"¿Qué hecho inició la guerra en Europa en septiembre de 1939?",["La invasión alemana de Polonia","El ataque a Pearl Harbor","El asesinato de Francisco Fernando","La caída del Muro de Berlín"],0],
  [3,"¿Qué países formaban el Eje?",["Alemania, Italia y Japón","Gran Bretaña, Francia y EE.UU.","URSS, China y Polonia","España, Portugal y Suiza"],0],
  [3,"¿Qué potencias principales formaban los Aliados?",["Gran Bretaña, la URSS, Estados Unidos y Francia","Alemania, Italia, Japón y Hungría","Gran Bretaña, Francia, España y Portugal","Estados Unidos, Japón, China y la URSS"],0],
  [4,"¿Qué política de Gran Bretaña y Francia cedió ante Hitler antes de la guerra (Múnich, 1938)?",["La política de apaciguamiento","La política de no intervención","La política de contención","La política del buen vecino"],0],
  [5,"¿Qué pacto firmaron Alemania y la URSS en agosto de 1939?",["Un pacto de no agresión (Ribbentrop-Mólotov)","Una alianza militar contra Gran Bretaña (Pacto de Acero)","Un acuerdo de comercio de petróleo (Pacto de Múnich)","Un tratado para repartirse Austria (Pacto de Locarno)"],0]]],
 ["Batallas y momentos clave","⚔️",[
  [1,"¿Cómo se llamó la táctica alemana de ataques rápidos con tanques y aviones?",["Guerra relámpago","Guerra de trincheras","Guerra de desgaste","Guerra de guerrillas"],0],
  [2,"¿Qué base de EE.UU. atacó Japón en diciembre de 1941?",["Pearl Harbor","Normandía","Stalingrado","Midway"],0],
  [2,"¿Qué primer ministro británico lideró la resistencia contra Hitler?",["Winston Churchill","Neville Chamberlain","Margaret Thatcher","Charles de Gaulle"],0],
  [3,"¿Qué batalla en la URSS (1942–1943) marcó el inicio de la derrota alemana?",["Stalingrado","Verdún","Waterloo","El Alamein"],0],
  [4,"¿Qué ocurrió el 6 de junio de 1944, el 'Día D'?",["El desembarco aliado en Normandía","El desembarco aliado en Sicilia","La liberación de París","La batalla de las Ardenas"],0],
  [5,"¿Qué batalla aérea de 1940 impidió la invasión alemana de Gran Bretaña?",["La Batalla de Inglaterra","La Batalla de Midway","La Batalla del Atlántico","La Batalla de Berlín"],0]]],
 ["El Holocausto","🕯️",[
  [1,"¿Qué fue el Holocausto (Shoá)?",["El genocidio sistemático de unos seis millones de judíos por el régimen nazi","La gran batalla en la que la URSS derrotó al ejército nazi en Stalingrado","El bombardeo atómico de Hiroshima y Nagasaki por parte de Estados Unidos","La crisis económica que llevó al nazismo al poder en Alemania en 1933"],0],
  [2,"¿Qué joven judía escribió un famoso diario mientras se escondía en Ámsterdam?",["Ana Frank","Marie Curie","Malala Yousafzai","Frida Kahlo"],0],
  [3,"¿Cuál fue el mayor campo de concentración y exterminio nazi?",["Auschwitz-Birkenau","Dachau","Buchenwald","Bergen-Belsen"],0],
  [3,"Además de los judíos, ¿qué otros grupos persiguió el nazismo?",["Gitanos (romaníes), personas con discapacidad, homosexuales y opositores políticos","Solo a los soldados de los ejércitos aliados capturados en combate","Solo a los extranjeros ricos que vivían en las ciudades alemanas","A los miembros del partido nazi que perdían elecciones internas"],0],
  [4,"¿Qué nombre dieron los nazis a su plan de exterminio de los judíos?",["La 'solución final'","El 'nuevo trato'","La 'guerra relámpago'","El 'plan quinquenal'"],0],
  [5,"¿Qué palabra creó el jurista Raphael Lemkin para nombrar la destrucción intencional de un pueblo?",["Genocidio","Imperialismo","Totalitarismo","Apartheid"],0]]],
 ["Fin de la guerra","☢️",[
  [1,"¿Sobre qué ciudades japonesas se lanzaron bombas atómicas en 1945?",["Hiroshima y Nagasaki","Tokio y Kioto","Pekín y Shanghái","Seúl y Osaka"],0],
  [2,"¿En qué año terminó la Segunda Guerra Mundial?",["1945","1939","1950","1918"],0],
  [3,"¿Qué ejército llegó primero a Berlín en 1945?",["El Ejército Rojo soviético","El ejército estadounidense","El ejército japonés","El ejército italiano"],0],
  [3,"¿Aproximadamente cuántas personas murieron en la Segunda Guerra Mundial?",["Entre 50 y 60 millones","Entre 5 y 6 millones","Entre 10 y 12 millones","Entre 1 y 2 millones"],0],
  [4,"¿Qué juicios condenaron a jerarcas nazis por crímenes contra la humanidad?",["Los Juicios de Núremberg","Los Juicios de Salem","El Juicio Final","Los juicios de Versalles"],0],
  [5,"¿En qué conferencias de 1945 los líderes aliados decidieron el futuro de Europa?",["Yalta y Potsdam","Viena y Berlín","Versalles y Ginebra","Bretton Woods y Lima"],0]]],
 ["Postguerra: ONU y DD.HH.","🕊️",[
  [1,"¿Qué organización internacional se creó en 1945 para mantener la paz?",["La ONU","La Sociedad de Naciones","La URSS","La OTAN"],0],
  [2,"¿Qué documento de 1948 estableció derechos para todas las personas del mundo?",["La Declaración Universal de los Derechos Humanos","La Carta del Atlántico firmada por Roosevelt y Churchill","La Convención sobre los Derechos del Niño de la ONU","El Pacto de la Sociedad de Naciones de Ginebra"],0],
  [3,"¿Qué órgano de la ONU tiene miembros permanentes con derecho a veto?",["El Consejo de Seguridad","La UNESCO","La Asamblea de Estudiantes","El Tribunal de Núremberg"],0],
  [3,"¿Qué plan de EE.UU. ayudó a reconstruir Europa occidental?",["El Plan Marshall","El New Deal","El Plan Z","El Plan Cóndor"],0],
  [4,"¿Qué ocurrió con Alemania tras la guerra?",["Fue dividida en zonas de ocupación y luego en dos Estados","Se mantuvo unida y neutral bajo control de la ONU","Fue anexada por completo a Francia y Polonia","Recuperó Austria y se convirtió en una monarquía"],0],
  [5,"¿Qué características tienen los derechos humanos?",["Son universales, inalienables e indivisibles","Son nacionales, temporales y transferibles","Son solo para los ciudadanos que pagan impuestos","Dependen de las leyes de cada gobierno de turno"],0]]]
],[
 ["Líderes de la Segunda Guerra Mundial 🎖️",["Hitler","Churchill","Stalin","Roosevelt","Mussolini"],"Hirohito, De Gaulle, Truman, Eisenhower"],
 ["Países de los Aliados 🤝",["Estados Unidos","Gran Bretaña","Unión Soviética","Francia","China"],"Canadá, Australia, Polonia, Brasil, México"]]),

T("h2gf","Guerra Fría y descolonización","🧊","2° Medio · Unidad 2","Dos bloques · crisis · descolonización · América Latina · fin de la Guerra Fría",[
 ["Dos bloques","🧊",[
  [1,"¿Qué superpotencias se enfrentaron en la Guerra Fría?",["Estados Unidos y la URSS","Estados Unidos y China","Gran Bretaña y la URSS","Alemania y Estados Unidos"],0],
  [2,"¿Por qué se llamó 'fría'?",["Porque las superpotencias no se enfrentaron directamente en batalla","Porque la mayoría de los combates ocurrieron en la Antártica y Siberia","Porque las relaciones entre Europa y América se congelaron por completo","Porque se usaron armas químicas que congelaban a los soldados"],0],
  [2,"¿Qué sistema económico defendía Estados Unidos?",["El capitalismo","El comunismo","El feudalismo","El mercantilismo"],0],
  [3,"¿Qué alianza militar formaron EE.UU. y Europa occidental en 1949?",["La OTAN","El Pacto de Varsovia","La Sociedad de Naciones","El Mercosur"],0],
  [3,"¿Qué alianza militar formó la URSS con Europa del Este en 1955?",["El Pacto de Varsovia","La OTAN","La Triple Entente","La ONU"],0],
  [4,"¿Qué expresión usó Churchill para describir la división de Europa?",["Telón (cortina) de acero","Muro de los lamentos","Puente de plata","Línea Maginot"],0],
  [5,"¿Qué fue la carrera espacial?",["La competencia entre EE.UU. y la URSS por llegar primero al espacio y a la Luna","La competencia entre Alemania y Japón por fabricar los primeros cohetes militares","Un programa conjunto de la ONU para explorar el espacio en forma pacífica","La rivalidad entre Gran Bretaña y Francia por construir el primer satélite"],0]]],
 ["Crisis y conflictos","🚀",[
  [1,"¿Qué muro dividió una ciudad alemana entre 1961 y 1989?",["El Muro de Berlín","La Muralla China","El Muro de Adriano","El Muro de los Lamentos"],0],
  [2,"¿Qué crisis de 1962 casi provocó una guerra nuclear?",["La crisis de los misiles en Cuba","La crisis del Canal de Suez","La crisis del bloqueo de Berlín","La crisis de la Bahía de Cochinos"],0],
  [3,"¿Qué guerra (1950–1953) dejó dividida una península asiática en dos países?",["La Guerra de Corea","La Guerra de Vietnam","La Guerra del Golfo","La Guerra de las Malvinas"],0],
  [3,"¿En qué guerra del sudeste asiático participó EE.UU., generando grandes protestas?",["La Guerra de Vietnam","La Guerra de Corea","La Guerra de Irak","La Guerra de Afganistán"],0],
  [4,"¿Quién fue el primer ser humano en viajar al espacio (1961)?",["Yuri Gagarin","Neil Armstrong","Buzz Aldrin","La perrita Laika"],0],
  [5,"¿Qué fue el bloqueo de Berlín (1948–1949)?",["La URSS cortó los accesos terrestres a Berlín occidental y los aliados respondieron con un puente aéreo","Estados Unidos cerró las fronteras de Berlín oriental e impidió la llegada de alimentos soviéticos","La URSS construyó un muro que dividió la ciudad y prohibió los viajes entre las dos Alemanias","Los aliados ocuparon toda la ciudad de Berlín y expulsaron a las tropas soviéticas de ella"],0]]],
 ["Descolonización","🌍",[
  [1,"¿Qué es la descolonización?",["El proceso por el que las colonias obtuvieron su independencia","El proceso por el que las potencias conquistaron nuevas colonias en África","La migración de los colonos europeos de vuelta a sus países de origen","La unión de varias colonias para formar un nuevo imperio en Asia"],0],
  [2,"¿Qué líder logró la independencia de la India mediante la no violencia?",["Mahatma Gandhi","Nelson Mandela","Martin Luther King","Mao Zedong"],0],
  [3,"¿En qué año se independizó la India?",["1947","1810","1989","1918"],0],
  [3,"¿Qué continente vivió el 'año de África' en 1960, con 17 nuevos países independientes?",["África","Asia","Oceanía","Europa"],0],
  [4,"¿Qué sistema de segregación racial existió en Sudáfrica hasta 1994?",["El apartheid","El feudalismo","El comunismo","El fascismo"],0],
  [5,"¿Qué fue el Movimiento de Países No Alineados?",["Un grupo de países que no quería unirse a ninguno de los dos bloques","Una alianza militar de los países aliados a la URSS en Europa del Este","Un grupo de países capitalistas que apoyaba a Estados Unidos en la ONU","Una organización de países sin ejército que pedía el desarme mundial"],0]]],
 ["Guerra Fría en América Latina","🌎",[
  [1,"¿Qué revolución triunfó en 1959 liderada por Fidel Castro?",["La Revolución Cubana","La Revolución Mexicana","La Revolución Francesa","La Revolución Rusa"],0],
  [2,"¿Qué guerrillero argentino participó en la Revolución Cubana?",["Ernesto 'Che' Guevara","Juan Domingo Perón","Simón Bolívar","Diego Maradona"],0],
  [3,"¿Qué programa de EE.UU. buscó frenar la influencia comunista con ayuda económica (1961)?",["La Alianza para el Progreso","El Plan Marshall","El Punto Cuatro de Truman","La Política del Buen Vecino"],0],
  [3,"¿Qué fue el Plan Cóndor?",["Una coordinación represiva entre dictaduras sudamericanas en los años setenta","Un programa de Estados Unidos para financiar la industria sudamericana","Un acuerdo entre países andinos para proteger su fauna y flora nativas","Una alianza de partidos de izquierda para ganar elecciones en Sudamérica"],0],
  [4,"¿Qué invasión fallida a Cuba apoyó EE.UU. en 1961?",["Bahía de Cochinos","Normandía","Pearl Harbor","Guantánamo"],0],
  [5,"¿Qué fue la Doctrina de Seguridad Nacional?",["La idea de que las FF.AA. debían combatir a un 'enemigo interno' comunista","La política de la ONU para proteger a los civiles durante los conflictos armados","El plan de Estados Unidos para reconstruir Europa occidental tras la guerra","La idea de que los países debían desarmarse para evitar golpes de Estado"],0]]],
 ["Fin de la Guerra Fría","🧱",[
  [1,"¿En qué año cayó el Muro de Berlín?",["1989","1961","1945","2001"],0],
  [2,"¿En qué año se disolvió la URSS?",["1991","1917","1989","1945"],0],
  [3,"¿Qué líder soviético impulsó las reformas llamadas perestroika y glásnost?",["Mijaíl Gorbachov","Leonid Brézhnev","Nikita Jruschov","Yuri Andrópov"],0],
  [3,"¿Qué sindicato polaco, liderado por Lech Wałęsa, desafió al régimen comunista?",["Solidaridad","La Mancomunal","La CUT","Fuerza Obrera"],0],
  [4,"¿En qué año se reunificó Alemania?",["1990","1989","1991","1945"],0],
  [5,"¿Qué orden mundial surgió tras la Guerra Fría?",["Uno con EE.UU. como principal superpotencia y avance de la globalización","Uno con la URSS reconstituida como la principal potencia del mundo","Uno dividido en tres bloques: Europa, Asia y América, sin superpotencias","Uno con el regreso de los imperios coloniales europeos en África y Asia"],0]]]
],[
 ["Países del bloque comunista 🔴",["URSS","Cuba","China","Alemania Oriental","Polonia"],"Corea del Norte, Vietnam, Hungría, Checoslovaquia, Rumania, Bulgaria"],
 ["Conflictos de la Guerra Fría 🧊",["Guerra de Corea","Guerra de Vietnam","crisis de los misiles","bloqueo de Berlín","guerra de Afganistán"],"Bahía de Cochinos, Primavera de Praga, carrera espacial, carrera armamentista"]]),

T("h2ch1","Chile 1920–1970","🏭","2° Medio · Unidad 2","Crisis del parlamentarismo · Estado desarrollista · mujeres y ciudadanía · campo y ciudad · gobiernos",[
 ["Fin del parlamentarismo","🏛️",[
  [1,"¿Qué presidente, llamado 'el León de Tarapacá', fue elegido en 1920?",["Arturo Alessandri Palma","Salvador Allende","Pedro Aguirre Cerda","Carlos Ibáñez"],0],
  [2,"¿Qué Constitución restableció en 1925 un régimen presidencial?",["La Constitución de 1925","La Constitución de 1833","La Constitución de 1980","La Constitución de 1818"],0],
  [3,"¿Qué fue el 'ruido de sables' (1924)?",["Una protesta de jóvenes oficiales en el Senado que presionó por leyes sociales","Un intento de golpe de la Armada contra el presidente Ibáñez en Valparaíso","El enfrentamiento entre el Ejército y los obreros del salitre en Iquique","Una ceremonia militar para celebrar el centenario de la independencia"],0],
  [3,"¿Qué separó la Constitución de 1925?",["La Iglesia del Estado","El norte del sur","Chile de Argentina","El Congreso de Santiago"],0],
  [4,"¿Qué militar gobernó Chile de forma autoritaria entre 1927 y 1931?",["Carlos Ibáñez del Campo","Marmaduke Grove","Bartolomé Blanche","Luis Altamirano"],0],
  [5,"¿Qué régimen breve se proclamó en Chile en junio de 1932?",["La República Socialista","La República Parlamentaria","El Imperio de Chile","La Monarquía Constitucional"],0]]],
 ["Estado desarrollista","🏭",[
  [1,"¿Qué presidente gobernó con el lema 'Gobernar es educar'?",["Pedro Aguirre Cerda","Arturo Alessandri","Augusto Pinochet","Michelle Bachelet"],0],
  [2,"¿Qué coalición llevó a Aguirre Cerda al poder en 1938?",["El Frente Popular","La Unidad Popular","La Concertación","La Alianza"],0],
  [3,"¿Qué institución se creó en 1939, tras el terremoto de Chillán, para impulsar la producción?",["La CORFO","CODELCO","El SERNAC","La ENAP"],0],
  [3,"¿Qué significa el modelo ISI?",["Industrialización por Sustitución de Importaciones","Inversión Sostenida en Industria y Servicios","Integración del Sector Industrial Interno","Impuesto Selectivo a las Importaciones"],0],
  [4,"¿Qué empresas impulsó la CORFO?",["ENDESA (electricidad), CAP (acero) y ENAP (petróleo)","LAN (aviación), Entel (telefonía) y BancoEstado (banca)","Codelco (cobre), Enami (minería) y SQM (salitre y litio)","Falabella (comercio), Ripley (tiendas) y Lider (supermercados)"],0],
  [5,"¿Qué buscaba el Estado desarrollista o 'de compromiso'?",["Que el Estado impulsara la economía, la industria y los derechos sociales","Que el Estado dejara la economía en manos del mercado y redujera su tamaño","Que el país volviera a depender de la exportación de salitre y trigo","Que el Estado eliminara los sindicatos y los derechos laborales"],0]]],
 ["Mujeres y ciudadanía","🗳️",[
  [1,"¿En qué año votaron por primera vez las mujeres chilenas en una elección presidencial?",["1952","1810","1990","1925"],0],
  [2,"¿En qué año se aprobó el sufragio femenino universal en Chile?",["1949","1934","1970","1989"],0],
  [3,"¿Qué organización feminista fundaron Elena Caffarena y otras mujeres en 1935?",["El MEMCH (Movimiento Pro Emancipación de las Mujeres de Chile)","El Consejo Nacional de Mujeres de Chile (CNMCh)","La Federación de Estudiantes de la Universidad de Chile (FECH)","El Partido Femenino Chileno (PFCh), dirigido por María de la Cruz"],0],
  [3,"¿Desde qué año pudieron votar las mujeres en elecciones municipales en Chile?",["1934","1949","1891","1973"],0],
  [4,"¿Quién fue la primera mujer senadora de Chile?",["María de la Cruz","Michelle Bachelet","Gabriela Mistral","Violeta Parra"],0],
  [5,"¿Qué poeta chilena ganó el Nobel de Literatura en 1945, la primera latinoamericana en lograrlo?",["Gabriela Mistral","Isabel Allende","Violeta Parra","Marcela Paz"],0]]],
 ["Campo y ciudad","🌾",[
  [1,"¿Hacia dónde migraron muchos campesinos chilenos a mediados del siglo XX?",["A las ciudades, especialmente Santiago","A las oficinas salitreras del norte","A la Patagonia argentina y Magallanes","A los puertos de Perú y Bolivia"],0],
  [2,"¿Cómo se llamaban los asentamientos precarios que surgieron en la periferia de Santiago?",["Poblaciones callampa","Poblaciones obreras","Cités","Conventillos"],0],
  [3,"¿Qué eran las 'tomas' de terreno?",["Ocupaciones de sitios por familias sin vivienda para exigir casas","Expropiaciones de fundos realizadas por el Estado durante la Reforma Agraria","Compras de terrenos por parte de inmobiliarias para construir poblaciones","Ocupaciones de fábricas por obreros que exigían mejores salarios"],0],
  [3,"¿Qué era el inquilinaje en las haciendas?",["Un sistema en que campesinos vivían en la hacienda a cambio de trabajo","Un sistema de arriendo de tierras pagado en dinero a la Corona","Un tipo de cooperativa agrícola formada por pequeños propietarios","Un contrato de trabajo temporal para la cosecha de trigo"],0],
  [4,"¿Qué buscaba la Reforma Agraria?",["Repartir la tierra de los latifundios entre campesinos","Vender las tierras fiscales a empresas extranjeras","Unir los pequeños predios en grandes haciendas","Devolver las tierras a los antiguos encomenderos"],0],
  [5,"¿Qué ley de 1967 permitió a los campesinos organizarse en sindicatos?",["La Ley de Sindicalización Campesina","La Ley Maldita","La Ley de Instrucción Primaria","La Ley Seca"],0]]],
 ["Gobiernos 1938–1970","👔",[
  [1,"¿Qué presidente gobernó entre 1964 y 1970 con el lema 'Revolución en libertad'?",["Eduardo Frei Montalva","Salvador Allende","Jorge Alessandri","Carlos Ibáñez"],0],
  [2,"¿Qué terremoto, el más fuerte registrado en la historia, ocurrió en Chile en 1960?",["El terremoto de Valdivia","El terremoto de Chillán","El terremoto de 2010","El terremoto de Valparaíso de 1906"],0],
  [2,"¿Qué evento deportivo mundial se realizó en Chile en 1962?",["La Copa Mundial de Fútbol","Los Juegos Olímpicos","La Copa Davis","El Rally Dakar"],0],
  [3,"¿Qué política del cobre aplicó Frei Montalva?",["La 'chilenización': el Estado compró parte de las grandes minas","La nacionalización total sin pagar indemnización a las empresas","La privatización de las minas que pertenecían al Estado","La venta de las minas a empresas soviéticas y chinas"],0],
  [4,"¿Qué presidente independiente de derecha gobernó entre 1958 y 1964?",["Jorge Alessandri Rodríguez","Arturo Alessandri Palma","Eduardo Frei Ruiz-Tagle","Gabriel González Videla"],0],
  [5,"¿Qué ley de 1948 proscribió al Partido Comunista durante el gobierno de González Videla?",["La Ley de Defensa Permanente de la Democracia ('Ley Maldita')","La Ley de Seguridad Interior del Estado ('Ley de Residencia')","La Ley de Abusos de Publicidad ('Ley Mordaza')","La Ley de Estado de Sitio ('Ley de Excepción')"],0]]]
],[
 ["Logros del Chile de 1920 a 1970 🇨🇱",["voto femenino","CORFO","leyes sociales","Constitución de 1925","reforma agraria"],"educación primaria obligatoria (1920), ENDESA, chilenización del cobre, Mundial de 1962"],
 ["Presidentes de Chile entre 1920 y 1970 👔",["Arturo Alessandri","Pedro Aguirre Cerda","Carlos Ibáñez","Eduardo Frei Montalva","Jorge Alessandri"],"Juan Antonio Ríos, Gabriel González Videla, Juan Esteban Montero, Emiliano Figueroa"]]),

T("h2up","Golpe de Estado y dictadura en Chile","⚖️","2° Medio · Unidades 2 y 3","Antecedentes (Unidad Popular) · golpe de Estado · dictadura · derechos humanos · modelo neoliberal",[
 ["Unidad Popular","🗳️",[
  [1,"¿Quién fue elegido Presidente de Chile en 1970 por la Unidad Popular?",["Salvador Allende","Eduardo Frei Montalva","Augusto Pinochet","Jorge Alessandri"],0],
  [2,"¿Qué buscaba el programa de la Unidad Popular?",["Una 'vía chilena al socialismo' por medios democráticos","Una economía de libre mercado con privatización de empresas","Una monarquía constitucional al estilo británico","Un gobierno militar que eliminara los partidos"],0],
  [2,"¿Qué recurso nacionalizó el Congreso por unanimidad en 1971?",["La gran minería del cobre","El salitre de Tarapacá","El petróleo de Magallanes","El litio del Salar de Atacama"],0],
  [3,"¿Qué programa entregaba medio litro de leche diario a niños y niñas?",["El programa del medio litro de leche","El Programa Nacional de Alimentación Escolar","El programa Chile Crece Contigo","El Plan Nacional de Leche Materna"],0],
  [4,"¿Qué problemas económicos enfrentó la UP en 1972–1973?",["Alta inflación, desabastecimiento y mercado negro","Exceso de exportaciones y caída del dólar","Cero desempleo y precios muy bajos","Superávit fiscal y aumento del ahorro"],0],
  [5,"¿Qué era el Área de Propiedad Social?",["El conjunto de empresas estratégicas que pasaron a manos del Estado","El conjunto de terrenos fiscales destinados a viviendas sociales","Las tierras devueltas a las comunidades indígenas del sur","Las cooperativas formadas por pequeños comerciantes"],0]]],
 ["Polarización y golpe de Estado","🏛️",[
  [1,"¿En qué fecha ocurrió el golpe de Estado en Chile?",["11 de septiembre de 1973","18 de septiembre de 1810","5 de octubre de 1988","21 de mayo de 1879"],0],
  [2,"¿Qué edificio fue bombardeado el 11 de septiembre de 1973?",["El Palacio de La Moneda","El Congreso en Valparaíso","El Estadio Nacional","La Torre Entel"],0],
  [3,"¿Qué significa 'polarización política'?",["Que la sociedad se divide en posiciones extremas y opuestas, sin diálogo","Que la mayoría de la población apoya a los partidos de centro","Que los partidos se ponen de acuerdo para gobernar juntos","Que la política se concentra en las regiones del norte y del sur"],0],
  [3,"¿Qué paro de 1972 paralizó gran parte del transporte contra el gobierno de Allende?",["El paro de camioneros","El paro de los mineros de El Teniente","El paro de los portuarios de Valparaíso","El paro de los choferes del Transantiago"],0],
  [4,"¿Qué aprobó la Cámara de Diputados en agosto de 1973?",["Un acuerdo que acusaba al gobierno de quebrantar la Constitución","Una reforma que adelantaba las elecciones presidenciales a 1974","Un acuerdo que aprobaba la nacionalización de la banca privada","Una ley que entregaba el poder a las Fuerzas Armadas por un año"],0],
  [5,"Según documentos desclasificados, ¿qué potencia extranjera intervino para desestabilizar al gobierno de la UP?",["Estados Unidos","Suiza","Japón","Australia"],0]]],
 ["Dictadura militar","⛔",[
  [1,"¿Quién encabezó la Junta Militar desde 1973?",["Augusto Pinochet","Salvador Allende","Patricio Aylwin","Carlos Prats"],0],
  [2,"¿Qué ocurrió con el Congreso Nacional tras el golpe?",["Fue clausurado","Siguió funcionando normalmente","Se trasladó a Lima","Eligió a Pinochet"],0],
  [2,"¿Qué estadio fue usado como centro de detención en 1973?",["El Estadio Nacional","El Estadio Monumental","El Estadio Sausalito","El Maracaná"],0],
  [3,"¿Qué era la DINA?",["La policía secreta de la dictadura","La agencia de inteligencia de la Armada","El servicio de prensa del gobierno militar","El organismo que administraba las AFP"],0],
  [4,"¿Qué Constitución se aprobó en un plebiscito de 1980 sin registros electorales?",["La Constitución de 1980","La Constitución de 1925","La Constitución de 1833","La Constitución de 2022"],0],
  [5,"¿Qué protestas masivas contra la dictadura comenzaron en 1983?",["Las jornadas de protesta nacional","Las marchas de la Unidad Popular","Las tomas de Lo Hermida","El paro de octubre"],0]]],
 ["Derechos humanos","🕯️",[
  [1,"¿Qué son los derechos humanos?",["Derechos que tienen todas las personas por el solo hecho de ser humanas","Derechos que el Estado otorga solo a quienes cumplen con sus deberes","Privilegios que cada gobierno puede ampliar o suprimir según la ley","Derechos que se adquieren al cumplir la mayoría de edad y votar"],0],
  [2,"¿Qué institución de la Iglesia católica defendió a víctimas de la dictadura?",["La Vicaría de la Solidaridad","El Hogar de Cristo","La Pastoral Juvenil","El Arzobispado Castrense"],0],
  [3,"¿Qué informe de 1991 investigó las desapariciones y ejecuciones durante la dictadura?",["El Informe Rettig (Comisión de Verdad y Reconciliación)","El Informe Valech (Comisión sobre Prisión Política y Tortura)","El Informe Aylwin (Comisión de Derechos Humanos del Senado)","El Informe Church (Comisión del Senado de los Estados Unidos)"],0],
  [3,"¿Qué informe de 2004 reconoció a las víctimas de prisión política y tortura?",["El Informe Valech","El Informe Rettig","El Informe Venegas","El Informe Bello"],0],
  [4,"¿Qué significa 'detenido desaparecido'?",["Una persona detenida por agentes del Estado cuyo paradero fue ocultado","Una persona que salió al exilio sin avisar a su familia ni al Estado","Un preso que escapó de un centro de detención y nunca fue encontrado","Una persona que perdió sus documentos y no puede ser identificada"],0],
  [5,"¿Qué museo de Santiago conmemora a las víctimas de violaciones a los DD.HH. entre 1973 y 1990?",["El Museo de la Memoria y los Derechos Humanos","El Museo Histórico Nacional de la Plaza de Armas","El Museo Nacional de Historia Natural de Quinta Normal","El Museo de la Solidaridad Salvador Allende"],0]]],
 ["Modelo neoliberal","📊",[
  [1,"¿Cómo se llamó a los economistas chilenos formados en la Universidad de Chicago?",["Chicago boys","Harvard kids","Los Bello","Los Ilustrados"],0],
  [2,"¿Qué idea central tiene el modelo neoliberal?",["Libre mercado, Estado reducido y apertura comercial","Control total del Estado sobre la economía y las empresas","Protección de la industria nacional con altos aranceles","Planificación central de la producción cada cinco años"],0],
  [3,"¿Qué áreas se privatizaron total o parcialmente en dictadura?",["Pensiones, salud y empresas estatales","Las Fuerzas Armadas y Carabineros","El Congreso y los tribunales de justicia","La Contraloría y el Banco Central"],0],
  [3,"¿Qué grave crisis económica sufrió Chile en 1982?",["Una crisis de deuda, con quiebra de bancos y alto desempleo","Una crisis por la caída del precio del salitre","Una hiperinflación causada por emitir dinero","Una crisis por el cierre del Canal de Panamá"],0],
  [4,"¿Qué sistema de pensiones se creó en 1980?",["Las AFP (capitalización individual)","El seguro obrero de 1924","Un sistema de reparto estatal","La Pensión Garantizada Universal"],0],
  [5,"¿Qué empresa estatal del cobre se creó en 1976 y no fue privatizada?",["CODELCO","CORFO","ENAP","LAN Chile"],0]]]
],[
 ["Hitos del gobierno de la Unidad Popular 🗳️",["nacionalización del cobre","reforma agraria","medio litro de leche","Área de Propiedad Social","elección de Allende"],"editorial Quimantú, Tren Popular de la Cultura, aumento de salarios"],
 ["Sitios e instituciones de memoria 🕯️",["Museo de la Memoria","Villa Grimaldi","Estadio Nacional","Londres 38","Vicaría de la Solidaridad"],"Estadio Víctor Jara, Memorial del Detenido Desaparecido, Patio 29, José Domingo Cañas"]]),

T("h2dem","Recuperación de la democracia","🌈","2° Medio · Unidad 3","Plebiscito de 1988 · transición · Chile en democracia · movimientos sociales · desafíos",[
 ["Plebiscito de 1988","✅",[
  [1,"¿En qué año se realizó el plebiscito en que ganó el 'No' a Pinochet?",["1988","1973","1990","1980"],0],
  [2,"¿Qué opción ganó en el plebiscito del 5 de octubre de 1988?",["El NO","El SÍ","Hubo empate","Se anuló"],0],
  [2,"¿Qué símbolo usó la campaña del NO?",["Un arcoíris","Una estrella solitaria","Un cóndor","Un puño cerrado"],0],
  [3,"¿Cuál fue la canción de la campaña del NO?",["'Chile, la alegría ya viene'","'Gracias a la vida'","'El baile de los que sobran'","'Libre'"],0],
  [4,"¿Qué establecía la Constitución de 1980 si ganaba el NO?",["Elecciones presidenciales y parlamentarias al año siguiente (1989)","Que Pinochet siguiera en el poder por otros ocho años","Que la Junta Militar eligiera a un nuevo candidato único","Que se convocara de inmediato a una Asamblea Constituyente"],0],
  [5,"¿Qué alianza de partidos opositores impulsó el NO y luego gobernó desde 1990?",["La Concertación de Partidos por la Democracia","La Alianza Democrática por el Cambio","La Unidad Popular por la Democracia","El Frente Amplio por la Libertad"],0]]],
 ["Transición","🕊️",[
  [1,"¿Quién fue el primer Presidente tras la dictadura (1990)?",["Patricio Aylwin","Ricardo Lagos","Eduardo Frei Ruiz-Tagle","Michelle Bachelet"],0],
  [2,"¿Qué se conoce como 'transición a la democracia'?",["El paso de la dictadura a un gobierno democrático","El paso de la monarquía a la república","El traslado del Congreso a Valparaíso","El cambio de la Constitución de 1925"],0],
  [3,"¿Qué 'enclaves autoritarios' dejó la Constitución de 1980?",["Senadores designados y vitalicios, y FF.AA. con gran autonomía","Voto obligatorio, inscripción automática y elecciones cada dos años","Libertad de prensa, partidos políticos y sindicatos sin restricciones","Plebiscitos anuales, revocación de mandato y voto desde los 16 años"],0],
  [4,"¿En qué año una gran reforma constitucional eliminó a los senadores designados?",["2005","1990","2019","1980"],0],
  [4,"¿En qué ciudad fue detenido Pinochet en 1998 por orden de un juez español?",["Londres","Madrid","Washington","Buenos Aires"],0],
  [5,"¿Qué comisión creó Aylwin en 1990 para investigar violaciones a los DD.HH.?",["La Comisión Nacional de Verdad y Reconciliación (Rettig)","La Comisión Nacional sobre Prisión Política y Tortura (Valech)","La Comisión Interamericana de Derechos Humanos (CIDH)","La Comisión Asesora para la Paz y la Justicia (Mesa de Diálogo)"],0]]],
 ["Chile en democracia","🇨🇱",[
  [1,"¿Quién fue la primera mujer Presidenta de Chile?",["Michelle Bachelet","Gabriela Mistral","Isabel Allende","Evelyn Matthei"],0],
  [2,"¿En qué año asumió Michelle Bachelet su primer mandato?",["2006","1990","2000","2018"],0],
  [3,"¿Qué tratado comercial importante firmó Chile con EE.UU. en 2003?",["Un Tratado de Libre Comercio","Un acuerdo de doble tributación","Un tratado de cooperación militar","Un acuerdo de exención de visas"],0],
  [3,"¿Qué gran terremoto y tsunami afectó a Chile el 27 de febrero de 2010?",["El terremoto 27F","El terremoto de Valdivia","El terremoto de Chillán","El terremoto de Talca de 1928"],0],
  [4,"¿Qué cambio electoral de 2012 inscribió automáticamente a todos los mayores de 18 años?",["La inscripción automática y el voto voluntario","El voto obligatorio con inscripción voluntaria","El voto de los chilenos en el extranjero","La inscripción voluntaria y el voto obligatorio"],0],
  [5,"¿En qué año se realizó el plebiscito en que ganó la opción de redactar una nueva Constitución?",["2020","1988","2005","2010"],0]]],
 ["Movimientos sociales","📣",[
  [1,"¿Cómo se llamó la movilización de estudiantes secundarios de 2006?",["La revolución pingüina","La Revolución en libertad","La Primavera de Praga","La revolución de las flores"],0],
  [2,"¿Qué exigía el movimiento estudiantil de 2011?",["Educación pública, gratuita y de calidad","Más horas de clases y menos vacaciones","Rebajar la edad para votar a los 14 años","Eliminar la enseñanza técnico-profesional"],0],
  [3,"¿Qué ocurrió en Chile a partir del 18 de octubre de 2019?",["El estallido social, con masivas protestas","El plebiscito para elegir una nueva Constitución","El terremoto y tsunami más grande del siglo","La elección de la primera Presidenta del país"],0],
  [3,"¿Qué temas instaló la ola feminista de 2018 en universidades y liceos?",["El fin del acoso, la educación no sexista y la igualdad de género","La gratuidad universitaria, el fin del lucro y la desmunicipalización","La rebaja del pasaje escolar y la entrega de computadores gratuitos","El aumento de las horas de inglés y de educación física en los liceos"],0],
  [4,"¿Qué es un movimiento social?",["Un grupo de personas organizadas que se moviliza por demandas comunes","Un partido político que gobierna el país después de ganar elecciones","Una empresa que realiza campañas de publicidad en las redes sociales","Un grupo de autoridades elegidas por votación para representar a otros"],0],
  [5,"¿Qué movimiento masivo de 2016 se opuso al sistema de pensiones?",["'No + AFP'","'Ni una menos'","'Fridays for Future'","'Me Too'"],0]]],
 ["Desafíos de la democracia","🧭",[
  [1,"¿Qué es la democracia?",["Un sistema en que el poder emana del pueblo, que elige a sus autoridades","Un sistema en que un líder elegido gobierna sin límite de tiempo ni control","Un sistema en que gobiernan los más ricos y educados del país","Un sistema en que el Ejército garantiza el orden y nombra a las autoridades"],0],
  [2,"¿Cuál es una forma de participación ciudadana?",["Votar o participar en una junta de vecinos","Opinar solo en redes sociales anónimas","Dejar que otros decidan por nosotros","Evitar informarse sobre los candidatos"],0],
  [3,"¿Qué desafío democrático se relaciona con la confianza en las instituciones?",["Combatir la corrupción y promover la transparencia","Reducir el número de elecciones que se realizan","Aumentar el número de ministerios y servicios","Prohibir las encuestas políticas antes de votar"],0],
  [3,"¿Qué es la abstención electoral?",["Que las personas habilitadas no vayan a votar","Votar en blanco o nulo","Votar por un candidato independiente","Cambiar el lugar de votación"],0],
  [4,"¿Qué ley de 2016 obliga a los establecimientos a tener un Plan de Formación Ciudadana?",["La Ley 20.911","La Ley Maldita","La Ley de Instrucción Primaria","La Ley 20.000"],0],
  [5,"¿Qué desafío enfrentan las democracias con las redes sociales?",["La desinformación y las noticias falsas","La falta de acceso a internet en las ciudades","El exceso de bibliotecas públicas en los barrios","La desaparición de los partidos políticos"],0]]]
],[
 ["Presidentes de Chile desde 1990 🇨🇱",["Patricio Aylwin","Eduardo Frei Ruiz-Tagle","Ricardo Lagos","Michelle Bachelet","Sebastián Piñera"],"Gabriel Boric y presidentes posteriores"],
 ["Formas de participación ciudadana 📣",["votar","centro de estudiantes","junta de vecinos","marchas pacíficas","voluntariado"],"firmar peticiones, cabildos, consultas ciudadanas, ser candidato, sindicatos"]]),

T("h2ciu","Estado de derecho y ciudadanía","🏛️","2° Medio · Unidad 4","Poderes del Estado · Constitución y leyes · derechos y deberes · participación · instituciones",[
 ["Poderes del Estado","🏛️",[
  [1,"¿Cuáles son los tres poderes del Estado?",["Ejecutivo, Legislativo y Judicial","Militar, Religioso y Económico","Rey, Iglesia y Nobleza","Regional, Comunal y Vecinal"],0],
  [2,"¿Quién encabeza el Poder Ejecutivo en Chile?",["El Presidente de la República","El Presidente del Senado","La Corte Suprema","El alcalde de Santiago"],0],
  [2,"¿Qué hace principalmente el Poder Legislativo?",["Discutir y aprobar las leyes","Juzgar delitos y aplicar penas","Dirigir las Fuerzas Armadas","Recaudar los impuestos del país"],0],
  [3,"¿Qué dos cámaras forman el Congreso Nacional?",["La Cámara de Diputadas y Diputados, y el Senado","La Corte Suprema y la Corte de Apelaciones","Los ministerios y las subsecretarías","Los gobiernos regionales y los municipios"],0],
  [3,"¿En qué ciudad funciona el Congreso Nacional de Chile?",["Valparaíso","Santiago","Concepción","Rancagua"],0],
  [4,"¿Cuál es el tribunal más alto del Poder Judicial chileno?",["La Corte Suprema","El Tribunal de Familia","La Contraloría","El Servel"],0],
  [5,"¿Por qué es importante la separación de poderes?",["Porque evita que una sola persona o grupo concentre todo el poder","Porque permite que el Presidente dicte las leyes sin el Congreso","Porque así los jueces pueden elegir al Presidente de la República","Porque elimina la necesidad de realizar elecciones periódicas"],0]]],
 ["Constitución y leyes","📜",[
  [1,"¿Qué es la Constitución?",["La ley fundamental que organiza el Estado y garantiza derechos","El conjunto de leyes que dicta cada año el Presidente","El reglamento interno del Congreso Nacional","Un tratado firmado por Chile con otros países"],0],
  [2,"¿Qué significa 'Estado de derecho'?",["Que gobernantes y ciudadanos están sometidos a la ley","Que el Estado tiene derecho a decidir sobre todos los asuntos sin límites","Que solo los abogados y jueces pueden interpretar y aplicar las leyes","Que los ciudadanos deben obedecer, pero las autoridades no tienen límites"],0],
  [3,"¿Quiénes pueden presentar proyectos de ley en Chile?",["El Presidente (mensaje) y los parlamentarios (moción)","La Corte Suprema (fallo) y el Tribunal Constitucional (dictamen)","Los alcaldes (ordenanza) y los gobernadores regionales (oficio)","Cualquier empresa (solicitud) y los sindicatos (petición)"],0],
  [3,"¿Qué es un decreto?",["Una orden dictada por una autoridad del Poder Ejecutivo","Una resolución de un tribunal que pone fin a un juicio","Una ley aprobada directamente por los ciudadanos","Un acuerdo firmado con otro país y ratificado"],0],
  [4,"¿Qué órgano revisa que las leyes respeten la Constitución?",["El Tribunal Constitucional","El SERNAC","El Banco Central","La Cámara de Comercio"],0],
  [5,"¿Qué es un plebiscito?",["Una votación en que la ciudadanía aprueba o rechaza una propuesta","Una elección en que se eligen alcaldes y concejales de una comuna","Un juicio público en que el Congreso acusa a una autoridad","Una encuesta privada que mide la popularidad de un gobierno"],0]]],
 ["Derechos y deberes","⚖️",[
  [1,"¿Cuál de estos es un derecho de todas las personas?",["El derecho a la vida","El derecho a no pagar nunca nada","El derecho a mandar a otros","El derecho a usar el celular en clases"],0],
  [2,"¿Cuál de estos es un deber ciudadano?",["Respetar las leyes y los derechos de los demás","Obedecer solo las leyes con las que se está de acuerdo","Defender solo los derechos de las personas de la propia familia","Votar únicamente cuando el candidato es conocido"],0],
  [2,"¿Qué es la discriminación?",["Tratar de forma desigual y negativa a alguien por su origen, género, religión u otra condición","Elegir entre distintos productos según su precio, calidad o marca preferida","Expresar una opinión distinta de la mayoría en una conversación o debate","Votar por un candidato de un partido político diferente al de la propia familia"],0],
  [3,"¿Qué tratado internacional protege los derechos de niños, niñas y adolescentes?",["La Convención sobre los Derechos del Niño (1989)","La Declaración de Ginebra sobre la Infancia (1924)","La Carta de las Naciones Unidas (1945)","El Pacto de San José de Costa Rica (1969)"],0],
  [4,"¿Qué ley chilena de 2012 establece medidas contra la discriminación?",["La Ley Zamudio (Ley 20.609)","La Ley Emilia (Ley 20.770)","La Ley Cholito (Ley 21.020)","La Ley TEA (Ley 21.545)"],0],
  [5,"¿Qué significa que los derechos humanos sean 'indivisibles'?",["Que todos los derechos son igual de importantes y no se pueden separar","Que solo pueden ejercerse dentro del territorio del propio país","Que cada derecho se aplica por separado según la edad de la persona","Que el Estado puede priorizar algunos derechos y postergar otros"],0]]],
 ["Participación y elecciones","🗳️",[
  [1,"¿A qué edad se puede votar en Chile?",["A los 18 años","A los 16 años","A los 21 años","A los 25 años"],0],
  [2,"¿Qué organismo organiza las elecciones en Chile?",["El Servel (Servicio Electoral)","El Tribunal Constitucional (TC)","El Ministerio del Interior","La Contraloría General"],0],
  [3,"¿Cada cuántos años se elige Presidente en Chile?",["Cada 4 años","Cada 6 años","Cada 8 años","Cada 2 años"],0],
  [3,"¿Qué es un centro de estudiantes?",["Una organización que representa a los estudiantes y canaliza su participación","Un consejo formado por los profesores y el director del establecimiento","Una oficina del Ministerio de Educación que funciona en cada liceo","Un grupo de apoderados que administra los fondos del colegio"],0],
  [4,"¿Qué es una junta de vecinos?",["Una organización comunitaria que representa a los habitantes de un barrio","Una oficina de la municipalidad que cobra las patentes del barrio","Una empresa inmobiliaria que administra los edificios de un sector","Un tribunal que resuelve conflictos entre vecinos de una comuna"],0],
  [5,"Actualmente, ¿cómo es el voto en Chile?",["Obligatorio, con inscripción automática","Voluntario y con inscripción previa","Solo para propietarios","Obligatorio solo para mayores de 60 años"],0]]],
 ["Instituciones de Chile","🇨🇱",[
  [1,"¿Qué institución entrega la cédula de identidad?",["El Registro Civil","El Servel","La Contraloría","El Banco Central"],0],
  [2,"¿Qué hace la Contraloría General de la República?",["Controla la legalidad de los actos de la administración y el uso de recursos públicos","Investiga los delitos y acusa a los responsables ante los tribunales de justicia","Dicta las leyes de presupuesto y fija los impuestos que pagan los ciudadanos","Emite los billetes y monedas y controla la inflación en el país"],0],
  [3,"¿Qué institución autónoma promueve y protege los derechos humanos en Chile desde 2010?",["El Instituto Nacional de Derechos Humanos","La Defensoría Penal Pública","La Superintendencia de Educación","El Consejo para la Transparencia"],0],
  [3,"¿Qué hace la Defensoría de la Niñez?",["Promueve y protege los derechos de niños, niñas y adolescentes","Juzga a los adolescentes que cometen delitos en el país","Administra los colegios y jardines infantiles públicos","Organiza las elecciones de los centros de alumnos"],0],
  [4,"¿Qué hace el Ministerio Público (Fiscalía)?",["Investiga los delitos y acusa a los responsables","Dicta sentencia en los juicios penales","Defiende a los acusados sin abogado","Redacta las leyes penales del país"],0],
  [5,"¿Quiénes gobiernan una comuna?",["El alcalde junto al concejo municipal","El gobernador regional y el consejo regional","El delegado presidencial y la Contraloría","El intendente y los diputados del distrito"],0]]]
],[
 ["Derechos fundamentales 📜",["vida","educación","salud","libertad de expresión","igualdad ante la ley"],"vivienda, trabajo, libertad de culto, asociación, debido proceso"],
 ["Instituciones del Estado de Chile 🏛️",["Congreso","Corte Suprema","Presidencia","Servel","Contraloría"],"Tribunal Constitucional, Banco Central, Registro Civil, municipalidades, Ministerio Público"]])
];
})();
