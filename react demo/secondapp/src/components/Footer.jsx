const Footer = () => {
    return (
        <>
            {/* <div classNameName="container-fluid bg-info">
            <h6 classNameName="text-danger">This is Footer</h6>
            </div> */}
            <footer className="text-center bg-body-tertiary text-center fixed-bottom">

                <div className="container pt-4">
                    <section className="mb-4">

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            style={{ backgroundColor: "purple" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            style={{ backgroundColor: "purple" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            style={{ backgroundColor: "purple" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            style={{ backgroundColor: "purple" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            style={{ backgroundColor: "purple" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            style={{ backgroundColor: "purple" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>
                {/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
                    © 2020 Copyright:
                    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div> */}
            </footer>
        </>
    )
}
export default Footer