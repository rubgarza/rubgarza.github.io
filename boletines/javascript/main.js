
//ejemplo de los links
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
});
*/

// obtener los elementos de la clase close

let links = document.querySelectorAll(".close");

//recorrerlos

links.forEach(function(link){

	//Agregar un evento click a cada uno de los elementos
	link.addEventListener("click", function(ev){
		ev.preventDefault();
		let content = document.querySelector('.content');

		content.classList.remove("animate__fadeInLeft");
		content.classList.remove("animate__animated");

		content.classList.add("animate__fadeInUp");
		content.classList.add("animate__animated");

		setTimeout(function(){
			location.href = "/boletines";
		},600);

		
		
		return false;

	});


});