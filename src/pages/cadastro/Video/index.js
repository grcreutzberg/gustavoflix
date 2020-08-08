import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { valueChange, values } = useForm({
    titulo: 'Padrão',
    url: 'https://www.youtube.com/watch?v=_RRdXrqTZpk',
    categoria: 'Fron End',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Castro de Video:
        {values.titulo}
      </h1>
      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Vídeo:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={valueChange}
        />
        <FormField
          label="URL:"
          type="text"
          name="url"
          value={values.url}
          onChange={valueChange}
        />
        <FormField
          label="Categoria:"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={valueChange}
          suggestions={categoryTitles}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
