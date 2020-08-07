import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllCategoriesWhithMovie() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Bad request :´(');
  });
}

export default {
  getAllCategoriesWhithMovie,
};
