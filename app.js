
function sendMeMessage() {
  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputArea = document.getElementById('text');
  let name = inputName.value;
  let email = inputEmail.value;
  let message = inputArea.value;
  let fullMessage = `Имя: ${name}\nemail: ${email}\nСообщение: ${message}`;
  return fullMessage;
}
