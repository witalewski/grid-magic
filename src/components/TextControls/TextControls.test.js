import React from 'react';
import { TextControls } from './TextControls';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('TextControls', () => {
  it('displays text controls', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <TextControls setOverlayText={jest.fn()} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
