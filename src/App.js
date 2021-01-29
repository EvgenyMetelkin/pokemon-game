import HeaderBlock from './components/HeaderBlock/';
import LayoutBlock from './components/LayoutBlock/';
import FooterBlock from './components/FooterBlock/';

import BackgroundLayout from "./assets/bg3.jpg";

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
        urlBg = { BackgroundLayout }
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
        urlBg = { BackgroundLayout } 
      />
      <FooterBlock />
    </>
  );
};

export default App