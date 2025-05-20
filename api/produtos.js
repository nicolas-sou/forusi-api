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
      descricao: "Descrição do produto Acabamento Para Registro."
    },
    {
      id: 2,
      imagem: "https://forusi-api.vercel.app/imagens/cabide-duplo-curve-cromado.jpg",
      nome: "Cabide Duplo Curve Cromado",
      descricao: "Descrição do produto Cabide Duplo Curve Cromado."
    }
    // ... outros produtos
  ]);
}
