import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


const BookCard = ( {nome, animacao} : { nome : String, animacao: String } ) => {
    const navigate = useNavigate()
    
    const onClickCard = () => {
        navigate('/livros');
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
                        <BookCard nome={"Ação"} animacao={"card1"} />
                        <BookCard nome={'Aventura'} animacao={"card2"}/>
                        <BookCard nome={'Clássicos'} animacao={"card3"}/>
                        <BookCard nome={'Fantasia'} animacao={"card4"}/>
                        <BookCard nome={'Ficção Científica'} animacao={"card5"}/>
                        <BookCard nome={'Ficção Histórica'} animacao={"card6"}/>
                        <BookCard nome={'Policial'} animacao={"card7"}/>
                        <BookCard nome={'Romance'} animacao={"card8"}/>
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