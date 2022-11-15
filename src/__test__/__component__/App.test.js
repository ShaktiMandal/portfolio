import { render, screen } from '@testing-library/react';
import App from '../../App';

it('renders learn react link', () => {
  debugger;
  const { getByText } = render(<App />);
  const linkElement = getByText('Loading my portfolio...')
  //const linkElement = screen.getByText("Loading my portfolio...");
  expect(linkElement).toBeInTheDocument();
});

// it('render all sections', () => {

// })
