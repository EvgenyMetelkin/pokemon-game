import PokemonCard from '../../components/PokemonCard';

import { useState } from 'react';

import LayoutBlock from '../../components/LayoutBlock/';

import cn from 'classnames';
import s from  './style.module.css';

const PlayerBoard = ({useSelect, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null);
 
    return (
        <div className={s.flex}>
        {
            Object.keys(cards).length > 0 ? cards.map((item) => (
                <div 
                className={cn({
                    [s.selected] : isSelected === item.id && useSelect
                })}
                onClick={() => {
                    if(useSelect) {
                        setSelected(item.id);
                        onClickCard && onClickCard({
                            ...item 
                        });
                    }
                }}
                >
                    <PokemonCard  
                      className={s.card}   
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
            )) : <></>
        }
        </div>
    );
};

export default PlayerBoard;
