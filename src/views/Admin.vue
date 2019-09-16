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
                  <h4>Administrador</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Sin Validar', 'Total usuarios', 'Perfil','Otro']"
              :tab-icon="['error', 'supervisor_account', 'favorite','favorite']"
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
                        <input
                          type="text"
                          v-model="search"
                          class="form-control"
                          placeholder="Buscar por numero de cedula,Nombre,Apellido,Tipo De usuario"
                        />
                      </div>
                    </div>
                    <br />
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
                              <button
                                class="btn btn-succes"
                                v-on:click="validar(item[0],index)"
                              >Validar</button>
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

              <!-- Panel numero dos -->
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                    <div class="row p-4">
                      <div class="col-md-12">
                        <input
                          type="text"
                          v-model="searchAll"
                          class="form-control"
                          placeholder="Buscar por numero de cedula,Nombre,Apellido,Tipo De usuario"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="table-responsive-sm">
                      <table class="table table-striped table:hover table-bordered">
                        <thead>
                          <tr>
                            <td># Identificación</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Role</td>
                            <td>Estado</td>
                            <td>Acción</td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="(item,index) in filteredItemsAll">
                            <td>{{ item[0] }}</td>
                            <td>{{ item[3] }}</td>
                            <td>{{ item[4] }}</td>
                            <td>{{ item[7] }}</td>
                            <td>{{ item[5] }}</td>
                            <td>
                              <button
                                class="btn btn-succes"
                                v-on:click="invalidar(item[0],index)"
                              >Validar</button>
                              <button
                                class="btn btn-danger"
                                v-on:click="eliminar(item[0],index)"
                              >Eliminar</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                    <md-field>
                      <label for="tipo_docu">Tipo Documento</label>
                      <md-select v-model="usu_tipo_documento" name="tipo_docu" id="tipo_docu">
                        <md-option value="Cedula">Cédula</md-option>
                        <md-option value="TargetaIdentidad">Targeta Identidad</md-option>
                      </md-select>
                    </md-field>
                    <md-field>
                      <label>Nombres</label>
                      <md-input v-model="usu_nombres"></md-input>
                    </md-field>
                    <md-field>
                      <label>Apellidos</label>
                      <md-input v-model="usu_apellidos"></md-input>
                    </md-field>
                    <md-field>
                      <label>Email</label>
                      <md-input v-model="usu_email"></md-input>
                    </md-field>
                    <md-field>
                      <label>Teléfono</label>
                      <md-input v-model="usu_telefono"></md-input>
                    </md-field>
                    <md-button class="md-warning" @click="btnActualizar">Actualizar</md-button>
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-4">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import api from "@/api";
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
      users: [],
      usersAll: [],
      searchAll: [],
      search: "",
      nombres: window.localStorage.nombres,
      apellidos: window.localStorage.apellidos,
      contador: 0,
      //Datos para actualizar
      usu_id:window.localStorage.id,
      usu_tipo_documento:window.localStorage.tipo_documento,
      usu_nombres:window.localStorage.nombres,
      usu_apellidos:window.localStorage.apellidos,
      usu_tipo_usuario:window.localStorage.role,
      usu_estado:window.localStorage.estado,
      usu_email:window.localStorage.correo,
      usu_telefono:window.localStorage.celular,
      usu_foto:"Sin foto"
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
    filteredItems: function() {
      return this.users.filter(item => {
        return (
          item[0].toString().indexOf(this.search) != -1 ||
          item[3]
            .toString()
            .toLowerCase()
            .indexOf(this.search) != -1 ||
          item[4]
            .toString()
            .toLowerCase()
            .match(this.search) ||
          item[5]
            .toString()
            .toLowerCase()
            .match(this.search)
        );
      });
    },
    filteredItemsAll: function() {
      return this.usersAll.filter(item => {
        return (
          item[0].toString().indexOf(this.searchAll) != -1 ||
          item[3]
            .toString()
            .toLowerCase()
            .indexOf(this.searchAll) != -1 ||
          item[4]
            .toString()
            .toLowerCase()
            .match(this.searchAll) ||
          item[5]
            .toString()
            .toLowerCase()
            .match(this.searchAll)
        );
      });
    }
  },
  methods: {
    mostrarUsuarios() {
      api.mostrarTodosLosUsuarios().then(res => {
        console.log(res);
        this.users = res;
      });
    },
    mostrarUsuariosAll() {
      api.mostrarTodosLosUsuariosAll().then(res => {
        console.log(res);
        this.usersAll = res;
      });
    },
    validar(usu_id, index) {
      const respuesta = confirm(
        "Estas segur@ que deseas validar este usuario?"
      );
      if (respuesta) {
        api
          .validarUsuarios(usu_id)
          .then(res => {
            if (res) {
              this.users.splice(index, 1);
              toastr.success("OK");
              console.log("se va eliminar " + usu_id);
            } else {
              toastr.error("Por alguna razon no se pudo validar este usuario");
            }
          })
          .catch(err => {
            console.log("Esto no salio nada bien..." + usu_id);
          });
      }
    },
    eliminar(usu_id, index) {
      const respuesta = confirm(
        "Estas segur@ que deseas eliminar este usuario?"
      );
      if (respuesta) {
        api
          .eliminarusuario(usu_id)
          .then(res => {
            if (res) {
              this.usersAll.splice(index, 1);
              toastr.success("OK");
              console.log("se va eliminar " + usu_id);
            } else {
              toastr.error(
                "Por alguna razon no se pudo eliminar este usuario [Esta insertado en la tabla estudiantes]"
              );
            }
          })
          .catch(err => {
            console.log("Esto no salio nada bien..." + usu_id);
          });
      }
    },
    invalidar(usu_id, index) {
      const respuesta = confirm(
        "Estas segur@ que deseas invalidar este usuario? (ESTA FUNCION ESTA PENDINTE)"
      );
      if (respuesta) {
        toastr.error("ESTA FUNCION TODAVIA ESTA PENDIENTE");
      }
    },
    //this.usu_id,this.usu_tipo_documento,this.usu_nombres,this.usu_apellidos,this.usu_tipo_usuario,this.usu_estado,this.usu_email,this.usu_telefono,this.usu_foto
    btnActualizar(){
        api.actualzarUsuario(this.usu_id,this.usu_tipo_documento,this.usu_nombres,this.usu_apellidos,this.usu_tipo_usuario,this.usu_estado,this.usu_email,this.usu_telefono,this.usu_foto)
        .then(res =>{
          console.log(res)
          if(res == "Se actualizaron correctamente los datos de la tabla usuario"){
              toastr.success("Se actualizaron correctamente tus datos!");
          }else{
            toastr.error("No fue posible actualizar tus datos!");
          }
        })
        .catch(err =>{
          console.log(err)
        })
    }
  },
  created() {
    this.mostrarUsuarios();
    this.mostrarUsuariosAll();
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