var SidebarView = function (container, model) {

	//var numberOfGuest = container.find("#numberOfGuests");

	var totcost = container.find("#cost");

	totcost.html(model.getTotalMenuPrice());
	//console.log(model.removeDishFromMenu(1));
}