import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Registro from "./views/Registro.vue";
import Profile from "./views/Profile.vue";
import Admin from "./views/Admin.vue";
import Profesor from "./views/Profesor.vue";
import Estudiante from "./views/Estudiante.vue";
import ProfileAdmi from "./views/ProfileAdmi.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

//Vue.use(Router);




const routes = [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: { isPublic: true }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: { isPublic: true }
    },
    {
      path: "/Registro",
      name: "Registro",
      components: { default: Registro, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: { isPublic: true }
    },
    {
      path: "/profileAdmi",
      name: "profileAdmi",
      components: { default: ProfileAdmi, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }, 
    {
      path: "/admin",
      name: "Admin",
      components: { default: Admin, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/profesor",
      name: "Profesor",
      components: { default: Profesor, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/estudiante",
      name: "Estudiante",
      components: { default: Estudiante, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }

];

Vue.use(Router); 

const router = new Router({routes});

const isAuthenticated = function(){
  return window.localStorage.token
}

const isRol = function(){
  return window.localStorage.rol
}

router.beforeEach((to, from, next) => {


  if (to.name === 'login' && isAuthenticated()) {
    console.log("Ya estas autenticado");
    return next({ name: 'index' })
  }

  if(to.name === 'Estudiante'  && window.localStorage.role !== 'ROLE_ESTUDIANTE'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Profesor'  && window.localStorage.role !== 'ROLE_PROFESOR'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Estudiante'  && window.localStorage.role !== 'ROLE_ESTUDIANTE'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }


  return next();
});

export default router;


/*
export default   new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: { isPublic: true }
    },
    {
      path: "/Registro",
      name: "Registro",
      components: { default: Registro, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profileAdmi",
      name: "profileAdmi",
      components: { default: ProfileAdmi, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  beforeEach (to,from,next){
    if(!to.meta.isPublic && !isAuthenticated()){
      return next({name:'login'});
      console.log("No estas autenticado");
    }

    if(to.meta.isPublic){
      return next({name:'profile'});
    }

    if(to.name ==='login' && isAuthenticated()){
        return next({name:'index'})
        console.log("Si estas autenticado");
    }

    return next()
  }
});

*/