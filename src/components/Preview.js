import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

export const Preview = ({ image }) => image && <img alt="Preview" src={image} />;

Preview.propTypes = {
  image: string,
};

Preview.defaultProps = {
  image: '',
};

const mapStateToProps = state => ({
  image: state.image.image,
});

export const ConnectedPreview = connect(mapStateToProps)(Preview);
