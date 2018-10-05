import React from 'react';
import { Input, Button } from 'antd';

const inputStyle = {
    minWidth: '240px',
    width: 'calc(1/3*100%)',
    maxWidth: '320px'
}

const Exercice = () => (
    <div className='exercice' style={{ marginBottom: '16px'}} >
        <Input addonBefore='Execice' style={{ maxWidth: '400px'}} />
        <Input addonBefore='Séries' style={inputStyle} />
        <Input addonBefore='Répétitions' style={inputStyle} />
        <Input addonBefore='Repos' addonAfter='secondes' style={inputStyle} />
    </div>
)
    
const Formulaire= ({ num }) => {
    const exercices = []
    for (let i = 0; i < num; i++){
        exercices.push(<Exercice key={i} />)
    }
    return (
        <form>
            { exercices }
            <Button
            type='primary'
            htmlType='submit'>
                Envoyer le PDF
            </Button>

        </form>
    )
}
    


export default Formulaire;