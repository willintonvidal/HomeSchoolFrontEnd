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
                  <h4>Profesor</h4>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              
            </p>
          </div>
          <div class="profile-tabs">
            <tabs

              :tab-name="['Notas Materia', 'Notas Tema']"
              :tab-icon="['camera', 'palette']"


              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">

                  <div class="md-layout-item md-size-85 ml-auto">
                   <div class="table-responsive-sm">
                      <table class="table table-striped table:hover table-bordered">
                        <thead>
                          <tr>
                            <td># Identificación</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Materia</td>
                            <td>Nota materia</td>
                            <td>Acudiente</td>
                            
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="(item,index) in notas_materia">
                            <td>{{ item[1] }}</td>
                            <td>{{ item[2] }}</td>
                            <td>{{ item[3] }}</td>
                            <td>{{ item[4] }}</td>
                            <td>{{ item[5] }}</td>
                            <td>{{ item[8] }}</td>
                            
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

                  <div class="md-layout-item md-size-85 ml-auto">
                      <div class="table-responsive-sm">
                      <table class="table table-striped table:hover table-bordered">
                        <thead>
                          <tr>
                            <td># Identificación</td>
                            <td>Nombres</td>
                            <td>Apellidos</td>
                            <td>Materia</td>
                            <td>Nota materia</td>
                            <td>Nombre tema</td>
                            <td>Nota tema</td>
                            <td>Acudiente</td>
                            
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="(item,index) in notas_tema">
                            <td>{{ item[1] }}</td>
                            <td>{{ item[2] }}</td>
                            <td>{{ item[3] }}</td>
                            <td>{{ item[4] }}</td>
                            <td>{{ item[5] }}</td>
                            <td>{{ item[8] }}</td>
                            <td>{{ item[9] }}</td>
                            <td>{{ item[10] }}</td>
                            
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

            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";

import api from '@/api'



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
      nombres: window.localStorage.nombres,
      apellidos: window.localStorage.apellidos,

      id:window.localStorage.id,
      notas_tema:[],
      notas_materia:[]

    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
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

  },methods: {
    mostrar_temas_notas() {
      api.tema_notas(this.id).then(res => {
        console.log(res);
        this.notas_tema = res;
      });
    },
    mostrar_temas_materias() {
      api.materia_notas(this.id).then(res => {
        console.log(res);
        this.notas_materia = res;
      });
    }
  },created(){
    this.mostrar_temas_notas();
    this.mostrar_temas_materias();

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
