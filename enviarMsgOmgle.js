function executeOmegle(){
    let btn = document.querySelector('.disconnectbtn');
    let messageBox = document.querySelector('.chatmsg');
    let sendBtn = document.querySelector('.sendbtn');
    btn.click();
    messageBox.innerHTML='Passa seu cpf';
    executeMessage(sendBtn);
}

function executeMessage(sendBtn){
    setTimeout(() => {
        sendBtn.click();
    }, 3000);
}

function executeAgain(){
    setTimeout(() => {
        executeOmegle();
    }, 3000);
}
executeOmegle();
executeAgain();