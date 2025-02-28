// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita envio do formulário
    
    // Obter valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar se todos os campos foram preenchidos
    if (name && email && message) {
        // Exibir mensagem de sucesso
        document.getElementById('contactMessage').innerText = 'Obrigado pelo seu contato, responderemos em breve!';
        document.getElementById('contactMessage').style.color = 'green';
        
        // Limpar campos do formulário
        document.getElementById('contactForm').reset();
    } else {
        // Exibir mensagem de erro
        document.getElementById('contactMessage').innerText = 'Por favor, preencha todos os campos!';
        document.getElementById('contactMessage').style.color = 'red';
    }
});
