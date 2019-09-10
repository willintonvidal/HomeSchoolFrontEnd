import trae from 'trae'

//const url = window.location.href.includes('localhost')?'http://localhost:8080':'https://jwt-java.herokuapp.com'
//const url = window.location.href.includes('https://jwt-java.herokuapp.com/')

trae.baseUrl('http://192.168.0.44:8102' || 'http://localhost:8102' || 'http://192.168.0.103:8102'  )
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

api.mostrarTodosLosUsuarios = function(){
    return trae.get('/api/usuario/getnovalid')
    .then(res =>res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.mostrarTodosLosUsuariosAll = function(){
    return trae.get('/api/usuario/getall')
    .then(res =>res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.validarUsuarios = function(usu_id){
    return trae.get('/api/usuario/validarusuario/'+usu_id)
    .then(res =>res.data)
    .catch(err => console.log('[ERROR] error, esta insertado tambien en estudiante',err))
}

api.eliminarusuario = function(usu_id){
    return trae.delete('/api/usuario/eliminar/'+usu_id)
    .then(res =>res.data)
    .catch(err => {console.log('[ERROR]',err)})
}

api.actualzarUsuario = function(usu_id,usu_tipo_documento,usu_nombres,usu_apellidos,usu_tipo_usuario,usu_estado,usu_email,usu_telefono,usu_foto){
    return trae.put('/api/usuario/actualizar',{usu_id,usu_tipo_documento,usu_nombres,usu_apellidos,usu_tipo_usuario,usu_estado,usu_email,usu_telefono,usu_foto})
    .then(res =>res.data)
    .catch(err => {console.log('[ERROR]',err)})
}



/*

api.getStatus = function(){
    return trae.get('/')
    .then(res => res.data)
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