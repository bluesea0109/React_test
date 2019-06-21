import React from 'react';
import styled from 'styled-components';

import Photos from './Photos';

const PhotoSectionWrapper = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default class PhotoSection extends React.Component {
  render() {
    return (
      <PhotoSectionWrapper>
        <Photos />
      </PhotoSectionWrapper>      
    )
  }
}