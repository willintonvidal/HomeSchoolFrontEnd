<template>
    <div class="row">
        <h1 class="title">
            ¿Tienes problemas de aprendizaje en tu escuela?
            <br>
            <small>Nosotros te orientamos a superarlos</small>
        </h1>
        <div class="col-sm-10 col-sm-offset-1">
         <div class="col-md-4 col-sm-6">
             <div class="card-container">
                <div class="card">
                 <!-- Primera cara-->
                    <div class="front">
                        <div class="cover">
                            <img src="@/assets/img/informacion/rotating_card_thumb2.png"/>
                        </div>
                        <div class="user">
                            <img class="img-circle" src="@/assets/img/informacion/Libros.png"/>
                        </div>

                        
                        <div class="content">
                            <div class="main">
                                <h3 class="name">El mundo en tus manos</h3>
                                <p class="profession">Sabias que...</p>
                                <p class="text-center">Nuestros alumnos son contactados con profesores capacitados e idóneos, sin salir de casa haciendo uso de la educación a distancia, solucionado sus dudas académicas obteniendo mejores resultados en su proceso educativo.
</p>
                            </div>
                            <div class="footer">
                                <i class="fa fa-mail-forward"></i> Auto Rotation
                            </div>
                        </div>
                 
                    </div> <!-- end front panel --><!-- Fin primera cara-->
                    <!--segunda cara-->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"El conocimiento a un Clic"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">HomeSchool</h4>
                                <p class="text-center">Las tecnologias de la información y las comunicaciones, nos ofrecen la posibilidad de trabajar en proyectos telemáticos, entornos de trabajo colaborativo más allá de las propia aulas de clase.</p>

                                <div class="stats-container">
                                    
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <div class="social-links text-center">
                            </div>
                        </div>
                    </div>
                    <!--End segunda cara-->
                     <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
        </div> <!-- end col sm 3 -->
<!--         <div class="col-sm-1"></div> -->

        <div class="col-md-4 col-sm-6">
             <div class="card-container">
                <div class="card">
                    <div class="front">
                        <div class="cover">
                            <img src="@/assets/img/informacion/rotating_card_thumb.png"/>
                        </div>
                        <div class="user">
                            <img class="img-circle" src="@/assets/img/informacion/Escritorio.png"/>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Proporcionamos</h3>
                                <p class="profession">A la juventud Payanés</p>
                                <p class="text-center">"una sólida preparación en las áreas teóricas y prácticas de todas aquellas asignaturas en las cuales se presenten deficiencias, mediante la utilización de las tecnologías de la información y la comunicació..."</p>
                            </div>
                            <div class="footer">
                                <button class="btn btn-simple" onclick="rotateCard(this)">
                                    <i class="fa fa-mail-forward"></i> Manual Rotation
                                </button>
                            </div>
                        </div>
                    </div> <!-- end front panel -->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">"Un profesor siempre listo a orientarte"</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center"></h4>
                                <p class="text-center"> con el propósito de formar estudiantes que estén preparados para abordar las exigencias de las distintas etapas del proceso educativo presente y futuro.</p>

                                <div class="stats-container">
                               
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <button class="btn btn-simple" rel="tooltip" title="Flip Card" onclick="rotateCard(this)">
                                <i class="fa fa-reply"></i> Back
                            </button>
                            <div class="social-links text-center">
                                
                            </div>
                        </div>
                    </div> <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
        </div> <!-- end col sm 3 -->
<!--         <div class="col-sm-1"></div> -->
        <div class="col-md-4 col-sm-6">
            <div class="card-container">
                <div class="card">
                    <div class="front">
                        <div class="cover">
                            <img src="@/assets/img/informacion/rotating_card_thumb3.png"/>
                        </div>
                        <div class="user">
                            <img class="img-circle" src="@/assets/img/informacion/Cuaderno.png"/>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h3 class="name">Te invitamos a creer en tu futuro</h3>
                                <p class="profession">Uniendose a nosotros</p>

                                <p class="text-center">HomeSchool te ofrece la oportunidad de estar entre los mejores alumnos de tu institución educativa una vez que nuestro profesorado te haya acompañado a superar tus falencias educativas</p>
                            </div>
                            <div class="footer">
                                <div class="rating">
                                    <i class="fa fa-mail-forward"></i> Auto Rotation
                                </div>
                            </div>
                        </div>
                    </div> <!-- end front panel -->
                    <div class="back">
                        <div class="header">
                            <h5 class="motto">Unete a HomeSchool, no lo pienses mas, SE GRANDE.</h5>
                        </div>
                        <div class="content">
                            <div class="main">
                                <h4 class="text-center">Cada vez mas grande</h4>
                                <p class="text-center">Una buena base educativa te permitirá comprender mejor los temas de cursos superiores obteniendo mejores calificiones convirtiendose en un profesional altamente competitivo.</p>

                                <div class="stats-container">
                                    
                                </div>

                            </div>
                        </div>
                        <div class="footer">
                            <div class="social-links text-center">
                                
                            </div>
                        </div>
                    </div> <!-- end back panel -->
                </div> <!-- end card -->
            </div> <!-- end card-container -->
        </div> <!-- end col-sm-3 -->
        </div> <!-- end col-sm-10 -->
    </div> <!-- end row -->
    <!--Termino Tarjetas-->



</template>
