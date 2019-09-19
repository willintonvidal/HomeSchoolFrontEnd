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

api.registrarAcudiente=function(acudiente_tipo_ident, acu_numero_ident, acu_nombre_completo, ecudiente_email, acudiente_telefono){
return trae.post('/api/acudiente/insertar', {acudiente_tipo_ident, acu_numero_ident, acu_nombre_completo, ecudiente_email, acudiente_telefono})
.then (res => res.data
    )
.catch(err => {console.log('[ERROR]',err)})
}

api.registrarEstudiante= function(estudiante_id, acu_numero_ident){
var grado_id = "2";
return trae.post('/api/estudiante/insertar',{estudiante_id,acu_numero_ident,grado_id})
.then (res=> res.data)
.catch(err=> {console.log('[ERROR]',err)})
}

api.registrarProfesor= function(id_prof,titulo_prof, experiencia_laboral_prof){
    return trae.post('/api/profesor/insertar',{id_prof,titulo_prof,experiencia_laboral_prof })
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

/*Metodos para consultar materias matriculadas*/
api.MateriasMatriculadasPorEstudiante= function(id_est){
    return trae.get('/api/estudiante/getallmateriasestudiante/'+id_est)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

/*Termina Métodos para consultar materias matriculadas*/

/*Metodos de la matricula*/ 

api.MateriasAMatricular= function(id_est){
    return trae.get('/api/estudiante/mateamatricular/'+id_est)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

api.MostrarProfesor= function(mat_id){
    return trae.get('/api/materia/profesordelamateria/'+mat_id)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}


api.RegistrarMatricula= function(est_id,mat_id, matri_fecha_fin){
    var matri_estado="Activo";
    var matri_not_final=0;
    return trae.post('/api/matricula/insertar',{est_id,mat_id, matri_fecha_fin, matri_estado, matri_not_final})
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

/*Termina Metodos de la matricula*/

 /*Consultas rol Estudiante-- mostrar temas de la materia estudiante , siempre y cuendo el estudiante este matriculado */
api.mostrarTemas= function(materia){
    return trae.get('/api/materia/temasdelamateria/'+materia)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

api.mostrarMaterialEstudio= function(tema){
    return trae.get('/api/tema/materialestudio/'+tema)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

api.mostrarActividadesTema=function(tema){
    return trae.get('/api/tema/actividadesportema/'+tema)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}
api.mostrarIdMateria=function(NombreMateria){
    return trae.get('/api/materia/idMateria/'+NombreMateria)
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}
/*Termina consultas rol Estudiante */

/*  insertar notas  del estudiante a  la materia, tema y actividades  */
api.insertarActividadEstudiante= function(estudiante_id,actividad_eva_id, tema_id, materia_id, rel_actividad_nota ){
    return trae.post('/api/actividad_estudiante/insertar/',{estudiante_id,actividad_eva_id, tema_id, materia_id, rel_actividad_nota})
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

api.insertarTemaEstudiante= function(estudiante_id,tema_id, materia_id, rel_tema_nota ){
    return trae.post('/api/tema_estudiante/insertar/',{estudiante_id,tema_id, materia_id, rel_tema_nota})
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}

api.actualzarMatricula= function(matri_id, est_id, mat_id, matri_not_final){
    var matri_estado="Activo";
    var matri_estado="Finalizado";
    return trae.put('/api/matricula/actualizar/',{matri_id, est_id, mat_id, matri_estado, matri_not_final})
    .then (res=> res.data)
    .catch(err=> {console.log('[ERROR]',err)})
}
/*  Termina de insertar notas  del estudiante a  la materia, tema y actividades  */


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



export default api