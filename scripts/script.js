//array de informaci[on del cliente]
let infoDeCliente = [];

//variables del proyecto
let nroPresupuesto= (Math.random()*100000).toFixed(0);
let precioPorM = 1;
let precioCalculado =1;
let precioEnDolares=1;
let valorDolar = 1;
let nombreCasa;
let areaCasa;
let habitacionesCasa;
let nivelesCasa;
let imagenCasa;

//variable de fecha del momento
const fecha = new Date(); 
let fechaActual = (fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());

//capturando la info de API con valor del dolar
fetch('https://criptoya.com/api/dolar')
.then(responsedolar => responsedolar.json())
.then(datadolar => {
    let dolarOficial = datadolar.oficial;
    valorDolar = dolarOficial;
})

//clase clientes
class Cliente{
    constructor(nombre, apellido, email, telefono, direccion, casa, sistema, area){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.telefono=telefono;
        this.direccion=direccion;
        this.casa=casa;
        this.sistema=sistema;
        this.area=area;
    }
}

$(()=>{

    //captura de la info del formulario
    $("#formulariPresupuesto").submit(tomaDeFormulario);
    function tomaDeFormulario (e){
        e.preventDefault();
        let infoFormulario = new FormData(e.target);
        let cliente = new Cliente(infoFormulario.get("nombrep"), infoFormulario.get("apellidop"),infoFormulario.get("emailp"), infoFormulario.get("telefonop"), infoFormulario.get("ubicacionp"), infoFormulario.get("modeloCasa"), infoFormulario.get("sistemaConst"), infoFormulario.get("superficie"));
        infoDeCliente.push(cliente);
        let sistemaSeleccionado = cliente.sistema;
        let casaSelecionada = cliente.casa

        //determinacion de valor de las variables según la informacion selecionada por el cliente usando archivo json local
        if(casaSelecionada=="Coromoto"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[0].nombre;
                areaCasa = datacasa[0].area;
                habitacionesCasa = datacasa[0].habitaciones;
                nivelesCasa = datacasa[0].niveles;
                imagenCasa = datacasa[0].imagen;
            })
        }
        else if(casaSelecionada=="Chocon"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[1].nombre;
                areaCasa = datacasa[1].area;
                habitacionesCasa = datacasa[1].habitaciones;
                nivelesCasa = datacasa[1].niveles;
                imagenCasa = datacasa[1].imagen;
            })
        }
        else if(casaSelecionada=="Pellegrini"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[2].nombre;
                areaCasa = datacasa[2].area;
                habitacionesCasa = datacasa[2].habitaciones;
                nivelesCasa = datacasa[2].niveles;
                imagenCasa = datacasa[2].imagen;
            })
        }
        else if(casaSelecionada=="Pico Bolivar"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[3].nombre;
                areaCasa = datacasa[3].area;
                habitacionesCasa = datacasa[3].habitaciones;
                nivelesCasa = datacasa[3].niveles;
                imagenCasa = datacasa[3].imagen;
            })
        }
        else if(casaSelecionada=="Los Roques"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[4].nombre;
                areaCasa = datacasa[4].area;
                habitacionesCasa = datacasa[4].habitaciones;
                nivelesCasa = datacasa[4].niveles;
                imagenCasa = datacasa[4].imagen;
            })
        }
        else if(casaSelecionada=="Patagonia"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[5].nombre;
                areaCasa = datacasa[5].area;
                habitacionesCasa = datacasa[5].habitaciones;
                nivelesCasa = datacasa[5].niveles;
                imagenCasa = datacasa[5].imagen;
            })
        }
        else if(casaSelecionada=="Pirineos"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[6].nombre;
                areaCasa = datacasa[6].area;
                habitacionesCasa = datacasa[6].habitaciones;
                nivelesCasa = datacasa[6].niveles;
                imagenCasa = datacasa[6].imagen;
            })
        }
        else if(casaSelecionada=="Humboldt +"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[7].nombre;
                areaCasa = datacasa[7].area;
                habitacionesCasa = datacasa[7].habitaciones;
                nivelesCasa = datacasa[7].niveles;
                imagenCasa = datacasa[7].imagen;
            })
        }
        else if(casaSelecionada=="Roraima"){
            fetch('../json/casas.json')
            .then(responsecasa => responsecasa.json())
            .then(datacasa => {
                nombreCasa = datacasa[8].nombre;
                areaCasa = datacasa[8].area;
                habitacionesCasa = datacasa[8].habitaciones;
                nivelesCasa = datacasa[8].niveles;
                imagenCasa = datacasa[8].imagen;
            })
        }

        //valores de precios según la informacion seleccionada por el cliente
        if(sistemaSeleccionado=="Sistema Tradicional"){
            precioPorM = 150000;
            precioCalculado = (precioPorM * (cliente.area));
            precioEnDolares = (precioCalculado/valorDolar).toFixed(0);
        }
        else if (sistemaSeleccionado=="Bloques HCCA de hormigon celular"){
            precioPorM = 160000;
            precioCalculado = (precioPorM * (cliente.area));
            precioEnDolares = (precioCalculado/valorDolar).toFixed(0);
        }
        else if(sistemaSeleccionado=="Steel Framing"){
            precioPorM = 140000;
            precioCalculado = (precioPorM * (cliente.area));
            precioEnDolares = (precioCalculado/valorDolar).toFixed(0);
        }

        //informacion del cliente pasada al session storage
        sessionStorage.setItem('cliente',JSON.stringify(infoDeCliente));

        //reseteo del formulario
        $("#formulariPresupuesto").trigger("reset");

        //ocultar y mostrar botones
        $(".botonSubmit").hide();
        $(".botonMostrarP").show();
    }


    //función de creacion de elementos en el DOM con el resultado
    $("#botonMostrarP").click(creacionDOm);
    function creacionDOm (){
        let clientesDelStorge = JSON.parse(sessionStorage.getItem("cliente"));
        clientesDelStorge.forEach((cliente, i)=>{
            $(".seccionPresupuestoSolicitado").prepend(
            `<div class="presupuestoSolicitado">
                <img src="../images/LOGO ARISTAVIVA GRIS.png" alt="logo" class="logoPrepsupuesto">
                <h3>PRESUPUESTO</h3>
                <h5>#${nroPresupuesto}</h5>
                <h6>Fecha: ${fechaActual}</h6>
                <hr>
                <p class="itemPresupuestoSolicitado"><strong>NOMBRE DEL CLIENTE:</strong> ${cliente.nombre} ${cliente.apellido}</p>
                <p class="itemPresupuestoSolicitado"><strong>DIRECCION DE EMAIL:</strong> ${cliente.email}</p>
                <p class="itemPresupuestoSolicitado"><strong>NUMERO TELEFONICO:</strong> ${cliente.telefono}</p>
                <p class="itemPresupuestoSolicitado"><strong>ZONA DONDE DESEA CONSTRUIR:</strong> ${cliente.direccion}</p>
                <p class="itemPresupuestoSolicitado"><strong>MODELO DE CASA SELECCIONADO:</strong> ${cliente.casa}</p>
                <p class="itemPresupuestoSolicitado"><strong>SISTEMA CONSTRUCTIVO SELECCIONADO:</strong> ${cliente.sistema}</p>
                <p class="itemPresupuestoSolicitado"><strong>SUPERFICIE A COTIZAR:</strong> ${cliente.area} m2</p>
                <p class="itemPresupuestoSolicitado"><strong>PRECIO POR M2 (según sistema constructivo elegido):</strong> ARS ${precioPorM}</p>
                <hr>
                <p class="itemPresupuestoSolicitadoPrecio"><strong>VALOR APROXIMADO DE LA OBRA:</strong> ARS ${precioCalculado}</p>
                <p class="itemPresupuestoSolicitado"><strong>VALOR EXPRESADO EN DOLARES AMERICANOS:</strong> USD ${precioEnDolares}</p>
                <p class="nota"><strong>VALOR DEL DOLAR BCRA (al momento de realizar esta cotización):</strong> ARS ${valorDolar}</p>
                <div class="modeloElegido">
                    <div class="modeloElegido-texto">
                        <hr class="barraModelo">
                        <p><strong>Modelo ${nombreCasa}</strong></p>
                        <p><strong>Area:</strong> ${areaCasa}m2</p>
                        <p><strong>Cantidad de habitaciones:</strong> ${habitacionesCasa}</p>
                        <p><strong>Niveles:</strong> ${nivelesCasa}</p>
                    </div>
                    <div class="modeloElegido-imagen">
                        <img src="${imagenCasa}" alt="modelo chocon">
                    </div>
                    <p class="nota">Los valores expresados en el presente presupuesto son referenciales. Para obtener un valor exacto según tus requerimientos, comunicate con nuestros asesores de venta.</p>
                </div>
            </div>`)
        })
        $(".botonMostrarP").hide();
        $("#imprimirPresupuesto").show();
        $("#nuevoPresupuesto").show();
        $(".notaBoton").show();
        $(".presupuestoSolicitado").fadeOut(500).fadeIn(2000);
    }

    //función de impresion del resutado final
    $("#imprimirPresupuesto").click(imprimirPantalla);
    function imprimirPantalla(){
        $(".imagen--presu").hide();
        $(".seccion--presu--titulo").hide();
        $(".seccion--presu--parrafo").hide();
        $(".formularioPresupuestos").hide();
        $("header").hide();
        window.print();
    }
})