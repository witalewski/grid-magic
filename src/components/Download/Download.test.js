import React from 'react';
import { Download } from './Download';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Download', () => {
  it('displays download', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Download downloadImages={jest.fn()} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
