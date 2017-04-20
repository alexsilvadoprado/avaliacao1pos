//Codigo JS do APP
let btn_comecar = document.getElementById('btn-comecar');
let activity_list = document.querySelectorAll('.activity');

btn_comecar.addEventListener('touchend', evt => {
	remove_main();
	mostra_tela('activity-principal');
});

let remove_main = () => {
	for(let elem of activity_list)
	{
		if(elem.classList.contains('activity-main'))
		{
			elem.classList.remove('activity-main');
		}
	}
}

let mostra_tela = (id) => {
	for(let elem of activity_list)
	{
		if(elem.id == id)
		{
			elem.classList.add('activity-main');
		}
	}
}