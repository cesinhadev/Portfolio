const ability = document.querySelectorAll('.ability-box');
const description = document.querySelector('.ability-description');

const about_ability = [
    '<strong>Git<strong><br/><p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p><br/>',
    '<strong>Node<strong><br/><p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p><br/>',
    '<strong>SQL<strong><br/><p>SQL é uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados</p><br/>',
    '<strong>Javascript<strong><br/><p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p><br/>'
]


const data_begin = [
    (new Date(2021, 10, 1)).getTime(), // 0
    (new Date(2021, 10, 1)).getTime(), // 1
    (new Date(2022, 0, 1)).getTime(), // 2
    (new Date(2022, 3, 1)).getTime(), // 3
    (new Date(2022, 3, 1)).getTime(), // 4
    (new Date(2022, 1, 1)).getTime(), // 5
    (new Date(2021, 11, 1)).getTime(), // 6
    (new Date(2021, 11, 1)).getTime(), // 7
    ]

const today = (new Date().getTime());

ability.forEach((element, index) => {
    let index1 = index;
    let element1 = element;

    element.addEventListener('mouseover', (e) => {
        let time = 'mes';
        let time_experience = Math.round((today-data_begin[index1])/(1000*60*60*24*30));
        if(time_experience > 1) {
            time = 'meses'
        }
        description.innerHTML = `<p>${about_ability[index1]} </p>` ;
    })
    element.addEventListener('mouseout', (e, link) =>{
        description.innerHTML = 'Passe o mouse por cima de alguma habilidade para ler a descrição '
    })
});