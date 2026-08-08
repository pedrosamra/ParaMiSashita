const boton = document.getElementById("comenzar");

boton.addEventListener("click", iniciarViaje);

function iniciarViaje(){

document.body.innerHTML=`

<div class="pantalla">

<h1>🚗 Nuestro viaje comienza...</h1>

<p>

Desde Ureña empieza una aventura llena de recuerdos,
risas, besitos, abrazos y muchos sueños por cumplir.

</p>

<div class="carro">

🚗

</div>

</div>

`;

setTimeout(() => {

document.body.innerHTML = `

<div class="pantalla">

<h1>🏔️ Primera parada: Mérida</h1>

<p>

Mi amor ❤️

Cada kilómetro recorrido contigo vale la pena.

No importa el destino mientras sea a tu lado.

Y qué mejor comienzo que nuestra hermosa Mérida.

</p>

<button onclick="mostrarMerida()">

Sigamos el viaje ❤️

</button>

</div>

`;

}, 4000);

}
function segundaParada(){

alert("🚗 Continuamos el viaje...");

}

function mostrarMerida(){

document.body.innerHTML = `

<div class="nieve">
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
</div>

<div class="pantalla">

<h1>🏔️ Bienvenidos a Mérida ❤️</h1>

<p>

Habibi...

Llegamos a un lugar lleno de montañas,
paisajes hermosos y recuerdos que quiero seguir creando contigo.

</p>

<button onclick="mostrarFotosMerida()">

Ver nuestros recuerdos 📸

</button>

</div>

`;

}

function mostrarFotosMerida(){

document.body.innerHTML = `

<div class="nieve">
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
</div>

<div class="pantalla">

<h1>📸 Nuestros recuerdos ❤️</h1>

<p>
Algunos de nuestros momentos que quiero guardar para siempre...
</p>

<div class="galeria">

<img class="foto" src="Imagenes/IMG-20250627-WA0018.jpg">
<img class="foto" src="Imagenes/IMG-20250627-WA0030.jpg">
<img class="foto" src="Imagenes/IMG-20250709-WA0018.jpg">
<img class="foto" src="Imagenes/IMG-20250922-WA0020.jpg">
<img class="foto" src="Imagenes/IMG-20250920-WA0089.jpg">
<img class="foto" src="Imagenes/IMG-20250922-WA0017.jpg">
<img class="foto" src="Imagenes/IMG-20250922-WA0008.jpg">
<img class="foto" src="Imagenes/IMG-20250922-WA0004.jpg">

</div>

<button onclick="terceraParada()">

Continuar 🚗

</button>

</div>

`;

}

function terceraParada(){

document.body.innerHTML = `

<div class="nieve">
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
</div>

<div class="pantalla">

<h1>🏞️ Laguna de Mucubají ❤️</h1>

<p>

Dicen que los lugares son bonitos...

pero contigo cualquier paisaje se vuelve inolvidable.

Quiero seguir descubriendo el mundo a tu lado.

</p>

<button onclick="cuartaParada()">

Continuemos nuestro viaje 🚗

</button>

</div>

`;

}

function cuartaParada(){

document.body.innerHTML = `

<div class="nieve">
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
</div>

<div class="pantalla">

<h1>🌄 Montaña de los Sueños ❤️</h1>

<p>

Habibi...

Este lugar tiene un nombre muy especial.

Porque mi sueño favorito eres tú.

Y quiero seguir construyendo miles de recuerdos contigo.

</p>

<button onclick="finalViaje()">

Última sorpresa 🎁

</button>

</div>

`;

}

function finalViaje(){

document.body.innerHTML = `

<div class="nieve">
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
<span>❄️</span>
</div>

<div class="pantalla">

<h1>🎉 ¡Sorpresa, Habibi! ❤️</h1>

<p>

Todo este viaje fue una pequeña pista...

Porque el verdadero destino nunca fue Mérida.

El verdadero destino...

es seguir construyendo una vida contigo.

❤️

¿Aceptas seguir viajando conmigo por muchos años más?

</p>

<button onclick="location.reload()">

🔄 Volver a comenzar

</button>

</div>

`;

}
