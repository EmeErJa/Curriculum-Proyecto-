const boton=document.getElementById("boton");
const main=document.getElementById("main");

boton.addEventListener("click", ()=> {
	const mapa = document.createElement("section");
	
	mapa.className="sectionMapa";
	mapa.innerHTML= `
	<iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.381223484024!2d-120.96152677870559!3d37.64024057248082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090545bbd8bf7ad%3A0xa196c669109bc794!2s2175%20Miller%20Ave%2C%20Modesto%2C%20CA%2095354%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1676680628911!5m2!1ses!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

	main.append(mapa);

	mapa.addEventListener("click", ()=>{
		mapa.remove();
	});
})
