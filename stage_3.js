// Define the graph structure with more complex texts as arrays
const gameGraph = {
    nodes: {
      1: { text: ["Chegando na Ilha em uma sexta-feira, começou a turistar pelo Centro Histórico.", "– A ilha de São Luís fica bonita até hoje, impressionante.", "O motorista que o levou até lá responde: – Uma das únicas coisas da cidade que ficou bem preservada. Se você for até o Monte Castelo, provavelmente vai se assustar com o estado.", "– Ali naqueles casarões é onde fica o centro histórico?", "– Sim, é aqui mesmo. Tem hospedagem aqui do lado, caso queira ficar próximo dessa região.", "– Agradeço, acho que vou ficar por aqui mesmo.", "Ao explorar as ruas de pedra e os casarões coloniais, Nickname ouviu sobre a lenda da Serpente Encantada e lembrou-se que em sua infância ouvia falar do tal ser místico. Diziam que uma enorme serpente dormia sob a cidade, com o corpo enroscado em torno da ilha e a cabeça descansando nas profundezas da terra. A lenda afirma que, se a cabeça da serpente se movesse, a ilha inteira seria tragada pelo mar.", "Curioso e cético, Nickname decidiu investigar mais a fundo e foi na Biblioteca Benedito.", "– Oi, boa tarde! O que posso fazer pelo senhor? Pergunta a recpcionista.", "– Boa tarde! Só conferindo por aqui mesmo.", "– Tudo bem, qualquer coisa, avise.", "Então Nickname decide ir na sessão de:"], choices: [2, 3] },

      2: { text: ["Folclore.", "– Tudo bem, é nessa de folclore mesmo.", "– O papel tá rasgado, mas ainda dá pra ler um pouco dessa placa.", "– Achei!"], choices: [4] },

      3: { text: ["Ficcão.", "– Não é possível que não esteja aqui", "– Moço, precisando de ajuda?", "– É, eu tô meio perdido mesmo. Sabe onde posso encontrar um livro sobre a serpente encantada?", "– Claro, fica ali na seção à esquerda. É meio apagada, mas é lá que fica os livros de folclore mesmo.", "– Achei! Responde Nickname."], choices: [4] },

      4: { text: ["Ler o manuscrito que detalha a história da serpente.", "Segundo o documento, a Serpente Encantada foi colocada em sono profundo por um poderoso xamã indígena para proteger a ilha de invasores. Contudo, um presságio sombrio no manuscrito alertava que a serpente poderia despertar se energias malignas perturbassem seu sono.", "– Ainda bem que não passa de história.", "– Enfim, acho que é is-", "Enquanto Nickname terminava a pesquisava, começaram a surgir pequenos tremores.", "– Isso é um terremoto?", "Enquanto os tremores continuam Nickaname decide:"], choices: [5, 6] },

      5: { text: ["Ficar na biblioteca.", "– Você tá bem?. pergunta para a asssistente", "– Tô sim, só caí.", "– Tudo bem, pega aqui na minha mão e vem pra baixo da mesa. Não vale a pena sair quando tem terremoto, se proteja aqui mesmo.", "Decidido a descobrir a verdade, Nickname passou a noite na biblioteca, cruzando dados e analisando mapas antigos e encontra o local onde a serpente supostamente estaria hibernando.", "– Entrar na toca da Serpente Encantada é uma coisa que eu realmente não esperava pra hoje.", "– Tô sentindo um frio na barriga.", "Andando pelas proximidades do local descrita no manuscrito encontra uma passagem secreta cheia de musgos e decide"], choices: [7, 8] },

      6: { text: ["Fugir do local dos tremores.", "– Acho que agora está tudo bem! Acho que vou ter que sair agora, preciso voltar pra casa o mais rápido possível.", "– Não sou de acreditar em conto de fadas, mas isso parece coisa da serpente. Vou retornar para o hotel", "Foi então que uma figura fantasmagórica apareceu – a icônica Carruagem de Ana Jansen, um espectro que aterrorizava a cidade há séculos.", "Ana Jansen, foi uma senhora de engenho cruel e impiedosa, famosa por seu tratamento brutal aos escravos. Diziam que, como punição por suas atrocidades, sua alma estava condenada a vagar eternamente, dirigindo uma carruagem fantasma puxada por cavalos decapitados, com escravos mutilados servindo de cocheiros.", "Nickname decide:"], choices: [13, 14] },

      7: { text: ["Entrar", "– Que lugar escuro!", "Anda mais um pouco e encntra uma sala e dentro da sala, há um altar", "– O altar! Que nem nas escrituras!", "Quando do nada espíritos surgem do chão", "– O QUE É ISSO?", "Espíritos o cercam e ele decide:"], choices: [9, 10] },

      8: { text: ["Voltar para o hotel.", "– Sinto que a partir do momento que eu entrar aí, vou morrer.", "Nickname volta para o hotel", "– Dia cansativo… Mas não posso parar agora. Preciso desvendar mais da Serpente.", "No amanhecer, o sol raia em sua cara, o levantando.", "Quando acorda percebe que todas as casas ao seu redor foram destruídas", "– Meu Deus…", "Olha para cima e observa uma criatura com escamas gigantes percorre o céu, gerando sombra onde Nickname está e...", "FIM"], choices: [] },

      9: { text: ["Perguntar calmamente.", "– Por que vocês tão fazendo isso?", "Acordar a serpente é muito perigoso e acho que vocês tem noção disso", "– Olha aqui, acordar a serpente é uma boa solução. – Imagino que você não saiba, mas éramos escravos. – Sofremos muito em vida, não tivemos sorte em conseguir liberdade. – Estamos fazendo isso como vingança. – Nós poderíamos finalmente destruir a cidade que nos fez tão mal. – Todos os descendentes daqueles que nos maltrataram. – Já que todos daquela época, caso não estejam vagando por aí, já desceram ao inferno.", "Então os espíritos o cercam para fazer com que se assuste e ele decide:"], choices: [11, 12] },

      10: { text: ["Insulta-los.", "– Ah, vocês realmente não prestam, né? – Não basta serem espíritos, vocês ainda tem que incomodar a vida dos que vivem ali em cima. – Vi senhoras de idade gritando por sua causa, o que vocês fazem aqui no fim das contas? – É saudades da vida terrível que tiveram enquanto respiravam?– É ódio por quem não fez mal algum à vocês?", "Surgem mais espíritos abaixo de você. Revoltados, eles te puxam para baixo do chão. O plano de acordar a serpente é concluído", "FIM"], choices: [] },

      11: { text: ["Ter empatia e ajudar os espíritos", "Nickname, movido pela compaixão, explicou que a vingança não traria paz a seus espíritos. Ele contou sobre a importância de lembrar a história e os sacrifícios feitos, para que as atrocidades nunca fossem esquecidas nem repetidas. Nickname realiza um ritual de reconciliação para que eles podessem passar para o próximo plano em paz.", "Com o ritual realizado os espíritos se dissipam, suas energias malévolas substituídas por um brilho tranquilo. e com isso a serpente se acalma novamente e mais uma vez entra em hibernação.", "Com o retorno à superfície, Nickname notou que os tremores haviam cessado. A Carruagem de Ana Jansen não mais apareceu, e a cidade voltou ao seu ritmo normal. Nickname escreveu detalhadamente sobre a experiência, deixando um relato que se tornaria um marco na história de São Luís.", "Assim, a lenda da Serpente Encantada e a Carruagem de Ana Jansen ganharam um novo capítulo, onde um historiador corajoso conseguiu trazer paz às almas inquietas e preservar a segurança da ilha, mostrando que a memória e a reconciliação podem ser poderosas ferramentas contra os horrores do passado."], choices: [] },

      12: { text: ["Insultar os espíritos", "– Ah, vocês realmente não prestam, né? – Não basta serem espíritos, vocês ainda tem que incomodar a vida dos que vivem ali em cima. – Vi senhoras de idade gritando por sua causa, o que vocês fazem aqui no fim das contas? – É saudades da vida terrível que tiveram enquanto respiravam?– É ódio por quem não fez mal algum à vocês?", "Surgem mais espíritos abaixo de você. Revoltados, eles te puxam para baixo do chão. O plano de acordar a serpente é concluído", "FIM"], choices: [] },

      13: { text: ["Seguir a carruagem.", "– Minhas pernas estão tão cansadas… Preciso seguir de qualquer forma.", "Depois de um tempo seguindo-a, ela para.", "Nickname se esconde atrás de uma lixeira.", "Ana Jansen e sua carruagem desaparecem lentamente.", "– Parar logo nesse lugar depois de tanta cavalgada? Fala sério…", "Mais na frente, você encontra uma entrada com musgos e decide:"], choices: [15, 16] },

      14: { text: ["Retornar para o hotel.", "– Dia cansativo… vou parar por hoje. Preciso desvendar mais da Serpente, mas depois que dormir", "Nickname deita na cama e dorme", "No amanhecer, o sol raia em sua cara, o levantando.", "Quando acorda percebe que todas as casas ao seu redor foram destruídas", "– Meu Deus…", "Olha para cima e observa uma criatura com escamas gigantes percorre o céu, gerando sombra onde Nickname está e...", "FIM"], choices: [] },

      15: { text: ["Entrar.", "– Que lugar escuro!", "Anda mais um pouco e encntra uma sala e dentro da sala, há um altar", "– O altar! Que nem nas escrituras!", "Quando do nada espíritos surgem do chão", "– O QUE É ISSO?", "Espíritos o cercam e ele decide:"], choices: [17, 18] },

      16: { text: ["Voltar para casa.", "– Sinto que a partir do momento que eu entrar aí, vou morrer.", "– Dia cansativo… vou parar por hoje. Preciso desvendar mais da Ana Jansen, mas depois que dormir", "Nickname deita na cama e dorme", "No amanhecer, o sol raia em sua cara, o levantando.", "Quando acorda percebe que todas as casas ao seu redor foram destruídas", "– Meu Deus…", "Olha para cima e observa uma criatura com escamas gigantes percorre o céu, gerando sombra onde Nickname está e...", "FIM"], choices: [] },

      17: { text: ["Ter empatia e ajudar os espíritos", "Nickname, movido pela compaixão, explicou que a vingança não traria paz a seus espíritos. Ele contou sobre a importância de lembrar a história e os sacrifícios feitos, para que as atrocidades nunca fossem esquecidas nem repetidas. Nickname realiza um ritual de reconciliação para que eles podessem passar para o próximo plano em paz.", "Com o ritual realizado os espíritos se dissipam, suas energias malévolas substituídas por um brilho tranquilo. e com isso a serpente se acalma novamente e mais uma vez entra em hibernação.", "Com o retorno à superfície, Nickname notou que os tremores haviam cessado. A Carruagem de Ana Jansen não mais apareceu, e a cidade voltou ao seu ritmo normal. Nickname escreveu detalhadamente sobre a experiência, deixando um relato que se tornaria um marco na história de São Luís.", "Assim, a lenda da Serpente Encantada e a Carruagem de Ana Jansen ganharam um novo capítulo, onde um historiador corajoso conseguiu trazer paz às almas inquietas e preservar a segurança da ilha, mostrando que a memória e a reconciliação podem ser poderosas ferramentas contra os horrores do passado."], choices: [] },
      
      18: { text: ["Insultar os espíritos", "– Ah, vocês realmente não prestam, né? – Não basta serem espíritos, vocês ainda tem que incomodar a vida dos que vivem ali em cima. – Vi senhoras de idade gritando por sua causa, o que vocês fazem aqui no fim das contas? – É saudades da vida terrível que tiveram enquanto respiravam?– É ódio por quem não fez mal algum à vocês?", "Surgem mais espíritos abaixo de você. Revoltados, eles te puxam para baixo do chão. O plano de acordar a serpente é concluído", "FIM"], choices: [] },
      
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
  