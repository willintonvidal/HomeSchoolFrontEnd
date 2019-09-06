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
                  
                  <h3 class="title"> {{nombres}} {{apellidos}}</h3>
                  <h4>Administrador</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Validar', 'Work', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                        <div class="row p-4">
                          <div class="col-md-12">
                            <input type="text" v-model="search" class="form-control" placeholder="BUscar por número de cedula"/>
                          </div>
                        </div><br />
                    <div class="table-responsive-sm">
                        <table class="table table-striped table:hover table-bordered">
                          <thead>
                            <tr>
                              <td># Identificación</td>
                              <td>Nombres</td>
                              <td>Apellidos</td>
                              <td>Role</td>
                              <td>Eliminar</td>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item,index) in filteredItems">
                              
                              <td>{{ item[0] }}</td>
                              <td>{{ item[3] }}</td>
                              <td>{{ item[4] }}</td>
                              <td>{{ item[5] }}</td>
                              <td>
                                <button class="btn btn-succes" v-on:click="validar(item[0],index)">
                                  Validar
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </div>

                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
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

    <div>
  
  </div>
   

  </div>






</template>

<script>
import { Tabs } from "@/components";
import api from '@/api'
import toastr from "toastr";


export default {
  components: {
    Tabs
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
      users:[],
      search:'',
      nombres:window.localStorage.nombres,
      apellidos:window.localStorage.apellidos,
      contador:0
    };

  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner.jpg")
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
    },
    filteredItems: function(){
      return this.users.filter((item) =>{
        return item[0].toString().indexOf(this.search) != -1 || item[3].toString().toLowerCase().indexOf(this.search) != -1 || item[4].toString().toLowerCase().match(this.search) || item[5].toString().toLowerCase().match(this.search);
      });
    }
  },
  methods:{
      mostrarUsuarios(){
        api.mostrarTodosLosUsuarios().then(res =>{
          console.log(res)
          this.users = res;
          })
    },validar(usu_id,index){
        const respuesta = confirm("Estas segur@ que deseas validar este usuario?");
        if(respuesta){
            api.validarUsuarios(usu_id)
            .then(res => {
              if(res){
                    this.users.splice(index,1);
                    toastr.success("OK");
                    console.log('se va eliminar '+usu_id);
              }else{
                  toastr.error("Por alguna razon no se pudo validar este usuario")
              }
        })
        .catch(err => {
          console.log("Esto no salio nada bien..."+usu_id);
        });
        }
    }
  },
  created(){
    this.mostrarUsuarios();
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
<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>