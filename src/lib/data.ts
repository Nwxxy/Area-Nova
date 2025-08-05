import type { ContentItem } from './types';

export const modules: ContentItem[] = [
  {
    id: 1,
    title: 'Módulo 1: Introdução à Saboaria',
    description: 'Aprenda os conceitos básicos, segurança e materiais necessários para começar sua jornada.',
    image: 'https://placehold.co/600x400',
    slug: 'introducao-a-saboaria',
    progress: 75,
    lessons: [
      { id: 1, title: 'A Fascinante História do Sabão', duration: '10 min' },
      { id: 2, title: 'Equipamentos e Ingredientes Essenciais', duration: '15 min' },
      { id: 3, title: 'Segurança em Primeiro Lugar: Manuseando a Soda Cáustica', duration: '20 min' },
      { id: 4, title: 'Calculando sua Primeira Receita', duration: '18 min' },
    ],
  },
  {
    id: 2,
    title: 'Módulo 2: O Processo a Frio (Cold Process)',
    description: 'Domine a técnica mais popular para fazer sabonetes artesanais de alta qualidade.',
    image: 'https://placehold.co/600x400',
    slug: 'processo-a-frio',
    progress: 40,
    lessons: [
      { id: 1, title: 'Preparando seu Ambiente de Trabalho', duration: '12 min' },
      { id: 2, title: 'Misturando a Lixívia e os Óleos', duration: '25 min' },
      { id: 3, title: 'Alcançando o "Trace" Perfeito', duration: '15 min' },
      { id: 4, title: 'Cura e Armazenamento dos Sabonetes', duration: '10 min' },
    ],
  },
  {
    id: 3,
    title: 'Módulo 3: Coloração e Aromatização',
    description: 'Dê vida e personalidade aos seus sabonetes com cores e aromas naturais.',
    image: 'https://placehold.co/600x400',
    slug: 'coloracao-e-aromatizacao',
    progress: 15,
    lessons: [
      { id: 1, title: 'Usando Pigmentos e Argilas', duration: '14 min' },
      { id: 2, title: 'O Poder dos Óleos Essenciais', duration: '18 min' },
      { id: 3, title: 'Técnicas de Swirl e Camadas', duration: '22 min' },
    ],
  },
  {
    id: 4,
    title: 'Módulo 4: Receitas Especiais da Vó Rita',
    description: 'Receitas exclusivas passadas de geração em geração para sabonetes incríveis.',
    image: 'https://placehold.co/600x400',
    slug: 'receitas-especiais',
    progress: 0,
    lessons: [
      { id: 1, title: 'Sabonete de Lavanda e Camomila Calmante', duration: '20 min' },
      { id: 2, title: 'Sabonete Esfoliante de Café e Aveia', duration: '20 min' },
      { id: 3, title: 'Sabonete Hidratante de Leite de Cabra e Mel', duration: '22 min' },
    ],
  },
];

export const bonusContent: ContentItem[] = [
  {
    id: 1,
    title: 'Bônus: Embalagens Criativas',
    description: 'Ideias para valorizar seus sabonetes com embalagens encantadoras e sustentáveis.',
    image: 'https://placehold.co/600x400',
    slug: 'embalagens-criativas',
    progress: 50,
    lessons: [
      { id: 1, title: 'Técnicas de Embrulho com Tecido (Furoshiki)', duration: '12 min' },
      { id: 2, title: 'Criação de Rótulos e Cintas de Papel', duration: '18 min' },
      { id: 3, title: 'Caixas e Sacolas Personalizadas', duration: '15 min' },
    ],
  },
  {
    id: 2,
    title: 'Bônus: Calculadora de Saboaria',
    description: 'Uma ferramenta interativa para ajudar você a criar suas próprias receitas com precisão.',
    image: 'https://placehold.co/600x400',
    slug: 'calculadora-de-saboaria',
    progress: 100,
    lessons: [
        { id: 1, title: 'Entendendo a Calculadora', duration: '10 min' },
        { id: 2, title: 'Simulando sua Primeira Receita', duration: '15 min' },
    ],
  },
  {
    id: 3,
    title: 'Bônus: Guia de Fornecedores',
    description: 'Uma lista selecionada de fornecedores de confiança para seus ingredientes e materiais.',
    image: 'https://placehold.co/600x400',
    slug: 'guia-de-fornecedores',
    progress: 0,
    lessons: [
        { id: 1, title: 'Onde Comprar Óleos e Manteigas', duration: '8 min' },
        { id: 2, title: 'Fornecedores de Embalagens e Moldes', duration: '8 min' },
    ],
  },
];
