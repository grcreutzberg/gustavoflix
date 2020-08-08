import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (request) => {
    if (request.ok) {
      const resposta = await request.json();
      return resposta;
    }
    throw new Error('Bad request :´(');
  });
}

function getAllCategoriesWhithVideo() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (request) => {
    if (request.ok) {
      const resposta = await request.json();
      return resposta;
    }
    throw new Error('Bad request :´(');
  });
}

export default {
  getAllCategoriesWhithVideo,
  getAll,
};
