import styled from '@emotion/styled';

export const AppStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;

  margin: 0;

  font-family: 'Lato', sans-serif;

  h1 {
    font-weight: normal;
  }

  .preview-image {
    width: calc(100% - 72px);

    margin: 36px 0;
    padding: 0;
  }
`;
