let hideTextBtn = document.getElementById('hideTextBtn');

let hideText = document.getElementById('hideText');

let icon = document.getElementById('icon');

icon.classList.toggle('bi-plus-circle');

icon.classList.toggle('bi-dash-circle');

hideTextBtn.addEventListener('click', toggleText);



// Boton leer más
document.getElementById('hideTextBtn').addEventListener('click', async function(){
    let icon = document.getElementById('icon');
    await delay(100);
    icon.classList.toggle('bi-plus-circle');
    icon.classList.toggle('bi-dash-circle');
  })

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function toggleText(){
    await delay(100);
    hideText.classList.toggle('mostrar');
}


   
// //Drag and drop
// let lista = document.getElementById('lista');

// Sortable.create(lista, {
//     animation:150,
//     chosenClass: 'seleccionado',
//     dragClass: 'drag',
   
//     onEnd: () =>{
//         console.log('Elemento insertado');
//     },
//     group: "lista-columnas",
//     store:{
//         //Guardar Orden de columnas
//         set:(sortable) =>{
//             let orden = sortable.toArray();
//             localStorage.setItem(sortable.options.group.name, orden.join('|'));
//         }
//     }
    
// })















