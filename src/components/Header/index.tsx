import React from 'react';

import './style.css'

interface HeaderProps {
    todoCount:number
}

export const Header:React.FC<HeaderProps> = ({todoCount}) => {
     console.log('header');
    return (
        <div className='header_container'>
            <div className='header_title'>
                Количество задач: {todoCount}
            </div>

        </div>
    )
 }