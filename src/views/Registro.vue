<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Registrarse</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Dijita tus datos para el registro</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Nombre...</label>
                <md-input v-model="nombre"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
              <md-icon>perm_identity</md-icon>
                <label>Número de identificación...</label>
                <md-input v-model="numeroId" @change="verificarid" @input="verificarid"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email" @change="verificarcorreo" @input="verificarcorreo"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Repita el Password...</label>
                <md-input type="password"></md-input>
              </md-field>
              <md-button slot="footer" @click="registro" class="md-simple md-success md-lg">
                Registrarse
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import api from '@/api'
 import toastr from 'toastr';

 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-full-width",
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

export default {

  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      nombre: null,
      numeroId: null,
      email: null,
      password: null,
      role:['user'],
      errores:{}
    };
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
  },
  methods:{
    registro(){
          console.log("Entra a registrar");
          api.registroInicio(this.nombre,this.numeroId,this.email,this.role,this.password)
          .then(res =>{console.log("---"+res.message)})
          .catch(err =>{console.log("---"+err)})
    },
    verificarid(){
      api.verificarid(this.numeroId)
      .then(res =>{

        if(res){
          toastr.error('Este usuario ya esta ocupado')
        }else{
         // toastr.success('Este usuario esta disponible',{progressBar:true})
         console.log("Este usuario esta disponible");
        }
        
        
        })
      .catch(err => {console.log("Esto no salio nada bien...")})
    },
    verificarcorreo(){
      api.verificarcorreo(this.email)
      .then(res =>{

        if(res){
          toastr.error('Este email ya esta ocupado')
        }else{
         // toastr.success('Este usuario esta disponible',{progressBar:true})
         console.log("Este email esta disponible");
        }
        
        
        })
      .catch(err => {console.log("Esto no salio nada bien...")})
    }
  }
};
</script>

<style lang="css"></style>
