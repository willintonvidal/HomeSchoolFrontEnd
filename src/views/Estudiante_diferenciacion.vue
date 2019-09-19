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
            <h1 style="color:green" >Diferenciación</h1>
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

 <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                      Material
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                  </div>
                </div>
              </template>

              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                   

                   <!--aqui iria el juego 1 -->
                    <!--aqui iria el juego 1 -->
                     <!--esta es la actividad uno-->
                    <div class="md-layout">

            <div class="md-layout-item md-size-60">
              <md-button
                class="md-success md-block" style="font-size:20px"
                @click="classicModal = true"
                 :disabled="btn_eje_uno_disabled"><md-icon></md-icon> Diferenciar objetos sencilla</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h2 style="color:green">Diferenciar objetos de forma sencilla</h2>

                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="eje_uno_mostrar">

                 <h1>¿En que lugar observas más elemetos?</h1>

                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:55px" src="@/assets/img/img-act/vinyl.png" alt="People">
                              <img style="width:85px" src="@/assets/img/img-act/target.png" alt="People">
                              <img style="width:55px" src="@/assets/img/img-act/pencil.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/gingerman.png" alt="People">
                              <img style="width:85px" src="@/assets/img/img-act/dog.png" alt="People"><br>
                                                           
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:65px" src="@/assets/img/img-act/vinyl.png" alt="People">
                              


                              <md-button class="md-warning" @click="click_eje_uno(1)"><strong>¿Será este?</strong></md-button>

                                
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:150px" src="@/assets/img/img-act/panda.png" alt="People">
                      </div>
                      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:85px" src="@/assets/img/img-act/vinyl.png" alt="People"><br>
                              <img style="width:35px" src="@/assets/img/img-act/target.png" alt="People">                            
                              <img style="width:75px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/vinyl.png" alt="People"><br>
                              <img style="width:65px" src="@/assets/img/img-act/target.png" alt="People">
                              <img style="width:100px" src="@/assets/img/img-act/target.png" alt="People"><br>
                              <br>

                              <md-button class="md-rose" @click="click_eje_uno(2)"><strong>¿Será este?</strong></md-button>

                          
                      </div>
                   
                  </div>
                  <div v-show="eje_uno_incorrecto">
                    <h3>Vuelve a leer el numero....</h3>
                  </div>
                </template>

                <template slot="body" v-if="eje_uno_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="eje_uno_mostrar">
                 
                </template>
              </modal>
            </div>
          </div>
                    <!-- Fin del juego-->
                    <!--esta es la actividad dos-->
                    <div class="md-layout">

            <div class="md-layout-item md-size-60">
              <md-button
                class="md-success md-block" style="font-size:20px"
                @click="classicModal2 = true"
                 :disabled="btn_eje_dos_disabled"><md-icon></md-icon> Diferenciar objetos intermedia</md-button
              >
              <modal v-if="classicModal2" @close="classicModalHide2">
                <template slot="header">
                 <h2 style="color:green">Diferenciar objetos intermedia</h2>

                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide2"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="eje_dos_mostrar">

                 <h1 style="color:red">¿ Donde observas menos santa clouse?</h1>

                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:80px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People"><br>
                              <md-button class="md-rose" @click="click_eje_dos(5)"><strong>Sera este?</strong></md-button>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <img style="width:150px" src="@/assets/img/img-act/panda.png" alt="People">
                    </div>
                      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:80px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People"><br>
                             <md-button class="md-warning" @click="click_eje_dos(6)"><strong>Sera este?</strong></md-button>
                      </div>
                
                  </div>
                  <div v-show="eje_dos_incorrecto">
                    <h3>Vuelve a leer el numero....</h3>
                  </div>
                </template>

                <template slot="body" v-if="eje_dos_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="eje_dos_mostrar">
                 
                </template>
              </modal>
            </div>
          </div>
          <!-- Fin del juego-->


                    <!--esta es la actividad tres-->
                    <div class="md-layout">

            <div class="md-layout-item md-size-60" >
              <md-button
                class="md-success md-block" style="font-size:20px"
                @click="classicModal3 = true"
                 :disabled="btn_eje_tres_disabled"><md-icon></md-icon> Diferenciar números</md-button
              >
              <modal v-if="classicModal3" @close="classicModalHide3">
                <template slot="header">
                   <h2 style="color:green">Diferenciar números</h2>

                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide3"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="eje_tres_mostrar">

                 <h1 style="color:orange">¿Cuál es el número de mayor valor?</h1>

                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:60px" src="@/assets/img/img-act/3.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/5.png" alt="People">
                       <br>

                        <md-button class="md-success" @click="click_eje_tres(35)"><strong>¿Será este?</strong></md-button>

                    </div>
                 <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <img style="width:150px" src="@/assets/img/img-act/panda.png" alt="People">
                    </div>
                      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:60px" src="@/assets/img/img-act/2.png" alt="People">
                        <img style="width:60px" src="@/assets/img/img-act/6.png" alt="People">

                        <md-button class="md-rose" @click="click_eje_tres(26)"><strong>¿Será este?</strong></md-button>

                      </div>
                  
                  </div>
                  <div v-show="eje_tres_incorrecto">

                    <h3> Te equivocaste, Vuelve a intentarlo</h3>

                  </div>
                </template>

                <template slot="body" v-if="eje_tres_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="eje_tres_mostrar">
                 
                </template>
              </modal>
            </div>
          </div>
          <!-- Fin del juego-->
                    
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
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
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      nombres: window.localStorage.nombres,
      apellidos: window.localStorage.apellidos,
      identificacion: window.localStorage.id,
      words: ['Pera', 'Manzana', 'Tomate', 'Cereza', 'Frutilla'],
      classicModal: false,
      classicModal2: false,
      classicModal3: false,

      calificacionfinal:0,

      eje_uno_res_correcta:13,
      eje_uno:false,
      eje_uno_mostrar:true,
      eje_uno_correcto:false,
      eje_uno_incorrecto:false,
      btn_eje_uno_disabled:false,

      eje_dos_res_correcta:5,
      eje_dos:false,
      eje_dos_mostrar:true,
      eje_dos_correcto:false,
      eje_dos_incorrecto:false,
      btn_eje_dos_disabled:false,

      eje_tres_res_correcta:15,
      eje_tres:false,
      eje_tres_mostrar:true,
      eje_tres_correcto:false,
      eje_tres_incorrecto:false,
      btn_eje_tres_disabled:false,
         //cambios pao
      IdTema: 11337, // id de lectura y escritura de numeros
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
  click_eje_uno(num){
          if(num== 1){
              this.eje_uno_mostrar = false;
              this.eje_uno_correcto = true;
              this.btn_eje_uno_disabled = true;
              this.calificacionfinal = this.calificacionfinal1 + 5;     
              //cambios pao
                  this.actividad=54559;
                  this.registroActividadEstudiante();
                   this.calificacionPrueba=this.calificacionPrueba+this.calificacionfinal;

          }else{
              this.eje_uno_incorrecto = true;
              this.calificacionfinal1 = this.calificacionfinal1 - 1;
          }
          this.se_realizaron_las_tres_act_diferenciacion();
    },
  click_eje_dos(num){
          if(num == 5){
              this.eje_dos_mostrar = false;
              this.eje_dos_correcto = true;
              this.btn_eje_dos_disabled = true;
              this.calificacionfinal = this.calificacionfinal2 + 5;
                //cambios pao
                  this.actividad=54560;
                  this.registroActividadEstudiante();
                   this.calificacionPrueba=this.calificacionPrueba+this.calificacionfinal;
          }else{
              this.eje_dos_incorrecto = true;
              this.calificacionfinal2 = this.calificacionfinal2 - 1;
          }
          this.se_realizaron_las_tres_act_diferenciacion();
    },
  click_eje_tres(num){
          if(num == 35){
              this.eje_tres_mostrar = false;
              this.eje_tres_correcto = true;
              this.btn_eje_tres_disabled = true;
              this.calificacionfinal = this.calificacionfinal3 + 5;
               this.calificacionPrueba=this.calificacionPrueba+this.calificacionfinal;
              this.se_realizaron_las_tres_act_diferenciacion();

              this.actividad=54561;
              this.registroActividadEstudiante();
              this.cal1=calificacionfinal;
             
          }else{
              this.eje_tres_incorrecto = true;
              this.calificacionfinal3 = this.calificacionfinal3 - 1;
          }
          
    },
    se_realizaron_las_tres_act_diferenciacion(){
       console.log("Calificación prueba pao pao------"+this.calificacionPrueba);
      if(this.btn_eje_uno_disabled == true && this.btn_eje_dos_disabled == true && this.btn_eje_tres_disabled == true){
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
}
</style>
