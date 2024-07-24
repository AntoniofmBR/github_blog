import styled from 'styled-components';

export const CardContainer = styled.button`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-post']};
  height: 260px;
  width: 100%;
  padding: 30px;

  border-radius: 10px;

  margin: 0;
  border: 0;
  cursor: pointer;

  p {
    color: ${(props) => props.theme['base-text']};
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.5;

    text-align: justify;
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    white-space: normal;
    text-overflow: ellipsis; 
  }

  &:hover, &:focus{
    border: 1px solid ${(props) => props.theme['base-span']}
  }
` 

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  
  gap: 10px;

  h3 {
    width: 100%;
    text-align: left;
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
  }
  
  span {
    color: ${(props) => props.theme['base-span']};
    width: 30%;
    height: 20px;
    text-align: right;
    font-size: 13px;
  }
`