import { render } from '@testing-library/react';
import NoneFound from "../../poems/NoneFound";

describe('NoneFound', () => {
  it('renders without crashing', () => {
    const { container } = render(<NoneFound />);
    expect(container).toBeInTheDocument();
  });

  it('displays no poems found message', () => {
    const { getByText } = render(<NoneFound />);
    expect(getByText('No poems found')).toBeInTheDocument();
  });
});