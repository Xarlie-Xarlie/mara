// Define the graph structure with more complex texts as arrays
const gameGraph = {
    nodes: {
      1: { text: ["Chegando na cidade de Grajaú, começou a questionar os moradores sobre a aparição de tal criatura. Uns o descreviam com cara de cachorro, já outras diziam que ele tinha rosto de tamanduá, alguns alegaram já terem visto suas pegadas redondas no meio da selva, um monstro peludo que vive nas florestas, outros não acreditavam em sua existência, mas outros apenas duvidavam.", "Algumas pessoas falaram do desaparecimento de algumas crianças e disseram que era pra Nickname tentar falar com os indígenas da região, pois por eles viverem mais dentro das tribos e terem conhecimentos ancestrais, poderiam fornecer informações à ele (a).", "Depois de recolher informações, Nickname resolve ir em busca de uma tribo indígena Guajajara, que fica na localidade. Mata adentro ele (a) chega na tribo e busca interrogar algumas pessoas. Todos o aconselharam a esquecer essa história, que ninguém deve se meter com o Capelobo, mas ele (a) não desiste tão fácil!.", "Pergunta se podia passar a noite ali, o Pajé permite, mas o adverte que ele não deve sair a noite pois os bichos da mata não o conhecem e podem tentar pegá-lo, ele concorda. Durante a noite, ele acorda muito apertado e não consegue se segurar, então decide levantar rapidinho para se aliviar. Então ele (a) ouviu um barulho e viu uma luz,"], choices: [2, 3, 4] },
      2: { text: ["Investigar a luz.", "seguiu e encontrou um cercado, parecendo uma gaiola, feito de troncos e arames, uma parte estava quebrada, ele entrou para ver, havia tecidos rasgados, marcas de arranhões, restos de pedaços de carne no chão, pelos espalhados. O pajé aparece atrás de Nickname, que se assusta."], choices: [5, 6] },
      3: { text: ["Esperar até o amanhecer.", "Levantou cedo e percorreu o caminho para o qual luz misteriosa tinha seguido e encontrou um cercado, parecendo uma gaiola, feito de troncos e arames, uma parte estava quebrada, ele entrou para ver, havia tecidos rasgados, marcas de arranhões, restos de pedaços de carne no chão, pelos espalhados. O pajé aparece atrás de Nickname, que se assusta."], choices: [5, 6] },
      4: { text: ["pedir ajuda.", "Como não encontrou ajuda, seguiu e encontrou um cercado, parecendo uma gaiola, feito de troncos e arames, uma parte estava quebrada, ele entrou para ver, havia tecidos rasgados, marcas de arranhões, restos de pedaços de carne no chão, pelos espalhados. O pajé aparece atrás de Nickname, que se assusta."], choices: [5, 6] },
      5: { text: ["Gritar por ajuda correr para a mata.", "Após o susto é procurado e levado de volta a aldeia para conversar com o Pajé."], choices: [7] },
      6: { text: ["Questionar o Pajé sobre o que foi encontrado.",], choices: [7] },
      7: { text: ["Ouvir a história do Pajé.", "- Eu disse que você não deveria sair", "- O que é isso?! O que vocês estão escondendo?!", "- Filho, vamos embora daqui.", "- Não sem antes saber da verdade!", "- Eu te conto, mas vamos sair daqui!", "Dentro de uma Oca, o Pajé conta tudo.", "- A verdade, é que todo capelobo é originado de índio ou india, que fica muito velho (a) e não chega a morrer. A aldeia toma de conta dos índios velhos, e prende em cercados de madeiras quando estão com unhas, cabelos e dentes enormes, os índios presos nesses cercados são alimentados com carne crua, pois se ficarem soltos rasgam e comem os indiozinhos. Mas um dia, esqueceram de alimentar o monstro, ele ficou furioso e de algum jeito conseguiu fugir, meu filho.", "- Então as crianças desaparecidas…", "- Sim, provavelmente estão sendo vítimas do Capelobo.", "- ENTÃO VOCÊS ESTÃO AQUI PARADOS SEM FAZER NADA SABENDO QUE ISSO ERA DEVER DE VOCÊS??!!!", "- Não diga isso! Dia e noite nosso guerreiros estão em busca do monstro, para proteger não só nossa tribo, mas a cidade inteira. As pessoas só não podem saber, seria um escândalo.", "Então após ouvir a verdade ele (a) decide:"], choices: [8, 9, 10] },
      8: { text: ["Oferecer ajuda.", "Nickname, com um olhar determinado, respondeu:", "- Quero ajudar. Diga-me o que posso fazer.", "O pajé, impressionado com a coragem de Nickname, hesitou por um momento antes de responder: — Você pode vir conosco. Mas deve seguir nossas regras e instruções. Esta criatura é extremamente perigosa."], choices: [11] },
      9: { text: ["Reportar à cidade.", "Acidade faz pouco caso e Nickname decide retornar à aldeia para tentar resolver o problema."], choices: [11] },
      10: { text: ["Ir embora.", "Nickname sai da aldeida bravo  e vai ao encontro do Capelobo sozinho", "Nickname encontra Capelobo e confronta-o", "No confronto ele é gravemente ferido e encontra a morte", "FIM"], choices: [] },
      11: { text: ["Junto com o povo da aldeia formularam uma maneira de prender o monstro", "Naquela mesma noite, Nickname foi equipado com armas e amuletos de proteção tradicionais pelos guerreiros da tribo. Juntos, eles se embrenharam na floresta, movendo-se em silêncio e em formação, atentos a qualquer sinal do Capelobo. A tensão era palpável, o som noturno da selva amplificando cada passo.", "Horas se passaram até que, finalmente, um dos guerreiros avistou pegadas frescas, pegadas redondas, inconfundíveis. Seguiram-nas com cautela, os sentidos aguçados pela adrenalina. De repente, um grito agudo rasgou a noite, e todos correram na direção do som.", "Ali, em uma clareira, estava o Capelobo. Uma criatura horrenda, com corpo peludo e uma cabeça que lembrava um cruzamento entre cachorro e tamanduá, olhos ferozes refletindo a luz das tochas. Estava cercado, encurralado pelos guerreiros da tribo.", "A batalha foi feroz, mas coordenada. Usando redes e lanças, os guerreiros conseguiram imobilizar a fera, que lutou violentamente, rugindo e tentando escapar. Nickname, mesmo com o coração na garganta, ajudou a manter as redes firmes, seguindo as instruções dos guerreiros experientes.", "Finalmente, com um esforço conjunto, conseguiram prender o Capelobo em um novo cercado reforçado. A criatura, exausta e dominada, soltou um último rosnado antes de se acalmar, resignada ao seu destino.", "Com a fera capturada, os guerreiros e Nickname voltaram à aldeia, carregando o Capelobo em segurança. O pajé, ao ver o monstro preso novamente, suspirou aliviado: — Você nos ajudou muito, Nickname. Agora podemos trabalhar para garantir que ele nunca mais escape.", "Nickname, ainda respirando fundo do esforço e da tensão, agradeceu ao pajé e aosguerreiros pela confiança e pela oportunidade de ajudar. Ele sabia que havia sido parte de algo importante, algo que protegia vidas e mantinha a paz.", "Depois de finalmente derrotarem o Capelobo, todos festejam muito e em seguida Nickname decide:"], choices: [12, 13] },
      12: { text: ["Ficar mais tempo para festejar junto com a tribo e aprender sobre suas lendas.", "Depois de algum tempo junto da tribo, Nickname se despediu da tribo. O pajé e os guerreiros agradeceram novamente, e ele prometeu que levaria a história consigo, mas de uma forma que honrasse o segredo e a segurança da tribo.", "Ao retornar à cidade de Grajaú, Nickname viu os moradores mais tranquilos, sem saber do que havia se passado na floresta. Ele sabia que seu trabalho ali estava concluído, pelo menos por enquanto.", "Agradeceu silenciosamente aos espíritos da floresta e aos ancestrais pela proteção e pela coragem que o guiaram.", "Com a missão cumprida, Nickname partiu decidindo terminar sua aventura nas terras maranhenses,"], choices: [14] },
      13: { text: ["Ter uma conversa com o Pajé, fazendo-o a se comprometer a manter o capelobo preso.", "No dia seguinte, Nickname se despediu da tribo. O pajé e os guerreiros agradeceram novamente, e ele prometeu que levaria a história consigo, mas de uma forma que honrasse o segredo e a segurança da tribo.", "Ao retornar à cidade de Grajaú, Nickname viu os moradores mais tranquilos, sem saber do que havia se passado na floresta. Ele sabia que seu trabalho ali estava concluído, pelo menos por enquanto.", "Agradeceu silenciosamente aos espíritos da floresta e aos ancestrais pela proteção e pela coragem que o guiaram.", "Com a missão cumprida, Nickname partiu decidindo terminar sua aventura nas terras maranhenses,"], choices: [14] },
      14: { text: ["Ir para São Luís"], choices: [] },
    },
    startNode: 1
  };
  
  // Current state to keep track of node and text position
  let currentNodeId = gameGraph.startNode;
  let currentTextIndex = 0;
  
  // Function to display the current part of the node
  function displayCurrentText() {
    const node = gameGraph.nodes[currentNodeId];
    const storyDiv = document.getElementById('story');
    const nextButton = document.getElementById('next-button');
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
  
    // Update the story text
    storyDiv.textContent = node.text[currentTextIndex];
  
    // If there is more text to display, show the next button
    if (currentTextIndex < node.text.length - 1) {
      nextButton.style.display = 'block';
      choicesDiv.style.display = 'none';
    } else {
      nextButton.style.display = 'none';
      choicesDiv.style.display = 'block';
  
      // Add buttons for each choice
      node.choices.forEach(choiceId => {
        const button = document.createElement('button');
        button.textContent = gameGraph.nodes[choiceId].text[0];  // First part of the text as button text
        button.className = 'choice-button';
        button.onclick = () => {
          currentNodeId = choiceId;
          currentTextIndex = 0;
          displayCurrentText();
        };
        choicesDiv.appendChild(button);
      });
    }
  }
  
  // Function to handle the next button click
  function handleNextClick() {
    currentTextIndex++;
    displayCurrentText();
  }
  
  // Attach the next button click handler
  document.getElementById('next-button').onclick = handleNextClick;
  
  // Start the game
  displayCurrentText();
  