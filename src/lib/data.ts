import type { ContentItem } from './types';

export const modules: ContentItem[] = [
  {
    id: 1,
    title: 'Módulo 01 - Comece por Aqui',
    description: 'Os primeiros passos para iniciar sua jornada na saboaria artesanal com segurança e confiança.',
    image: 'https://placehold.co/600x400',
    slug: 'comece-por-aqui',
    progress: 0,
    lessons: [
      { id: 1, title: 'Boas-vindas e Introdução', duration: '5 min' },
      { id: 2, title: 'Materiais e Ferramentas Essenciais', duration: '15 min' },
    ],
  },
  {
    id: 2,
    title: 'Módulo 02 - Erros Comuns na Saboaria',
    description: 'Aprenda a evitar os erros mais comuns que iniciantes cometem e garanta o sucesso de suas receitas.',
    image: 'https://placehold.co/600x400',
    slug: 'erros-comuns-na-saboaria',
    progress: 0,
    lessons: [
      { id: 1, title: 'Causas do Sabonete não Endurecer', duration: '10 min' },
      { id: 2, title: 'Como Evitar a Separação de Fases', duration: '12 min' },
    ],
  },
  {
    id: 3,
    title: 'Módulo 03 - Seu Primeiro Sabonete',
    description: 'Um passo a passo guiado para você criar seu primeiro sabonete artesanal do zero.',
    image: 'https://placehold.co/600x400',
    slug: 'seu-primeiro-sabonete',
    progress: 0,
    lessons: [
      { id: 1, title: 'Receita Simples de Azeite e Coco', duration: '20 min' },
      { id: 2, title: 'O Processo de Cura e Teste de pH', duration: '10 min' },
    ],
  },
  {
    id: 4,
    title: 'Módulo 04 - Sabonetes Decorativos',
    description: 'Técnicas para transformar seus sabonetes em verdadeiras obras de arte.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonetes-decorativos',
    progress: 0,
    lessons: [
      { id: 1, title: 'Técnica de Swirl (Marmoreio)', duration: '18 min' },
      { id: 2, title: 'Adicionando Camadas de Cores', duration: '15 min' },
    ],
  },
  {
    id: 5,
    title: 'Módulo 05 - Sabonetes Para Lembrancinhas',
    description: 'Crie sabonetes perfeitos para presentear em eventos e ocasiões especiais.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonetes-para-lembrancinhas',
    progress: 0,
    lessons: [
      { id: 1, title: 'Formatos e Moldes Especiais', duration: '12 min' },
      { id: 2, title: 'Embalagens Criativas para Presentes', duration: '15 min' },
    ],
  },
  {
    id: 6,
    title: 'Módulo 06 - Sabonete Esfoliante',
    description: 'Aprenda a fazer sabonetes que limpam e renovam a pele com ingredientes naturais.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonete-esfoliante',
    progress: 0,
    lessons: [
      { id: 1, title: 'Receita com Café e Aveia', duration: '18 min' },
      { id: 2, title: 'Usando Sementes e Argilas', duration: '15 min' },
    ],
  },
  {
    id: 7,
    title: 'Módulo 07 - Sabonete de Frutas',
    description: 'Incorpore o poder e os aromas das frutas em suas criações.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonete-de-frutas',
    progress: 0,
    lessons: [
      { id: 1, title: 'Sabonete de Maracujá Calmante', duration: '20 min' },
      { id: 2, title: 'Sabonete Cítrico Energizante', duration: '18 min' },
    ],
  },
  {
    id: 8,
    title: 'Módulo 08 - Sabonete Fito Energético',
    description: 'Descubra como usar a energia das plantas para criar sabonetes com propósito.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonete-fito-energetico',
    progress: 0,
    lessons: [
      { id: 1, title: 'O que é Fitoenergética?', duration: '10 min' },
      { id: 2, title: 'Receitas com Ervas para Limpeza e Proteção', duration: '22 min' },
    ],
  },
  {
    id: 9,
    title: 'Módulo 09 - Sabonete Terapêutico',
    description: 'Crie sabonetes com propriedades terapêuticas usando óleos essenciais e extratos naturais.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonete-terapeutico',
    progress: 0,
    lessons: [
      { id: 1, title: 'Sabonete de Lavanda para Relaxamento', duration: '18 min' },
      { id: 2, title: 'Sabonete de Melaleuca para Pele Oleosa', duration: '18 min' },
    ],
  },
  {
    id: 10,
    title: 'Módulo 10 - Sabonete Vegano',
    description: 'Aprenda a fazer sabonetes de alta qualidade sem nenhum ingrediente de origem animal.',
    image: 'https://placehold.co/600x400',
    slug: 'sabonete-vegano',
    progress: 0,
    lessons: [
      { id: 1, title: 'Substituindo Ingredientes de Origem Animal', duration: '15 min' },
      { id: 2, title: 'Receita de Sabonete Vegano com Manteiga de Karité', duration: '20 min' },
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
