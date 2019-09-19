<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{nombres}} {{apellidos}}</h3>
                  <h4>Estudiante</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
             <h1 style="color:green">Operaciones Básicas</h1>
            <h1>{{calificacionfinal}}</h1>
            <div>
              <div class="md-layout md-gutter md-alignment-center">
                <div v-for="n in calificacionfinal">
                  <img style="width:50px" src="@/assets/img/img-act/star.png" alt="People" />
                </div>
              </div>
            </div>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Material de estudio', 'Actividades']"
             :tab-icon="['palette', 'list']" 
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
 
              <template slot="tab-pane-1" >
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto"> 
                
                      <div class="description text-center">
                      <h1 style="color:green">Ejemplos</h1>
                      </div>
                      
                      <div class="md-layout">
                          <div class="md-layout-item md-size-50 ml-auto">
                            <img :src="tabPane3[0].image" class="rounded" />
                            <img :src="tabPane3[1].image" class="rounded" />
                          </div>
                          <div class="md-layout-item md-size-25 mr-auto">
                            <img :src="tabPane3[2].image" class="rounded" />
                          </div>
                        </div>

                        <iframe 
                        v-bind:class="responsive" 
                        v-bind:width="ancho" 
                        v-bind:height="alto"
                        v-bind:src="url + video" 
                        v-bind:frameborder="borde"
                        v-bind:allowfullscreen="pcompleta">					    		
                      </iframe>
                       <!-- <iframe 
                         width="100%"
                          height="100%" 
                          src="https://www.youtube.com/embed/WBqXpj1_96g"
                          frameborder="0" allow="accelerometer; 
                          autoplay; encrypted-media;
                           gyroscope; picture-in-picture" 
                           allowfullscreen></iframe> -->

                   <div v-for="(mateEst) in MaterialEstudioDeTema">
                           
                            <h2> {{mateEst[2]}}</h2></div>    
                  </div>

                  <div class="md-layout-item md-size-15 mr-auto">
                  
                       <div class="description text-center">
                      <h1 style="color:green">Simbolos</h1>
                      </div>
                    <img :src="tabPane1[0].image" class="rounded" > 
                    <img :src="tabPane1[1].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                    
                  </div>
                </div>
              </template>



              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-65 ml-auto">
   <!--aqui iria el juego 1 -->

    <!--esta es la actividad uno-->
          <div class="md-layout">
            <div class="md-layout-item md-size-70">

              <md-button 
                class="md-success md-block"
                @click="classicModal = true"
                 :disabled="btn_suma_disabled" style="font-size:20px"><md-icon></md-icon> Sumas básicas</md-button>

              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h3 class="modal-title">Actividad operaciones basicas</h3>
                  <md-button

                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="suma_mostrar">
                 <h2>Suma los perritos</h2>
                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:80px" src="@/assets/img/img-act/dog.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:80px" src="@/assets/img/img-act/dog.png" alt="People">
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <img style="width:100px" src="@/assets/img/img-act/mas.png" alt="People">
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:25px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/dog.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:70px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/dog.png" alt="People">
                    </div>
                  </div>
                  <div v-show="suma_incorrecto">
                    <h3>Vuelve a contar los perritos....</h3>
                  </div>
                </template>

                <template slot="body" v-if="suma_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="suma_mostrar">
                              <div class="md-layout md-gutter md-alignment-center">
                                <md-button class="md-danger" @click="click_eje_uno(2)"><strong>2 perritos</strong></md-button>
                                <md-button class="md-info" @click="click_eje_uno(10)" ><strong>10 perritos</strong></md-button>
                                <md-button @click="click_eje_uno(11)"><strong>11 perritos</strong></md-button>
                              </div>
                </template>
              </modal>
            </div>
          </div>
                    <!-- Fin del juego-->
                    <!--aqui iria el juego 1 -->
        <div class="md-layout">
            <div class="md-layout-item md-size-70">
              <md-button
                class="md-success md-block"
                @click="classicModal2 = true"
                :disabled="btn_resta_disabled" style="font-size:20px"><md-icon></md-icon> Restas básicas</md-button
              >
              <modal v-if="classicModal2" @close="classicModalHide2">
                <template slot="header">
                  <h3 class="modal-title">Operación básica - resta</h3>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide2"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>
                <template slot="body" v-if="resta_mostrar">
                 <h2>Debes  averiguar cuantas galletas quedarian realizando la operación</h2>
                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:70px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/gingerman.png" alt="People">
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <img style="width:100px" src="@/assets/img/img-act/menos.png" alt="People">
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                          <img style="width:80px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:80px" src="@/assets/img/img-act/gingerman.png" alt="People">
                    </div>
                  </div>
                  <div v-show="resta_incorrecto">
                    <h3>Vuelve a restar las galletas....</h3>
                  </div>
                </template>

                <template slot="body" v-if="resta_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="resta_mostrar">
                              <div class="md-layout md-gutter md-alignment-center">
                                <md-button class="md-danger" @click="click_eje_dos(5)"><strong>5 galletas</strong></md-button>
                                <md-button class="md-info" @click="click_eje_dos(4)"><strong>4 galletas</strong></md-button>
                                <md-button @click="click_eje_dos(12)"><strong>12 galletas</strong></md-button>
                              </div>
                </template>
              </modal>
            </div>
          </div>
          <!-- Fin del juego-->

<!--aqui iria el juego 1 -->
            <div class="md-layout">
            <div class="md-layout-item md-size-70">
              <md-button
                class="md-success md-block"
                @click="classicModal3 = true"
                :disabled="btn_multiplicacion_disabled" style="font-size:20px"><md-icon></md-icon> Multiplicaciones básicas</md-button
              >
              <modal v-if="classicModal3" @close="classicModalHide3">
                <template slot="header">
                  <h4 class="modal-title">Operación basica-multiplicación</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide3"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="multiplicacion_mostrar">
                 <h2>Debes averiguar cuantos lapices resultaran luego de realizar la operación</h2>
                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:80px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:90px" src="@/assets/img/img-act/pencil.png" alt="People">
                       
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <img style="width:100px" src="@/assets/img/img-act/multi.png" alt="People">
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:80px" src="@/assets/img/img-act/pencil.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                    </div>
                  </div>

                  <div v-show="multiplicacion_incorrecto">
                    <h3>Vuelve a hacer la operacion de las galletas....</h3>
                  </div>

                </template>

                <template slot="body" v-if="multiplicacion_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="multiplicacion_mostrar">
                             <div class="md-layout md-gutter md-alignment-center">
                                <md-button class="md-warning" @click="click_eje_tres(5)"><strong>Cinco lapices</strong></md-button>
                                <md-button class="md-info" @click="click_eje_tres(7)"><strong>Siete Lapices</strong></md-button>
                                <md-button class="md-rose" @click="click_eje_tres(12)"><strong>Doce lapices</strong></md-button>
                              </div>
                </template>
              </modal>
              
            </div>
          </div>
                    <!-- Fin del juego-->
                    <!-- MOdificaciones pao -->
                      <div class="md-layout">
                        <div class="md-layout-item md-size-33">
                          <div v-for="(act) in actividadesDeTema">
                             <!-- <md-button class="md-success md-block" @click=" classicModal = true" :disabled="btn_suma_disabled" ><md-icon>library_books</md-icon> {{act[0]}}
                                      </md-button>-->
                                <!--
                                  <div v-if="act[i]='Sumas Básicas'">
                                      <md-button class="md-success md-block" @click="classicModal = true" :disabled="btn_suma_disabled" ><md-icon>library_books</md-icon> {{act[i]}}
                                      </md-button>
                                  </div>
                                  <div v-if="act[i]='Restas Básicas'">
                                      <md-button class="md-success md-block" @click="classicModal2 = true" :disabled="btn_resta_disabled"><md-icon>library_books</md-icon> {{act[i]}}
                                      </md-button>
                                  </div>
                                  <div v-if="act[i]='Multiplicaciones Básicas'">
                                      <md-button class="md-success md-block" @click="classicModal3 = true" :disabled="btn_multiplicacion_disabled"><md-icon>library_books</md-icon> {{act[i]}}
                                      </md-button>
                            </div>-->
                          </div>
                        </div>
                      </div>
                    <!-- termina modificaciones Pao -->

                  </div>
                  <div class="md-layout-item md-size-35 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                  
                  </div>
                </div>
              </template>
        
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import {Modal} from '@/components';
// Modificaciones pao
import api from '@/api';
import toastr from 'toastr';

export default {
  components: {
    Tabs,Modal
  },
  bodyClass: "profile-page",
  data() {
    



    return {
      tabPane1: [
        { image: require("@/assets/img/examples/mas.jpg") },
        { image: require("@/assets/img/examples/menos1.jpg") },
        { image: require("@/assets/img/examples/Multiplicar1.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/estudiando.gif") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/Suma1.jpg") },
        { image: require("@/assets/img/examples/Suma2.jpg") },
        { image: require("@/assets/img/examples/Suma2.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      nombres: window.localStorage.nombres,
      apellidos: window.localStorage.apellidos,
      //modificaciones pao
      identificacion: window.localStorage.id,


      words: ['Pera', 'Manzana', 'Tomate', 'Cereza', 'Frutilla'],
      classicModal: false,
      classicModal2: false,
      classicModal3: false,
      first:true,
      correcto:false,
      incorrecto:false,
      calificacionfinal:0,

      resultadosuma:10,
      resultadoresta:4,
      resultadomultiplicacion:15,
      suma:null,
      suma_correcto:false,
      suma_mostrar:true,
      suma_incorrecto:false,
      btn_suma_disabled:false,
      resta:null,
      resta_correcto:false,
      resta_mostrar:true,
      resta_incorrecto:false,
      btn_resta_disabled:false,
      multiplicacion:null,
      multiplicacion_correcto:false,
      multiplicacion_mostrar:true,
      multiplicacion_incorrecto:false,
      btn_multiplicacion_disabled:false,
      
      //cambios pao
      IdTema: 11338, // id de operaciones básicas
      actividadesDeTema:[], //arreglo de las actividades del tema (que tiene el id y nombre de la actividad)
      idMateria: 1403,
      actividad:null,
      calificacionfinal1: null,
      calificacionfinal2: null,
      calificacionfinal3: null,
      calificacionfinal: null,
      calificacionTema:null,
      cal1:null,
      cal2:null,
      cal3:null,
      MaterialEstudioDeTema: [],
     
     //video del material de estuido
      
      responsive: 'embed-responsive-item',
      ancho: '100%',
      alto: '400',
      url: 'https://www.youtube.com/embed/',
      video: 'nWBqXpj1_96g',
      borde: '0',
      pcompleta: null

    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/img-act/banner.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/profile.png")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    },
    classicModalHide2() {
      this.classicModal2 = false;
    },
    classicModalHide3() {
      this.classicModal3 = false;
    },
    click_eje_uno(num){

        if(num== 10){
            this.suma_mostrar = false;
            this.suma_correcto = true;
            this.calificacionfinal = this.calificacionfinal1 + 5;
            this.btn_suma_disabled = true;
            //cambios pao
            this.actividad=54550;
            this.registroActividadEstudiante();
            this.cal1=calificacionfinal;

        }else{
          this.suma_incorrecto = true;
          this.calificacionfinal1 = this.calificacionfinal1 - 1;
        }

        this.se_realizaron_las_tres_act_op_ba();
    },
    click_eje_dos(num){
        if(num == 4){
            this.resta_mostrar = false;
            this.resta_correcto = true;
            this.calificacionfinal = this.calificacionfinal2 + 5;
            this.btn_resta_disabled = true;
            //cambios pao
            this.actividad=54551;
            this.registroActividadEstudiante();
             this.cal2=calificacionfinal;


        }else{
          this.resta_incorrecto = true;
          this.calificacionfinal2 = this.calificacionfinal2 - 1;
        }
     this.se_realizaron_las_tres_act_op_ba();   
       
    },
    click_eje_tres(num){
      if(num == 12){
          this.multiplicacion_mostrar = false;
          this.multiplicacion_correcto = true;
          this.calificacionfinal = this.calificacionfinal3 + 5;
          this.btn_multiplicacion_disabled = true;

          this.se_realizaron_las_tres_act_op_ba(); 
          
         this.actividad=54552;
          this.registroActividadEstudiante();
          this.cal3=calificacionfinal; 

      }else{
            this.multiplicacion_incorrecto = true;
            this.calificacionfinal3 = this.calificacionfinal3 - 1;
      }
        
    },
    se_realizaron_las_tres_act_op_ba(){
      console.log("Ya se realizaron las tres actividades-----inicio pao pao------");
      if(this.btn_suma_disabled == true && this.btn_resta_disabled == true && this.btn_multiplicacion_disabled == true){
         this.calificacionTema =this.cal1+this.cal2+this.cal3;
          this.registroTemaEstudiante();
          alert("Ya se realizaron las tres actividades");
          console.log("Ya se realizaron las tres actividades-----pao------");
      }
    },
    
    // cambios reaizados pao
     mostrarActividadesDelTema() {
          console.log("actividades del tema antes: "+""+this.IdTema);
            api.mostrarActividadesTema(""+this.IdTema).then(res => {
              console.log("actividades del tema despues: "+res);
              this.actividadesDeTema = res;

            });
    },

    mostrarMaterialDeEstudio() {
          console.log("mostrar material de estudio "+""+this.IdTema);
            api.mostrarMaterialEstudio(""+this.IdTema).then(res => {
              console.log("Mostrar materiales de estucio despues  "+res);
              this.MaterialEstudioDeTema = res;

            });
    },

    

    
    //(estudiante_id,actividad_eva_id, tema_id, materia_id, rel_actividad_nota ){
 
    registroActividadEstudiante(){
      console.log("Entro actividad estudiante");
                 api.insertarActividadEstudiante(this.identificacion, this.actividad, this.IdTema, this.idMateria, this.calificacionfinal)
                .then(res =>{
                  console.log("Se registro actividad estudiante:" +res);
                if(res == 'Se insertaron correctamente los datos'){
                     toastr.success("Se registro exitosamente  la nota de la actividad del estudiante");     
                }
                })
                .catch(err =>{console.log("error al registrar la actividad del estudiante"+err)})
  },
      registroTemaEstudiante(){
      console.log("Entro tema estudiante");
                 api.insertarTemaEstudiante(this.identificacion, this.IdTema, this.idMateria, this.calificacionTema)
                .then(res =>{
                  console.log("Se registro actividad estudiante:" +res);
                if(res == 'Se insertaron correctamente los datos'){
                     toastr.success("Se registro exitosamente  la nota del tema para el estudiante");  
                }
                })
                .catch(err =>{console.log("error al registrar la actividad del estudiante"+err)})
  },
    //termina cambios realizados Pao

  },

  created() {
    //pao
    this.mostrarActividadesDelTema();
    this.mostrarMaterialDeEstudio();
    
  
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs /deep/ {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
