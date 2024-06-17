import { App } from '@src/App';
import { render, screen } from '@testing-library/react-native';

describe('App', () => {
  it('should mount without errors', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('should unmount without errors', () => {
    render(<App />);
    expect(() => screen.unmount()).not.toThrow();
  });
});
