import React from "react";
import { render, fireEvent } from '@testing-library/react'
import Button from './Button';
test('Отрисовка кнопки', () =>  {
    const buttonText= 'Нажмите кнопку';
    const { getByText} = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
});

test('Нажатие кнопки', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Нажмите кнопку</Button>);
    const buttonElement = getByText('Нажмите кнопку');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
