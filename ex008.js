const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função para capturar a entrada do usuário de forma assíncrona
function getInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (input) => {
            resolve(parseFloat(input)); //Converte a entrada para número decimal
        });
    });
}

//Função principal que executa o calculo de bhaskara
async function calcularEquacaoSegundoGrau() {
    //Captura os coeficientes a, b e c de forma assíncrona
    let a = await getInput("Digite o valor de a: ");
    let b = await getInput("Digite o valor de b: ");
    let c = await getInput("Digite o valor de c: ");

    //Calcula o discriminate (delta)
    let discriminate = Math.pow(b, 2) - 4 * a * c;

    //Verifica o valor do discriminante para determinar o tipo de raiz
    if (discriminate > 0) {
        //Raízes reais distintas
        let raiz1 = (-b + Math.sqrt(discriminate)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminate)) / (2 * a);
        console.log(`As raízes reais são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`);
    } else if (discriminate === 0) {
        //Raís real única
        let raiz = -b / (2 * a);
        console.log(`A raíz real é: ${raiz.toFixed(2)}`);
    } else {
        //Raízes complexas(Não reais)
        console.log("A equação não possui raízes reais.");
    }

    rl.close();  //Fecha o readline ao terminar
    
}

//Chama a função principal
calcularEquacaoSegundoGrau();