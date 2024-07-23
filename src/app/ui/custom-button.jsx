const Custombutton = ({ onClick, innerText, classList }) => {
    return (
        <button className={classList} type="button" onClick={onClick}>{innerText}</button>
    )
}

export default Custombutton;