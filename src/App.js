import './App.css';
import { Header} from './components/Header';
import {Skills}from './components/Skills';
import {Contact} from './components/Contact';

function App(){
  return (
    // <></>はFragmentの役割をする
    <>
    <Header/>
    {/*  Headerコンポーネントを呼び出す */}
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;