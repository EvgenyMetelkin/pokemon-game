import PokemonCard from '../../components/PokemonCard';

import { useState } from 'react';

import cn from 'classnames';
import s from  './style.module.css';

const PlayerBoard = ({plaeyr, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <> 
        {
            cards.map((item) => (
                <div 
                className={cn(s.cardBoard, {
                    [s.selected] : isSelected === item.id
                })}
                onClick={() => {
                    setSelected(item.id);
                    onClickCard && onClickCard({
                        ...item,
                        plaeyr
                    });
                }}
                >
                    <PokemonCard                   
                      key={item.id} 
                      id={item.id} 
                      name={item.name} 
                      img={item.img} 
                      type={item.type} 
                      values={item.values}      
                      isActive 
                      minimize       
                    />
                </div>
            ))
        }
        </>
    );
};

export default PlayerBoard;
