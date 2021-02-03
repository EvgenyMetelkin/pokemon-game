
import cn from 'classnames';

import s from  './style.module.css';

const LayoutBlock = ({ id, title, urlBg, colorBg, children } ) => {
    const styleRoot = {
        background: urlBg ? `url(${urlBg})` : colorBg
    };
    return (
        <section className= {s.root} id= {id} style = {styleRoot}>
            <div className= {s.wrapper}>
                <article>
                    
                    <div className={s.title}>
                        { title && (<h3> {title} </h3>) }
                        <span className= {s.separator}></span>
                    </div>
                    <div className= { cn(s.desc, s.full) }>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    );
};

export default LayoutBlock;