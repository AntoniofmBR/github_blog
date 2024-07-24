import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostInfoButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px;
  gap: 20px;

  background: ${(props) => props.theme['base-profile']};
  width: 800px;
  border-radius: 10px;
  margin-top: -100px;

  h1 {
    width: 100%;
    color: ${(props) => props.theme['base-title']};
    font-size: 23px;
  }
`

export const BackPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  border: 0;
  background: transparent;
  gap: 7px;

  img {
    height: 12px;
    width: 12px;
  }

  span {
    color: ${(props) => props.theme['blue']};
    font-weight: 700;
  }
`

export const ViewInGithubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  border: 0;
  background: transparent;

  font-size: 12px;
  gap: 7px;

  img {
    height: 12px;
    width: 12px;
  }

  span {
    color: ${(props) => props.theme['blue']};
    font-weight: 700;
  }

  &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
  }
`

export const PostInfoData = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  width: 100%;
  gap: 20px;
`

export const PostInfoGithub = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-label']};

  img {
    margin-right: 7px;
    height: 18px;
    width: 18px;
  }
`

export const PostInfoFollowers = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-label']};

  img {
    margin-right: 7px;
    height: 18px;
    width: 18px;
  }
`

export const PostInfoComments = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-label']};

  img {
    margin-right: 7px;
    height: 18px;
    width: 18px;
  }
`

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 800px;


  padding: 40px;
  gap: 24px;

  margin-top: 20px;

  img {
    height: 100%;
    width: 100%;
  }
`