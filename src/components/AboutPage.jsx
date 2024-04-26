import React from 'react';
import NewForm from './NewForm';
const AboutPage = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <h2>О проекте</h2>
            <p>Описание проекта.</p>
            <NewForm />
        </div>
    );
}

export { AboutPage };