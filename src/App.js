import React, { useState } from 'react';

import Info from './Info';

const initEmployee = [
    { id: 1, name: '홍길동', dept: '영업부' },
    { id: 2, name: '유관순', dept: '영업부' },
    { id: 3, name: '강동현', dept: '대표' },
];

function App() {
    const [employee, setEmployee] = useState(initEmployee);
    const addEmployee = (person) => {
        // person = {id: xxx, name:asdads, dept: dadfadf}
        setEmployee([...employee, person]);
    };

    return (
        <div className='App'>
            <Info employee={employee} addEmployee={addEmployee} />
        </div>
    );
}

export default App;
