function validateForm(){
    var inputs = document.forms[0].getElementsByTagName('input')
    for(var i = 0; i<inputs.length; i++){
        if (inputs[i].value === '' && inputs[i].id != 'message'){
            alert (`${inputs[i].id} must be filled in.`)
            return;
        }
    }
}