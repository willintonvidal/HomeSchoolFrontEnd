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
import Estudiante_descomposicion from "./views/Estudiante_descomposicion.vue";
import Estudiante_diferenciacion from "./views/Estudiante_diferenciacion.vue";
import Estudiante_lectura_y_escritura from "./views/Estudiante_lectura_y_escritura.vue";
import Estudiante_operaciones_basicas from "./views/Estudiante_operaciones_basicas.vue";

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
    },{
      path: "/estudiante/descomposicion",
      name: "Estudiante_descomposicion",
      components: { default: Estudiante_descomposicion, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },,{
      path: "/estudiante/diferenciacion",
      name: "Estudiante_diferenciacion",
      components: { default: Estudiante_diferenciacion, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },{
      path: "/estudiante/lecturayescritura",
      name: "Estudiante_lectura_y_escritura",
      components: { default: Estudiante_lectura_y_escritura, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },{
      path: "/estudiante/operacionesbasicas",
      name: "Estudiante_operaciones_basicas",
      components: { default: Estudiante_operaciones_basicas, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }

];

Vue.use(Router); 

const router = new Router({routes});

const isAuthenticated = function(){
  return window.localStorage.id
}

const isRol = function(){
  return window.localStorage.rol
}

router.beforeEach((to, from, next) => {


  if (to.name === 'login' && isAuthenticated()) {
    console.log("Ya estas autenticado");
    return next({ name: 'index' })
  }

  if(to.name === 'Admin'  && window.localStorage.role !== 'Administrador'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Profesor'  && window.localStorage.role !== 'Profesor'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Estudiante'  && window.localStorage.role !== 'Estudiante'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Estudiante_descomposicion'  && window.localStorage.role !== 'Estudiante'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Estudiante_diferenciacion'  && window.localStorage.role !== 'Estudiante'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }

  if(to.name === 'Estudiante_lectura_y_escritura'  && window.localStorage.role !== 'Estudiante'){
    console.log(window.localStorage.role);
    return next({ name: 'index' })
  }
  if(to.name === 'Estudiante_operaciones_basicas'  && window.localStorage.role !== 'Estudiante'){
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