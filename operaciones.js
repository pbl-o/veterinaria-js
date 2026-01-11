const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) =>{
    // variable de template inicializada.    
    let lista;

    try{
        //Se revisa si existe el archivo previamente:
        if(fs.existsSync('citas,json')){
            console.log('Fichero Encontrado')
            //Si el archivo existe se utiliza como template
            lista = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
            //Se agrega la información ingresada por el usuario en el terminal
            lista.push({
                nombre: nombre,
                edad: edad,
                tipo: tipo,
                color: color,
                enfermedad: enfermedad,
            })
        }else{
          //Si el archivo no existe, se crea un template desde cero y se agrega la información ingresada por el usuario en el terminal 
          console.log('No hay ficheros previos')
          lista = []
        }
        //Se crea el archivo json con los datos ingresados a modo de template.
        fs.writeFileSync('citas.json', JSON.stringify(lista, null, lista.length))

    }catch(error){
        //Otros errores serán identificados y presentados en consola. 
        console.error(`Hay un problema con la aplicación ${error}`)
    }

}


module.exports = {registrar, leer, vaciarFichero}