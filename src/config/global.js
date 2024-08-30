export default {
  global: {
    componenteFormativo: 'Introducción: el modisto de moda',
    descripcionCurso:
      'A lo largo de la historia el oficio de la modistería y de la confección de prendas ha dado respuesta a las necesidades de los consumidores, cubriendo así una de las necesidades básicas para el ser humano. El modisto y el sastre están comprendidos dentro del sector de la moda como uno de los oficios que requiere mayor precisión en la elaboración de prendas de vestir sobre medidas.',
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
      link:
        'http://modasinestereotipos.es/5-niveles-de-la-piramide-de-maslow-para-una-moda-sin-estereotipos/',
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
  creditos: {
    liderEquipo: [
      {
        nombre: 'Sandra Paola Morales Paez',
        cargo: 'Evaluador Instruccional',
        centro: 'Regional Santander Centro Agroturístico',
      },
      {
        nombre: 'Claudia Johanna Gómez Pérez',
        cargo: 'Líder Línea Santander',
        centro: 'Regional Santander Centro Agroturístico',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leidy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda - Regional Antioquía',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda - Regional Antioquía',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica -  Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Desarrollo web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios -  Regional Tolima',
      },
    ],
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
