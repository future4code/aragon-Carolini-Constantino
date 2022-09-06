export default CardFront = (props) => {
    return(
        <>
        <h3>{props.name}</h3> 
            <img src={urlCards + props.image} alt={props.image} />
        </>
    )
}