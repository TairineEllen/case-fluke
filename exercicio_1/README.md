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

## Como funciona

A aplicação pode ser acessada via terminal ou via Postman/Insomnia. 

### Via terminal
Para iniciar:

```bash
node index.js
```

Um menu principal irá surgir com as seguintes opções:
1. Ver lugares diponíveis e reservar uma poltrona
2. Gerenciar as reservas que já existem
3. Visualizar o valor arrecadado de acordo com o número de reservas confirmadas
4. Sair da aplicação

Dentro dos submenus você encontra as opções para reservar uma poltrona, confirmar ou cancelar uma reserva, ver os lugares disponíveis e o mapa de lugares com seus respectivos status.
Você pode também ver o número total de lugares disponíveis, reservados e confirmados, assim como o valor total de dinheiro arrecadado pelo teatro.

### Via Postman/Insomnia

```bash
# Instalar as dependências
npm install
# Executar o servidor
npm run dev
```

#### Rotas

| Rotas            |                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------- | 
| GET/livres       | Listar todos os lugares livres                                                      |
| GET/mapa         | Visualizar o mapa de lugares                                                        |
| GET/total        | Visualizar total de lugares disponíveis, lugares reservados e lugares confirmados   |
| GET/arrecadacao  | Visualizar total de dinheiro arrecadado pelo teatro                                 |
| POST/reservar    | Realizar uma reserva                                                                |
| PUT/confimar     | Confirmar uma reserva                                                               |
| PUT/remover      | Remover uma reserva                                                                 |

