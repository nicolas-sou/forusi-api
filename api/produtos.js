export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      imagem: "https://seudominio.com/assets/produtos/ACABAMENTO%20PARA%20REGISTRO.jpg",
      nome: "Acabamento Para Registro",
      descricao: "Descrição do produto Acabamento Para Registro."
    },
    {
      id: 2,
      imagem: "https://seudominio.com/assets/produtos/CABIDE%20DUPLO%20CURVE%20CROMADO.jpg",
      nome: "Cabide Duplo Curve Cromado",
      descricao: "Descrição do produto Cabide Duplo Curve Cromado."
    },
    // (adicione os outros aqui...)
  ]);
}
