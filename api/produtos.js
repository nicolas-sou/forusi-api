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
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 2,
      imagem: "https://forusi-api.vercel.app/imagens/cabide-duplo-curve-cromado.jpg",
      nome: "Cabide Duplo Curve Cromado",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    }
    ,
    {
      id: 3,
      imagem: "https://forusi-api.vercel.app/imagens/cabide-simples-parede-curve-cromado.jpg",
      nome: "Cabide Simples Curve Cromado",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 4,
      imagem: "https://forusi-api.vercel.app/imagens/ducha-higienica-curve-com-derivacao.jpg",
      nome: "Ducha Higiênica Curve com Derivação",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 5,
      imagem: "https://forusi-api.vercel.app/imagens/ducha-higienica-sml.jpg",
      nome: "Ducha Higiênica SML",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 6,
      imagem: "https://forusi-api.vercel.app/imagens/kit-instalacao-ar-condicionado-3metros.jpg",
      nome: "Kit Instalação Ar Condicionado 3 Metros",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 7,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-tanque.png",
      nome: "Torneira Tanque",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 8,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-lavatorio-mesa-mega-line-black-fosco.jpg",
      nome: "Torneira Lavatório Mesa Mega Line Black Fosco",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 9,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-lavatorio-bica-movel-mesa.png",
      nome: "Kit Instalação Ar Condicionado 10 Metros",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 10,
      imagem: "https://forusi-api.vercel.app/imagens/torneira-cozinha-filtro-parede-mega-line-c-arejador-articulavel-1.4-de-volta.png",
      nome: "Torneira Cozinha Filtro Parede Mega Line c/ Arejador Articulável 1.4 de Volta",
      descricao: "Descrição do produto.",
      categoria: "Metais Sanitários"
    },
    {
      id: 11,
      imagem: "https://forusi-api.vercel.app/imagens/monocomando-cozinha-mesa-inox-escovado.jpg",
      nome: "Monocomando Cozinha Mesa Inox Escovado",
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
  ]);
}
