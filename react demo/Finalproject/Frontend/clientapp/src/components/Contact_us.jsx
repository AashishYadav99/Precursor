

import pic from '../image/pic5.jpg';
const Contact_us = () => {

    return (

        <>
            <div className="row">
                <div className="col-lg " >
                    <img src={pic} alt="" style={{
                        margin: "50px 50px",
                        width: "500px",
                        height: "500px"
                    }} className='rounded-circle' />
                </div>

                <div className="col-lg border border-dark border-3 " style={{ margin: "50px 200px" }}>
                    <form action="" className='mb-5 mt-5' >


                        <div class="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="text" className="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                                <input type="Number" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="text" className="col-sm-2 col-form-label">Query</label>
                            <div class="col-sm-10">
                                <input type="text" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row ms-5">
                            <button type="button" class="btn btn-primary ms=5" style={{width:"100px"}}>Primary</button>
                        </div>


                    </form>

                </div>
            </div>
        </>
    )
}
export default Contact_us