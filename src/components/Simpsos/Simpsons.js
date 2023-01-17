
export const Simpsons = (props) => {
    let {itemName} = props;
    let {pic} = props;
    let {text} = props;
    return(
            <div className="big-block">
                <div className="block">
                    <h2 className="title">{itemName}</h2>
                    <p className="text">{text}</p>
                    <img className="photo" src={pic}/>

                </div>
            </div>
    )
}