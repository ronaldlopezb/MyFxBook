import React from 'react'

const Inicio = () => {
    const [apilogin, setApiLogin] = React.useState(false)
    const [apicuenta, setApiCuenta] = React.useState([])
    const [usuario,setUsuario] = React.useState('')
    const [clave,setClave] = React.useState('') 

    
    React.useEffect( () => {
        //document.title = "Conectado"
        //iniciarLogin()
    },[])

    //Creamos llamado a la API - y hacemos Login
    const iniciarLogin = async (e) => {
        e.preventDefault()
        
        //LOGIN
        //setUsuario('ronaldlopez@ronaldlopezb.com')
        //setClave('sraonndarl8')
        const data = await fetch(`https://www.myfxbook.com/api/login.json?email=${usuario}&password=${clave}`)
        const login = await data.json()

        login.error === false ? console.log("Iniciamos sesión Correctamente") : console.log("Error al iniciar sesión")
        console.log(login)
        setApiLogin(login)
        console.log("===================================")
    }

    //Creamos llamado a la API - Cerrar Sesion
    const cerrarSesion = async (session) => {
    
        //CERRAR SESION
        const cerrar = await fetch(`https://www.myfxbook.com/api/logout.json?session=${session}`)
        const logout = await cerrar.json()
        
        console.log("Sesión Cerrada")

        setApiLogin(logout)
        setApiCuenta('')
        setUsuario('')
        setClave('')

        console.log(logout)
        console.log("===================================")
    }

    //Creamos llamado a la API - Obtener Datos de Usuario
    const obtenerDatosUsuario = async (session) => {
        //OBTENER DATOS DE CUENTA
        const cuenta = await fetch(`https://www.myfxbook.com/api/get-my-accounts.json?session=${session}`)
        const detallesCuenta = await cuenta.json()
        
        console.log("Obteniendo Datos de Usuario")
        console.log(detallesCuenta.accounts)
        setApiCuenta(detallesCuenta.accounts) //Obteniendo todos los datos de la cuenta
        console.log("===================================")        
    }

    return (
        <>
            {
                apilogin.message=== '' ? (
                    <div>
                        <h2>Estas conectado a la API de MyFxBook</h2>
                        <button 
                            className="btn btn-danger btn-block" type="submit"
                            onClick={() => cerrarSesion(apilogin.session)}
                            >Cerrar Sesión
                        </button>
                        <hr/>
                        <button 
                            className="btn btn-primary btn-block" type="submit"
                            onClick={() => obtenerDatosUsuario(apilogin.session)}
                            >Obtener Datos de Cuenta
                        </button>
                        {
                            apicuenta.map(item => (
                                <div className="mb-5">
                                    <h3 className="mt-3">Cuenta: {item.accountId}</h3>
                                    <li className="list-group-item" key={item.id}><span className="lead"><strong>Nombre de la cuenta:</strong> {item.name} </span></li>

                                    <li className="list-group-item"> <span className="lead"><strong>gain:</strong> {item.gain} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>absGain:</strong> {item.absGain} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>daily:</strong> {item.daily} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>monthly:</strong> {item.monthly} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>withdrawals:</strong> {item.withdrawals} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>deposits:</strong> {item.deposits} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>interest:</strong> {item.interest} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>profit:</strong> {item.profit} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>balance:</strong> {item.balance} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>drawdown:</strong> {item.drawdown} </span></li>
                                    <li className="list-group-item"> <span className="lead"><strong>equity:</strong> {item.equity} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>equityPercent:</strong> {item.equityPercent} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>demo: </strong>{ item.demo ? 'SI' : 'NO'}  </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>lastUpdateDate:</strong> {item.lastUpdateDate} </span></li>  
                                    <li className="list-group-item"> <span className="lead"><strong>creationDate:</strong> {item.creationDate} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>firstTradeDate:</strong> {item.firstTradeDate} </span></li>
                                    <li className="list-group-item"> <span className="lead"><strong>tracking:</strong> {item.tracking} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>views:</strong> {item.views} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>commission:</strong> {item.commission} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>currency:</strong> {item.currency} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>profitFactor:</strong> {item.profitFactor} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>pips:</strong> {item.pips} </span></li>    
                                    <li className="list-group-item"> <span className="lead"><strong>invitationUrl:</strong> {item.invitationUrl} </span></li>  
                                    <li className="list-group-item"> <span className="lead"><strong>server:</strong> {item.server.name} </span></li>  
                                </div>
                            ))
                        }
                    </div> 
                ) : (
                    <div>
                        <h2>No se pudo conectar a la API de MyFxBook</h2>
                        <form onSubmit={iniciarLogin}>
                            <input 
                                type="email" 
                                className="form-control mb-2"
                                placeholder="Ingrese Correo Electrónico de MyFxBook"
                                onChange = {e => setUsuario(e.target.value)}
                                value = {usuario}
                            />
                            <input 
                                type="password" 
                                className="form-control mb-2"
                                placeholder="Ingrese Contraseña de MyFxBook"
                                onChange = {e => setClave(e.target.value)}
                                value = {clave}
                            />
                            <button 
                                className="btn btn-warning btn-block" type="submit"
                                >Conectar con la API de MyFxBOok
                            </button>
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default Inicio
