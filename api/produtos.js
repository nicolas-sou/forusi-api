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
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0815.35.png",
      Cod: "9.11.0815.35",
      nome: "Torneira lavatório Mesa CI/JR UP Cuba de Apoio GRAFITE 20cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 2,
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0814.35.png",
      Cod: "9.11.0814.35",
      nome: "Torneira lavatório Mesa CI/JR Cuba de Apoio GRAFITE 24cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    }
    ,
    {
      id: 3,
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0906.35.png",
      Cod: "9.11.0906.35",
      nome: "Torneira lavatório Mesa CI/JR Cuba de Apoio GRAFITE 28cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 4,
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0907.35.png",
      Cod: "9.11.0907.35",
      nome: "Torneira lavatório Mesa CI/JR UP Real Cuba GRAFITE 24cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 5,
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0989.35.png",
      Cod: "9.11.0989.35",
      nome: "Torneira lavatório BM Bela Luna Grafite 1/4, 1/2",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 6,
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0991.35.png",
      Cod: "9.11.0991.35",
      nome: "Torneira lavatório BM Treviso Grafite 1/4, 1/2",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 7,
      imagem: "https://forusi-api.vercel.app/imagens/9.11.0997.35.png",
      Cod: "9.11.0997.35",
      nome: "Torneira lavatório BM Clock CR 1/4, 1/2",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 8,
      imagem: "https://forusi-api.vercel.app/imagens/9.27.0115.18.png",
      Cod: "9.27.0115.35",
      nome: "Monocomando Cozinha Mesa Duo Gourmet com Ducha Extensiva Grafite 50cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 9,
      imagem: "https://forusi-api.vercel.app/imagens/9.27.0118.18.png",
      Cod: "9.27.0118.35",
      nome: "Monocomando Cozinha Mesa Duo Gourmet com Ducha Extensiva Grafite 70cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 10,
      imagem: "https://forusi-api.vercel.app/imagens/9.27.0115.25.jpg",
      Cod: "9.27.0115.35",
      nome: "Monocomando Cozinha Mesa Duo Gourmet com Ducha Extensiva 50cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 11,
      imagem: "https://forusi-api.vercel.app/imagens/9.27.0118.25.jpg",
      Cod: "9.27.0118.35",
      nome: "Monocomando Cozinha Mesa Duo Gourmet com Ducha Extensiva 70cm",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 12,
      imagem: "https://forusi-api.vercel.app/imagens/monocomando-cozinha-mesa-gourmet-com-ducha-extensiva-black-matte.jpg",
      nome: "Torneira Cozinha Filtro Parede Mega Line c/ Arejador Articulável 1.4 de Volta",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 13,
      imagem: "https://forusi-api.vercel.app/imagens/ducha-stilo-black.jpg",
      nome: "Ducha Stilo Black",
      descricao: "Descrição do produto.",
      categoria: "Chuveiros e Torneiras Elétricas"
    },
    {
      id: 14,
      imagem: "https://forusi-api.vercel.app/imagens/pistola-alta-produção-succao-profissional.jpg",
      nome: "Pistola Alta Produção Sucção Profissional",
      descricao: "Descrição do produto.",
      categoria: "Pistolas para Pintura"
    },
    {
      id: 15,
      imagem: "https://forusi-api.vercel.app/imagens/pistola-baixa-producao-gravidade.jpg",
      nome: "Pistola Baixa Produção Gravidade",
      descricao: "Descrição do produto.",
      categoria: "Pistolas para Pintura"
    },
    {
      id: 16,
      imagem: "https://forusi-api.vercel.app/imagens/pistola-de-ar-direto.jpg",
      nome: "Pistola de Ar Direto",
      descricao: "Descrição do produto.",
      categoria: "Pistolas para Pintura"

    },
    {
      id: 17,
      imagem: "https://forusi-api.vercel.app/imagens/cabo-pp-3-condutores-750v.jpg",
      nome: "Cabo PP 3 Condutores 750V",
      descricao: "Descrição do produto.",
      categoria: "Plugues e Conectores"
    },
    {
      id: 18,
      imagem: "https://forusi-api.vercel.app/imagens/filtro-de-linha.jpg",
      nome: "Filtro de Linha",
      descricao: "Descrição do produto.",
      categoria: "Materiais Elétricos"
    }
    ,
    {
      id: 19,
      imagem: "https://forusi-api.vercel.app/imagens/forro-preto.jpg",
      nome: "Forro Preto",
      descricao: "Descrição do produto.",
      categoria: "Forros de PVC"
    }
  ]);
}
