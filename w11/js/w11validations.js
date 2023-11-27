function validate(){
    let element = document.getElementById('id1');
    let value = element.value.trim();
    if(value == ""){
        //alert("The input of the first name can not be empty.")
        document.getElementById('error').innerHTML = "The input of the first name can not be empty."
        return false;
    }
    return true;
}