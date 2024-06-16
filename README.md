# MARA

O login e redirecionamento acontece a partir do `index.html`.

## Stages

cada stage pode conter sua terna de arquivos (`html` - `css` - `js`).

A estrutura do jogo é um grafo do tipo:

```js
{
  nodes: {
    1: { text: ["text 1.", "text 2", "text 3"], choices: [2, 3] },
    2: { text: ["text 4", "text 4"], choices: [4, 5] },
    3: { text: ["text 5", "text 6"], choices: [6, 7] },
    4: { text: ["text 7", "text 8"], choices: [] },
    5: { text: ["text 9", "text 10"], choices: [] },
  },
  startNode: 1
}
```

cada edge contém um `text` e um `choices`.

O `text` guarda todos os textos que seram exibidos ao player, ou seja, é o enredo da história.

Uma vez que o enredo chega no final as `choices` aparecem como botões, cada choice representa um novo edge.

#### Examples:

```js
  nodes: {
    1: { text: ["Olá player!", "Qual caminho você dejesa seguir?"], choices: [2, 3] },
    2: { text: ["Caminho 2", "você escolheu o caminho 2", "Fim!"], choices: [] },
    3: { text: ["Caminho 3", "você escolheu o caminho 3", "Fim!"], choices: [] },
  },
  startNode: 1
}
```

Aparecerá o dialogo:

> Olá player!

> Qual caminho você deseja seguir?

> `Caminho 2` | `Caminho 3`

Caminho 2 é escolhido:

> `você escolheu o caminho 2`

> Fim!

Note que o `|` foi usado para representar "or", uma escolha entre duas.

Como esses são os caminhos finais o attributo `choices` é uma lista vazia, não podendo transitar entre os edges. Significando que o jogo acabou.
