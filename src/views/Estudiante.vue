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
              <!--<h1>Matemáticas</h1>-->
              <!--Matriculas  por parte del estudiante-->
               <template>
                      <md-button  class="md-primary md-round classic-modal " @click="verificarsihaymaterias" v-if="this.materiasMatri.length != 0"> Matricular Materia</md-button>
                      <modal v-if="classicModal" @close="classicModalHide">
                        <template slot="header">
                          <h2 class="modal-title" >Matricular Materia</h2>
                          <md-button class="md-simple md-just-icon md-round modal-default-button" @click="classicModalHide">
                            <md-icon>clear</md-icon>
                          </md-button>
                        </template>

                        <template slot="body">
                            <div class="md-layout-item" v-if="this.materiasMatri.length != 0"> 
                               
                                <!--
                                <md-field>
                                  <md-select v-model="Materia_sin_matri" name="Materia_sin_matri" id="Materia_sin_matri" placeholder="Materia" >
                                    <div v-for="(mate, i) in materiasMatri">
                                        <md-option value="'${mate[0]}'">{{mate[0]}}</md-option>
                                  </div>
                                  </md-select>
                                </md-field>-->
                                <select v-model="Materia_sin_matri" @click="mostrarProfesorPorMateria(), MostrarIdMateria ()">
                                  <option v-for="(Mate,i) in materiasMatri">
                                      {{Mate[0]}}
                                  </option>
                                </select >
                              
                                </div>

                                <div class="md-layout-item" v-if="this.materiasMatri.length == 0">
                                    <h1>Ya no tienes mas materias por registrar</h1> 
                                </div>
                                
                                <md-field>
                                  <md-input v-model="nombre_profesor" disabled ></md-input>
                                </md-field>
                                
                        </template>
                      
                        <template slot="footer">
                         
                          <md-button class="md-simple md-success md-lg"  @click="registroMateriaMatricular()">Registrar</md-button>
                          <md-button class="md-danger md-simple" @click="classicModalHide">Cerrar</md-button>

                        </template>
                      </modal>
                    </template>
                  
               <!-- Termina Matriculas  por parte del estudiante-->
                       
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Acudiente', 'Mis Materias']"
              :tab-icon="['person', 'palette']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->

              <!--Empieza el primer item de información del acudiente -->
              <template slot="tab-pane-1">

                <div class="md-layout">

                  <div class="md-layout-item md-size-40 mr-auto">
                    <img :src="tabPane1[4].image" class="rounded" />
                  </div>
                 
                  <div class="md-layout-item md-size-60 ml-auto">  
                        <md-select v-model="acudiente_tipo_ident" name="tipo_docu" id="acu_tipo_identificacion" placeholder="Tipo de documento">
                                <md-option value="Targetaidentidad">Tarjeta de identidad</md-option>
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
                 
                </div>
              </template>
              <!--termina el primer item de la información del acudiente -->

   <!--Consulta los materias matriculadas  por cada estudiante-->           
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane2[5].image" class="rounded" />
                  
                  </div>
                  <div  class="md-layout md-gutter md-alignment-center">
                        <div v-for="(materiasMat) in materias_matriculadas"  class="md-layout md-gutter md-alignment-center">
                         <md-button class="md-info"  @click="click_id_materia_(materiasMat[0],materiasMat[1])">{{materiasMat[0]}}</md-button><br>
                        </div>
                    </div>

                    <div class="md-layout-item md-size-85 ml-auto">
                
                       <div v-for="(temas) in temasAllMateria" class="md-layout md-gutter md-alignment-center">
                           <!-- <md-button class="md-info md-block" :href="'#/estudiante/'+temas[1]" >{{temas[0]}}</md-button><br> -->
                           <md-button class="md-info md-block" @click="click_tema_promedio(temas[1])">{{temas[0]}}</md-button><br>
                      </div>
                    </div>

                </div>
              </template>
   <!-- termina Consulta los materias matriculadas  por cada estudiante-->   

<!--
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                   
                      <md-button class="md-info" href="#/estudiante/lecturayescritura" >lectura y escritura de números</md-button><br>
                      <md-button class="md-info" href="#/estudiante/diferenciacion">Diferenciación</md-button><br>
                      <md-button class="md-info" href="#/estudiante/operacionesbasicas">operaciones básicas</md-button><br>
                      <md-button class="md-info" href="#/estudiante/descomposicion">descomposición</md-button>
                       
                       <md-button class="md-primary md-block" href="#/estudiante/descomposicion">Información traida desde la bd</md-button>

                       <div v-for="(temas) in temasAllMateria">
                            <md-button class="md-info" :href="'#/estudiante/'+temas[1]">{{temas[0]}}</md-button><br>       
                      </div>
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                  </div>
                </div>
              </template>
  Termina Consultas para los temas de la materia de matemáticas-->
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
      temasAllMateria: [],
      nombre_materia: null,
      nombre_profesor: null,
      materiasMatri:[],
      nombre_cada_materia:'Ingles', //obtenerlo del clic de cada materia
      materias_matriculadas:[],
      Materia_sin_matri:null,
      temasdeunamateria:null, //obtenerlo del clic de la materia 
      nombredeltema: "Suma de conjuntos", //obtenerlo desde el clic de un tema especifico
      materialdeEstudio:[],

      idMateria:null,
      matri_fecha_fin: '12-12-2019',
      //nota_promedio,
      id:window.localStorage.id,
      id_materia_nota:null,
      datos_acudiente:[],
      

      /*Termina Pao, coloque una coma(,)*/

      tabPane1: [
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/img-act/banner.jpg") },
        { image: require("@/assets/img/examples/Acudiente.gif") }
        

      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") },
        { image: require("@/assets/img/examples/Materias.gif") }
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
    },
 
    filteredMateriasAMatricular: function() {
      return this.materiasMatri.filter(materias => {
        return (
          materias[0]
            .toString()
            .toLowerCase()
            .match(this.search)||
            materias[1].toString().indexOf(this.search) != -1 
        );
      });
    }


  },
  methods: {

    verificarsihaymaterias(){
      this.classicModal = true;
    },
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

            mostrarTemasAll() {
            console.log("Prueba_____ :"+this.temasdeunamateria);
            api.mostrarTemas(this.temasdeunamateria).then(res => {
              console.log("Mostrar todos los temas por nombre de la materia: "+res);
              this.temasAllMateria = res;
            });
          
            },
            mostrarMateriasAMatricular() {
            api.MateriasAMatricular(this.identificacion).then(res => {
              console.log(res);
              this.materiasMatri = res;

            });
            },
 
            mostrarProfesorPorMateria(){
              
            api.MostrarProfesor(this.Materia_sin_matri).then(res => {
              console.log(res);
              this.nombre_profesor = res;
              
            });
            },

            mostrarMateriasMatriculadasEst(){
            api.MateriasMatriculadasPorEstudiante(this.identificacion).then(res => {
              console.log(res);
              this.materias_matriculadas = res;
             
            });
            },
             mostrarMaterialdeEstudioDeUnTema(){
             api.mostrarMaterialEstudio(this.nombredeltema).then(res => {
              console.log(res);
              this.materialdeEstudio = res;
             
            });
            },
            
            MostrarIdMateria (){
              api.mostrarIdMateria (this.Materia_sin_matri).then(res => {
              this.idMateria = res;
              console.log("el id de la materia "+this.idMateria);

            });
            },
            //Registrar materia
            registroMateriaMatricular(){
              console.log("Antes de registrar la matricula:---id Materia---" +this.idMateria); 
              console.log("********** :"+this.materiasMatri);


                 api.RegistrarMatricula(this.identificacion, ""+this.idMateria, this.matri_fecha_fin)
                .then(res =>{
                  console.log("Se registro la matricula:---id Materia---" +this.idMateria); 
                  console.log("Se registro la matricula:---Pao---" +res); 
                if(res == 'Se insertaron correctamente los datos de la tabla matricula'){
                    console.log("Se insertaron los datos de la tabla matricula"+res)
                    toastr.success("Se registro exitosamente su matricula");
                    this.mostrarMateriasAMatricular();
                    this.mostrarMateriasMatriculadasEst();
                    
                  }
                })
                .catch(err =>{console.log("error al registrar matricula de la materia"+err)})
             },
             //Mostrar temas por el nombre de la materia
             click_id_materia_(mat,id_mat){
                    this.temasdeunamateria = mat;
                    this.id_materia_nota = id_mat;
                    this.mostrarTemasAll();     
             },
             click_tema_promedio(tema){
               

                console.log("*********"+this.datos_acudiente[0]);

                  api.promedio_tema_estudiante(this.id,tema,this.id_materia_nota).then(
                    res =>{
                      console.log("_____"+res);
                      
                      
                   this.enviar_correo_acudiente(res);

                      
                      
                      alert("El hasta ahora es:"+res);
                      this.$router.push({path:'/estudiante/'+tema});
                     //mandar correo si el promedio es mayor a cero
                      
                    }
                  ).catch(
                      error =>{
                        alert("Error");
                      }
                  )
                   
                
             },
             cargar_datos_acudiente(){
               api.cargar_datos_acudiente(this.id)
               .then(res =>{
                    this.datos_acudiente = res;
               })
               .catch(err =>{
                    console.log("No se encontraron datos del acudiente");
               });
             },
             enviar_correo_acudiente(pro){
        
                  api.enviar_correo_con_el_promedio(this.datos_acudiente[0][0],this.datos_acudiente[0][1],this.nombres,pro.toString(),this.temasdeunamateria)
                        .then(respues =>{
                            console.log("Se envio el correo");
                        })
                        .catch(error =>{
                              console.log("No se pudo enviar el correo");
                        });
             }

          
    /*termina pao */         
},
created() {
    this.mostrarTemasAll();
    this.mostrarMateriasAMatricular();
    this.mostrarProfesorPorMateria();
    this.mostrarMateriasMatriculadasEst();
    this.cargar_datos_acudiente();
    console.log("--------------"+materiasMatri[1]);
    
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
