var DishView = function (container, model) {

	myHTML = '';

	for(i in model.getFullMenu()){
		var name = model.getFullMenu()[i].name;
		var image = model.getFullMenu()[i].image;

		console.log(name);
		console.log(image);

		myHTML += "<div class='col-sm-12 col-md-3'><a href='#' class='thumbnail'> <img src='images/"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a></div>";
	}
	container.html(myHTML);

}