import './App.css'
import Item from './components/Item';
import List from './components/List';

function App() {
  const lista = [
    {
      id: 0,
      name: 'João'
    },
    {
      id: 1,
      name: 'Solange'
    },
    {
      id: 2,
      name: 'Cristina'
    }
  ];

  return (
   <div>
      <h1>Lista de Usuários</h1>
      <ul>
        <List items={lista}/>
      </ul>
   </div>
  );
}

export default App
