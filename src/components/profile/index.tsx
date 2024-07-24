import { useCallback, useEffect, useState } from 'react';

import {
  ProfileContainer,
  ProfileUserDetails,
  ProfileTitle,
  ProfileDetails,
  ProfileGithub,
  ProfileFollowers,
} from './style';

import { api } from '../../lib/axios';

import github from '../../assets/icons/github.svg'
import arrow_right from '../../assets/icons/arrow-right-from-screen.svg'
import followers from '../../assets/icons/user_group.svg'

interface ProfileProps {
  name: string
  bio: string
  username: string
  followers: number
}

export function Profile() {
  const [ user, setUser ] = useState<ProfileProps>()

  const userData = useCallback(async () => {
    const res = await api.get('/users/AntoniofmBR')

    const { name, bio, login, followers } = res.data

    setUser({
      name,
      bio,
      username: login,
      followers,
    })

  }, [])

  useEffect(() => {
    userData()
  }, [userData])

  return (
    <ProfileContainer>
        <img src="https://github.com/AntoniofmBR.png" alt="User" />
        <ProfileUserDetails>
          <ProfileTitle>
            <h1>{ user?.name }</h1>
            <div>
              <a target='blank' href="https://github.com/AntoniofmBR">GITHUB</a>
              <img src={arrow_right} />
            </div>
          </ProfileTitle>
          <p>{ user?.bio }</p>

          <ProfileDetails>
              <ProfileGithub>
                <img src={github} alt="Github logo" />
                { user?.username }
              </ProfileGithub>

              <ProfileFollowers>
                <img src={followers} alt="Followers" />
                { user?.followers } seguidores
              </ProfileFollowers>
          </ProfileDetails>
        </ProfileUserDetails>
    </ProfileContainer>
  )
}