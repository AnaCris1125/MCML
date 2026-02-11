import avatar from "../../images/avatar.jpeg"



function Nosotros() {
    return (
        <section className="section__nosotros">
            <img className="nosotros__img" src={avatar} alt="Imagen creador" />
            <div className='nosotros__content'>
                <h2 className='nosotros__title'>Acerca de su fundadora</h2>
                <p className="nosotros__paragraph">La mayoría de los proyectos inmobiliarios no pierden dinero por el diseño.
                    Lo pierden por malas decisiones, falta de control y problemas que se detectan demasiado tarde.

                    Ahí es donde entro yo.

                    Acompaño a inversionistas y propietarios a desarrollar proyectos inmobiliarios y de construcción predecibles, evitando sorpresas, controlando costos y reduciendo reprocesos mediante una toma de decisiones estructurada, calidad y mejora continua.

                    A través de MCML, mi marca personal, trabajo directamente con inversionistas y propietarios en proyectos de remodelación residencial y desarrollos inmobiliarios. El foco es siempre el mismo: alinear diseño, ejecución, presupuesto y tiempos para que el inmueble funcione como se espera, ya sea para habitarlo, venderlo o arrendarlo.

                    Desde AGD Proyectos, mi empresa de consultoría, acompaño a constructoras y organizaciones que trabajan por proyectos a fortalecer sus sistemas de calidad, procesos de posventas y control operativo. Esta experiencia alimenta directamente la forma en que gestiono proyectos para inversionistas: menos supuestos, más datos y mejores decisiones.

                    Cuento con más de 18 años de experiencia en el sector de la construcción, incluyendo roles de liderazgo estratégico, en los que he logrado reducir costos de posventa, mejorar el desempeño en garantías y ayudar a equipos a pasar de una gestión reactiva a modelos de ejecución preventivos y controlados.

                    Mi enfoque está fuertemente influenciado por Lean Construction y Lean Six Sigma, aplicados siempre de manera práctica, no académica. Actualmente me encuentro finalizando mi certificación Lean Six Sigma Black Belt.

                    En términos simples:
                    ayudo a que los proyectos sean menos riesgosos, mejor controlados y financieramente predecibles.</p>

            </div>
        </section>
    );
}

export default Nosotros;