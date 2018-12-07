

//const Model = document.getElementById('shape-select');

const Hair = document.getElementById('selectlength');
const HairColor = document.getElementById('selectcolor1');

const Item = document.getElementById('selectitem');
const ItemColor = document.getElementById('selectcolor2');

/*const ChooseAModel = function(){
	//let value = Model.options[Model.selectedIndex].value;
	let text = Model.options[Model.selectedIndex].text;
	if(text == '3D Human') {
		document.getElementById("myP").style.visibility = "hidden";
	  $('#3DHuman').show();	
	  $('#Robot').hide();
	  $('#AbstractHuman').hide(); 	
	}else if (text == "Robot"){
	  $('#Robot').show();
	  $('#3DHuman').hide();
	  $('#AbstractHuman').hide();
		
	}else if(text == "Abstract Human"){
	  $('#AbstractHuman').show();
	  $('#Robot').hide();
	  $('#3DHuman').hide();
	}
 
}*/



const ChooseAHairstyle = function (){
	let value = Hair.options[Hair.selectedIndex].value;
	let text = Hair.options[Hair.selectedIndex].text;
	console.log(text)
	if(text === 'Long'){
	 $('#Medium').hide();
	 $('#Short').hide();

	}else if(text === 'Medium'){
		$('#Long').hide();
		$('#Short').hide();
	}else if(text === 'Short'){
		$('#Long').hide();
		$('#Short').hide();

	}
}


const ChooseAColorForAHairstyle = function (){
	let value = HairColor.options[HairColor.selectedIndex].value;
	let text = HairColor.options[HairColor.selectedIndex].text;
	console.log(text)
	if(text === 'Brown'){
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else if(text === 'Blonde'){
		$('#Red').hide();
		$('#Brown').hide();
		$('#Black').hide();
	}else if(text === 'ed'){
		$('#Brown').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else{
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Brown').hide();
	}
}



/*const ChooseAnItem = function (option){
	let value = Item.options[Item.selectedIndex].value;
	let text = Item.options[Item.selectedIndex].text;
	if(text === 'Tops'){
		if(text === '')
	//document.getElementById("LightPinkSkirt").hidden = false;
		$('#LightPinkSkirt').hide();
        $('#Skirts').hide();
		$('#Dresses').hide();
	} else if(text === 'Skirts') {
	document.getElementById("Skirts").hidden = false;
		$('#Tops').hide();
		$('#Dresses').hide();
	} else if(text === 'Dresses') {
	document.getElementById("Dresses").hidden = false;
        $('#Tops').hide();
		$('#Skirts').hide();
	} 
}*/


const ChooseItemColor = function(option) {
	let value2 = ItemColor.options[ItemColor.selectedIndex].value;
	let text2 = ItemColor.options[ItemColor.selectedIndex].text;

	let value = Item.options[Item.selectedIndex].value;
	let text = Item.options[Item.selectedIndex].text;
	switch (text){
		case 'Tops':
			$('#YellowDress').hide();
			$('#PeachDress').hide();
			$('#WhiteTop').hide();
			$('#RedTop').hide();
            $('#PinkTop').hide();
			switch (text2){
				case 'White':
					$('#WhiteTop').show();
				break;
				case 'Red':
				    $('#RedTop').show();
                break;
                case 'Pink':
                    $('#PinkTop').show();
                break;
			}

		break;
		case 'Skirts':
			$('#YellowDress').hide();
			$('#PeachDress').hide();
			$('#DarkBlueSkirt').hide();
		    $('CrimsonSkirt').hide();
		    $('#BlackSkirt').hide();
		    $('#LightPinkSkirt').hide();
			switch(text2){
				case 'DarkBlue':
					$('#DarkBlueSkirt').show();
				break;
				case 'Black':
				    $('#BlackSkirt').show();
				break;
				case 'LightPink':
				    $('#LightPinkSkirt').show();
				break;
				case 'Crimson':
				    $('CrimsonSkirt').show();
				break;
			}
		break;
		case 'Dresses':
			$('#WhiteTop').hide();
			$('#RedTop').hide();
            $('#PinkTop').hide();
            $('#DarkBlueSkirt').hide();
		    $('CrimsonSkirt').hide();
		    $('#BlackSkirt').hide();
		    $('#LightPinkSkirt').hide();
		    $('#YellowDress').hide();
			$('#PeachDress').hide();
			switch(text2){
				case 'Peach':
					$('#PeachDress').show();
				break;
				case 'Yellow':
					$('#YellowDress').show();
				break;
			}
		break;

	}

}

const showDiv = function(){
	document.getElementById('div2').style.display = 'block'
	ChooseItemColor();
	return false;
}

