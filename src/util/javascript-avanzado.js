// VAR, LET CONST
// var nombre2="desarrollo"
// if(12>11){
//     let nombre = "udem";
//     console.log(nombre);
// }
// console.log(nombre);

//CALLBACKS
// const fx_imprimir = (data) => {
//     console.log("Hola Mundo", data);
// };

// const ejecutador = (nombreFuncion, funcion) => {
//     console.log("Ejecutar la función: " + nombreFuncion);
//     funcion(321);
// };

// ejecutador("funcion de imprimir", fx_imprimir);

// ejecutador("Impresión 2", (data) =>{
//     console.log("Hola Mundo impresión 2", data);
// });

// PROMESAS

const conectarDB = () => {
    return new Promise((resolve, reject)=>{
        if(1==1){
            resolve({ok:true, message:"Conectado"})
        }else{
            reject()
        }
    })
}

// const conectarDB = () => {
//     return new Promise((resolve, reject)=>{
//         if(1==1){
//             resolve({ok:true, message:"Conectado"})
//         }else{
//             reject()
//         }
//     })
// }
// conectarDB().then((data)=>{
//     console.log("Conexion ok", data);
// }).catch((error=>{
//     console.log("Error al conectar");
// }))

// ASYNC AWAIT
const name = async () => {
    await conectarDB()
    await conectarDB()
}