<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="img" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                </div>
                <div class="name">
                  <h3 class="title">{{nombres}} {{apellidos}}</h3>
                  <h4>Estudiante</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <h1 style="color:green" >Descomposición de números </h1>
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
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">

                       <div class="description text-center">
                      <h1 style="color:green">Ejemplos para descomponer números </h1>
                      <br/>
                      </div>
                      
                      <div class="md-layout">
                          <div class="md-layout-item md-size-50 ml-auto">
                            <img :src="tabPane3[0].image" class="rounded" />
                            <img :src="tabPane3[1].image" class="rounded" />
                          </div>
                          <div class="md-layout-item md-size-25 mr-auto">
                            <img :src="tabPane2[3].image" class="rounded" />
                          </div>
                    
                        </div>
                            
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/EO7IG6wpJt4"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                             






                    <!-- Fin del juego-->
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    
                   
                  </div>
                </div>
              </template>

              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                    <!--aqui iria el juego 1 -->
                    <!--aqui iria el juego 1 -->
                    <!--esta es la actividad uno-->
                    <div class="md-layout">
                      <div class="md-layout-item md-size-60">
                        <md-button
                          class="md-success md-block" style="font-size:17px"
                          @click="classicModal = true"
                          :disabled="btn_eje_uno_disabled"
                        >
                          <md-icon></md-icon>Descomposición de números básica
                        </md-button>
                        <modal v-if="classicModal" @close="classicModalHide">
                          <template slot="header">
                             <h2 style="color:green">Descomposición de números básica</h2>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_uno_mostrar">
                             <h1 style="color:orange">¿ Cuál es la descomposición correcta para este número?</h1>
                            <img style="width:150px" src="@/assets/img/img-act/3.png" alt="People" />
                            <img style="width:150px" src="@/assets/img/img-act/2.png" alt="People" />
                            <br />
                            <div class="md-layout md-gutter md-alignment-center">
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <div class="md-layout md-gutter md-alignment-center">
                                  <md-button class="md-danger" @click="click_eje_uno(32)">
                                    <strong>15 + 17</strong>
                                  </md-button>
                                  <md-button class="md-info" @click="click_eje_uno(33)">
                                    <strong>31 + 2</strong>
                                  </md-button>
                                  <md-button @click="click_eje_uno(52)">
                                    <strong>12 + 40</strong>
                                  </md-button>
                                </div>
                              </div>
                            </div>
                            <div v-show="eje_uno_incorrecto" class="md-layout md-gutter md-alignment-center">
                              <img
                              style="width:20%"
                              src="@/assets/img/examples/intentalo.gif"
                              alt="People"
                             />
                              <h3 style="color:red">   Incorrecto !!! Vuelve a intentarlo</h3>
                            </div>
                          </template>
    
                        <template slot="body" v-if="eje_uno_correcto">
                            <h1>Es correcto!</h1>
                            <img style="width:80%" src="@/assets/img/img-act/muybien.gif" />
                          </template>

                        </modal>
                      </div>
                    </div>
                    <!-- Fin del juego-->
                    <!--esta es la actividad dos-->
                    <div class="md-layout">
                      <div class="md-layout-item md-size-60">
                        <md-button
                          class="md-success md-block" style="font-size:17px"
                          @click="classicModal2 = true"
                          :disabled="btn_eje_dos_disabled"
                        >
                          <md-icon></md-icon>Descomposición de numeros sencilla
                        </md-button>
                        <modal v-if="classicModal2" @close="classicModalHide2">
                          <template slot="header">
                            <h2 style="color:green">Descomposición de numeros sencilla</h2>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide2"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_dos_mostrar">
                            <h1 style="color:purple">¿Cuál es la descomposición incorrecta para este número?</h1>

                            <div class="md-layout md-gutter md-alignment-center">
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <img
                                  style="width:100px"
                                  src="@/assets/img/img-act/8.png"
                                  alt="People"
                                />
                                <img
                                  style="width:100px"
                                  src="@/assets/img/img-act/8.png"
                                  alt="People"
                                />
                                <br />
                              </div>
                            </div>
                            <div v-show="eje_dos_incorrecto" class="md-layout md-gutter md-alignment-center">
                              <img
                              style="width:20%"
                              src="@/assets/img/examples/intentalo.gif"
                              alt="People"
                             />
                              <h3 style="color:red">   Incorrecto !!! Vuelve a intentarlo</h3>
                            </div>
                          </template>

                          <template slot="body" v-if="eje_dos_correcto">
                            <h1>Es correcto!</h1>
                            <img
                              style="width:80%"
                              src="@/assets/img/img-act/muybien.gif"
                              alt="People"
                            />
                            <h3>Realiza la siguiente actividad</h3>
                          </template>



                          <template slot="footer" v-if="eje_dos_mostrar">
                            <div class="md-layout md-gutter md-alignment-center">
                              <md-button class="md-danger" @click="click_eje_dos(1)">
                                <strong>80 + 8</strong>
                              </md-button>
                              <md-button class="md-info" @click="click_eje_dos(2)">
                                <strong>60 + 28</strong>
                              </md-button>
                              <md-button @click="click_eje_dos(3)">
                                <strong>72 + 18</strong>
                              </md-button>
                            </div>
                          </template>
                        </modal>
                      </div>
                    </div>
                    <!-- Fin del juego-->

                    <!--esta es la actividad tres-->
                    <div class="md-layout">
                      <div class="md-layout-item md-size-60">
                        <md-button
                          class="md-success md-block" style="font-size:17px"
                          @click="classicModal3 = true"
                          :disabled="btn_eje_tres_disabled"
                        >
                          <md-icon></md-icon>Descomposición de números intermedia
                        </md-button>
                        <modal v-if="classicModal3" @close="classicModalHide3">
                          <template slot="header">
                            <h2 style="color:green">Descomposición de números intermedia</h2>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide3"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_tres_mostrar">
                            <h1 style="color:orange">¿Cuál es la descomposición correcta para este número?</h1>
                            <img style="width:150px" src="@/assets/img/img-act/6.png" alt="People" />
                            <img style="width:150px" src="@/assets/img/img-act/7.png" alt="People" />
                            <br />
                            <div class="md-layout md-gutter md-alignment-center">
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <div class="md-layout md-gutter md-alignment-center">
                                  <md-button class="md-danger" @click="click_eje_tres(77)">
                                    <strong>60 + 17</strong>
                                  </md-button>
                                  <md-button class="md-info" @click="click_eje_tres(67)">
                                    <strong>30 + 37</strong>
                                  </md-button>
                                  <md-button @click="click_eje_tres(52)">
                                    <strong>12 + 40</strong>
                                  </md-button>
                                </div>
                              </div>
                            </div>
                            <div v-show="eje_tres_incorrecto" class="md-layout md-gutter md-alignment-center">
                              <img
                              style="width:20%"
                              src="@/assets/img/examples/intentalo.gif"
                              alt="People"
                             />
                              <h3 style="color:red">   Incorrecto !!! Vuelve a intentarlo</h3>
                            </div>

                          </template>

                          <template slot="body" v-if="eje_tres_correcto">
                            <h1>Es correcto!</h1>
                            <img style="width:80%" src="@/assets/img/img-act/muybien.gif" />
                          </template>

                          <template slot="footer" v-if="eje_tres_mostrar"></template>
                        </modal>
                      </div>
                    </div>
                    <!-- Fin del juego-->
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
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
import { Modal } from "@/components";
// Modificaciones pao
import api from '@/api'
import toastr from 'toastr';

export default {
  components: {
    Tabs,
    Modal
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/descomponer.jpg") },
        { image: require("@/assets/img/examples/descomponer.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/descomponer4.png") },
        { image: require("@/assets/img/examples/descomponer5.png") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      nombres: window.localStorage.nombres,
      apellidos: window.localStorage.apellidos,
      identificacion: window.localStorage.id,
      
      classicModal: false,
      classicModal2: false,
      classicModal3: false,

      calificacionfinal: 0,

      resul_uno: 67,
      resul_dos: 86,
      resul_tres: 48,

      uno_: null,
      dos_: null,
      tres_: null,

      uno: null,
      dos: null,
      tres: null,

      eje_uno_mostrar: true,
      eje_dos_mostrar: true,
      eje_tres_mostrar: true,

      btn_eje_uno_disabled: false,
      btn_eje_dos_disabled: false,
      btn_eje_tres_disabled: false,

      eje_uno_correcto: false,
      eje_uno_incorrecto: false,

      eje_dos: null,
      eje_dos_respuesta: 99,
      eje_dos_correcto: false,
      eje_dos_incorrecto: false,

      eje_tres: null,
      eje_tres_respuesta: 1,
      eje_tres_correcto: false,
      eje_tres_incorrecto: false,

        //cambios pao
      IdTema: 11340, // id de lectura y escritura de numeros
      actividadesDeTema:[], //arreglo de las actividades del tema (que tiene el id y nombre de la actividad)
      idMateria: 1403,
      actividad:null,
      calificacionfinal1: null,
      calificacionfinal2: null,
      calificacionfinal3: null,
      calificacionfinal: null,
      calificacionTema:null,
      calificacionPrueba:0
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
    click_eje_uno(num) {
      if (num == 32) {
      
            this.eje_uno_mostrar = false;
            this.eje_uno_correcto = true;
            this.btn_eje_uno_disabled = true;
            this.calificacionfinal = this.calificacionfinal1 + 5;
            
         //cambios pao
            this.actividad=54553;
            this.registroActividadEstudiante();
             this.calificacionPrueba=this.calificacionPrueba+this.calificacionfinal;
      } else {
        this.eje_uno_incorrecto = true;
        this.calificacionfinal1 = this.calificacionfinal1 - 1;
      }

      this.se_realizaron_las_tres_act_lectu_num();
    },
    click_eje_dos(num) {
      if (num == 3) {
        this.eje_dos_mostrar = false;
        this.eje_dos_correcto = true;
        this.btn_eje_dos_disabled = true;
        this.calificacionfinal = this.calificacionfinal2 + 5;
        this.actividad=54554;
        this.registroActividadEstudiante();
         this.calificacionPrueba=this.calificacionPrueba+this.calificacionfinal;


      } else {
        this.eje_dos_incorrecto = true;
        this.calificacionfinal2 = this.calificacionfinal2 - 1;
      }

      this.se_realizaron_las_tres_act_lectu_num();
    },
    click_eje_tres(num) {
      if (num == 67) {
        this.eje_tres_mostrar = false;
        this.eje_tres_correcto = true;
        this.btn_eje_tres_disabled = true;
        this.calificacionfinal = this.calificacionfinal3 + 5;
         this.calificacionPrueba=this.calificacionPrueba+this.calificacionfinal;
        this.se_realizaron_las_tres_act_lectu_num();
        this.actividad=54555;
        this.registroActividadEstudiante();
        this.cal1=calificacionfinal;

      } else {
        this.eje_tres_incorrecto = true;
        this.calificacionfinal3 = this.calificacionfinal3 - 1;
      }
      
    },
    se_realizaron_las_tres_act_lectu_num() {

        console.log("Calificación prueba pao pao------"+this.calificacionPrueba);
      if (
        this.btn_eje_uno_disabled == true &&
        this.btn_eje_dos_disabled == true &&
        this.btn_eje_tres_disabled == true
      ) {
        alert("Ya se realizaron las tres actividades");
         this.calificacionTema =(this.calificacionPrueba)/3;
        this.registroTemaEstudiante();
      }
    },
   
   /*Metodos Pao */
       
    registroActividadEstudiante(){

      console.log("Entro actividad estudiante-- lectura y escritura");
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
  }

    /*Termina metodo Pao */


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

  .md-radio {
    display: flex;
  }

  .md-input {
    width: 20px;
  }

  @media only screen and (max-width: 600px) {
    body {
      background-color: red;
    }
  }
}
</style>
