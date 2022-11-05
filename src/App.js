import Logo from '../src/images/logo.png';
import Didio from '../src/images/didio.png';
import Henrique from '../src/images/henrique.png';
import Kaua from '../src/images/kaua.png';
import Thalia from '../src/images/thalia.png';
import Thales from '../src/images/thales.png';
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
              <img src={Didio} class="foto_didio"></img>
              <h2 class="nome_didio">Lucas Smaniotto</h2>
          </div>
  
          <div>
              <img src={Henrique} class="foto_henrique"></img>
              <h2 class="nome_henrique">Henrique Wagner</h2>
          </div>
  
          <div>
              <img src={Kaua} class="foto_kaua"></img>
              <h2 class="nome_kaua">Kauã de Moura</h2>
          </div>
  
          <div>
              <img src={Thalia} class="foto_thalia"></img>
              <h2 class="nome_thalia">Thalía Goulart</h2>
          </div>

          <div>
              <img src={Thales} class="foto_thales"></img>
              <h2 class="nome_thales">Thales Girotto</h2>
          </div>

      </div>
      <h3 class="descricao_atividade">DESCRIÇÃO DA ATIVIDADE: <br/> 
      3. Criar uma página para controlar uma lista de compras.
      * Consiste em um campo para adicionar itens na lista.
      com a possibilidade de editar, excluir 
     marcar que já pegou o item. 
      </h3>

      
      
    </div>
  );
}

export default App;
