function iniciar(maximos){
	maximo = maximos;
	medio = $("#medio")[0];
	console.log(medio);
	console.log(maximo);
	//reproducir = document.getElementById("reproducir");
	//console.log(reproducir);
	barra  = $("#barra");	
	progreso = $("#progreso");	
	headprogreso = $("#head-progreso");	

	//reproducir.addEventListener("click",presionar,false);

	//barra.addEventListener("click",mover,false);
	medio.load();
	medio.play();
	bucle = setInterval(estado,1000);
}
function presionar(){
	if(!medio.paused && !medio.ended)
	{
		medio.pause();
		//reproducir.innerHTML = "reproducir";
		window.clearInterval(bucle);
	}else{
		medio.play();
		//reproducir.innerHTML = "Pausa";
		bucle = setInterval(estado,1000);
	}
}
function estado(){
	if(!medio.ended)
	{				
			var total = parseInt(medio.currentTime * maximo / medio.duration);
			console.log(Math.round(medio.currentTime));
			$("#progreso").css("width",total+"px");

			$("#progreso").css("left",total-10+"px");
	}else{
		$("#progreso").css("width",total+"px");
		$("#progreso").css("left",0-10+"px");
		//reproducir.innerHTML = "reproducir";
		window.clearInterval(bucle);
		alert("Cambiará de canción");
		//$("#image img").attr("src","Beyonce.jpg");
		
		//$("#song1").attr("src","http://impulseapp.hol.es/ChandelierSia.mp3");
		//console.log(medio);
		//console.log($("#medio")[0]);
		//$("#medio")[0].load();
		medio.load();
		medio.play();
		reproducir.innerHTML = "Pausa";
		bucle = setInterval(estado,1000);
		//$("#medio")[0].play();
	}
}
function mover(e){
	if(!medio.paused && !medio.ended){
		var ratonX = e.pageX - barra.offsetLeft;
		var nuevoTiempo = ratonX * medio.duration / maximo;
		medio.currentTime = nuevoTiempo;
		$("#progreso").css("left",ratonX-10+"px");
		$("#progreso").css("width",total+"px");
	}
}