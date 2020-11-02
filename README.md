# react-routes-practice

Prática para melhor compreensão do pacote **react-router-dom**. O projeto consiste em um **blog** simples.

# Passo a Passo da prática

## Passo 01 | Presets

**Branch: feature/001-practice_presets**

Essa branch/passo tem como responsabilidade a **instalação das dependências** iniciais, como o projeto **React.js** e seu pacote **react-router-dom**.

Certifique-se que possui o **node.js** instalado em seu ambiente local. Execute `node -v` no terminal de sua perferência para verificar a versão instalada.

!['Versão node']('https://github.com/Marcelo-Diament/react-routes-practice/blob/main/passo-a-passo-01-01-versao-node.png')

Então devemos criar o projeto react com o comando `npx create-react-app frontend` (sendo 'frontend' o nome do projeto/pasta que será criado).

Após a instalação do projeto, vamos acessar a pasta criada ( `cd frontend` ) e instalar o pacote **react-router-dom**, com o comando `npm install react-router-dom` ou `yarn add react-router-dom` (se estiver usando _yarn_).

Finalizada a instalação, podemos abrir uma nova janela de terminal, acessar nossa pasta 'frontend' e rodar `npm start` ou `yarn start` . Automaticamente será aberta uma nova aba no ambiente local, porta 3000 ( `localhost:3000` ), com a página _default_ do projeto React.js.

Com isso estamos prontos para prosseguirmos. Antes de mergearmos com a branch main, uma rápida limpeza nos arquivos e estilos.

**Branch: feature/002-project-structure**

Essa branch/passo tem como responsabilidade a **estruturação inicial do projeto** (separar as rotas de páginas, de componentes...).

Organizaremos cada 'setor' do nosso projeto, organizando os passos por commits (para maior facilidade na hora de revisarmos o que foi feito).

_**Estilo default**_

Vamos criar um estilo default no arquivo `App.css` , para que possamos visualizar melhor o produto final.

_**Criando nossas rotas**_

Agora precisamos definir nossas rotas (qual URL carrega que componente). Em seguida criaremos todos esses componentes.

_**Importando nosso componente Routes**_

Dentro do `App.js` , vamos importar o componente Routes ( `routes.js` , criado no passo anterior).

_**Criando as páginas**_

Conforme declaramos nas rotas (trecho de código mais abaixo), precisamos criar cada um desses componentes/páginas. Vamos começar pela pasta `pages` .

``` jsx
< Route path = "/sobre"
component = {
    SobrePage
}
/> <
Route exact path = "/topicos/:topico/:artigo"
component = {
    ArtigoPage
}
/> <
Route exact path = "/topicos/:topico"
component = {
    TopicoPage
}
/> <
Route exact path = "/topicos"
component = {
    TopicosPage
}
/> <
Route path = "/"
component = {
    HomePage
}
/>
```

**Criando um Header comum**

Para termos o exato mesmo header em qualquer página, vamos criar o componente (em `src/components/Header` , salvando o `index.js` e seu respectivo estilo - `style.css` ).

**Criando funções de apoio/utilidade**

A primeira função de apoio que criaremos será a `cleanString()` : ela receberá um parâmetro obrigatório - a `string` - e outros 2 opcionais ( `spaceToHyphen` (default `false` ) e `keepHyphen` = (default `true` ), a primeira transforma espaços em hífens e a segunda mantém ou remove os hífens da string). A função é assim:

``` js
const cleanString = (string, spaceToHyphen = false, keepHyphen = true) => {
    let stringClean = string
        .replace(/á|ä|â|à|ã/gi, 'a')
        .replace(/é|ë|ê|è/gi, 'e')
        .replace(/í|ï|î|ì/gi, 'i')
        .replace(/ó|ö|ô|ò|õ/gi, 'o')
        .replace(/ú|ü|û|ù/gi, 'u')
        .replace(/ç/gi, 'c')
        .toLowerCase()
    let stringHyphenKeep = !keepHyphen ? stringClean.replace(/-/gi, '') : stringClean
    stringClean = spaceToHyphen ? stringHyphenKeep.replace(/\s/gi, '-') : stringHyphenKeep.replace(/\s/gi, '')
    return stringClean
}
```
Como exportaremos outras funções auxiliares posteriormente, a exportamos assim: `export { cleanString }`. Logo, para utilizá-la basta fazer a importação assim: `import { cleanString } from './utils'` (de acordo com o caminho até o arquivo).