function saludo(){
	alert('Hola como estas');
}
function ejecutar(){
	for(var i=0;i<4;i++){
	document.getElementsByTagName('p')[i].onclick=saludo;
	}
	
}
window.onload=ejecutar;