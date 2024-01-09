/*
function billingFunction(){
    if (same.checked){
        var x = document.getElementById('shippingName').value;
        var y = document.getElementById('shippingZip').value;

        document.getElementById('billingName').value = x;
        document.getElementById('billingZip').value = y;
        return false;
    }
    else{

        billingName.removeAttribute('required');
        billingZip.removeAttribute('required');
        //removeAttribute('required');
        //document.getElementById('billingName').required = false;
        //document.getElementById('billingZip').required = false;

        console.log('xx');
        return false;
    }
}
*/
/*
//Sakib 
function billingFunction(){
    if(document.getElementById('same').checked){
        var x = document.getElementById('shippingName').value;
        var y = document.getElementById('shippingZip').value;

        document.getElementById('billingName').value = x;
        document.getElementById('billingZip').value = y;
    }
    else{
        document.getElementById('billingName').removeAttribute('required');
        document.getElementById('billingZip').removeAttribute('required');
        //document.getElementById('billingName').setAttribute('required',false);
        //document.getElementById('billingZip').setAttribute('required',false);

        console.log('xx');
    }
}
*/
/*
//Arpit Alne
function billingFunction(){

	if(document.getElementById('same').checked){
		document.getElementById('billingName').value = document.getElementById("shippingName").value;
		document.getElementById('billingZip').value = document.getElementById("shippingZip").value;
	}
	
	else
	{
		document.getElementById('billingName').value = "";
		document.getElementById('billingZip').value = "";
	}
}
*/
/*
//Vanshika sanan
function billingFunction() {
    if (document.getElementById("same").checked) {
      document.getElementById("billingName").value = document.getElementById("shippingName").value;//this will copy the value entered by the user in shipping name block
      document.getElementById("billingZip").value = document.getElementById("shippingZip").value;//this will copy the value entered by the user in shipping zip block

  
    }
   else {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
  }
  */