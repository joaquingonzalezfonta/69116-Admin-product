const arrayInicial = [
    {
    createdAt: -172800000,
    name: "nike Juniper Trail 2 GORE-TEX PRO",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/877894-1200-1200?width=1200&height=1200&aspect=true",
    price: 199999,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    category: "mountain",
    id: "38"
  },
  {
    createdAt: 1717113600000,
    name: "Clifton 9",
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660043072-hoka-bondi-8-zapatillas-running-1660043036.png?crop=1.00xw:0.823xh;0,0.0783xh&resize=980:*",
    price: 100000,
    description: "La novena versión de nuestra galardonada gama Clifton ofrece una versión más ligera y con más amortiguación que nunca. Las nuevas Clifton 9 reducen el peso al tiempo que añaden 3 mm de altura; además, ofrecen una experiencia revitalizada bajo los pies con una nueva espuma con capacidad de respuesta y un diseño de suela mejorado",
    category: "running",
    id: "43"
  },
  {
    createdAt: 1716076800000,
    name: "Ánvencible 3 pro",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28810afe-6b6a-4f6a-beb4-701a3539bb02/invincible-3-zapatillas-de-running-asfalto-9lqlcK.png",
    price: 365100,
    description: "Test de imagenmmmmmm",
    category: "running",
    id: "44",
  },
  {
    createdAt: -27076636800000,
    name: "Nike Air Force 1 07",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/659742-1200-1200?width=1200&height=1200&aspect=true",
    price: 209999,
    description: "La luminosidad sigue viva con este calzado de básquetbol original. La fusión de la comodidad de la duela y un estilo externo a la cancha le da un giro fresco a lo que mejor conoces: una confección inspirada en los años 80, detalles audaces y un estilo basquetbolero puro.",
    category: "moda",
    id: "46"
  },
  {
    createdAt: 1719276313261,
    name: "Nike Pegasus 39 Shield",
    image: "https://static.nike.com/a/images/t_default/c7cee966-efba-4fc4-99ce-ab2ccacf9f81/infinityrn-4-gore-tex-zapatillas-de-running-asfalto-impermeables-BcdT0P.png",
    price: 167999,
    description: "Tu caballo alado regresa para ayudarte a avanzar bajo la lluvia. El acabado repelente al agua te ayuda a mantener los pies secos, mientras que una sensación cómoda, similar al tejido Fleece, en el interior mantiene los pies abrigados para carreras en climas",
    category: "running",
    id: "47"
  },
  {
    createdAt: 1648598400000,
    name: "Nike SB Dunk Low Pro",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/914361-1200-1200?width=1200&height=1200&aspect=true",
    price: 209000,
    description: "El Nike SB Dunk Low Pro ofrece el aspecto icónico del Dunk con un estilo de perfil bajo. La unidad Zoom Air en el talón y la lengüeta acolchada proporcionan un nivel de comodidad ideal para practicar skate.",
    category: "moda",
    id: "48"
  }
]

const products = JSON.parse(localStorage.getItem("productos")) || arrayInicial;  // null


// let isEditing = false;

const tableBodyHTML = document.getElementById("table-body"); 
const formAdminHTML = document.getElementById("form-admin");
const btnSubmitHTML = formAdminHTML.querySelector("button[type='submit']");
const btnsSortHTML = document.querySelectorAll("button[data-sort]") //NodeList []


btnsSortHTML.forEach(btn => {
    btn.addEventListener('click', (evt) => {

        const sortType = evt.currentTarget.dataset.sort;
        const property = evt.currentTarget.dataset.prop;

        const collator = new Intl.Collator("es-AR", {
            sensitivity: "base",
            ignorePunctuation: true,
        })

        if(sortType === 'asc') {
            products.sort((a, b) => {
                return collator.compare(a[property], b[property])
            })
        } else {
            products.sort((a, b) => {
                return collator.compare(b[property], a[property])
            })
        }

        // if(sortType === 'asc') {
        //     products.sort((a, b) => {

        //         // if(typeof a[property] === "string") {
        //         //     if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
        //         //     if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
        //         //     return 0;
        //         // } 
        //         // else if(typeof a[property] === "number") {
        //         //     if(a[property] > b[property]) return 1;
        //         //     if(a[property] < b[property]) return -1;
        //         //     return 0;
        //         // }

        //         switch(typeof a[property]) {
        //             case "string":
        //                 if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
        //                 if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
        //                 return 0;
        //             case "number":
        //                 if(a[property] > b[property]) return 1;
        //                 if(a[property] < b[property]) return -1;
        //                 return 0;
        //         }

    
        //     })
        // } else {
        //     products.sort((a, b) => {
        //         if(typeof a[property] === "string") {
        //             if(a[property].toLowerCase() > b[property].toLowerCase()) return -1;
        //             if(a[property].toLowerCase() < b[property].toLowerCase()) return 1;
        //             return 0;
        //         } 
        //         else if(typeof a[property] === "number") {
        //             if(a[property] > b[property]) return -1;
        //             if(a[property] < b[property]) return 1;
        //             return 0;
        //         }
        //     })
           
        // }

        

        renderProducts(products)
    })
})

console.log(btnSubmitHTML)
// Pintar todos los productos inicialmente
renderProducts(products)

function renderProducts(ARRAY_TO_RENDER) {

    tableBodyHTML.innerHTML = '';

    let total = 0;

    ARRAY_TO_RENDER.forEach((prod, indice) => {

        total += prod.price;


            tableBodyHTML.innerHTML += `<tr>
                <td class="product-image">
                    <img src="${prod.image}" alt="${prod.name}">
                </td>
                <td class="product-name">
                    ${prod.name}
                </td>
                <td class="product-description">
        
                    <div class="description" title="${prod.description}">
                        ${prod.description}
                    </div>
        
                </td>
                <td class="product-date">
                    ${  formatTimestampToDate(prod.createdAt)   }
                </td>
                <td class="product-price">
                    $ ${prod.price}
                </td>
                <td class="product-actions">
                    <button class="btn btn-primary btn-sm" onclick="editProduct('${prod.id}')">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct('${prod.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // PARA EJERCICIO DE TAREAS USAR "indice" en deleteProduct


    }) // #Fin del forEach

    tableBodyHTML.innerHTML += `<tr>
                                    <td colspan="4" class="text-end">TOTAL</td>
                                    <td colspan="2" class="fw-bold">$ ${total}</td>
                                </tr>`

}
// Recorrer el array y hacer un console.log de cada producto


// Llamar una función específica para borrar productos
function deleteProduct(identificador) {

    // Obtener el id del producto a eliminar
    console.log("Id recibido", identificador)

    // const resultado = confirm("Realmente desea borrar el producto?")

    // if(!resultado) { // resultado === false
    //     return
    // }

    Swal.fire({
        title: "¿Estás seguro?",
        text: "Una vez eliminado, no podrás recuperar el producto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
        customClass: {
            confirmButton: "btn-alert",
        },
    }).then((result) => {
        if(result.isConfirmed) {
            // Poder identificar el indice del producto a eliminar a través de algún método 
            const index = products.findIndex((producto) => {
                // Condicion yo return un true
                if(identificador === producto.id) {
                    return true
                } else {
                    return false
                }
            })
            // Eliminar el producto del array con splice en base a su ubicación
            products.splice(index, 1)
            // Array.splice(indice, 1) -> Elimina un elemento del array
            renderProducts(products)

            localStorage.setItem("productos", JSON.stringify(products))
            
            Swal.fire("Producto eliminado", "El producto fue eliminado correctamente", "success");

        }
    })

    
}

// #Search product

function searchProduct(evt) {
    // Recibo un evento en este caso del tipo oninput
    console.log(evt.target.value)

    let text = evt.target.value;  // "IkE"

    text = text.toLowerCase()    // "ike"

    // Primero tengo que buscar en mi array los elementos que tengan como valor Name el texto que la persona a escrito
    const productosFiltrados = products.filter((PRODUCTITO) => {
        const nombre = PRODUCTITO.name.toLowerCase();
        const descripcion = PRODUCTITO.description.toLowerCase();
        // nike invecible 3
        //
        if(  nombre.includes(text) || descripcion.includes(text) ) {

            return true

        } else {
            return false
        }
    })


    console.log(productosFiltrados)


    renderProducts(productosFiltrados)



}

formAdminHTML.addEventListener('submit', (evt) => {
    // Prevenimos el comportamiento por defecto del formulario
    evt.preventDefault();

    const el = evt.target.elements;

    console.log(el.date.value);

    const idInput = el.id.value;

    // let ID;

    // const ID = id ? id : crypto.randomUUID() 
    // if(id) {
    //     ID = id
    // } else {
    //     ID = crypto.randomUUID()
    // }

    const nuevoProducto = {
        name: el.name.value,

        price: el.price.valueAsNumber || 0,

        category: el.category.value,
        description: el.description.value,
        image: el.image.value,
        createdAt: new Date(el.date.value).getTime(),
        id: idInput ? idInput : crypto.randomUUID()
    }

    console.log(nuevoProducto)

    if(idInput) {
        // Busco la posición del elemento que edite y lo actualizo (reemplazo)
        // const index = products.findIndex(prod => prod.id === id);
        const indice = products.findIndex(prod => {
            if(idInput === prod.id) {
                return true
            }
        });
        products[indice] = nuevoProducto;
        Swal.fire({
            title: "Producto actualizado",
            text: "El producto fue actualizado correctamente",
            icon: "info",
        })
    } 
    else {
        // Sumo el elemento al array por que es un elemento nuevo
        products.push(nuevoProducto);

        Swal.fire({
            title: "El producto agregado",
            text: "El producto fue agregado correctamente",
            icon: "success",
            timer: 2500
        })
    }

    el.id.value = ''
    
    renderProducts(products)
    localStorage.setItem("productos", JSON.stringify(products))

    formAdminHTML.reset();
    el.name.focus()

    btnSubmitHTML.innerText = "Agregar producto";

    btnSubmitHTML.classList.remove("btn-success")

})

formAdminHTML.addEventListener('change', () => {
    console.log(formAdminHTML.checkValidity())
})


function editProduct(idUpdate) {

    console.log("Id para actualizar", idUpdate)
    // Deberia buscar los datos del producto indicado por ID
    const productoEditar = products.find((producto) => {

        if(idUpdate === producto.id) {
            return true
        }
        // Para que find encuentre el elemento que buscamos y lo retorne o guarde en la variable "productoEditar" tenemos que retornar un true
        return false;
    }) 

    btnSubmitHTML.innerText = "Editar producto";

    btnSubmitHTML.classList.add("btn-success");
    // btnSubmitHTML.classList.contains("btn-primary") // true o false

    // isEditing = true;

    // TODO: Control por si el producto NO se encontró

    const elem = formAdminHTML.elements;
    // Rellenar el formulario con esos datos
    elem.id.value = productoEditar.id;

    elem.name.value = productoEditar.name;

    elem.price.value = productoEditar.price;

    elem.description.value = productoEditar.description;

    elem.category.value = productoEditar.category;

    elem.image.value = productoEditar.image;
    // Transformamos el formato timestamp milisegundos a un formato compatible con el input date (createdAt) "yyyy-MM-dd"
    elem.createdAt.value = formatTimestampToInputDate(productoEditar.createdAt);

    // Modificar el botón agregar por un botón que diga editar
    // Definir un mecanismo para saber que cuando se haga el submit poder definir si es un producto o estoy editando


}


// const tasks_list = []

// function agregarTarea() {
//     const taskInputHTML = document.getElementById("task")

//     const tarea = taskInputHTML.value;

//     if(tarea.length < 3) {
//         // alert("La t")
//         return
//     }

//     console.log(tarea)
//     //agrego la tarea al array
// }


// // usando en forEach el indice y llamando esta función con dicho valor 
// function borrarTarea(index) {
//     // Directamente borramos en base al index recibido
// }


// btnSubmitHTML.addEventListener('click', () => btnSubmitHTML.classList.toggle("btn-lg"))
