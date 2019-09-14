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
              <h1>Matemáticas</h1>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Acudiente', 'Mis temas', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->

              <!--Empieza el primer item de información del acudiente -->
              <template slot="tab-pane-1">



                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                       
                        <md-select v-model="acudiente_tipo_ident" name="tipo_docu" id="acu_tipo_identificacion" placeholder="Tipo de documento">
                                <md-option value="Targetaidentidad">Targeta de identidad</md-option>
                                <md-option value="Cedula">Cédula</md-option>
                        </md-select> 

                      

                        <md-field class="md-form-group" slot="inputs">
                        <md-icon>perm_identity</md-icon>
                          <label>Número de identificación...</label>
                          <md-input v-model="acu_numero_ident"></md-input>
                        </md-field>

                        <md-field class="md-form-group" slot="inputs">
                          <md-icon>face</md-icon>
                          <label>Nombres completos...</label>
                          <md-input v-model="acu_nombre_completo"></md-input>
                        </md-field>
                        
                        <md-field class="md-form-group" slot="inputs">
                          <md-icon>email</md-icon>
                          <label>Email...</label>
                          <md-input v-model="ecudiente_email" type="email"></md-input>
                        </md-field>

                        <md-field class="md-form-group" slot="inputs">
                          <md-icon>face</md-icon>
                          <label>Telefono Celular...</label>
                          <md-input v-model="acudiente_telefono"></md-input>
                        </md-field> 

                        <md-button slot="footer" @click="registroAcudiente" class="md-simple md-success md-lg">
                          Registrar acudiente
                        </md-button>

                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                  </div>
                </div>
              </template>
              <!--termina el primer item de la información del acudiente -->
              
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                   <md-button class="md-info" href="#/estudiante/lecturayescritura" >lectura y escritura de números</md-button><br>
                      <md-button class="md-info" href="#/estudiante/diferenciacion">Diferenciación</md-button><br>
                      <md-button class="md-info" href="#/estudiante/operacionesbasicas">operaciones básicas</md-button><br>
                      <md-button class="md-info" href="#/estudiante/descomposicion">descomposición</md-button>
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

/*pao */
import api from '@/api'
import toastr from 'toastr';

 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
/* Termina pao */
export default {
  components: {
    Tabs,Modal
  },
  bodyClass: "profile-page",
  data() {
    return {
       /*pao */
      acudiente_tipo_ident: null,
      acu_numero_ident: null,
      acu_nombre_completo:null,
      ecudiente_email: null,
      acudiente_telefono:null,
      errores:{},
       /*Termina Pao, coloque una coma(,)*/


      tabPane1: [
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/img-act/banner.jpg") }
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
      classicModal2: false
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
    /*pao */
    registroAcudiente(){
        
                 api.registrarAcudiente(this.acudiente_tipo_ident, this.acu_numero_ident, this.acu_nombre_completo, this.ecudiente_email, this.acudiente_telefono)
                .then(res =>{
                  console.log("Se registro acudiente:" +res);
                  
                if(res == 'Se insertaron los datos de la tabala acudiente'){
                    api.registrarEstudiante(this.identificacion, this.acu_numero_ident)
                    .then(res =>{
                    console.log("Se insertaron los datos de la tabla estudiante"+res)
                    if(res == 'Se insertaron correctamente los datos'){
                    toastr.success("Se registro exitosamente como Acudiente  ");
                    this.$router.push("/estudiante");
                    }
                    })
                    .catch(err =>{console.log("error al registrar estudiante"+err)})

                }
                })
                .catch(err =>{console.log("error al registrar acudiente"+err)})
             },
    /*termina pao */         
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
