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
            <h1>Diferenciación</h1>
            <h1>{{calificacionfinal}}</h1>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Material', 'Actividades']"
              :tab-icon="['camera', 'palette']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                   

                   <!--aqui iria el juego 1 -->
                    <!--aqui iria el juego 1 -->
                     <!--esta es la actividad uno-->
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal = true"
                 :disabled="btn_eje_uno_disabled"><md-icon>library_books</md-icon> Actividad uno</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h3 class="modal-title">Actividad uno diferenciación</h3>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="eje_uno_mostrar">
                 <h2>En que lado hay más elemetos?</h2>
                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/vinyl.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/target.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/soccer.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/percolator.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/pencil.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/gingerman.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/dog.png" alt="People"><br>
                                                           
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/vinyl.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/target.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/target.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/soccer.png" alt="People"><br>
                              <md-radio v-model="eje_uno" value="13">Aquel?</md-radio>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <h1>?</h1>
                      </div>
                      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/vinyl.png" alt="People"><br>
                              <img style="width:25px" src="@/assets/img/img-act/target.png" alt="People">                            
                              <img style="width:25px" src="@/assets/img/img-act/clown.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/vinyl.png" alt="People"><br>
                              <img style="width:25px" src="@/assets/img/img-act/target.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/target.png" alt="People"><br>
                              <img style="width:25px" src="@/assets/img/img-act/soccer.png" alt="People"><br>
                              <img style="width:25px" src="@/assets/img/img-act/percolator.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/pencil.png" alt="People"><br>
                              <img style="width:25px" src="@/assets/img/img-act/gingerman.png" alt="People">
                              <img style="width:25px" src="@/assets/img/img-act/dog.png" alt="People"><br>

                              
                              
                              <md-radio v-model="eje_uno" value="12">Talvez este?</md-radio>
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
                    <md-button class="md-success" @click="click_eje_uno">Verificar</md-button>
                </template>
              </modal>
            </div>
          </div>
                    <!-- Fin del juego-->
                    <!--esta es la actividad dos-->
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal2 = true"
                 :disabled="btn_eje_dos_disabled"><md-icon>library_books</md-icon> Actividad dos</md-button
              >
              <modal v-if="classicModal2" @close="classicModalHide2">
                <template slot="header">
                  <h3 class="modal-title">Actividad uno lectura y escritura de números</h3>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide2"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="eje_dos_mostrar">
                 <h2>Donde hay menos santa clouse?¡?</h2>
                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:80px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People"><br>
                              <md-radio v-model="eje_dos" value="5">Aquel?</md-radio>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <h1>?</h1>
                    </div>
                      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:80px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People">
                              <img style="width:50px" src="@/assets/img/img-act/santa.png" alt="People"><br>
                              <md-radio v-model="eje_dos" value="6">Aquel?</md-radio>
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
                    <md-button class="md-success" @click="click_eje_dos">Verificar</md-button>
                </template>
              </modal>
            </div>
          </div>
          <!-- Fin del juego-->


                    <!--esta es la actividad tres-->
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal3 = true"
                 :disabled="btn_eje_tres_disabled"><md-icon>library_books</md-icon> Actividad tres</md-button
              >
              <modal v-if="classicModal3" @close="classicModalHide3">
                <template slot="header">
                  <h3 class="modal-title">Actividad uno lectura y escritura de números</h3>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide3"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="eje_tres_mostrar">
                 <h2>Sumando cada número en que cuadro hay un mayor valor?</h2>
                  <div class="md-layout md-gutter md-alignment-center">
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:50px" src="@/assets/img/img-act/3.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/5.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/4.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/1.png" alt="People"><br>
                        <md-radio v-model="eje_tres" value="13">En este?</md-radio>
                    </div>
                 <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                      <h1>?</h1>
                    </div>
                      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <img style="width:50px" src="@/assets/img/img-act/2.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/6.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/7.png" alt="People"><br>
                        <md-radio v-model="eje_tres" value="15">O talvez este?</md-radio>
                      </div>
                  
                  </div>
                  <div v-show="eje_tres_incorrecto">
                    <h3>Vuelve a leer el numero....</h3>
                  </div>
                </template>

                <template slot="body" v-if="eje_tres_correcto">
                 <h1>Es correcto!</h1>
                 <img style="width:80%" src="@/assets/img/img-act/fireworks.png" alt="People">
                 <h3>Realiza la siguiente actividad</h3>
                </template>

                <template slot="footer" v-if="eje_tres_mostrar">
                    <md-button class="md-success" @click="click_eje_tres">Verificar</md-button>
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
import {Modal} from '@/components'

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
      btn_eje_tres_disabled:false
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
  click_eje_uno(){
          if(this.eje_uno_res_correcta == this.eje_uno){
              this.eje_uno_mostrar = false;
              this.eje_uno_correcto = true;
              this.btn_eje_uno_disabled = true;
              this.calificacionfinal = this.calificacionfinal + 5;
          }else{
              this.eje_uno_incorrecto = true;
              this.calificacionfinal = this.calificacionfinal - 1;
          }
          this.se_realizaron_las_tres_act_diferenciacion();
    },
  click_eje_dos(){
          if(this.eje_dos_res_correcta == this.eje_dos){
              this.eje_dos_mostrar = false;
              this.eje_dos_correcto = true;
              this.btn_eje_dos_disabled = true;
              this.calificacionfinal = this.calificacionfinal + 5;
          }else{
              this.eje_dos_incorrecto = true;
              this.calificacionfinal = this.calificacionfinal - 1;
          }
          this.se_realizaron_las_tres_act_diferenciacion();
    },
  click_eje_tres(){
          if(this.eje_tres_res_correcta == this.eje_tres){
              this.eje_tres_mostrar = false;
              this.eje_tres_correcto = true;
              this.btn_eje_tres_disabled = true;
              this.calificacionfinal = this.calificacionfinal + 5;
          }else{
              this.eje_tres_incorrecto = true;
              this.calificacionfinal = this.calificacionfinal - 1;
          }
          this.se_realizaron_las_tres_act_diferenciacion();
    },
    se_realizaron_las_tres_act_diferenciacion(){
      if(this.btn_eje_uno_disabled == true && this.btn_eje_dos_disabled == true && this.btn_eje_tres_disabled == true){
          alert("Ya se realizaron las tres actividades");
      }
  }
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
