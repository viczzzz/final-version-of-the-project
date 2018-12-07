function populateItems(s1,s2){
	console.log(s1,s2)

	s1 = document.getElementById(s1);
	s2 = document.getElementById(s2);
 
	s2.innerHTML = "";
	s2.disabled = false;
	
	let optionArray = [];

	if(s1.value == "") {
		s2.disabled = true;
	} else if(s1.value == "Tops"){

		optionArray = ["|","grey|Grey","blue|Blue","red|Red","black|Black","yellow|Yellow"];

	} else if(s1.value == "Skirts"){

		optionArray = ["|","darkblue|DarkBlue","black|Black","burgundy|Burgundy","red|Red"];

	} else if(s1.value == "Dresses"){

		optionArray = ["|","blue|Blue","black|Black","rainbow|Rainbow"];

	}

	for(let option in optionArray){

		let pair = optionArray[option].split("|");

		let newOption = document.createElement("option");

		newOption.value = pair[0];

		newOption.innerHTML = pair[1];

		s2.options.add(newOption);

	}

}