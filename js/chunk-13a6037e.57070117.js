(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a6037e"],{ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},bae2:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"linea-tiempo-d"},[t._l(t.elements,(function(i,s){return e("div",{key:"linea-tiempo-d-key-"+i.id,staticClass:"linea-tiempo-d__item row",class:{"linea-tiempo-d__item--selected":t.selected===i.id}},[e("div",{staticClass:"col-auto linea-tiempo-d__item__col-number"},[e("div",{staticClass:"linea-tiempo-d__item__number tarjeta tarjeta--gris",class:[,{"px-3":i.numero.length>1}],on:{click:function(e){t.selected=i.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&s>=1)&&t.mostrarIndicador}}},[t.mostrarIndicador&&1===s?e("div",{staticClass:"indicador__container"},[e("div",{staticClass:"indicador--click"})]):t._e(),e("span",{domProps:{innerHTML:t._s(i.numero)}})]),s<t.elements.length-1?e("div",{staticClass:"linea-tiempo-d__item__dots"}):t._e()]),e("div",{staticClass:"col",class:{"mb-4":s<t.elements.length-1}},[e("div",{staticClass:"linea-tiempo-d__item__content tarjeta tarjeta--gris"},[e("div",{staticClass:"linea-tiempo-d__item__content__title px-3",on:{click:function(e){t.selected=i.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&s>=1)&&t.mostrarIndicador}}},[e("span",{domProps:{innerHTML:t._s(i.titulo)}})]),e("div",{staticClass:"linea-tiempo-d__item__content__slot",style:{height:t.rendered&&t.selected===i.id?t.getActiveHeight(i.id):0}},[e("div",{directives:[{name:"child",rawName:"v-child",value:i.elm,expression:"item.elm"}],ref:i.id,refInFor:!0,staticClass:"p-3 pt-0"})])])])])})),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[],n=i("ab14"),d={name:"LineaTiempoD",mixins:[n["a"]],data:()=>({mostrarIndicador:!0}),computed:{},watch:{},methods:{}},r=d,o=i("2877"),l=Object(o["a"])(r,s,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-13a6037e.57070117.js.map