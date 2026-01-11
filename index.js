const {registrar, leer, vaciarFichero} = require('./operaciones.js')

//omite los primeros dos valores del array ( en este caso ['node', 'index.js'])
const args = process.argv.slice(2)

//valores requeridos

//tipo de operacion (registrar, leer o borrar)
const operacion = args[0]


//datos a ingresar para la opción registrar.
const nombreCita = args[1]
const edadCita = args[2]
const tipoCita = args[3]
const colorCita = args[4]
const enfermedadCita =args[5]



//Operaciones 
if(
    operacion = 'registrar'
){
    registrar(nombreCita, edadCita, tipoCita, colorCita, enfermedadCita)
}

if(
    operacion === 'leer'
){
    leer()
}

if(
    operacion === 'borrar'
){
    vaciarFichero()
}