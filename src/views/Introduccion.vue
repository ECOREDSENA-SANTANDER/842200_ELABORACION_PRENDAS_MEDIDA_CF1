<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/C2d4a1pw3jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: El modisto de moda.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-3.col-lg-3
        img(src='@/assets/curso/introduccion/modisto1.png' alt="Modisto")
      .col-sm-12.col-md-7.col-lg-7
        p.mt-3 El oficio del modisto y/o del sastre en la historia ha permitido que la industria de la moda sea uno de los pilares económicos más importantes en el mundo. Formarse en este oficio ha implicado no solo el gusto por la elaboración de vestuario, sino una entrega completa a adquirir las competencias necesarias para desarrollar con destreza los productos que se derivan de las diversas líneas que incluye este sector. Es por ello que para comprender al modisto y al sastre se hace necesario iniciar contextualizando históricamente su rol dentro de la sociedad colombiana, y así mismo, comprender su rol en el sector de la moda.
        p.mb-2 El sector de la moda comprende conceptos que son los que guían la fundamentación teórica y a su vez guían la práctica de quien trabaja en él. Es taxativo identificar conceptos tales como moda, vestuario, color, tendencias, entre otros, pues para todo aquel que se encuentra inmerso dentro de este mundo lleno de texturas, volúmenes, formas, etc., es necesario que identifique la línea y estética que desea desarrollar dentro del oficio, esto porque cuando se aborda la moda en general se encontrará un sin número de posibilidades en las que se puede trabajar, y para quien emprende y asume el reto de estar en este mundo es indispensable encontrar elementos que hagan que su producto se diferencie de otros y logre apostar con propuestas que satisfagan la necesidad del cliente o público objetivo al cual pretende apuntar.

    .row.justify-content-center.align-items-center.esquinas-redondas-colorprimario.mb-5(style='background-color: #BAEFE4')
      .col-lg-12
        p.p-4 Es por lo anterior que uno de los principales objetivos que contiene este componente es el identificar, clasificar y determinar las características que tiene un modisto y/o sastre y su rol dentro del sector de la moda, para ello se hace indispensable la participación activa de quienes formarán parte del presente programa de formación, de esta manera se podrá integrar los conceptos a partir de:


    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-6.col-lg-6
        ul.lista-ul--color.fa-ul.mt-3
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Comprender al cliente a partir de las necesidades detectadas a través de un análisis anatómico, de color y estilo.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Analizar la figura humana desde lo anatómico y antropométrico, fomentando una metodología propia en la construcción del patronaje en prendas de vestir.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Desarrollar y confeccionar prendas de vestir a la medida acorde a las necesidades del cliente.
          li
            i.far.fa-dot-circle(style='color: #F5947A')
            | Modificar prendas de vestir, teniendo en cuenta la arquitectura de la prenda, customizar e implementar detalles en las prendas que permitan una transformación creativa.
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/introduccion/modisto2.png' alt="Persona apreciando una prenda")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
