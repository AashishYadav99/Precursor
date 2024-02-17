
// const Image=(props)=>{
    const Image=({imageName})=>{

    return(
         <>

         <div className="card" style={{backgroundColor:"aliceblue"}}>

         {/* <img src={"/pic/pic3.jpg"} style={{width:"500px",height:"500px",margin:"50px 50px"}} /> */}
         {/* <img src={"/pic/"+props.imageName} style={{width:"500px",height:"500px",margin:"50px 50px"}}/> */}
         <img src={"/pic/"+imageName} style={{width:"500px",height:"500px",margin:"50px 50px"}}/>
         </div>
         
         </>
    )
}
export default Image