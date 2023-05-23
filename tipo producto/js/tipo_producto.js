function obtenerDatosAPI(){
    //metodo con el que trae toda info
    const options = {method: 'GET'};
    //envian una consulta, busca la ip, el puerto y la api 
    fetch('http://164.90.186.2:3000/api/tipo_producto/', options)
    //de vuelve un archivo json
      .then(response => response.json())
      //necesitamos recorren el json y loas almacenamos en la funcion mostrarDatos
      .then((json)=>json.forEach(mostrarDatos))
    
      .then(response => console.log(result))
      .catch(err => console.error('error', err));
    }
    
function mostrarDatos(element, index, arr){
        //index el que recorre
        //element es el valor
        //del documento selecciona la clase .data
    arr[index] = document.querySelector('.data').innerHTML += 
    `
    <tr>
        <td>
        ${element.id_tipo_producto}
        </td>
    
        <td>
        ${element.nombre_tipo_producto} 
        </td>

        <td>
        ${element.cod_tipo_producto} 
        </td>

        <td>
    
        <button type="button" class="btn btn-danger" onclick="eliminar(${element.id_tipo_producto});"><span class="material-icons">
        delete
        </span></button>
        <button type="button" class="btn btn-warning" onclick="location.href='/pages/tipo_producto/actualizar_tipo.html?id_tipo_producto=${element.id_tipo_producto}'"><span class="material-symbols-outlined">
        edit_square
        </span>
        </button>
        </td>
  
    </tr>
    `;
    }

function agregar(){

    //crear el headders para pasar a json
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
      // campos del formulario
    var nombre_tipo = document.getElementById('txt_nom_tipo_producto').value;
    var cod_tipo = document.getElementById('txt_codigo_tipo_producto').value;
    //pasamos al json cada una de las filas obtenidas
    var raw = JSON.stringify({
                "nombre_tipo_producto":nombre_tipo,
                "cod_tipo_producto":cod_tipo
    });
    //configuramos la variable opcion con los valores necesarios para nuestra función fetch
    var options = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }
    //const options = {method: 'POST', body: '{"nombre_tipo_producto": 'nombre_tipo'}'};

  fetch('http://164.90.186.2:3000/api/tipo_producto/', options)
  .then(response => {
    if(response.status == 200){
        alert('Se agrego correctamente...');
    }else{
        alert('Error al agregar los datos...');
    }
    })
  .then(response => console.log(response))
  .catch(err => console.error(err));
    }


function eliminar(id_tipo_producto){
        var options = {
            method: 'DELETE',
            redirect: 'follow'
        }
        
    fetch('http://164.90.186.2:3000/api/tipo_producto/'+id_tipo_producto, options)
   .then(response => {
    if(response.status == 200){
        alert('Se elimino correctamente...');
    }else{
        alert('Error al eliminar los datos...');
    }
    })
  .then(response => console.log(response))
  .catch(err => console.error(err));
    }

    function obtenerIdTipoProducto_actualizar(){
        var queryString = window.location.search;                                
        var urlParams = new URLSearchParams(queryString);
        var p_id_tipo_producto = urlParams.get("id_tipo_producto");
        g_id_tipo_producto = p_id_tipo_producto
        obtener_datos_tipo_producto_actualizar(p_id_tipo_producto)
      };
      
      function obtener_datos_tipo_producto_actualizar(p_id_tipo_producto){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch('http://164.90.186.2:3000/api/tipo_producto/'+p_id_tipo_producto, requestOptions)
          .then((response) => response.json())
          .then((json) => json.forEach(mostrarDatosTipoProducto_actualizar)
          )
      
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      };
      
      function mostrarDatosTipoProducto_actualizar(element, index, arr){
        var nombre_tipo_producto = element.nombre_tipo_producto;
        var cod_tipo_producto = element.cod_tipo_producto;
    
        document.getElementById('txt_nom_tipo_producto').value = element.nombre_tipo_producto
        document.getElementById("txt_codigo_tipo_producto").value = element.cod_tipo_producto
      };
      
      function actualizar_tipo_producto(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        var nombre_tipo_producto  = document.getElementById('txt_nom_tipo_producto').value;
        var cod_tipo_producto     = document.getElementById("txt_codigo_tipo_producto").value; 
       
        var raw = JSON.stringify({
         
          "nombre_tipo_producto": nombre_tipo_producto,
          "cod_tipo_producto": cod_tipo_producto,
        });
        
        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
                                                
        };
        
        fetch('http://164.90.186.2:3000/api/tipo_producto/'+g_id_tipo_producto, requestOptions)
        .then(response => {
          if(response.status == 200){
              alert('Se actualizo correctamente...');
          }else{
              alert('Error al actualizar los datos...');
          }
          })
        .then(response => console.log(response))
        .catch(err => console.error(err));
          }
      
      
      function obtenerIdTipoProducto(){
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var p_id_tipo_producto = urlParams.get("id_tipo_producto");
        g_id_tipo_producto = p_id_tipo_producto
        obtener_datos_tipo_producto(p_id_tipo_producto)
      }
      
      function obtener_datos_tipo_producto(p_id_tipo_producto){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch('http://164.90.186.2:3000/api/tipo_producto/'+p_id_tipo_producto, requestOptions)
          .then((response) => response.json())
          .then((json) => json.forEach(mostrarDatosTipoProducto)
          )
      
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
      