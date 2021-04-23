import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdErrorOutline, MdSearch } from 'react-icons/md';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Icon = styled.svg`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0turn);
  } to {
    transform: rotate(1turn)
  }
`;

const LoadingIcon = styled(Icon).attrs({ as: AiOutlineLoading3Quarters })`
  animation: 0.8s ${rotate} linear infinite;
`;

export const loadingPlaceholder = (
  <Container>
    <LoadingIcon />
    Loading...
  </Container>
);

export const errorPlaceholder = (
  <Container>
    <Icon as={MdErrorOutline} />
    Something went wrong!
  </Container>
);

export const emptyPlaceholder = (
  <Container>
    <Icon as={MdSearch} />
    Nothing was found.
  </Container>
);
