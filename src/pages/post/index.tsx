import { useNavigate, useParams } from 'react-router-dom';


import {
  BackPageButton,
  PostContainer,
  PostInfo,
  PostInfoButtons,
  PostInfoComments,
  PostInfoData,
  PostInfoFollowers,
  PostInfoGithub,
  ViewInGithubButton,
  PostBody,
} from './style';

import { Header } from '../../components/header';

import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right-from-screen.svg'
import github from '../../assets/icons/github.svg'
import calendar from '../../assets/icons/calendar.svg'
import balloon from '../../assets/icons/balloon.svg'
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import ReactMarkdown from 'react-markdown';

interface PostDetails {
  title: string
  comments: number
  createdAt: string
  url: string
  body: string
}

export function Post() {
  const [ post, setPost ] = useState<PostDetails>({} as PostDetails)
  const [ username, setUsername ] = useState('')

  const { id } = useParams()

  const getPostData = useCallback(async () => {
    const res = await api.get(
      `repos/AntoniofmBR/github_blog/issues/${id}`
    )

    setPost(res.data)
    setUsername(res.data.user.login)
  }, [id])

  useEffect(() => {
    getPostData()
  }, [getPostData])

  const navigate = useNavigate()
  
  function handleBackToHomePage() {
    return navigate('/')
  }

  return (
    <PostContainer>
      <Header />
      <PostInfo>
        <PostInfoButtons>
          <BackPageButton onClick={ handleBackToHomePage } >
            <img src={ arrowLeft } alt="back page button" />
            <span>VOLTAR</span>
          </BackPageButton>

          <ViewInGithubButton href={`https://github.com/${username}`} target='blank' >
            <span>VER NO GITHUB</span>
            <img src={ arrowRight } alt="back page button" />
          </ViewInGithubButton>
        </PostInfoButtons>

        <h1>{ post.title }</h1>

        <PostInfoData>
            <PostInfoGithub>
              <img src={github} alt="Github logo" />
              { username }
            </PostInfoGithub>

          <PostInfoFollowers>
            <img src={calendar} alt="Followers" />
            Há 1 dia
          </PostInfoFollowers>

          <PostInfoComments>
            <img src={balloon} alt="Followers" />
            { post.comments } comentários
          </PostInfoComments>
        </PostInfoData>
      </PostInfo>

      <PostBody>
        <ReactMarkdown>{ post.body }</ReactMarkdown>
      </PostBody>
    </PostContainer>
  )
}