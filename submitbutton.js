
const Hair = document.getElementById('selectlength');
const HairColor = document.getElementById('selectcolor1');

const Item = document.getElementById('selectitem');
const ItemColor = document.getElementById('selectcolor2');


const ChooseHair = function(option){
	let type = Hair.options[Hair.selectedIndex].text;
	if(!type || type.length === 0) return;
debugger;
	let color = HairColor.options[HairColor.selectedIndex].text;

	$('.hairstyle_div').children('div').each((id, div) => {
		if($(div).attr('class') !== type.toLowerCase()){
			$(div).children('img').each((id, img) => {
			$(img).hide();
		});
		}
	
	})

	$('.'+type.toLowerCase()).children('img').each((id, img) => {
		
		if($(img).attr('class') === color.toLowerCase()) {
			$(img).show();
		} else {
			$(img).hide();
		}
	});
	return;
};



const ChooseItemColor = function(option) {
	let type = Item.options[Item.selectedIndex].text;
	if(!type || type.length === 0) return;
	let color = ItemColor.options[ItemColor.selectedIndex].text;


	if(type.toLowerCase() === "tops" || type.toLowerCase() === "skirts"){
		$('.dresses').children('img').each((id, img) => {
			$(img).hide();
	});
	}

	if(type.toLowerCase() === "dresses"){
		$('.skirts').children('img').each((id, img) => {
			$(img).hide();
		});
		$('.tops').children('img').each((id, img) => {
			$(img).hide();
		});
	}


	// if(type.toLowerCase() === "long"){
	// 	$('.medium').children('img').each((id, img) => {
	// 		$(img).hide();
	// 	});
	// 	$('.short').children('img').each((id, img) => {
	// 		$(img).hide();
	// 	});
	// }

	// 		$(img).hide();
	// 	});

	$('.'+type.toLowerCase()).children('img').each((id, img) => {

		if($(img).attr('class') === color.toLowerCase()) {
			$(img).show();
		} else {
			$(img).hide();
		}
	});
	return;};

	
function showDiv(){
	document.getElementById('div2').style.display = 'block'
	ChooseItemColor();
	ChooseHair();
	return false;
};

