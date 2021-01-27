import HeaderBlock from './components/HeaderBlock/';
import LayoutBlock from './components/LayoutBlock/';
import FooterBlock from './components/FooterBlock/';

const App = () => {
  return (
    <>
      <HeaderBlock 
        title = "This is title"
        descr = "This is Description!"
      />
      <LayoutBlock 
        id = "firstLayout" 
        title = "First"
        desc = "First Layout"
        urlBg = "../../assets/bg3.jpg"
      />
      <LayoutBlock 
        id = "secondLayout" 
        title = "Second"
        desc = "Second Layout" 
        colorBg = "#c6f5f0"
      />
      <LayoutBlock 
        id = "thirdLayout" 
        title = "Third"
        desc = "Third Layout"
        urlBg = "../../assets/bg3.jpg" 
      />
      <FooterBlock />
    </>
  );
};

export default App