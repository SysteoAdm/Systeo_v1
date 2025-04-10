// src/app/data/questions.ts

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'O que significa ser um bom adolescente segundo a Bíblia?',
    options: [
      'Desobedecer aos pais para buscar independência',
      'Seguir os exemplos de Jesus e honrar os pais',
      'Focar apenas nos estudos',
      'Viver como todo mundo vive'
    ]
  },
  {
    id: 2,
    text: 'Qual dessas atitudes demonstra sabedoria?',
    options: [
      'Falar sem pensar',
      'Buscar conselhos dos mais velhos',
      'Reclamar de tudo',
      'Fugir das responsabilidades'
    ]
  },
  {
    id: 3,
    text: 'O que é um sinal de maturidade em um adolescente?',
    options: [
      'Tomar decisões baseadas em sentimentos impulsivos',
      'Fazer o que os amigos mandam sem questionar',
      'Assumir os erros e aprender com eles',
      'Evitar qualquer tipo de conversa com os pais'
    ]
  },
  {
    id: 4,
    text: 'Ser um bom exemplo para outros adolescentes envolve:',
    options: [
      'Fazer o que é certo mesmo quando ninguém está olhando',
      'Seguir a multidão para ser aceito',
      'Postar tudo nas redes sociais para chamar atenção',
      'Evitar responsabilidades a todo custo'
    ]
  },
  {
    id: 5,
    text: 'Qual dessas atitudes mostra falta de sabedoria?',
    options: [
      'Refletir antes de agir',
      'Ser impulsivo e agressivo nas discussões',
      'Ouvir conselhos e ponderar decisões',
      'Buscar aprender com os próprios erros'
    ]
  },
  {
    id: 6,
    text: 'Um adolescente sábio costuma:',
    options: [
      'Ignorar os pais',
      'Tomar decisões pensando nas consequências',
      'Fugir dos problemas',
      'Evitar qualquer tipo de responsabilidade'
    ]
  },
  {
    id: 7,
    text: 'A Bíblia diz que devemos honrar pai e mãe. Qual atitude reflete isso?',
    options: [
      'Fazer birra quando ouve um "não"',
      'Obedecer com respeito mesmo sem concordar',
      'Bater de frente em toda conversa',
      'Se isolar para não ouvir bronca'
    ]
  },
  {
    id: 8,
    text: 'O que caracteriza um amigo sábio?',
    options: [
      'Fala mal dos outros pelas costas',
      'Apoia nas decisões erradas para manter a amizade',
      'Dá conselhos que promovem o bem e a verdade',
      'Coloca os amigos acima da família'
    ]
  },
  {
    id: 9,
    text: 'Como um adolescente pode se preparar para o futuro com sabedoria?',
    options: [
      'Aproveitando o tempo para aprender e crescer',
      'Deixando tudo para última hora',
      'Vivendo como se não houvesse amanhã',
      'Ignorando os conselhos de quem tem mais experiência'
    ]
  },
  {
    id: 10,
    text: 'Em Provérbios, a sabedoria é comparada a:',
    options: [
      'Um castigo inevitável',
      'Um tesouro precioso',
      'Uma rotina chata',
      'Algo para pessoas mais velhas'
    ]
  }
];
