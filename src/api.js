import trae from 'trae'

//const url = window.location.href.includes('localhost')?'http://localhost:8080':'https://jwt-java.herokuapp.com'
//const url = window.location.href.includes('https://jwt-java.herokuapp.com/')

trae.baseUrl('http://localhost:8102')
//trae.baseUrl(url)



const api = {}

api.authenticate = function(usuario_id,usuario_contrasenia){
    return trae.post('/api/usuario/iniciosesion',{usuario_id,usuario_contrasenia})
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

api.verificarid = function(id){
    return trae.get('/api/usuario/verificarusuario/'+id)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]'+id,err))
}


          api.registroInicio = function(usu_id,usu_tipo_documento,usu_nombres,usu_apellidos,usu_tipo_usuario,usu_contrasenia,usu_email,usu_telefono){
    var usu_foto = "Sin foto";
    var usu_estado = "Sin validar";
    var cen_edu_nit = "1065";
    return trae.post('/api/usuario/insertar',{usu_id,cen_edu_nit,usu_tipo_documento,usu_nombres,usu_apellidos,usu_tipo_usuario,usu_contrasenia,usu_estado,usu_email,usu_telefono,usu_foto})
    .then(res => res.data)
    .catch(err => console.log('[ERROR]',err))
}



api.verificarcorreo = function(correo){
    return trae.get('/verificarcorreo/'+correo)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]'+correo,err))
}

/*

api.getStatus = function(){
    return trae.get('/')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.mostrarTodosLosUsuarios = function(){
    return trae.get('/datosAllUsuarios')
    .then(res =>res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.checkToken = function(){
    return trae.get('/check')
    .then(res =>res.data)
}

api.isAuthenticated = function(){
    return window.localStorage.token
  }

*/

export default api