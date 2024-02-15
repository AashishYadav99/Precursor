const Header = () => {
    const myStyle = {
        color: "blue",
        fontSize: "30px",
        divStyle: {
            backgroundColor: "cyan",
            width: "200px",
            height: "300px"

        }

    }
    return (
        <>
            
                <h1 style={{ fontFamily: "cursive", color: 'red', backgroundColor: "green" ,textAlign:"center"}}>
                    This is Header
                </h1>
            
            
            <p style={myStyle}>This is paragraph</p>
            <div style={myStyle.divStyle}>hi its me....

            </div>
        </>
    )
}
export default Header