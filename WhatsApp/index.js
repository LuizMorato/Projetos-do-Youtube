const sendText = document.querySelector('.sendMessage .text');
const sendVideo_Audio = document.querySelector('.video_audio');
const message = document.querySelector('.message');

sendText.classList.add('hide');

message.addEventListener('keyup', () => {
    if(message.value != "") {
        sendVideo_Audio.classList.add('hide');
        sendText.classList.remove('hide');
    } else {
        sendVideo_Audio.classList.remove('hide');
        sendText.classList.add('hide');
    }
})

const content = document.querySelector('.content');
const sendTextMessage = document.querySelector('.sendTextMessage');

sendTextMessage.addEventListener('click', () => {
    if(message.value != "") {
        content.innerHTML += `
            <p class="send">${message.value}</p>
        `
    }

    message.value = "";
})