Cálculo das Raízes de uma Equação do Segundo Grau com a Fórmula de Bhaskara

Este projeto implementa um programa em JavaScript para calcular as raízes reais de uma equação do segundo grau utilizando a fórmula de Bhaskara. O programa pede ao usuário os coeficientes aa, bb e cc da equação e calcula as raízes reais, caso existam.

Por que Usamos o readline no Node.js

Em JavaScript, a função prompt é normalmente utilizada em navegadores para capturar entradas do usuário. No entanto, o Node.js é um ambiente de execução JavaScript que roda no lado do servidor e não possui suporte nativo para prompt. Por isso, usamos o módulo readline no Node.js para capturar entradas do usuário diretamente no terminal.

Como o readline Funciona

O módulo readline permite que o programa espere e capture a entrada do usuário no terminal, simulando o comportamento do prompt nos navegadores. Aqui está um resumo de como o readline é configurado e utilizado:

1.Configuração do readline: Criamos uma interface com readline.createInterface, que define as entradas e saídas do terminal.

2.Função getInput: Esta função usa rl.question para exibir uma pergunta e captura a resposta. Ela retorna a entrada convertida para um número decimal, pois estamos lidando com valores numéricos.

3.Fechamento do readline: Após capturar todos os valores necessários, usamos rl.close() para finalizar a interface readline.


A Fórmula de Bhaskara

A fórmula de Bhaskara é usada para resolver equações do segundo grau, que têm a forma:

ax2+bx+c=0

ax2+bx+c=0

Onde:
a, b e c são coeficientes conhecidos.
x representa a variável que queremos encontrar


Certifique-se de ter o Node.js instalado.


Salve o código em um arquivo, por exemplo, bhaskara.js.

No terminal, navegue até o diretório onde o arquivo está salvo.

Execute o programa com o comando:

        node bhaskara.js

O programa solicitará os valores de a, b e c e calculará as raízes da equação, exibindo o resultado no terminal.
