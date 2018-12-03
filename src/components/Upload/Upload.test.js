import React from 'react';
import { Upload } from './Upload';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Upload', () => {
  it('displays upload', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Upload addFile={jest.fn()} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
