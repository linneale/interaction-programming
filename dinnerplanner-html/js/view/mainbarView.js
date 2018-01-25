var MainbarView = function (container, model) {

	var html = '';
	var typeArray = [];
	var dropdownM =container.find("#dropdown-menu");

	for (i in model.getFullMenu()) {
		if (!typeArray.includes(model.getFullMenu()[i].type)) {
			typeArray.push(model.getFullMenu()[i].type);
			
			html += '<li><a href="#">'+model.getFullMenu()[i].type+'</a></li>';
		}

	}

	dropdownM.html(html);

}