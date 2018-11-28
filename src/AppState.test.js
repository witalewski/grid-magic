import { AppState } from './AppState';

describe('AppState', () => {
  let appState;

  beforeEach(() => {
    appState = new AppState();
  });

  it('displays greeting when no name is set', () => {
    expect(appState.greeting).toBe('Hello, User!');
  });

  it('sets name and greeting', () => {
    appState.setName('Kris');
    expect(appState.name).toBe('Kris');
    expect(appState.greeting).toBe('Hello, Kris!');
  });
});
