import { useNavigate } from 'react-router-dom';
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns';

import { CardContainer, CardTitle } from './style';
import { PostProps } from '../../pages/home';

interface CardProps {
  post: PostProps
}

export function Card({ post }: CardProps) {
  const navigate = useNavigate()

  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNavigateToPostPage() {
    return navigate(`/post/${post.number}`)
  }

  return (
    <CardContainer onClick={ handleNavigateToPostPage } >
      <CardTitle>
        <h3>{ post.title }</h3>
        <span>{ formattedDate }</span>
      </CardTitle>
      <p>{ post.body }</p>
    </CardContainer>
  )
}