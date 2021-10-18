import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Todos from './Todos';

describe('Test my Todo App', () => {
  it('Testing if I can add, update and delete a todo from a todos list', async () => {
    render(<Todos />);

    screen.getByAltText('A loading spinner');
  });
});
