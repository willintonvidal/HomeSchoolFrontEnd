<template>
  <div class="wrapper">

<template>
                      
                      <modal v-if="classicModal" @close="classicModalHide">
                        <template slot="header">
                          <h2 class="modal-title" >Recordatorio de contraseña</h2>
                          <md-button class="md-simple md-just-icon md-round modal-default-button" @click="classicModalHide">
                            <md-icon>clear</md-icon>
                          </md-button>
                        </template>

                        <template slot="body">
                           
                               
                                

                                <md-field>
                                  <label>Digita tu número de documento de identidad</label>
                                  <md-input v-model="num_ident" type="number"></md-input>
                                </md-field>
                                
                                <md-field>
                                  <md-input v-model="nombre_profesor" disabled ></md-input>
                                </md-field>
                                <md-button class="md-danger md-simple" @click="mandarCorreo">Enviar</md-button>
                        </template>
                   
                      </modal>
                    </template>
                

    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <form @submit.prevent="acceso">
              <login-card header-color="green">
                <h2 slot="title" class="card-title">Iniciar Sesion</h2>
                

                <p slot="description" class="description">                </p>

                <md-field class="md-form-group" slot="inputs">
                  <md-icon>perm_identity</md-icon>
                  <label>Número de identificación</label>
                  <md-input
                    v-model="id_usuario"
                    type="number"
                    name="id_usuario"
                    @change="verificarid"
                  ></md-input>
                </md-field>
                
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>lock_outline</md-icon>
                  <label>Password</label>
                  <md-input v-model="password" name="password" type="password"></md-input>
                </md-field>


                <md-button slot="inputs" @click="acceso" class="md-success md-lg">Acceder</md-button>

                <md-button
                  slot="footer"
                  class="md-simple md-info md-lg"
                  href="#/Registro"
                >Registrate</md-button>
                
             <md-button
                  slot="footer"
                  class="md-simple md-info md-lg"
                  @click="mandarCorreo"
                ><small>Olvide la contraseña</small></md-button>
                </login-card>
                
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </div>



</template>





<script>
import { LoginCard } from "@/components";
import {Modal} from '@/components';

import api from "@/api";
import toastr from "toastr";

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
};

export default {
  components: {
    LoginCard,Modal
  },
  bodyClass: "login-page",
  name: "login",
  data() {
    return {
      id_usuario: "",
      password: "",
      error: {},
      classicModal: false,
      num_ident:null

    };
  },
  methods: {
    mandarCorreo(){
      if(this.id_usuario != ''){
          api.rescuperar_password(this.id_usuario)
        .then(res =>{
            if(res=='0'){
                toastr.error("La identificación no existe en nuestro sistema");
            }else{
                toastr.success("Se ha enviado a tu correo "+res+" la contraseña...");
                this.classicModal=false;
            }
        }).catch();
      }else{
        toastr.error("Debes ingresar tu número de indentificación")
      }
        
    },
    mostrarModal() {
      this.classicModal = true;
    },
    classicModalHide() {
      this.classicModal = false;
    },
    acceso() {
      api
        .authenticate(this.id_usuario, this.password)
        .then(res => {
          console.log(res);

          if(res == undefined)
          toastr.error("Datos Incorrectos")
          else{
          window.localStorage.id = res[0][0];
          window.localStorage.nombres = res[0][1];
          window.localStorage.apellidos = res[0][2];
          window.localStorage.role = res[0][3];
          window.localStorage.estado = res[0][4];
          window.localStorage.correo = res[0][5];
          window.localStorage.celular = res[0][6];
          window.localStorage.tipo_documento = res[0][8];
         
          if(res[0][3] =='Profesor'){ this.$router.push("/profesor"); toastr.success("Bienvenido Profesor");}

          if(res[0][3] =='Estudiante'){this.$router.push("/estudiante"); toastr.success("Bienvenido estudiante");}
        
          if(res[0][3] =='Administrador'){this.$router.push("/admin"); toastr.success("Bienvenido administrador");}
          
          }
          

        })
        .catch(err => toastr.error("Datos Incorrectos "));

      console.log("---" + this.error.error);
      console.log("---" + this.error.message);
      console.log("Enttra acceso" + this.id_usuario + "---" + this.password);
      console.log("Un cambio para que se actualize en github");
    },
    removeNotify(e, notifyClass) {
      return (this.notificacion = false);
    },
    verificarid() {
      api
        .verificarid(this.id_usuario)
        .then(res => {
          if (res) {
            toastr.success("Esta identificación es correcta");
          } else {
            // toastr.success('Este usuario esta disponible',{progressBar:true})
            console.log("Este usuario esta disponible");
          }
        })
        .catch(err => {
          console.log("Esto no salio nada bien...");
        });
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
