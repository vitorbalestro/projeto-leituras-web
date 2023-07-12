import { useState } from 'react';
import { Form } from 'react-bootstrap';
import CategoriasPage from '../pages/CategoriasPage';
import AlternativeCategoriasPage from '../pages/AlternativeCategoriasPage';

const CategoriasSelectViewPage = () => {

    const [ isChecked, setIsChecked ] = useState(true);
    
    const handleToggle = () => setIsChecked(!isChecked);

    return (
        <>
            <div className="mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Form>
                <Form.Check
                    type="switch"
                    id="toggle-switch"
                    label="Visão Alternativa"
                    checked={!isChecked}
                    onChange={handleToggle}
                />
                </Form>
            </div>
            {isChecked ? <CategoriasPage />
            : <AlternativeCategoriasPage />
            }
        </>
    )

}

export default CategoriasSelectViewPage;