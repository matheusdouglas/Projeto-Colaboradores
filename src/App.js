import Banner from './componentes/Banner';
import Formulario from './formulario';
import { useState } from 'react'
import Time from './Time';
import Rodape from './Rodape';


function App() {

  const times = [
   {
    nome: 'desenvolvedores',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
  },
  {
    nome: 'Qualidade',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
  },
  {
    nome: 'Lideres',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
  }
  ]

  const [colaboradores, setColaboradores] = useState([])
 
   const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
   }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
       
      
      
           {times.map(time => <Time 
           key={time.nome} 
           nome={time.nome} 
           corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            
            

            />)}
     
     <Rodape />
    </div>
  );
}

export default App;
