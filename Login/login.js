let loginReq = new XMLHttpRequest();

function login() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value

  if (validation(email, password)) {

    let data = {
      email,
      password
    }
    loginReq.open("POST", "https://reqres.in/api/login", true);
    loginReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    loginReq.onreadystatechange = function () {
      if (loginReq.readyState === 4 && loginReq.status === 200) {
        localStorage.setItem("token", JSON.parse(loginReq.responseText).token)
        document.getElementsByClassName('loginBtn')[0];
        document.getElementsByClassName('modalCont')[0].style.display = 'none';
        document.getElementsByClassName('grid-dir')[0].style.display = 'none';
        document.getElementsByClassName('logado')[0].style.display = 'flex';

        document.getElementsByClassName('open-account')[0].style.display = 'none'
        document.getElementsByClassName('soma-btn')[0].style.display = 'none'
        toggleText();
        

      } else if (loginReq.status === 400) {
        document.getElementsByClassName('email-erro')[0].style.display = 'flex'
        document.getElementsByClassName('email-erro')[0].textContent = '⚠ Login inválido ⚠'

      }
    }
    loginReq.send(JSON.stringify(data));
  }

}

function toggleText(buttonLogin)  {
    var text = document.getElementById(buttonLogin).firstChild;
    text.data = text.data == "Acesse sua conta" ? "Olá, " + email : "Acesse sya conta";
 }

function validation(email, password) {
  if (email.length < 3) {
    document.getElementsByClassName('email-erro')[0].style.display = 'flex'
    document.getElementsByClassName('email-erro')[0].textContent = '⚠ E-mail inválido ⚠'
    return false
  }
  if (password.length < 3) {
    document.getElementsByClassName('senha-erro')[0].style.display = 'flex'
    document.getElementsByClassName('senha-erro')[0].textContent = '⚠ Senha inválida ⚠'
    return false
  }
  return true
}

const submit = document.getElementsByClassName('submit-btn')[0];
submit.addEventListener('click', login);
