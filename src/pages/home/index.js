import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = () => {
        if (!email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        window.location.href = '/mapa';
    };

    return (
        <div className="pageContainer">
            <img src='/siapesq.png' alt='icon' width='190px' height='190px' style={{ borderRadius: '50%' }} />
            <div className="formContainer">
                <h1>Olá, bem-vindo!</h1>
                <form>
                    <label>E-mail</label><br />
                    <input type='email' id='email' name='email' placeholder='Informe o E-mail...' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br /><br />
                    <label>Senha</label><br />
                    <input type='password' id='senha' name='senha' placeholder='Digite sua Senha...' value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <br />
                    <p><a href="/recuperar-senha">Esqueceu a senha?</a></p>
                    <button type="button" onClick={handleSubmit}>Entrar</button><br></br>
                    <p>
                        <Link to="/cadastro">Ainda não possui Cadastro?</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Home;
