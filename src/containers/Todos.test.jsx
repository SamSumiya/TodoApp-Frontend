import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Todos from './Todos'

describe(('Test Todos Container Component'), () => {
    it('test if there are todo list in the DOM', async() => {
        render(
            <Todos />
        )
        screen.getByAltText('A loading spinner');
        await screen.findByText('My Todo List')
    })
}); 
