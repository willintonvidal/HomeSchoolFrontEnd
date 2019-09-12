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
                  <h3 class="title">Carla Hortensia</h3>
                  <h6>Designer</h6>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Eventos', 'Noticias', 'Inscripción Ejemplares']"
              :tab-icon="['turned_in_not', 'speaker_notes', 'note_add']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- Esta es la seccion de los eventos-->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>Nombre de la exposición equina...</label>
                  <md-input v-model="firstname"></md-input>
              </md-field>
              <md-datepicker v-model="selectedLabeled">
                  <label>Seleccione la fecha...</label>
              </md-datepicker>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>card_membership</md-icon>
                <label>Categoria....</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>location_city</md-icon>
                <label>Nombre Caballo....</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>format_list_numbered</md-icon>
                <label>Numero registro...</label>
                <md-input v-model="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>accessibility</md-icon>
                <label>Sexo...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Edad...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Edad...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre de la Madre...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg">
                Crear Evento
              </md-button>
                </div>
              </template>
              <!-- Esta es la sección de las noticias -->
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>Nombre de la exposición equina...</label>
                  <md-input v-model="firstname"></md-input>
              </md-field>
              <md-datepicker v-model="selectedLabeled">
                  <label>Seleccione la fecha...</label>
              </md-datepicker>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>card_membership</md-icon>
                <label>Categoria....</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>location_city</md-icon>
                <label>Nombre Caballo....</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>format_list_numbered</md-icon>
                <label>Numero registro...</label>
                <md-input v-model="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>accessibility</md-icon>
                <label>Sexo...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Edad...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Edad...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre de la Madre...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg">
                Crear Noticia
              </md-button>
                </div>
              </template>

              <!-- Esta es la sección de los ejemplares -->
              <template slot="tab-pane-3">
                <div class="md-layout">                  
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>Nombre de la exposición equina...</label>
                  <md-input v-model="firstname"></md-input>
              </md-field>
              <md-datepicker v-model="selectedLabeled">
                  <label>Seleccione la fecha...</label>
              </md-datepicker>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>card_membership</md-icon>
                <label>Categoria....</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>location_city</md-icon>
                <label>Nombre Caballo....</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>format_list_numbered</md-icon>
                <label>Numero registro...</label>
                <md-input v-model="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>accessibility</md-icon>
                <label>Sexo...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Edad...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Edad...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre de la Madre...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre del Padre...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre del criadero...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Adjuntar registro civil...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre del propietario...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Nombre del montador...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Teléfono...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Código de pago...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                  <md-radio v-model="radio" :value="M">M</md-radio>
                  <md-radio v-model="radio" value="F">F</md-radio>
                  <md-radio v-model="radio" value="N/A">No definido</md-radio>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg">
                Crear Registro Ejemplar
              </md-button>

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
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
       selectedLabeled: null,
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
      ]
    };
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
