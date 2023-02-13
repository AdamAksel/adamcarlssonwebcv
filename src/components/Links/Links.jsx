import React from 'react'
import { Link } from 'react-router-dom'
import { LinksArea, LinksItem } from './Links.elements'

const Links = () => {
  return (
    <>
      <LinksArea>
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'>
          <LinksItem>
            <h3>CV</h3>
          </LinksItem>
        </Link>

        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to='/portfolio'
        >
          <LinksItem>
            <h3>Portfolio</h3>
          </LinksItem>
        </Link>

        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/q&a'>
          <LinksItem>
            <h3>Q & A</h3>
          </LinksItem>
        </Link>
      </LinksArea>
    </>
  )
}

export default Links
