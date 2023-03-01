var matriz = null;
var grilla_inicio = '';
var grilla_datos = '';
const num1 = Math.floor(Math.random() * 40) + 216;
const num2 = Math.floor(Math.random() * 40) + 216;
const num3 = Math.floor(Math.random() * 40) + 216;


function obtenerdatos() {
    let url = 'https://randomuser.me/api/';
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            var datos = JSON.parse(this.responseText);
            matriz = datos.results[0];

            grilla_inicio = '<div class="foto-inicio"><img class="centro" src=\'' + matriz.picture.large + '\' width="100%" height="100%"></div>';
            grilla_inicio += '<h1 class="nombre-inicio"><div class="centro">' +  matriz.name.title + ' ' + matriz.name.first + ' ' + matriz.name.last + '</div></h1>';

            grilla_datos = '<div class="foto-datos"><img class="centro" src=\'' + matriz.picture.large + '\' width="50%" height="50%"></div>';
            grilla_datos += '<h1 class="nombre-datos"><div class="centro">' +  matriz.name.title + ' ' + matriz.name.first + ' ' + matriz.name.last + '</div></h1>';


            document.getElementById('grilla').innerHTML = grilla_inicio;
            document.getElementById('grilla').innerHTML = grilla_inicio;
            
            const color = document.querySelector(':root');
            color.style.setProperty('--color1', num1);
            color.style.setProperty('--color2', num2);
            color.style.setProperty('--color3', num3);

        }
    }
}

function inicio(){
            document.getElementById('grilla').innerHTML= grilla_inicio;
}

function datos(){
        fecha_nac = new Date(matriz.dob.date);
        genero = matriz.gender;
        if (genero == 'female') { genero = 'Femenino'; }
        else if (genero == 'male') { genero = 'masculino'; }

        grilla_extra  = '<div class="titulo-datos"><h2> Datos Personales </h2></div>';
        grilla_extra += '<div class="texto-datos">';
        grilla_extra += '<div class="datos"><b>Edad:</b><i> '+ matriz.dob.age +'</i></div>';
        grilla_extra += '<div class="datos"><b>Fecha de Nacimiento:</b><i> '+ fecha_nac.toLocaleDateString("es-AR") +'</i></div>';
        grilla_extra += '<div class="datos"><b>Género:</b><i> '+ genero +'</i></div>';
        grilla_extra += '<div class="datos"><b>Email:</b><i> '+ matriz.email +'</i></div>';
        grilla_extra += '<div class="datos"><b>Celular:</b><i> '+ matriz.cell +'</i></div>';
        grilla_extra += '<div class="datos"><b>Teléfono Fijo:</b><i> '+ matriz.phone +'</i></div>';
        grilla_extra += '<div class="datos"><b>Dirección:</b><i> '+ matriz.location.street.name + ' ' +matriz.location.street.number+ ', ' +matriz.location.city+ ', ' +matriz.location.state+ ', ' +matriz.location.country + '</i></div>';
        grilla_extra += '</div>';
        document.getElementById('grilla').innerHTML = grilla_datos + grilla_extra;
        
}
function experiencia(){
        texto  = '<h3>Lorem Ipsum</h3>';
        texto += '<h4>What is Lorem Ipsum?</h4>';
        texto += 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        texto += '<h5>Why do we use it?</h5>';
        texto += 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

        grilla_extra  = '<div class="titulo-datos"><h2> Experiencia Personal </h2></div>';
        grilla_extra += '<div class="texto-datos">';
        grilla_extra += '<div class="texto">'+ texto +'</div>';
        grilla_extra += '</div>';
        document.getElementById('grilla').innerHTML = grilla_datos + grilla_extra;

    
}
function habilidades(){
        texto  = '<h3>Lorem Ipsum</h3>';
        texto += '<h4>What is Lorem Ipsum?</h4>';
        texto += 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        texto += '<h5>Why do we use it?</h5>';
        texto += 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

        grilla_extra  = '<div class="titulo-datos"><h2> Habilidades y Estudios Personales </h2></div>';
        grilla_extra += '<div class="texto-datos">';
        grilla_extra += '<div class="texto">'+ texto +'</div>';
        grilla_extra += '</div>';
        document.getElementById('grilla').innerHTML = grilla_datos + grilla_extra;
}

