import { render, screen } from '@testing-library/react';
import React from 'react';
import NavBar from '../../Component/Layout/Navbar';

test('render about section', ()=> {

    render(<NavBar/>);
    const navItem = screen.getByRole("nav");
   

});