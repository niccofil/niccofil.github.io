function drop() {
    let toggle = document.querySelector('.dropdown-conteiner');
    if (toggle.style.display == 'none'  || toggle.style.display == '') {
        toggle.style.display = 'block';
    }
    else {
        toggle.style.display = 'none';
    }
    
 
}

function check() {
    let user = document.getElementById('name');
    let pass = document.getElementById('pass');

    if (user.value == ""){
        document.getElementById('emptyUser').innerHTML = "username required";
        document.getElementById('emptyUser').style.color = 'red';
        user.style.borderColor = 'red';
    }

    if (pass.value == "") {
        document.getElementById('emptyPass').innerHTML = "password required";
        document.getElementById('emptyPass').style.color = 'red';
        pass.style.borderColor = 'red';
    }

    else if (pass.value != "" && user.value != ""){
        document.getElementById('emptyUser').innerHTML = "";
        user.style.borderColor = "";
        document.getElementById('emptyPass').innerHTML = "";
        pass.style.borderColor = "";
        document.getElementById('myform').reset();
        drop();
    }   
}





