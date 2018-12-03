import React from 'react';
import { Preview } from './Preview';
import { ImageProcessor } from '../../services';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Preview', () => {
  it('displays preview', () => {
    const renderer = new ShallowRenderer();
    const imageProcessor = new ImageProcessor();
    renderer.render(
      <Preview canvas={imageProcessor.getPlaceholderCanvas(100,100,100,0)} addFile={jest.fn()} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
