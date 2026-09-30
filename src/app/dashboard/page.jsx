import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log('Dashboard Page Rendered')

    return (
        <div>
            <h2>Dashboard Page</h2>
            <Counter></Counter>

            <ul>
                <li>dashboard 1</li>
                <li>dashboard 2</li>
                <li>dashboard 3</li>
                <li>dashboard 4</li>
                <li>dashboard 5</li>
            </ul>
        </div>
    );
};

export default DashboardPage;