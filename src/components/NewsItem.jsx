import React from 'react'

const NewsItem = ({title,author,url,image}) => {
  return (
    <a 
    className='news-item' 
    rel='norefferer' target='_blank' 
    href={url} 
    ><li>
        <h2>World News...</h2>
        <p>{title}</p>
        <p className='author'>{author}</p>
        <img src={image} alt={title} />
        </li>
    </a>
  )
}

export default NewsItem