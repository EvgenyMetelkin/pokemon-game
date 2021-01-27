import s from  './style.module.css';

import BackgroundLayout from "../../assets/bg3.jpg";

const LayoutBlock = ({id, title, desc, urlBg = false, colorBg}) => {
    const styleRoot = {background: urlBg ? `url(${BackgroundLayout})` : colorBg};
    return (
        <section className= {s.root} id= {id} style = {styleRoot}>
            <div className= {s.wrapper}>
                <article>
                    
                    <div className={s.title}>
                        { title && (<h3> {title} </h3>) }
                        <span className= {s.separator}></span>
                    </div>
                    <div className= {s.desc + " " + s.full}>
                    { desc && (<p>{ desc }</p>) }
                    </div>
                </article>
            </div>
        </section>
    );
};

export default LayoutBlock;