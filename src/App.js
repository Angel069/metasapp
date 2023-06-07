import './App.css';
import Encabezamiento from './componentes/compartidos/Encabezamiento';
import Footer from './componentes/compartidos/Footer';
import Principal from './componentes/compartidos/Principal';

function App() {
  return (
    <div className="App">
      <Encabezamiento></Encabezamiento>
      <Principal></Principal>
      <Footer></Footer>
    </div>
  );
}

export default App;
