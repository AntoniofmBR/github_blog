import { useCallback, useEffect, useState } from 'react';
import { HomeContainer, HomeSearch, HomeInput, CardList } from './style';

import { Header } from '../../components/header';
import { Profile } from '../../components/profile';
import { Card } from '../../components/card';
import { api } from '../../lib/axios';

export interface PostProps {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [ posts, setPosts ] = useState<PostProps[]>([] as PostProps[])
  const [ publications, setPublications ] = useState(0)
  const [ search, setSearch ] = useState('')


  const listPosts = useCallback(async (query: string | null) => {
    const res = await api.get(
      `/search/issues?q=${query}%20repo:AntoniofmBR/github_blog`
    )

    setPublications(res.data.total_count)
    setPosts(res.data.items)
  }, [])


  useEffect(() => {
    listPosts('')
  }, [listPosts])

  return (
    <HomeContainer>
      <Header />
      <Profile />

      <HomeSearch>
        <div>
          <h3>Publicações</h3>
          <p>{ publications } publicações</p>
        </div>
        <HomeInput
          type="text"
          placeholder='Buscar conteúdo'
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && listPosts(search)
          }
          />
      </HomeSearch>

      <CardList>
        { posts.length > 0 ? (
            posts.map((post) => (
              <Card 
                key={post.number}
                post={post}
              />
            )) ) : (
              <h2>Sua pesquisa não retornou resultados</h2>
            )}
      </CardList>
    </HomeContainer>
  )
}