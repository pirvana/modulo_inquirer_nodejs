const inquirer = require('inquirer');

// inquirer.prompt([{
//     name: 'color',
//     message: 'Cual es tu color favorito?',
//     default: 'red',
// },{ 
//     name: 'website',
//     message: 'Cual es tu sitio web favorito?'
// }]
// )
// inquirer.prompt({
//     type: 'list',
//     name: 'colors',
//     message: 'Cual es tu color favorito?',
//     choices: ['rojo', 'azul', 'verde']
// })

// inquirer.prompt({
//     type: 'rawlist',
//     name: 'colors',
//     message: 'Cual es tu color favorito?',
//     choices: ['rojo', 'azul', 'verde']
// })
// inquirer.prompt({
//     type: 'expand',
//     name: 'colors',
//     message: 'Cual es tu color favorito?',
//     choices: [
//         {
//         key: 'a',
//         value: 'rojo'
//     },
//     {
//         key: 'b',
//         value:'blanco'
//     }
// ]
// })
// inquirer.prompt({
//     type: 'checkbox',
//     name: 'colors',
//     message: 'Cual es tu color favorito?',
//     choices: [
//         'rojo',
//         'blanco',
//     ]
// })
// inquirer.prompt({
//     type: 'password',
//     name: 'secreto',
//     message: 'Cual es tu pass: ',
//     mask:'*'
// })
inquirer.prompt({
    type: 'editor',
    name: 'codigo',
    message: 'Escribe algo de tu codiho:',
    
})

    .then(answers => {
        console.log('Answer:', answers)
    })