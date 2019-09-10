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
            <h1>Operaciones Basicas</h1>
            <h1>{{calificacionfinal}}</h1>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Material', 'Actividades', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1" >
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                   <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WBqXpj1_96g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                     <!--esta es la actividad uno-->
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal = true"
                 :disabled="btn_suma_disabled"><md-icon>library_books</md-icon> Actividad uno</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h3 class="modal-title">Actividad uno operaciones basicas</h3>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body" v-if="suma_mostrar">
                 <h2>Debes  contar la cantidad la cantidad de perritos y luego colocar la suma en el cuadro blanco</h2>
                  <div class="md-layout">
                    <div class="md-layout-item">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                    </div>
                    <div class="md-layout-item">
                      <h1>+</h1>
                    </div>
                    <div class="md-layout-item">
                          <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/dog.png" alt="People">
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
                    <md-field>
                      <label>Coloca el número en total de perritos que hay en total</label>
                      <md-input v-model="suma" type="number"></md-input>
                    </md-field>
                    <md-button class="md-success" @click="resulSuma">Verificar</md-button>
                </template>
              </modal>
            </div>
          </div>
                    <!-- Fin del juego-->
                    <!--aqui iria el juego 1 -->
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal2 = true"
                :disabled="btn_resta_disabled"><md-icon>library_books</md-icon> Actividad dos</md-button
              >
              <modal v-if="classicModal2" @close="classicModalHide2">
                <template slot="header">
                  <h3 class="modal-title">Operación basica - resta</h3>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide2"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>
                <template slot="body" v-if="resta_mostrar">
                 <h2>Debes  averiguar cuantas galletas quedarian realizando la operación</h2>
                  <div class="md-layout">
                    <div class="md-layout-item">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                    </div>
                    <div class="md-layout-item">
                      <h1>-</h1>
                    </div>
                    <div class="md-layout-item">
                          <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/gingerman.png" alt="People">
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
                  <md-field>
                      <label>Cuantas galleticas quedan al final</label>
                      <md-input v-model="resta" type="number"></md-input>
                    </md-field>
                    <md-button class="md-success" @click="click_resta">Verificar</md-button>
                </template>
              </modal>
            </div>
          </div>
          <!-- Fin del juego-->

<!--aqui iria el juego 1 -->
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal3 = true"
                :disabled="btn_multiplicacion_disabled"><md-icon>library_books</md-icon> Actividad tres</md-button
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
                  <div class="md-layout">
                    <div class="md-layout-item">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People"><br>
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                    </div>
                    <div class="md-layout-item">
                      <h1>*</h1>
                    </div>
                    <div class="md-layout-item">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People">
                        <img style="width:50px" src="@/assets/img/img-act/pencil.png" alt="People"><br>
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
                  <md-field>
                      <label>Cuantos lapices fueron?</label>
                      <md-input v-model="multiplicacion" type="number"></md-input>
                      
                    </md-field>
                    <md-button  @click="click_multiplicacion" class="md-success">Verificar</md-button>
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
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
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
      btn_multiplicacion_disabled:false

    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
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
    resulSuma(){
        if(this.suma == this.resultadosuma){
            this.suma_mostrar = false;
            this.suma_correcto = true;
            this.calificacionfinal = this.calificacionfinal + 5;
            this.btn_suma_disabled = true;
        }else{
          this.suma_incorrecto = true;
          this.calificacionfinal = this.calificacionfinal - 1;
        }

        this.se_realizaron_las_tres_act_op_ba();
    },
    click_resta(){
        if(this.resta == this.resultadoresta){
            this.resta_mostrar = false;
            this.resta_correcto = true;
            this.calificacionfinal = this.calificacionfinal + 5;
            this.btn_resta_disabled = true;
        }else{
       
          this.resta_incorrecto = true;
          this.calificacionfinal = this.calificacionfinal - 1;
        }

        this.se_realizaron_las_tres_act_op_ba();
    },
    click_multiplicacion(){
      if(this.multiplicacion == this.resultadomultiplicacion){
          this.multiplicacion_mostrar = false;
          this.multiplicacion_correcto = true;
           this.calificacionfinal = this.calificacionfinal + 5;
           this.btn_multiplicacion_disabled = true;
      }else{
            this.multiplicacion_incorrecto = true;
            this.calificacionfinal = this.calificacionfinal - 1;
      }
      this.se_realizaron_las_tres_act_op_ba();
    },
    se_realizaron_las_tres_act_op_ba(){
      if(this.btn_suma_disabled == true && this.btn_resta_disabled == true && this.btn_multiplicacion_disabled == true){
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
