import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#DB202C',

  };

  const { values, valueChange, clearForm } = useForm(valoresIniciais);

  // const [categorias, setCategorias] = useState([{cor: "#DB202C", descricao: "Uma descrição para a c…", titulo: 'Teste' }]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://devgustavoflix.herokuapp.com/categorias';
    // const URL = 'https://devsoutinhoflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>
      <form
        // style={{ background: values.cor }}
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm(valoresIniciais);
        }}
      >

        <FormField
          label="Categoria:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={valueChange}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={valueChange}
        />
        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={valueChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* LOADING... */}
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Cadastro video
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
