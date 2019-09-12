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
            <h1>Descomposición</h1>
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
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
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
                      <div class="md-layout-item md-size-33">
                        <md-button
                          class="md-success md-block"
                          @click="classicModal = true"
                          :disabled="btn_eje_uno_disabled"
                        >
                          <md-icon>library_books</md-icon>Actividad uno
                        </md-button>
                        <modal v-if="classicModal" @close="classicModalHide">
                          <template slot="header">
                            <h3 class="modal-title">Descomposición de números</h3>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_uno_mostrar">
                            <div class="md-layout md-gutter md-alignment-center">
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <md-field>
                                  <label>#</label>
                                  <md-input v-model="uno_" type="number"></md-input>
                                </md-field>
                                <md-field>
                                  <label>#</label>
                                  <md-input v-model="dos_" type="number"></md-input>
                                </md-field>
                                <md-field>
                                  <label>#</label>
                                  <md-input v-model="tres_" type="number"></md-input>
                                </md-field>
                              </div>
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <md-field>
                                  <label>#</label>
                                  <md-input v-model="uno" type="number"></md-input>
                                </md-field>
                                <md-field>
                                  <label>#</label>
                                  <md-input v-model="dos" type="number"></md-input>
                                </md-field>
                                <md-field>
                                  <label>#</label>
                                  <md-input v-model="tres" type="number"></md-input>
                                </md-field>
                              </div>
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <md-field>
                                  <label>67</label>
                                  <md-input v-model="resul_uno" type="number" disabled></md-input>
                                </md-field>
                                <md-field>
                                  <label>86</label>
                                  <md-input v-model="resul_dos" type="number" disabled></md-input>
                                </md-field>
                                <md-field>
                                  <label>48</label>
                                  <md-input v-model="resul_tres" type="number" disabled></md-input>
                                </md-field>
                              </div>
                            </div>
                            <div v-show="eje_uno_incorrecto">
                              <h3>Vuelve a leer el numero....</h3>
                            </div>
                          </template>

                          <template slot="body" v-if="eje_uno_correcto">
                            <h1>Es correcto!</h1>
                            <img
                              style="width:80%"
                              src="@/assets/img/img-act/fireworks.png"
                              alt="People"
                            />
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
                          :disabled="btn_eje_dos_disabled"
                        >
                          <md-icon>library_books</md-icon>Actividad dos
                        </md-button>
                        <modal v-if="classicModal2" @close="classicModalHide2">
                          <template slot="header">
                            <h3 class="modal-title">Descomposición de números</h3>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide2"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_dos_mostrar">
                            <h2>Cual es la descomposición incorrecta para este número</h2>
                            <h1><strong>99</strong></h1>
                            <div class="md-layout md-gutter md-alignment-center">
                              
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <h3><strong>60 + 39</strong></h3><br>
                                <h3><strong>70 + 29</strong></h3><br>
                                <h3><strong>9 + 99</strong></h3>
                              </div>
                             
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <br>
                                <md-radio v-model="eje_dos" value="99">Aquel?</md-radio><br>
                                <md-radio v-model="eje_dos" value="99">Aquel?</md-radio><br>
                                <md-radio v-model="eje_dos" value="108">Aquel?</md-radio>
                              </div>
                            </div>
                            <div v-show="eje_dos_incorrecto">
                              <h3>Vuelve a leer el numero....</h3>
                            </div>
                          </template>

                          <template slot="body" v-if="eje_dos_correcto">
                            <h1>Es correcto!</h1>
                            <img
                              style="width:80%"
                              src="@/assets/img/img-act/fireworks.png"
                              alt="People"
                            />
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
                          :disabled="btn_eje_tres_disabled"
                        >
                          <md-icon>library_books</md-icon>Actividad tres
                        </md-button>
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
                            <h2>Cual es la descomposición correcto para este número</h2>
                            <h1><strong>67</strong></h1>
                            <div class="md-layout md-gutter md-alignment-center">
                              
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <h3><strong>30 + 37</strong></h3><br>
                                <h3><strong>47 + 21</strong></h3><br>
                                <h3><strong>11+ 57</strong></h3>
                              </div>
                             
                              <div
                                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                              >
                                <br>
                                <md-radio v-model="eje_tres" value="1">Aquel?</md-radio><br>
                                <md-radio v-model="eje_tres" value="2">Aquel?</md-radio><br>
                                <md-radio v-model="eje_tres" value="3">Aquel?</md-radio>
                              </div>
                            </div>
                            <div v-show="eje_tres_incorrecto">
                              <h3>Vuelve a leer el numero....</h3>
                            </div>   
                            
                          </template>

                          <template slot="body" v-if="eje_tres_correcto">
                            <h1>Es correcto!</h1>
                            <img
                              style="width:80%"
                              src="@/assets/img/img-act/fireworks.png">
                           
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
import { Modal } from "@/components";

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
      classicModal: false,
      classicModal2: false,
      classicModal3: false,

      calificacionfinal: 0,

      resul_uno:67,
      resul_dos:86,
      resul_tres:48,

      uno_:null,
      dos_:null,
      tres_:null,

      uno:null,
      dos:null,
      tres:null,

      eje_uno_mostrar:true,
      eje_dos_mostrar:true,
      eje_tres_mostrar:true,

      btn_eje_uno_disabled:false,
      btn_eje_dos_disabled:false,
      btn_eje_tres_disabled:false,

      eje_uno_correcto:false,
      eje_uno_incorrecto:false,


      eje_dos:null,
      eje_dos_respuesta:99,
      eje_dos_correcto:false,
      eje_dos_incorrecto:false,

      eje_tres:null,
      eje_tres_respuesta:1,
      eje_tres_correcto:false,
      eje_tres_incorrecto:false



      
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
    click_eje_uno() {
      var resultado_uno = parseInt(this.uno) + parseInt(this.uno_) ;
      var resultado_dos = parseInt(this.dos) + parseInt(this.dos_) ;
      var resultado_tres = parseInt(this.tres) + parseInt(this.tres_) ;

        if(resultado_uno == this.resul_uno){
            if(resultado_dos == this.resul_dos){
                if(resultado_tres == this.resul_tres){

                  this.eje_uno_mostrar = false;
                  this.eje_uno_correcto = true;
                  this.btn_eje_uno_disabled = true;
                  this.calificacionfinal = this.calificacionfinal + 5;

        }
        }          
        }else{
          this.eje_uno_incorrecto = true;
          this.calificacionfinal = this.calificacionfinal - 1;
        }

      this.se_realizaron_las_tres_act_lectu_num();
    },
    click_eje_dos() {
     if(this.eje_dos != this.eje_dos_respuesta){
                  this.eje_dos_mostrar = false;
                  this.eje_dos_correcto = true;
                  this.btn_eje_dos_disabled = true;
                  this.calificacionfinal = this.calificacionfinal + 5;
     }else{
           this.eje_dos_incorrecto = true;
           this.calificacionfinal = this.calificacionfinal - 1;
     }

      this.se_realizaron_las_tres_act_lectu_num();
    },
    click_eje_tres() {
   if(this.eje_tres == this.eje_tres_respuesta){
                  this.eje_tres_mostrar = false;
                  this.eje_tres_correcto = true;
                  this.btn_eje_tres_disabled = true;
                  this.calificacionfinal = this.calificacionfinal + 5;
     }else{
           this.eje_tres_incorrecto = true;
           this.calificacionfinal = this.calificacionfinal - 1;
     }
      this.se_realizaron_las_tres_act_lectu_num();
    },
    se_realizaron_las_tres_act_lectu_num() {
      if (
        this.btn_eje_uno_disabled == true &&
        this.btn_eje_dos_disabled == true &&
        this.btn_eje_tres_disabled == true
      ) {
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
