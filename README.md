# React Routes Practice

Prática para melhor compreensão do pacote **react-router-dom**. O projeto consiste em um **blog** simples.

# Passo a Passo da prática

## Passo 01 | Presets

**Branch: feature/001-practice_presets**

Essa branch/passo tem como responsabilidade a **instalação das dependências** iniciais, como o projeto **React.js** e seu pacote **react-router-dom**.

Certifique-se que possui o **node.js** instalado em seu ambiente local. Execute `node -v` no terminal de sua perferência para verificar a versão instalada.

![Versão node](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-01-versao-node.png)

Então devemos criar o projeto react com o comando `npx create-react-app frontend` (sendo 'frontend' o nome do projeto/pasta que será criado).

Após a instalação do projeto, vamos acessar a pasta criada ( `cd frontend` ) e instalar o pacote **react-router-dom**, com o comando `npm install react-router-dom` ou `yarn add react-router-dom` (se estiver usando _yarn_).

Finalizada a instalação, podemos abrir uma nova janela de terminal, acessar nossa pasta 'frontend' e rodar `npm start` ou `yarn start` . Automaticamente será aberta uma nova aba no ambiente local, porta 3000 ( `localhost:3000` ), com a página _default_ do projeto React.js.

Com isso estamos prontos para prosseguirmos. Antes de mergearmos com a branch main, uma rápida limpeza nos arquivos e estilos.

## Passo 02 | Estrutura

**Branch: feature/002-project-structure**

Essa branch/passo tem como responsabilidade a **estruturação inicial do projeto** (separar as rotas de páginas, de componentes...).

![Estrutura](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-estrutura.png)

> Organizaremos cada 'setor' do nosso projeto, organizando os passos por commits (para maior facilidade na hora de revisarmos o que foi feito).

Basicamente a estrutura consiste nas pastas:

![API](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-01-api.png)

**src/api**

Onde serão armazenados arquivos que interajam com API e executem requests. No caso tempos arquivos JSON com conteúdo de marcação, por enquanto.

![Components](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-02-components.png)

**src/components**

Pasta dos componentes, que serão (re)utilizados em diferentes páginas e componentes do projeto.

![Pages](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-03-pages.png)

**src/pages**

Local das páginas, que serão chamadas de acordo com as rotas e renderizarão os respectivos componentes.

![Utils](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-04-utils.png)

**src/utils**

Pasta que une funções auxiliares, de apoio (como limpeza de string ou detecção da resolução).

![App](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-05-app.png)

**src/App.js e src/App.css**

Componente principal, a partir do qual são renderizados os demais.

![Index](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-06-index.png)

**index.js e index.css**

Arquivo macro, que inclui inclusive a App. Nele se encontra a `div#root` .

![Routes](https://raw.githubusercontent.com/Marcelo-Diament/react-routes-practice/main/passo-a-passo-01-02-07-routes.png)

**src/routes.js**

Componente responsável pelas rotas do projeto.

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

_**Criando um Header comum**_

Para termos o exato mesmo header em qualquer página, vamos criar o componente (em `src/components/Header` , salvando o `index.js` e seu respectivo estilo - `style.css` ).

_**Criando funções de apoio/utilidade**_

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

Como exportaremos outras funções auxiliares posteriormente, a exportamos assim: `export { cleanString }` . Logo, para utilizá-la basta fazer a importação assim: `import { cleanString } from './utils'` (de acordo com o caminho até o arquivo).

## Passo 03 | Componentes Básicos

**Branch: feature/003-basic-components**

Nessa branch serão criados componentes básicos como uma vitrine de cards, o card, um cabeçalho padrão para as páginas e um componente de artigo (que posteriormente poderemos quebrar em pedaços menores).

_**PageHeader - cabeçalho de página**_

Basicamente criamos o componente, o preparamos para receber um título e uma introdução e criamos seu estilo. Então importamos o componente nas páginas do projeto.

_**Vitrine**_

Componente destinado a exibir resumos (ou previews) de posts. Esse componente deve receber uma categoria ou tópico para buscar e exibir seus artigos. Pode ou não receber o parâmetro `topic` (se receber, exibe os posts filtrados, caso contrário, exibe todos eles).

Tanto para funções que retornam todos os registros, quanto para as funções de auxílio (em `src/api` para filtragem de registros), os tópicos são recebidos em arrays de objetos com essa formatação:

``` json
{
    "id": 1,
    "icon": "",
    "image": "",
    "description": "Artigos sobre Components",
    "tags": "react|components|reactJS",
    "title": "Components",
    "slug": "components"
}
```

_**Artigo**_

Exibe os detalhes de um post - além de vitrines específicas dos outros artigos do mesmo tópico e links rápidos para os outros tópicos (através do componente Vitrine).

O artigo é recebido nesse formato (tanto pelo Artigo quando pelo Card, componente a ser criado posteriormente):

``` json
{
    "id": 5,
    "author": "Marcelo Diament",
    "categoryId": 2,
    "categoryName": "JSX",
    "createdAt": "01/11/2020",
    "description": "Artigo sobre Lint para JSX",
    "excerpt": "Artigo sobre Lint para JSX",
    "image": "",
    "intro": "Artigo sobre Lint para JSX",
    "link": "/jsx/jsx-lint",
    "slug": "jsx-lint",
    "tags": "react|JSX|reactJS|x",
    "title": "JSX Lint",
    "updatedAt": "02/11/2020"
}
```

## Passo 04 | Componente Card

**Branch: feature/004-Card-Component**

Vamos 'quebrar' o componente Vitrine em mais um componente, Card. Ele receberá um artigo através da Vitrine e exibirá seu resumo em um card.

## Passo 05 | Detect Device

**Branch: feature/005-detectDevice-helper**

Para melhorarmos nosso projeto, antes vamos incluir a feature 'detectDevice' - que reconhece a largura disponível para o site e é atualizada a cada alteração no tamanho da tela reservada ao site.

Para detectarmos a real largura da tela, utilizaremos a propriedade `innerWidth` da `window` e compararemos com alguns breakpoits por nós definidos - ao compararmos a `innerWidth` com nossos breakpoints, definimos o dispositivo em uso (de acordo com a largura/resolução, e não com o dispositivo de fato). Para mantermos os valores atualizados, adicionaremos um `eventListener` atrelado ao evento do tipo `resize` da `window` .

_Nessa branch também resolvemos um pequeno bug causado por um link inexistente._
