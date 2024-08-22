<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Conceptualización del modisto y el sastre

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-7.col-lg-8
        p.mb-4 En los apartados anteriores se abordó el oficio del modisto y/o sastre en un contexto histórico de manera general, a continuación, se abordan los conceptos y características que los hace partícipes dentro de la industria de la moda.
        .cajon.color-primario.p-4.mb-4
          p Según la RAE se encuentran conceptos clasificados por género, el modisto es la persona que se dedica a hacer prendas de vestir o a crear modas o modelos de ropa, principalmente para mujer. En este concepto es preciso aclarar que el término modisto ha sido empleado usualmente para el hombre, siendo el de modista atribuido a las mujeres; sin embargo, en términos de moda hasta los años 70 y 80 algunos países emplean la palabra modista también para los hombres. A su vez, sastre, se considera a la persona que tiene por oficio cortar y coser trajes, principalmente de hombre (Asale, 2021).
      .col-8.col-md-5.col-lg-4
        figure
          img(src='@/assets/curso/tema2/modisto.png', alt='Modisto')

    .h3.mb-4 Características principales
    p.mb-4  Como se observó en los conceptos anteriores, tanto el modisto como el sastre cumplen con las características que permiten clasificarlo dentro de un mismo oficio, antes el sastre realizaba una labor de hombres al elaborar prendas para hombres, hoy por hoy es un oficio que lo desarrollan ambos géneros, por lo tanto, el término de modisto y sastre cumplen con las siguientes funciones:
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-4.col-lg-3
        img(src='@/assets/curso/tema2/modista.png', alt='Modista')
      .col-sm-12.col-md-8.col-lg-7
        ul.lista-ul--color.fa-ul
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Elaboración de prendas de vestir para hombre y mujer.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Realización de patronaje sobre pedido en trajes a la medida.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Corte de los patrones en material textil.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Modificación de prendas de vestir.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Ajustar, reparar y coser prendas de vestir.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Preparar los recursos necesarios para la confección y elaboración de prendas.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Garantizar la calidad y el cumplimiento en la entrega de prendas.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Leer a su cliente para identificar necesidades y oportunidades de optimización en la elaboración de prendas que beneficien a su consumidor.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Actualización constante en su oficio, nuevas metodologías y experimentación en patronaje frente a construcción y arquitectura de prendas.

    .h3.mb-4 Talleres de modistería y finalidades
    p.mb-4  Dentro de los espacios de trabajo del modisto y/o sastre es importante resaltar que muchos son espacios personalizados y ambientados de acuerdo con sus clientes.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-secundario
          h5 Figura 5.
          span
            |  Taller de costura
        figure 
          img(src='@/assets/curso/tema2/taller.png', alt='La imagen muestra a una persona concentrada en la costura, utilizando una máquina de coser. Una lámpara de trabajo ilumina el área de costura para proporcionar una mejor visibilidad. El entorno parece ser un taller o espacio de trabajo de costura con varios objetos y materiales de costura en el fondo. La escena captura la dedicación y el enfoque que requiere la costura, destacando un momento de la artesanía textil.')
        figcaption Nota: Jaimes (2019).
    p.mb-5 Es por ello que para todo aquel que quiera iniciarse en esta profesión debe tener en cuenta el mínimo de elementos que contiene la labor, por ejemplo, un espacio amplio, mesa de corte, máquina plana, fileteadora, insumos para corte y confección, además de insumos para la elaboración del patronaje. Por tanto, es importante tener en cuenta que estos espacios y la persona que los lidera debe cumplir con ciertos fines que requiere esta labor:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8aICqukm-Ng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO Sistema moda 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
