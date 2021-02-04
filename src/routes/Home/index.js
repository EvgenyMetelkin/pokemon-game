import HeaderBlock from '../../components/HeaderBlock/';
import LayoutBlock from '../../components/LayoutBlock/';
import FooterBlock from '../../components/FooterBlock/';

import BackgroundLayout from "../../assets/bg3.jpg";

const HomePage = ({onChangePage}) => {
  const handleClickButton = (page) => {
    onChangePage && onChangePage(page);
  };

  return (
    <> 
      <HeaderBlock 
        title = "Pokemon Game"
        descr = "This is simple triple triad card game"
        onClickButton = {handleClickButton} 
      />
      <LayoutBlock 
        id = "rules" 
        title = "Rules" 
        urlBg = { BackgroundLayout }
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </LayoutBlock>      
      <LayoutBlock 
        id = "thirdLayout" 
        title = "Third" 
        urlBg = { BackgroundLayout } 
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </LayoutBlock>
      <FooterBlock />
    </>
  );
};

export default HomePage