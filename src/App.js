import './App.css';
import {Component} from 'react';
import { Busca } from './components/buscaoda/buscaoda';
import { Lista } from './components/lista/lista';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';

class App extends Component{

  state={
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log({busca})
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {busca, odas} = this.state;
    return (
      <div className = "container">
        <Cabecalho  />
        <section>
          <Busca busca={busca} buscaODA={this.buscaODA}/>
          <Lista odas={odas} busca={busca} />
        </section>
        <Rodape />
      </div>
          
    )
  }
}
export default App;

