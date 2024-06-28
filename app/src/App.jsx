import Banner from './components/banner'
import Header from './components/header';
import SectionProdutos from './components/sectionProdutos';
import WhatsappFixo from './components/whatsappFixo';
import WidgetsInfo from './components/widgetsInfo';
import './style/style.css';
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <WidgetsInfo/>
      <SectionProdutos/>
      <WhatsappFixo/>
     
    </>
  )
}

export default App;
