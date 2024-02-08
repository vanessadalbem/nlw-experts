const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas opções é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "Number"
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para exibir uma mensagem de alerta em JavaScript?",
      respostas: [
        "alert( )",
        "confirm( )",
        "prompt( )"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
      respostas: [
        "push( )",
        "pop( )",
        "shift( )"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt( )",
        "toString( )",
        "toFixed( )"
      ],
      correta: 0
    },
    {
      pergunta: "Qual estrutura de controle é usada para executar o código repetidamente enquanto uma condição for verdadeira?",
      respostas: [
        "if",
        "while",
        "for"
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses é um operador de atribuição composto em JavaScript?",
      respostas: [
        "+=",
        "||",
        ">>>"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas opções é uma maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas declarações de função está corretamente definida em JavaScript?",
      respostas: [
        "function minhaFuncao( ) {}",
        "minhaFuncao: function( ) {}",
        "const minhaFuncao = ( ) => {}"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  
  // transforma tudo que eu coloquei no meu documento em Java Script
  const template = document.querySelector('template')
  // new éuma palavra reserada do typescrip para criar coisas novas, chamado de set, adiciona ou tira, mas nao repete.
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    
  // é o conteudo do template com uma função para clonar o nó, (as tags)
    const quizitem = template.content.cloneNode(true)
   
    quizitem.querySelector('h3').textContent = item.pergunta
  
  // toda logica colocada aqui serve para cada resposta
  
  for(let resposta of item.respostas) {
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    // para poder selecionar uma resposta por questão
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    // verificar uma ação que esta acontecendo na tela
    dt.querySelector('input').onchange = (event) => {
      // voce coloca dois = para o valor ser true, se for 3 = ele vai dar sempre false mesmo que vc acerte
      const estaCorreta = event.target.value == item.correta 
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    
    quizitem.querySelector('dl').appendChild(dt)
  
  
  }
  
  
  
  quizitem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela 
    quiz.appendChild(quizitem)
  
  }