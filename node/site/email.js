

function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>{
        console.log('Usuário ', user)
        alert("Usuário criado. Login feito.")
    }).catch(error =>{
        console.log('Erro:', error);
    })
}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        alert('dale gostosão!')
    }).catch(error =>{
        console.log('Erro:', error);
    })
}


function deletaUsuario(){
    var currentUser;
    currentUser = firebase.auth().currentUser;
    if(currentUser){
        currentUser.delete().then(()=>{
            alert("tomou R do veigar")
        }).catch(error =>{
            console.log('Erro:', error);
        })
    }
}

function logout(){
    firebase.auth().signOut().then(()=>{
        alert("Usuário deslogado")
    })
}