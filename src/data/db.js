export const dbCalculadora = [
{
   idInput: 1,
   name: "modalidad",
   title: "Modalidad de postulación",
   items : [
   {  
      id: 1,
      value: "ORDINARIA",
      nombre: "ORDINARIA - Clasificación como pobre o pobre extremo",
      nombre_corto: 'Ordinaria'
   },
   {
      id: 2,
      value: "CNA_PA",
      nombre: "CNA y PA - Comunidad Nativa Amazónica o Población Afroperuana",
      nombre_corto: 'CNA y PA'
   },
   {
      id: 3,
      value: "EIB",
      nombre: "EIB - Educación Intercultural Bilingüe",
      nombre_corto: 'EIB'
   },
   {
      id: 4,
      value: "PROTECCION",
      nombre: "PROTECCIÓN – Protección estatal",
      nombre_corto: 'PROTECCIÓN'
   },
   {
      id: 5,
      value: "FFAA",
      nombre: "FF.AA - Fuerzas Armadas",
      nombre_corto: 'FF.AA'
   },
   {
      id: 6,
      value: "VRAEM",
      nombre: "VRAEM - Influencia del VRAEM",
      nombre_corto: 'VRAEM'
   },
   {
      id: 7,
      value: "HUALLAGA",
      nombre: "HUALLAGA - Influencia del río HUALLAGA",
      nombre_corto: 'HUALLAGA'
   },
   {
      id: 8,
      value: "REPARED",
      nombre: "REPARED – Víctimas del terrorismo del 1980 – 2000",
      nombre_corto: 'REPARED'
   },
   ]
},
{
   idInput: 2,
   name: "sisfoh",
   title: "Clasificación SISFOH",
   items : [
   {
      id: 1,
      nombre : "No pobre",
      value: "NP",
      score: 0
   },
   {
      id: 2,
      nombre:"Pobreza",
      value: "P",
      score: 2
   },
   {
      id: 3,
      nombre:"Pobreza Extrema",
      value: "PE",
      score: 5
   }
   ]
},
{
   idInput: 2,
   name: "TasaTransicion",
   title: "Tasa de Transición",
   items: [
   {
      quintil: 1,
      value: 'q1',
      departaments: [
         "Amazonas",
         "Ucayali",
         "Ayacucho",
         "Puno",
         "Loreto"
      ], 
      score: 10
   },
   {
      quintil: 2,
      value: 'q2',
      departaments: [
         "San Martín",
         "Cusco",
         "Huánuco",
         "Apurímac",
         "Huancavelica"
      ],
      score: 7
   },
   {
      quintil: 3,
      value: 'q3',
      departaments: [
         "Áncash",
         "Tacna",
         "Madre de Dios",
         "Moquegua",
         "Pasco",
         "Cajamarca"
      ],
      score: 5
   },
   {
      quintil: 4,
      value: 'q4',
      departaments: [
         "Arequipa",
         "Piura",
         "Junín",
         "Tumbes"
      ],
      score: 2
   },
   {
      quintil: 5,
      value: 'q5',
      departaments: [
         "Ica",
         "Lambayeque",
         "Lima",
         "La Libertad"
      ],
      score: 0
   }
   ]
},
{
   idInput: 3,
   name: "ActividadExtra",
   title: "Participación en Actividades Extracurriculares",
   items : [
      {
         id : 1,
         value : "CE",
         nombre : "Concurso Escolar Nacional (1°, 2º o 3º Puesto Etapa Nacional) o Concurso Escolar Internacional",
         score : 5
      },
      {
         id : 2,
         value : "CEP",
         nombre : "Participación en la Etapa Nacional de los Concursos Escolares Nacionales",
         score : 2
      },
      {
         id : 3,
         value : "JD",
         nombre : "Juegos Deportivos Escolares (1°, 2º o 3° puesto en Etapa Nacional)",
         score : 5
      },
      {
         id : 4,
         value : "JDP",
         nombre : "Participación en la Etapa Nacional de los Juegos Deportivos Escolares Nacionales",
         score : 2
      },
   ]
},
{
   idInput: 3,
   name: "CondicionesPriorizables",
   title: "Otras Condiciones Priorizables",
   items : [
   {
      id: 1,
      value: "D",
      nombre: "Discapacidad",
      score: 5
   },
   {
      id: 2,
      value: "B",
      nombre: "Bomberos activos e hijos de bomberos",
      score: 5
   },
   {
      id: 3,
      value: "V",
      nombre: "Voluntarios reconocidos por el MIMP",
      score: 5
   },
   {
      id: 4,
      value: "IA",
      nombre: "Pertenencia a Comunidades Campesina o Comunidad Nativa Amazónica o Población Afroperuana",
      score: 5
   },
   {
      id: 5,
      value: "PEM",
      nombre: "Población expuesta a metales pesados y otras sustancias químicas",
      score: 5
   },
   {
      id: 6,
      value: "PD",
      nombre: "Población de deudos por fallecidos y heridos graves en las movilizaciones del 8 y 21 de diciembre de 2022. (R.S. Nº 264-2022-JUS y R.S. Nº 027 y N° 092-2023-JUS)",
      score: 5
   },
   {
      id: 7,
      value: "OR",
      nombre: "Población beneficiaria de la Ley N° 31405 (orfandad)",
      score: 5
   },
   {
      id: 8,
      value: "DF",
      nombre: "Desprotección familiar",
      score: 5
   },
   {
      id: 9,
      value: "ACS",
      nombre: "Agente Comunitario de Salud",
      score: 5
   }
   ]
}, 
{
   idInput: 4,
   name: "LenguaOriginaria",
   title: "Priorización de lengua originaria",
   items: [
   {
      id : 1,
      value : "LO",
      nombre : "Primera prioridad",
      score : 10
   },
   {
      id : 2,
      value : "JDP",
      nombre : "Segunda prioridad",
      score : 5
   }
   ]
}
]
