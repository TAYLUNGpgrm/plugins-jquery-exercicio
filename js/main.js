$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
    
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14 // considerando o formato (00) 0000-0000
            },
            cpf: {
                required: true,
                minlength: 14 // considerando o formato 000.000.000-00
            },
            endereco: {
                required: true,
                minlength: 10 // ajuste conforme necessário
            },
            cep: {
                required: true,
                minlength: 9 // considerando o formato 00000-000
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome completo",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, informe seu e-mail",
                email: "Por favor, informe um e-mail válido"
            },
            telefone: {
                required: "Por favor, informe seu telefone",
                minlength: "O telefone deve ter pelo menos 10 dígitos"
            },
            cpf: {
                required: "Por favor, informe seu CPF",
                minlength: "O CPF deve ter 11 dígitos"
            },
            endereco: {
                required: "Por favor, informe seu endereço completo",
                minlength: "O endereço deve ser mais detalhado"
            },
            cep: {
                required: "Por favor, informe seu CEP",
                minlength: "O CEP deve ter 8 dígitos"
            }
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-campo').append(error);
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });
});