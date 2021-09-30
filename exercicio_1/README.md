# Exercício 1
------------
Crie uma aplicação, utilizando uma linguagem de programação de sua escolha, que gerencia as reservas, confirmações e remoção de reservas de poltronas de um teatro. O teatro possui 100 poltronas, divididas em 10 filas de 10 poltronas.

Essa aplicação deverá ter como funcionalidade:
-  Mostrar todos os lugares disponíveis.
-  Fazer uma reserva
-  Confirmar uma reserva
-  Retirar uma reserva (confirmada ou não confirmada)
-  Mostrar o mapa de lugares (Reservados, Confirmados e Livres)
-  Calcular o valor de arrecadação sendo que: Cada poltrona confirmada vale R$ 20,00
-  Mostrar o total de lugares reservados
-  Mostrar o total de lugares confirmados
-  Mostrar o total de lugares disponíveis

Utilize todos os recursos necessários para que a aplicação seja de fácil utilização para o usuário.
Utilize as siglas: L para Livre; C para Confirmado; e R para reservado)

------------

#### Beleza, e como funciona?
Para ter acesso ao menu principal, é só digitar no seu terminal:

`node index.js`

Pronto, agora é só ler o menu e digitar a opção correspondente ao que você quer fazer. No menu principal, você pode:
1. Ver lugares diponíveis e reservar uma poltrona
2. Gerenciar as reservas que já existem
3. Visualizar o valor arrecadado de acordo com o número de reservas confirmadas
4. Sair da aplicação

#### Entendi, quero ver os lugares disponíveis e reservar uma poltrona
Ao escolher a opção 1, você verá todas as poltronas livres antes de escolher a sua. Há também uma opção para voltar ao menu principal.

#### Reservei. Já tá tudo certo?
Nops, agora precisamos confirmar a reserva.. vai que você desiste de assistir a peça né?
Pra confirmar ou retirar sua reserva, é só escolher a opção 2 no menu principal. Lá você verá o número total de poltronas livres, de poltronas reservadas e poltronas confirmadas.
Agora é só escolher uma das opções abaixo e digitar a sua poltrona:
1. Confirmar reserva
2. Retirar reserva

#### Show. Será que estamos ricos?
Pra descobrir, só clicar na opção 3 do menu principal. Lá encontramos o valor total de dinheiro arrecadado, cada reserva confirmada vale 20 reais.
