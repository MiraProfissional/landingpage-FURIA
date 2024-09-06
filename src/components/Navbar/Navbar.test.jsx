import { render, screen } from '@testing-library/react';
import Navbar from '.';

describe('<Navbar />', () => {
  it('should render <Navbar />', () => {
    render(<Navbar />);
  });

  it('should render the Links correctly', () => {
    render(<Navbar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('História')).toBeInTheDocument();
    expect(screen.getByText('Elenco')).toBeInTheDocument();
    expect(screen.getByText('Campeonatos')).toBeInTheDocument();
    expect(screen.getByText('Furiosos')).toBeInTheDocument();
  });
});
