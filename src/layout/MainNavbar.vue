<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        
        <a
                  href="#/"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
          
                <h3 class="md-title">
         HomeSchool
        </h3>
        </a>
      </div>
      
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">layers</i>
                            <p>?????</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            <i class="material-icons">content_paste</i>
                            <p>??????</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

            <!--Items Menus -->
         

            <md-list-item
                href="#/estudiante"
                v-if="role=='Estudiante'"
              >
                <i class="material-icons">account_circle</i>
                <p>Estudiante</p>
            </md-list-item>

            <md-list-item
                href="#/profesor"
                v-if="role=='Profesor'"
              >
                <i class="material-icons">account_circle</i>
                <p>Profesor</p>
            </md-list-item>

            <md-list-item
                href="#/admin"
                v-if="role=='Administrador'"
              >
                <i class="material-icons">account_circle</i>
                <p>Administrador</p>
            </md-list-item>

             <md-list-item
                href="#/login"
                v-if="role=='' || role ==null"
              >
                <i class="material-icons">account_circle</i>
                <p>Iniciar sesion</p>
            </md-list-item>
            
            
              <li class="md-list-item" >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>    
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons" >
                        <li >
                          <a href="#/">
                            <i class="material-icons">layers</i>
                            <p>Modificar Perfil </p>
                           
                          </a>
                        </li>
                        <li> 
                          <a @click="logout">
                            <i class="material-icons" >content_paste</i>
                            <p>Cerrar Sesión</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>

let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}



import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      loginStaus: "false",
      role:window.localStorage.role
    };
  },
  created(){
        
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["profileAdmi","landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    logout (){
          localStorage.removeItem('apellidos');
          localStorage.removeItem('correo');
          localStorage.removeItem('role');
          localStorage.removeItem('celular');
          localStorage.removeItem('nombres');
          localStorage.removeItem('id');
          localStorage.removeItem('estado');

          this.loginStaus = "false";
          this.role = null;
          this.$router.push('/')
    },probar(){
     
      return this.loginStaus = this.isAuthenticate;
 
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
   

};
</script>
