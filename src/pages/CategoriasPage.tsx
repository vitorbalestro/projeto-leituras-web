import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

enum Categorias {
    acao = 1,
    aventura = 2,
    classicos = 3,
    fantasia = 4,
    ficcaoCientifica = 5,
    ficcaoHistorica = 6,
    policial = 7,
    romance = 8
}


const BookCard = ( {nome, animacao, categoria } : { nome : String, animacao: String, categoria: Categorias } ) => {
    const navigate = useNavigate()
    
    const onClickCard = () => {
        navigate(`/categoria/${categoria}`);
    }
    return (
        <Col>
            <Card onClick={onClickCard} className = {`mt-3 category-cards ${animacao}`} style={{ cursor: "pointer", width: '8rem', height: '7rem'}}>
                <Card.Body>
                    <Card.Title>
                        {nome}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

const CategoriasPage = () => {
    return (
        <>
            <Container className='mb-5 mt-5' style={{paddingLeft:0,paddingRight:0}}>
                    <Row style={{ marginLeft:0,marginRight:0 }}>
                        <BookCard nome={"Ação"} animacao={"card1"} categoria={1}/>
                        <BookCard nome={'Aventura'} animacao={"card2"} categoria={2}/>
                        <BookCard nome={'Clássicos'} animacao={"card3"} categoria={3}/>
                        <BookCard nome={'Fantasia'} animacao={"card4"} categoria={4}/>
                        <BookCard nome={'Ficção Científica'} animacao={"card5"} categoria={5}/>
                        <BookCard nome={'Ficção Histórica'} animacao={"card6"} categoria={6}/>
                        <BookCard nome={'Policial'} animacao={"card7"} categoria={7}/>
                        <BookCard nome={'Romance'} animacao={"card8"} categoria={8}/>
                    </Row>
            </Container>

            <blockquote className="blockquote text-center appearing-quote mb-5">
                <p className="mb-3">“Foram os livros que fizeram com que eu sentisse que não estava completamente sozinho. Eles podiam ser sinceros comigo e eu com eles.” </p>
                <footer className="blockquote-footer"><cite title="Source Title">Cassandra Clare</cite></footer>
            </blockquote>
        </>
    )
}


export default CategoriasPage;