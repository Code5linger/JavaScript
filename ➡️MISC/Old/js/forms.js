function check(){
    var email1 = document.getElementById('email_1');
    var email2 = document.getElementById('email_2');

    if(email1.value != email2.value){
        alert("Dose not Match");
        return false;
    }
    else{
        alert("Yap");
    }

}