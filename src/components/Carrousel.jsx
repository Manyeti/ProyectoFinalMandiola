const Carrousel = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                <div id="carouselExample" class="carousel slide bg-light" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <p>3 cuotas sin interes</p>
                            <p><a href="http://www.tennis4all.com/">Ver opciones de pago </a></p>
                        </div>
                        <div className="carousel-item text-center">
                            <p>Entregas a todo el país.</p>
                            <p><a href="http://www.tennis4all.com/">Ver información de envíos y entregas</a></p>
                        </div>
                        <div className="carousel-item text-center">
                            <p>Tenemos lo mejor para tí</p>
                            <p>Para ser el mejor</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;