import React from 'react'
import Form from './Form'

const Header = ({language,languageHandler,searchRef,handleSubmit,todaysDateDisplay}) => {
  return (
    <header >
        
        <h1>News</h1>
        <h3>{todaysDateDisplay}</h3>
        <aside>
        <Form 
            language={language}
            languageHandler={languageHandler}
            searchRef={searchRef}
            handleSubmit={handleSubmit}
        />
        </aside>
    </header>
  )
}

export default Header