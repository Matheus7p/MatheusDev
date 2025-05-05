import { IProject } from "../@types/project";

export const ProjectsData: IProject[] = [
  {
    title: "Match house",
    img: "./matchHouse.png",
    deploy: "https://www.matchhouse.co/",
    linkGitHub: "",
    description: "Participei no desenvolvimento do front-end de um projeto imobiliário na Match House, usando Next.js, TypeScript e Tailwind CSS, fui designado para desenvolver o front-end, trabalhando sob a orientação de um desenvolvedor sênior. Implementei componentes escaláveis, testes com Jest e React Testing Library.",
    stacks: [
      { name: "Next.js", link: "https://skillicons.dev/icons?i=next" },
      { name: "TypeScript", link: "https://skillicons.dev/icons?i=typescript" },
      { name: "Tailwind CSS", link: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Jest", link: "https://skillicons.dev/icons?i=jest" },
    ]
  },
  {
    title: "Teste Econverse",
    img: "./econverse.png",
    deploy: "https://matheuscosta7p.github.io/teste-front-end/",
    linkGitHub: "https://github.com/Matheus7p/teste-front-end",
    description: "Realizei um teste técnico para uma vaga de nível júnior. O desafio consistia em desenvolver uma interface seguindo um layout Figma predefinido e implementar uma funcionalidade onde teria que realizar uma requisição GET à API, exibir uma lista de produtos, com a possibilidade de visualizar os detalhes de cada produto em uma modal ao clicar.",
    stacks: [
      { name: "React.js", link: "https://skillicons.dev/icons?i=react" },
      { name: "TypeScript", link: "https://skillicons.dev/icons?i=typescript" },
      { name: "Sass", link: "https://skillicons.dev/icons?i=sass" },
      { name: "React Query", link: "https://miro.medium.com/v2/resize:fit:400/1*Yt_kxgaoVwFX_lO3lwZPlg.png" }
    ]
  },
  {
    title: "Lecturize It",
    img: "./lecturize.png",
    deploy: "https://lecturize-frontend.vercel.app/",
    linkGitHub: "https://www.github.com/lecturizeit",
    description: "Como líder do projeto e de desenvolvimento front-end, utilizei React, TypeScript e Tailwind CSS para criar uma interface moderna e responsiva. Implementei integração com a API usando Axios, React Query e Context API, garantindo um gerenciamento eficiente do contexto do usuário. Além disso, configurei o ESLint com regras personalizadas para garantir a qualidade do código e facilitar a colaboração.",
    stacks: [
      { name: "React.js", link: "https://skillicons.dev/icons?i=react" },
      { name: "TypeScript", link: "https://skillicons.dev/icons?i=typescript" },
      { name: "Tailwind CSS", link: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Vercel", link: "https://skillicons.dev/icons?i=vercel" },
      { name: "React Query", link: "https://miro.medium.com/v2/resize:fit:400/1*Yt_kxgaoVwFX_lO3lwZPlg.png" }
    ]
  },

  {
    title: "Ant-Drop",
    img: "./ant-drop.png",
    linkGitHub: "https://github.com/Matheus7p/Ant-drop",
    deploy: "",
    description: "Ant-Drop é uma aplicação projetada para ajudar usuários a avaliar a confiabilidade de produtos e lojas. Utilizando o endpoint /api/scrape, o sistema retorna informações detalhadas do Reclame Aqui, incluindo avaliações de produtos e da loja, além de sugerir produtos relacionados disponíveis no Google Shopping. Também oferece um histórico de consultas, armazenado localmente via localStorage, para acesso rápido às informações.",
    stacks: [
      { name: "Next.js", link: "https://skillicons.dev/icons?i=next" },
      { name: "TypeScript", link: "https://skillicons.dev/icons?i=typescript" },
      { name: "Tailwind CSS", link: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Shadcn UI", link: "https://avatars.githubusercontent.com/u/139895814?v=4"},
      { name: "React Query", link: "https://miro.medium.com/v2/resize:fit:400/1*Yt_kxgaoVwFX_lO3lwZPlg.png" },
    ]
  }
  
]

