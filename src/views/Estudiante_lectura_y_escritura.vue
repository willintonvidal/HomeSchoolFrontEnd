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
            <h1>Lectura y escritura</h1>
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
                      src="https://www.youtube.com/embed/201wM4dk-Dg"
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
                            <h3 class="modal-title">Actividad uno lectura y escritura de números</h3>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_uno_mostrar">
                            <div class="md-layout md-gutter md-alignment-center">
                             
                                <img
                                  style="width:100%; height:100%"
                                  src="@/assets/img/img-act/7conejos.png"
                                  alt="People"
                                />
                             
                            </div>
                            <div v-show="eje_uno_incorrecto">
                              <h3>Vuelve a leer el numero....</h3>
                            </div>
                          </template>

                          <template slot="body" v-if="eje_uno_correcto">
                            <h1>Es correcto!</h1>
                            <img
                              style="width:100%; height:100%;"
                              src="@/assets/img/img-act/fireworks.png"
                              alt="People"
                            />
                            <h3>Realiza la siguiente actividad...</h3>
                          </template>

                          <template slot="footer" v-if="eje_uno_mostrar">
                            <div class="md-layout md-gutter md-alignment-center">
                              <md-button class="md-danger" @click="click_eje_uno(11)">Once conejos</md-button>
                              <md-button class="md-info" @click="click_eje_uno(22)">Venti Dos conejos</md-button>
                              <md-button class="md-warning" @click="click_eje_uno(12)">Doce conejos</md-button>
                            </div>
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
                            <h3 class="modal-title">Actividad uno lectura y escritura de números</h3>
                            <md-button
                              class="md-simple md-just-icon md-round modal-default-button"
                              @click="classicModalHide2"
                            >
                              <md-icon>clear</md-icon>
                            </md-button>
                          </template>

                          <template slot="body" v-if="eje_dos_mostrar">
                            <h2>¿El niño cuantas manzanas tiene?</h2>
                            <div class="md-layout md-gutter md-alignment-center">
                              
                               
                                  <img
                                    style="width:50%"
                                    src="@/assets/img/img-act/tengo16.png"
                                    alt="People"
                                  />
                                  <img
                                    style="width:50%"
                                    src="@/assets/img/img-act/5menos.png"
                                    alt="People"
                                  />
                                
                             

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
                            
                              <div class="md-layout md-gutter md-alignment-center">
                                <md-button class="md-danger" @click="click_eje_dos(21)">Ventiun manzanas</md-button>
                                <md-button class="md-info" @click="click_eje_dos(13)">Trece Manzanas</md-button>
                                <md-button class="md-warning" @click="click_eje_dos(11)">Once manzanas</md-button>
                              </div>
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
                            <h2>¿Cuantas caras de payasos observas?</h2>
                            <div class="md-layout md-gutter md-alignment-center">
                             
                                <img
                                  style="width:30%"
                                  src="@/assets/img/img-act/clown.png"
                                  alt="People"
                                />
                                <img
                                  style="width:30%"
                                  src="@/assets/img/img-act/clown.png"
                                  alt="People"
                                />
                                <br />
                                <img
                                  style="width:30%"
                                  src="@/assets/img/img-act/clown.png"
                                  alt="People"
                                />
                                <br />
                        
                              
                             
                            

                            </div>
                            <div v-show="eje_tres_incorrecto">
                              <h3>Vuelve a leer el numero....</h3>
                            </div>
                          </template>

                          <template slot="body" v-if="eje_tres_correcto">
                            <h1>Es correcto!</h1>
                            <img
                              style="width:80%"
                              src="@/assets/img/img-act/fireworks.png"
                              alt="People"
                            />
                            <h3>Realiza la siguiente actividad</h3>
                          </template>

                          <template slot="footer" v-if="eje_tres_mostrar">
                            <div class="md-layout md-gutter md-alignment-center">
                                <md-button class="md-danger" @click="click_eje_tres(2)"><strong>Dos payasos</strong></md-button>
                                <md-button class="md-info" @click="click_eje_tres(5)"><strong>Cinco payasos</strong></md-button>
                                <md-button @click="click_eje_tres(3)"><strong>Tres payasos</strong></md-button>
                              </div>
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
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") },
        { image: require("@/assets/img/examples/boy.png") }
      ],
      nombres: window.localStorage.nombres,
      apellidos: window.localStorage.apellidos,
      classicModal: false,
      classicModal2: false,
      classicModal3: false,

      calificacionfinal: 0,

      eje_uno_res_correcta: 52,
      eje_uno: false,
      eje_uno_mostrar: true,
      eje_uno_correcto: false,
      eje_uno_incorrecto: false,
      btn_eje_uno_disabled: false,

      eje_dos_res_correcta: 12,
      eje_dos: false,
      eje_dos_mostrar: true,
      eje_dos_correcto: false,
      eje_dos_incorrecto: false,
      btn_eje_dos_disabled: false,

      eje_tres_res_correcta: 3,
      eje_tres: false,
      eje_tres_mostrar: true,
      eje_tres_correcto: false,
      eje_tres_incorrecto: false,
      btn_eje_tres_disabled: false
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
      if (num == 12) {
        this.eje_uno_mostrar = false;
        this.eje_uno_correcto = true;
        this.btn_eje_uno_disabled = true;
        this.calificacionfinal = this.calificacionfinal + 5;
      } else {
        this.eje_uno_incorrecto = true;
        this.calificacionfinal = this.calificacionfinal - 1;
      }
      this.se_realizaron_las_tres_act_lectu_num();
    },
    click_eje_dos(num) {
      
      if (num == 11) {
        this.eje_dos_mostrar = false;
        this.eje_dos_correcto = true;
        this.btn_eje_dos_disabled = true;
        this.calificacionfinal = this.calificacionfinal + 5;
      } else {
        this.eje_dos_incorrecto = true;
        this.calificacionfinal = this.calificacionfinal - 1;
      }
      this.se_realizaron_las_tres_act_lectu_num();
    },
    click_eje_tres(num) {
       if (num == 3) {
        this.eje_tres_mostrar = false;
        this.eje_tres_correcto = true;
        this.btn_eje_tres_disabled = true;
        this.calificacionfinal = this.calificacionfinal + 5;
      } else {
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

  @media only screen and (max-width: 600px) {
    body {
      background-color: red;
    }
  }
}
</style>
