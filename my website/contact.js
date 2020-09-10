const fs = require('fs');
const btn = document.getElementById('btn');

btn.addEventListener(onclick, submitform);

function submitform() {
    let name = document.getElementsByClassName('input1').value;
    let email = document.getElementsByClassName('input2').value;
    let address = document.getElementsByClassName('input3').value;
    let phone = document.getElementsByClassName('input4').value;
    let text = document.getElementsByClassName('input1').value;

    value = `name: ${name} email: ${email} address: ${address} phone no: ${phone} enquiry: ${text}`

    if (name.length >= 3 && email.length >= 12 && address.length >= 3 && phone.length == 10) {
        fs.writeFile('formdata.txt', value, (err) => {
            if (err) throw err;
        })
    } else {
        console.log('not submited');
    }
}