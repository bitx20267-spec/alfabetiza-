let usuarios = [
    {
        nome: "João",
        idade: 25,
        cidade: "São Paulo",
        estado: "SP",
        imagemPerfil: "icons/account_circle_24dp.svg",
        senha: "123456"
    },
    {
        nome: "Maria",
        idade: 30,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        imagemPerfil: "icons/account_circle_24dp.svg",
        senha: "abcdef"
    }
];
function criarPerfil() {
    window.location.href = "tela_cadastro.html";
}
function cadastrarUsuario() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const imagemPerfilInput = document.querySelector('input[type="file"]');
    const senha = document.getElementById("senha").value;

    if (!nome || !idade || !cidade || !estado || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let imagemPerfil = "icons/account_circle_24dp.svg"; // Default image
    if (imagemPerfilInput.files.length > 0) {
        const file = imagemPerfilInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            imagemPerfil = e.target.result;
            salvarUsuario(nome, idade, cidade, estado, imagemPerfil, senha);
        };
        reader.readAsDataURL(file);
    } else {
        salvarUsuario(nome, idade, cidade, estado, imagemPerfil, senha);
    }
}

function salvarUsuario(nome, idade, cidade, estado, imagemPerfil, senha) {
    const novoUsuario = {
        nome: nome,
        idade: idade,
        cidade: cidade,
        estado: estado,
        imagemPerfil: imagemPerfil,
        senha: senha
    };

    usuarios.push(novoUsuario);
    document.getElementById("confirmacaoDoCadastro").innerText = "Cadastro realizado com sucesso!";
    console.log("Usuário cadastrado:", novoUsuario);
} 
 function entrar() {
    const nome = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    if (!nome || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
    if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        window.location.href = "home.html";
        // Redirecionar para a página principal ou perfil do usuário
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}