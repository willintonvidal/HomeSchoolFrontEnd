<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h2 slot="title" class="card-title">Registrarse</h2>
              <p slot="description" class="description">Digita tus datos para el registro</p>
        

        <md-field class="md-form-group" slot="inputs">
        <md-select v-model="tipo_usuario" name="tipo_usuario" id="tipo_usuario" placeholder=" Registrarse como:">
            <md-option value="Estudiante">Estudiante</md-option>
            <md-option value="Profesor">Profesor</md-option>
            <md-option value="Administrador">Administrador</md-option>
          </md-select>  
         </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Nombres...</label>
                <md-input v-model="nombres"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Apellidos...</label>
                <md-input v-model="apellidos"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">       

                  <md-select v-model="tipo_docu" name="tipo_docu" id="tipo_docu" placeholder="Tipo de documento">
                      <md-option value="Tarjeta de identidad">Tarjeta identidad</md-option>
                      <md-option value="Cedula">Cédula</md-option>
                   </md-select>  

              </md-field>
              <md-field class="md-form-group" slot="inputs">
              <md-icon>perm_identity</md-icon>
                <label>Número de identificación...</label>
                <md-input v-model="numeroId" @change="verificarid" @input="verificarid"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Telefono Celular...</label>
                <md-input v-model="celular"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
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
               <!--Información del profesor-->
               
               <md-field class="md-form-group" slot="inputs" v-if="tipo_usuario=='Profesor'" >
                <md-icon>face</md-icon>
                <label> titulo profesional...</label>
                <md-input v-model="titulo_prof"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs" v-if="tipo_usuario=='Profesor'">
                <md-icon>face</md-icon>
                <label> Experiencia laboral...</label>
                <md-input v-model="experiencia_laboral_prof"></md-input>
              </md-field>

               <!--Termina información del profesor-->


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
  "debug": true,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "200",
  "hideDuration": "500",
  "timeOut": "4000",
  "extendedTimeOut": "900",
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
      nombres: null,
      apellidos: null,
      tipo_docu:null,
      numeroId: null,
      celular:null,
      tipo_usuario:null,
      email: null,
      password: null,
      errores:{},
      MostrarInfoProfesor:false,
      titulo_prof:null,
      experiencia_laboral_prof:null
               
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
          
          api.registroInicio(this.numeroId,this.tipo_docu,this.nombres,this.apellidos,this.tipo_usuario,this.password,this.email,this.celular)
          .then(res =>{
            console.log("---"+res)
            if(res == 'Se insertaron correctamente los datos de la tabla usuario'){   
              if(this.tipo_usuario=='Administrador'){
                 toastr.success("  Se registro exitosamente como administrador ");
                 this.$router.push("/login");
              }
                if(this.tipo_usuario=='Estudiante'){
                 toastr.success("  Se registro exitosamente como Estudiante ");
                 this.$router.push("/login");
              }

              if(this.tipo_usuario=='Profesor'){
                api.registrarProfesor(this.numeroId, this.titulo_prof, this.experiencia_laboral_prof)
                .then(res =>{
                console.log("---"+res)
                if(res == 'Se insertaron correctamente los datos de la tabla profesor'){
                toastr.success("Se registro exitosamente como profesor");
                this.$router.push("/login");
                }
                })
                .catch(err =>{console.log("error al registrar profesor"+err)})
                
             }//if de profesor
 

            }//if general

          }) // then grande todo el resgistro
          .catch(err =>{console.log("---"+err)})
    },

    verificarid(){
      api.verificarid(this.numeroId)
      .then(res =>{

        if(res){
          toastr.error('Este usuario ya esta registrado!')
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
          toastr.error('Este email ya esta registrado!')
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
