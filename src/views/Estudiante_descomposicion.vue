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
            <h1>Descomposición de números</h1>
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
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-85 ml-auto">
                   
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
                    <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal = true"
                ><md-icon>library_books</md-icon> Unooo</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h4 class="modal-title">Modal Uno</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <p>
                    Far far away, behind the word mountains, far from theaaaaaaaaaaaaaaaaaaaaaaa
                    countries Vokalia and Consonantia, there live the blindaaaaaaaaaaaaaa
                    texts. Separated they live in Bookmarksgrove right at theaaaaaaaaaaaaaaa
                    coast of the Semantics, a large language ocean. A smallaaaaaaaaaaaaaaaaa
                    river named Duden flows by their place and supplies it withaaaaaaaaaaaaaaa
                    the necessary regelialia. It is a paradisematic country, inaaaaaaaaaa
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided
                    to leave for the far World of Grammar.
                  </p>
                </template>

                <template slot="footer">
                  <md-button class="md-simple">Nice Button</md-button>
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide"
                    >Close</md-button
                  >
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
                ><md-icon>library_books</md-icon> Ddos</md-button
              >
              <modal v-if="classicModal2" @close="classicModalHide2">
                <template slot="header">
                  <h4 class="modal-title">Modal dos</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide2"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <p>
              
                  </p>
                </template>

                <template slot="footer">
                  <md-button class="md-simple">Nice Button</md-button>
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide2"
                    >Close</md-button
                  >
                </template>
              </modal>
            </div>
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
      classicModal2: false
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
