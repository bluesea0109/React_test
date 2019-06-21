import React from 'react';
import styled from 'styled-components';

import { SearchUser, Photos } from './components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
`;

export default class MainView extends React.Component {
  render() {
    return (
      <MainWrapper>
        <ContentWrapper>
          <SearchUser />
          <Photos />
        </ContentWrapper>
      </MainWrapper>
    )
  }
}