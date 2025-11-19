
const Panel = ({title,  children, isActive, onActive }) => {


    return (
        <div>
            <section className="panel">
                <h3> {title} </h3>
                { isActive? <p> {children} </p> : 
                <button onClick={onActive} >Show
                </button>
                }
            </section>
        </div>
    );
};

export default Panel;