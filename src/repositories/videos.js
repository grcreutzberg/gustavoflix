import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  }).then(async (request) => {
    if (request.ok) {
      const resposta = await request.json();
      return resposta;
    }
    throw new Error('Bad request :´(');
  });
}

export default {
  create,
};
