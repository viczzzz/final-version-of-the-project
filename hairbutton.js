function populateHair(s0,s1,s2,s3){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);

	s2.innerHTML = "";
	if(s1.value =="Hair"){
		var optionArray = ["|","short|Short","medium|Medium","long|Long"]
		s2.disabled = false
	} else{
		var optionArray = ["|","black|Black","blonde|Blonde","brown|Brown","red|Red"]
		s2.disabled = false
	} 
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
};