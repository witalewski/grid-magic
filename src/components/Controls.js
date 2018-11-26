import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { addImage } from '../actions';

export const Controls = ({ addImageData }) => {
  const onChange = (event) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const dataURI = e.target.result;
      addImageData(dataURI);
    };

    fileReader.readAsDataURL(event.target.files[0]);
  };

  return <input type="file" onChange={onChange} />;
};

Controls.propTypes = {
  addImageData: func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addImageData: image => dispatch(addImage(image)),
});

export const ConnectedControls = connect(mapStateToProps, mapDispatchToProps)(Controls);
