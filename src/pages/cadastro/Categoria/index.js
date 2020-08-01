import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '#DB202C'

    }
    //const [categorias, setCategorias] = useState([{cor: "#DB202C", descricao: "Uma descrição para a c…", titulo: 'Teste' }]);
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }

    function valueChange(event) {
        //const { getAttribute, value } = event.target;
        //setValue(getAttribute('name'), value);
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.titulo}</h1>
            <form style={{ background: values.cor }} onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>
                
                <FormField 
                    label='Categoria:'
                    type='text'
                    name='titulo'
                    value={values.titulo}
                    onChange={valueChange}
                />
                <FormField
                    label='Descrição:'
                    type='text'
                    name='descricao'
                    value={values.descricao}
                    onChange={valueChange}
                />
                <FormField
                    label='Cor:'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={valueChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.titulo}
                        </li>
                    );
                })}
            </ul>

            <Link to="/cadastro/video">
                Cadastro video
        </Link>
        </PageDefault>
    );
}

export default CadastroCategoria