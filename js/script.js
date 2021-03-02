function form_check(){
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var city = document.getElementById("city").value;
	var language = document.getElementById("language").value;
	var alert_counter = 0;
	var empty=false;
	if (email.length == 0){
		empty = true;
	}
	if (phone.length == 10){
		empty = false;
	}else if (phone.length ==0){alert('Please Enter Valid Details.');
	event.preventDefault();
		alert_counter++;
		empty = true;}else{
		alert("Enter a valid 10 digit Phone Number.");
		event.preventDefault();
		alert_counter++;
		empty = true;
	}
	if (city.length == 0) {empty = true;}
	if (language.length == 0){ empty = true;}
	if(!empty){
		alert('Thank You.\n Our Consultant will get in touch with you soon.');
	}else{
		if (alert_counter == 0) {
		alert('Please Enter Valid Details.');}
	}
}