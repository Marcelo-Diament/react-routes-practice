# react-routes-practice
Prática para melhor compreensão do pacote **react-router-dom**. O projeto consiste em um **blog** simples.

# Passo a Passo da prática

## Passo 01 | Presets

**Branch: feature/001-practice_presets**

Essa branch/passo tem como responsabilidade a **instalação das dependências** iniciais, como o projeto **React.js** e seu pacote **react-router-dom**.

Certifique-se que possui o **node.js** instalado em seu ambiente local. Execute `node -v` no terminal de sua perferência para verificar a versão instalada.

!['Versão node']('https://github.com/Marcelo-Diament/react-routes-practice/blob/main/passo-a-passo-01-01-versao-node.png')

Então devemos criar o projeto react com o comando `npx create-react-app frontend` (sendo 'frontend' o nome do projeto/pasta que será criado).

Após a instalação do projeto, vamos acessar a pasta criada (`cd frontend`) e instalar o pacote **react-router-dom**, com o comando `npm install react-router-dom` ou `yarn add react-router-dom` (se estiver usando _yarn_).

Finalizada a instalação, podemos abrir uma nova janela de terminal, acessar nossa pasta 'frontend' e rodar `npm start` ou `yarn start`. Automaticamente será aberta uma nova aba no ambiente local, porta 3000 (`localhost:3000`), com a página _default_ do projeto React.js.

Com isso estamos prontos para prosseguirmos. Antes de mergearmos com a branch main, uma rápida limpeza nos arquivos e estilos.

**Branch: feature/002-project-structure**

Essa branch/passo tem como responsabilidade a **estruturação inicial do projeto** (separar as rotas de páginas, de componentes...).

Organizaremos cada 'setor' do nosso projeto, organizando os passos por commits (para maior facilidade na hora de revisarmos o que foi feito).

_**Estilo default**_

Vamos criar um estilo default no arquivo `App.css`, para que possamos visualizar melhor o produto final.