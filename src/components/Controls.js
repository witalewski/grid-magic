import React from 'react';

export const Controls = () => {
  const onChange = (event) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const dataURI = e.target.result;
      console.log(dataURI);
    };

    fileReader.readAsDataURL(event.target.files[0]);
  };

  return <input type="file" onChange={onChange} />;
};
