document.getElementById('generate').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const output = document.getElementById('output');
    const sendButton = document.getElementById('send');

    if (name === '') {
        alert('Por favor, preencha o campo com seu nome.');
        return;
    }

    // Gera uma senha de 4 dígitos entre 0001 e 9999.
    const password = String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0');
    
    // Exibe a senha no elemento "output".
    output.textContent = password;
    output.classList.add('visible'); // Adiciona a classe para visibilidade e animação.

    // Exibe o botão de enviar.
    sendButton.classList.remove('hidden');
    sendButton.dataset.name = name;
    sendButton.dataset.password = password;
});

// Adiciona funcionalidade ao botão de envio.
document.getElementById('send').addEventListener('click', function () {
    const name = this.dataset.name;
    const password = this.dataset.password;

    // ID do grupo do WhatsApp.
    const groupId = 'IoORHkolXFy0qKNgMMYA96';
    const message = encodeURIComponent(`Nome: ${name}\nSenha: ${password}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}&phone&group=${groupId}`;

    // Redireciona para o WhatsApp.
    window.open(whatsappUrl, '_blank');
});
