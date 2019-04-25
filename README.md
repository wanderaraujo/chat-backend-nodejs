# NodeJS Chat de conversa

APP backend responsável pelos chats dos usuários nas salas de converas. 

## Regras de funcionamento

Desenvolver uma aplicação web que seja capaz de funcionar como um chat aberto.

Para participar da sala, o usuário precisa inserir uma identificação (nome ou nickname).

Ao entrar na sala do chat, exibir a lista de mensagens enviadas. As mensagens deverão ser ordenadas por data de envio e de forma crescente.

Durante a conversa, o usuário deverá visualizar novas mensagens enviadas e também ser alertado quando um usuário entrar/ou sair da conversa.

O usuário poderá enviar novas mensagens e também sair da conversa.

### Pré-requisito
NPM 6^
NodeJS V10^

## Instalar e executar o projeto

Fazer o donwload deste repositório, para rodar o backend da aplicaçao:

### `npm i`

Execute este comando dentro da pasta raiz para instalar as dependências.<br>

### `npm run dev`

 Execute este comando para iniciar o backend.<br>
A aplicação chat-app [http://localhost:3003](http://localhost:3003) está rodando em modo de desenvolvimento.<br>

## TODO

Melhorias a serem aplicadas em uma nova versão.

### Separar rotas

Separar as resposnsabilidades das rotas, deixando cada rota separada em um arquivo contendo sua funcionalidade designada.

### PM2 e MongoDB/MySql

Instalar o PM2, caso seja necessário subir a app para produção, afim de monitorar e subir novamente a app em caso de crash. <br><br>
Plugar algum banco de dados para armazenar as informações, pois os dados estão sendo armazenados pelo SQLITE dentro do própio projeto.




