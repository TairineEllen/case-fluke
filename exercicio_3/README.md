# Exercício 3
------------
Utilizando algum framework de desenvolvimento web ou HTML, JavaScript (ou JQuery) e CSS (ou algum framework css) crie uma aplicação de to-dos (afazeres).

A aplicação deve:
- Ter 3 abas onde ficará as atividades: a fazer, em progresso e finalizado;
- Ter um input de texto onde o usuário poderá inserir suas atividades;
- Ter um botão para limpar todas as tarefas;
- Ter um botão em cada tarefa para excluir;

Funcionalidade:
- Ao inserir alguma atividade no input, ela deve ir automaticamente para a aba "a fazer";
- As atividades que estão na aba "a fazer" deverá ter um botão que mova a atividade para a aba "em progresso";
- Por sua vez as atividades ques estão na aba "em progresso" deverá ter um botão que mova para aba "finalizado";

Ah, e não esqueça de caprichar no design!

Adicional:
Caso o usuário feche a página e abra novamente os dados inseridos anteriormente devem estar presentes.

------------

## Como funciona
É só digitar no seu terminal:

`npm start`

A aplicação está pronta para receber as tarefas que serão adicionadas diretamente na aba "A fazer".
Quando iniciar a tarefa, só clicar no símbolo de play que ela vai pra aba "Em progresso". Quando ela estiver na aba "Em progresso", um símbolo de check vai aparecer. Ao clicar no símbolo, a tarefa vai finalmente para a aba "Finalizado".
Para excluir tarefas, você pode clicar no símbolo de lixeira que existe em cada uma ou limpar todas as tarefas de uma vez clicando no botão "Limpar tarefas".

