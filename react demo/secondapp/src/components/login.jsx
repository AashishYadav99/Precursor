
import Image from './Image';
import pic from '../images/pic3.jpg';
const Login =()=>{

    const myStyle={
        imgstyle:{
            margin:"50px 50px",
            width:"500px",
        height:"500px"
        }
        
    }

    return(
        <>
        <h1 style={{color:"purple" ,textAlign:"center"}}>Login Form</h1>
        <img src={"/pic/pic1.jpg"} style={myStyle.imgstyle}></img>
        {/* using src-> image folder */}
        <img src={pic} alt="" style={{margin:"50px 50px",
            width:"500px",
        height:"500px"}} />
        <Image/>
        <Image imageName="pic3.jpg"/>
        <Image imageName="pic5.jpg"/>
        </>
    )
}
export default Login
