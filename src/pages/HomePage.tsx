import '../styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const HomePage = () => {

    return (
        <>   
            <div className='mt-5 mb-3' style={{display:'flex',justifyContent:'center'}}>
                <div style={{width:340}}>
                    <h1>Leituras.</h1>
                    <div className="typing" style={{width:340}}>
                        <h4>O site feito para quem gosta de ler.</h4>
                    </div>
                </div>
            </div>
            <br></br>
            <Carousel className="carousel slide appearing-carousel mt-5 mb-5" slide={true} style={{height:150}}>
                <Carousel.Item>
                    <div className="container mb-5">
                        <h3>De leitores para leitores.</h3>
                        <p>Leituras é um site feito por apaixonados por literatura para apaixonados por literatura. </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container mb-5">
                        <h3>Simples, fácil, completo.</h3>
                        <p>Comente e resenhe seus livros favoritos. Leia resenhas de outros leitores e escolha sua próxima leitura! </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className ="container mb-5">
                        <h3>Aparência leve e agradável.</h3>
                        <p>Sem fundos de tela, sem cores, sem poluição visual. Letras pretas e fundo branco. É assim nos seus livros, é assim aqui.</p>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div className="container appearing-register-button mb-5">
                <Button className="btn btn-primary btn-lg register-button">Comece já!</Button>
            </div>
        </>
    )
}

export default HomePage;