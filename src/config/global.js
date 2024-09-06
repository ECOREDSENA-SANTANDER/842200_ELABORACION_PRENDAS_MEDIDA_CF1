export default {
  global: {
    componenteFormativo: 'Introducción: el modisto de moda',
    descripcionCurso:
      'A lo largo de la historia el oficio de la modistería y de la confección de prendas ha dado respuesta a las necesidades de los consumidores, cubriendo así una de las necesidades básicas para el ser humano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: '',
        numero: '1',
        titulo: 'Contextualización del modisto y el sastre',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: '',
        numero: '2',
        titulo: 'Conceptualización del modisto y el sastre',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: '',
        numero: '3',
        titulo: 'Sistema moda',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Asale. (2021). Moda. Diccionario de la lengua española.',
      link: 'https://dle.rae.es/moda',
    },
    {
      referencia:
        'Asale. (2021). Sastre, sastra. Diccionario de la lengua española.',
      link: 'https://dle.rae.es/sastre',
    },
    {
      referencia: 'Butterick 7660. (2021). Elegancia en la moda. Flickr.',
      link:
        'https://www.flickr.com/photos/graustark/3372648147/in/set-72157611750347036',
    },
    {
      referencia:
        'Cobo, M., E., Acuña, R., O. (2019). Belleza, moda y elegancia en Colombia vista a través de la revista cromos, 1916-1929. Tzintzun. Revista de Estudios Históricos, (70), 87-120.',
      link: 'https://www.redalyc.org/jatsRepo/898/89862270006/html/index.html',
    },
    {
      referencia:
        'Inexmoda. (2021). Inexmoda y Fashion Snoops, empoderando a las marcas a aprovechar las tendencias del futuro',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },
    {
      referencia:
        'Mesa, F., A. L. (2014).  Historia del oficio de la modista en Medellín, 1940 – 1980 procesos de individuación y prácticas de subjetivación. [Tesis de maestría, Universidad Nacional de Colombia, sede Medellín]. Repositorio institucional UNAL.',
      link: 'https://repositorio.unal.edu.co/handle/unal/21097',
    },
    {
      referencia: 'Moda sin estereotipos. (2017). Pirámide de Maslow moda.',
      link: 'https://theoriginalpoint.wordpress.com/2014/03/28/277/',
    },
    {
      referencia:
        'Semana. (23 de julio de 2017). Estas fueron las primeras puntadas de la moda en Colombia.',
      link: 'https://www.semana.com/historia-de-la-moda-en-colombia/533547/',
    },
  ],
  glosario: [
    {
      termino: 'Bidimensional',
      significado:
        'Se representa según su altura y su anchura, y no de acuerdo a su profundidad.',
    },
    {
      termino: 'Diseño',
      significado:
        'Actividad creativa orientada a las soluciones idóneas de ciertas problemáticas.',
    },
    {
      termino: 'Moda',
      significado:
        'Hábito repetitivo que identifica a una persona, una especie de presión social, sobre qué debe consumir, utilizar o hacer.',
    },
    {
      termino: 'Tipología',
      significado:
        'Estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Regional Antioquía - Diseño, Confección y Moda',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Regional Antioquía - Diseño, Confección y Moda',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora instruccional y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluador instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiana Avellaneda ',
          cargo: 'Diseñador web',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full-stack</i> Junior',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: '	Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
