import Logo from '../src/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <div class="cabeçalho">
      <img src={Logo} class="logo" width="100px" height="100px"></img>
      <h1 class="titulo_integrantes">INTEGRANTES DO GRUPO:</h1>
      </div> <br/>
  
      <div class="fotos_integrantes">
          
          <div>
              <img src="../atividade01/imagens/lucas_smaniotto.jpeg" class="foto_lucas"></img>
              <h2 class="nome_lucas">Lucas Smaniotto</h2>
          </div>
  
          <div>
              <img src="../atividade01/imagens/kauã_ribeiro.jpeg" class="foto_kaua"></img>
              <h2 class="nome_kaua">Kauã de Moura</h2>
          </div>
  
          <div>
              <img src="../atividade01/imagens/arthur_ofoisch.jpeg" class="foto_arthur"></img>
              <h2 class="nome_arthur">Arthur Ofoish</h2>
          </div>
  
          <div>
              <img src="../atividade01/imagens/lucas_maranhão.jpeg" class="foto_maranhao"></img>
              <h2 class="nome_maranhao">Lucas Rocha</h2>
          </div>
  
      </div>
    </div>
  );
}

export default App;
