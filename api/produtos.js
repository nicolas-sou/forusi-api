export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json([
    {
      id: 1,
      imagem: "https://forusi-api.vercel.app/imagens/acabamento-para-registro.jpg",
      nome: "Acabamento Para Registro",
      descricao: "Descrição do produto."
    },
    {
      id: 2,
      imagem: "https://forusi-api.vercel.app/imagens/cabide-duplo-curve-cromado.jpg",
      nome: "Cabide Duplo Curve Cromado",
      descricao: "Descrição do produto."
    }
    ,
    {
      id: 3,
      imagem: "https://forusi-api.vercel.app/imagens/cabide-simples-parede-curve-cromado.jpg",
      nome: "Cabide Simples Curve Cromado",
      descricao: "Descrição do produto."
    },
    {
      id: 4,
      imagem: "https://forusi-api.vercel.app/imagens/ducha-higienica-curve-com-derivacao.jpg",
      nome: "Ducha Higiênica Curve com Derivação",
      descricao: "Descrição do produto."
    },
    {
      id: 5,
      imagem: "https://forusi-api.vercel.app/imagens/ducha-higienica-sml.jpg",
      nome: "Ducha Higiênica SML",
      descricao: "Descrição do produto."
    },
    {
      id: 6,
      imagem: "https://forusi-api.vercel.app/imagens/kit-instalacao-ar-condicionado-3metros.jpg",
      nome: "Kit Instalação Ar Condicionado 3 Metros",
      descricao: "Descrição do produto."
    },
    {
      id: 7,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-tanque.png",
      nome: "Torneira Tanque",
      descricao: "Descrição do produto."
    },
    {
      id: 8,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-lavatorio-mesa-mega-line-black-fosco.jpg",
      nome: "Torneira Lavatório Mesa Mega Line Black Fosco",
      descricao: "Descrição do produto."
    },
    {
      id: 9,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-lavatorio-bica-movel-mesa.png",
      nome: "Kit Instalação Ar Condicionado 10 Metros",
      descricao: "Descrição do produto."
    },
    {
      id: 10,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-cozinha-filtro-parede-mega-line-c-arejador-articulavel-1.4-de-volta.png",
      nome: "Torneira Cozinha Filtro Parede Mega Line c/ Arejador Articulável 1.4 de Volta",
      descricao: "Descrição do produto."
    },
    {
      id: 11,
      imagem: "https://forusi-api.vercel.app/imagens/monocomando-cozinha-mesa-inox-escovado.jpg",
      nome: "Monocomando Cozinha Mesa Inox Escovado",
      descricao: "Descrição do produto."
    },
    {
      id: 12,
      imagem: "https://forusi-api.vercel.app/imagens/monocomando-cozinha-mesa-gourmet-com-ducha-extensiva-black-matte.jpg",
      nome: "Torneira Cozinha Filtro Parede Mega Line c/ Arejador Articulável 1.4 de Volta",
      descricao: "Descrição do produto."
    }
  ]);
}
