import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeSearch = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 72px;
  width: 800px;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const HomeInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  padding: 12px 16px;

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-title']};

  &:focus {
    border: 1px solid ${(props) => props.theme['base-blue']};
  }
`

export const CardList = styled.div`
  margin: 48px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  height: 100%;
  gap: 32px;
  width: 800px;
`