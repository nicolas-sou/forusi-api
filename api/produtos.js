export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      imagem: "/imagens/ACABAMENTO PARA REGISTRO.jpg",
      nome: "Acabamento Para Registro",
      descricao: "Descrição do produto Acabamento Para Registro."
    },
    {
      id: 2,
      imagem: "/imagens/CABIDE DUPLO CURVE CROMADO.jpg",
      nome: "Cabide Duplo Curve Cromado",
      descricao: "Descrição do produto Cabide Duplo Curve Cromado."
    },
    // (adicione os outros aqui...)
  ]);
}
