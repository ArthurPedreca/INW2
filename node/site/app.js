const firebaseConfig = {
  apiKey: "AIzaSyAovOYq1Z7ksz3AOyF4K9YWWmhhgbHs0b4",
  authDomain: "projeto2mibteste-8174b.firebaseapp.com",
  projectId: "projeto2mibteste-8174b",
  storageBucket: "projeto2mibteste-8174b.appspot.com",
  messagingSenderId: "382250519716",
  appId: "1:382250519716:web:d6dc1ddda596dd21cbaa31",
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
  const email = emailField.value;
  const password = passwordField.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário logado com sucesso
      const user = userCredential.user;
      console.log('Usuário logado:', user);
      alert("Usuário Logado com sucesso")
    })
    .catch((error) => {
      // Tratar erros de autenticação
      const errorMessage = error.message;
      console.error('Erro de autenticação:', errorMessage);
    });
});