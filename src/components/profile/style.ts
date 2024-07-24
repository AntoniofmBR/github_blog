import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;


  margin-top: -100px;

  background: ${(props) => props.theme['base-profile']};
  width: 800px;
  height: 200px;
  
  border-radius: 10px;
  padding: 40px;

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }
`

export const ProfileUserDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 25px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;
    height: 20px;

    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      color: ${(props) => props.theme['blue']};
    }

    img {
      height: 15px;
      width: 15px;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
    }
  }
`

export const ProfileDetails = styled.a`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme['base-subtitle']};
  gap: 20px;

  img {
    height: 18px;
    width: 18px;
  }
`

export const ProfileGithub = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-right: 7px;
  }
`

export const ProfileFollowers = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 7px;
  }
`
