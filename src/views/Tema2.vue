<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Conceptualización del modisto y el sastre

    .row.mb-5
      .col-7
        p.mb-4 En los apartados anteriores se abordó el oficio del modisto y/o sastre en un contexto histórico de manera general, a continuación, se abordan los conceptos y características que los hace partícipes dentro de la industria de la moda.
        .cajon.color-primario.p-4.mb-4
          p Según la RAE se encuentran conceptos clasificados por género, el modisto es la persona que se dedica a hacer prendas de vestir o a crear modas o modelos de ropa, principalmente para mujer. En este concepto es preciso aclarar que el término modisto ha sido empleado usualmente para el hombre, siendo el de modista atribuido a las mujeres; sin embargo, en términos de moda hasta los años 70 y 80 algunos países emplean la palabra modista también para los hombres. A su vez, sastre, se considera a la persona que tiene por oficio cortar y coser trajes, principalmente de hombre (Asale, 2021).
      .col-5
        figure
          img(src='@/assets/curso/concept-1.svg', alt='Texto que describa la imagen')

    .h2.mb-4 Características principales
    p.mb-4  Como se observó en los conceptos anteriores, tanto el modisto como el sastre cumplen con las características que permiten clasificarlo dentro de un mismo oficio, antes el sastre realizaba una labor de hombres al elaborar prendas para hombres, hoy por hoy es un oficio que lo desarrollan ambos géneros, por lo tanto, el término de modisto y sastre cumplen con las siguientes funciones:
    .row.mb-5
      .col-4.p-4
        img(src='@/assets/curso/concept-2.svg')
      .col-8
        ul.lista-ul--color
          li
            i.far.fa-dot-circle
            | Elaboración de prendas de vestir para hombre y mujer.
          li
            i.far.fa-dot-circle
            | Realización de patronaje sobre pedido en trajes a la medida.
          li
            i.far.fa-dot-circle
            | Corte de los patrones en material textil.
          li
            i.far.fa-dot-circle
            | Modificación de prendas de vestir.
          li
            i.far.fa-dot-circle
            | Ajustar, reparar y coser prendas de vestir.
          li
            i.far.fa-dot-circle
            | Preparar los recursos necesarios para la confección y elaboración de prendas.
          li
            i.far.fa-dot-circle
            | Garantizar la calidad y el cumplimiento en la entrega de prendas.
          li
            i.far.fa-dot-circle
            | Leer a su cliente para identificar necesidades y oportunidades de optimización en la elaboración de prendas que beneficien a su consumidor.
          li
            i.far.fa-dot-circle
            | Actualización constante en su oficio, nuevas metodologías y experimentación en patronaje frente a construcción y arquitectura de prendas.

    .h2.mb-4 Talleres de modistería y finalidades
    p.mb-4  Dentro de los espacios de trabajo del modisto y/o sastre es importante resaltar que muchos son espacios personalizados y ambientados de acuerdo con sus clientes, como se observa en la siguiente figura.
    .row.mb-4
      .col-1
      .col-10
        img(src='@/assets/curso/concept-3.svg')
    p.mb-5 Es por ello que para todo aquel que quiera iniciarse en esta profesión debe tener en cuenta el mínimo de elementos que contiene la labor, por ejemplo, un espacio amplio, mesa de corte, máquina plana, fileteadora, insumos para corte y confección, además de insumos para la elaboración del patronaje. Por tanto, es importante tener en cuenta que estos espacios y la persona que los lidera debe cumplir con ciertos fines que requiere esta labor:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
