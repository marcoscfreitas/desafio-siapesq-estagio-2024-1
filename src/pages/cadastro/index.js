import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Cadastro() {
    return (
        <div className="pageContainer">
            <img src='/siapesq.png' alt='icon' width='190px' height='190px' style={{ borderRadius: '50%' }} />
            <div className="formContainer">
                <br></br>
                <form action='/'>
                    <label>Nome</label><br />
                    <input type='name' id='name' name='name' placeholder='Informe o Seu nome...' required /><br /><br />
                    <label>E-mail</label><br />
                    <input type='email' id='email' name='email' placeholder='Informe o E-mail...' required /><br /><br />
                    <label>Senha</label><br />
                    <input type='password' id='password' name='password' placeholder='Digite sua Senha...' required /><br /><br />
                    <button>Enviar</button>
                    <p>
                        <Link to="/">Já possui Cadastro? Faça login.</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
