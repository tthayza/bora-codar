function checkInput() {
  const input = document.getElementById('box-input')
  const text = input.value

  if (text != '' && text != ' ') {
    return true
  }
  return false
}

function sendMessage() {
  if (checkInput() == true) {
    const input = document.getElementById('box-input')
    const text = input.value

    var newDiv = document.createElement('div')
    newDiv.classList.add('message', 'message-sent')

    const data = new Date()
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const fullTime =
      String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')

    var newParagraph = document.createElement('p')
    newParagraph.classList.add('info-second')
    newParagraph.innerHTML = 'Você - ' + fullTime

    var newMessage = document.createElement('p')
    newMessage.classList.add('message-second')
    newMessage.innerHTML = text

    newDiv.appendChild(newParagraph)
    newDiv.appendChild(newMessage)

    var msg_box = document.getElementById('message-box')
    msg_box.appendChild(newDiv)

    input.value = ''

    newDiv.scrollIntoView()
  }
}
