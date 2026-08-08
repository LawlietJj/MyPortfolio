import React from 'react'
import Container from './container'

const Section = ({children, className = ""}) => {
  return (
   <section className={`min-h-screen flex items-center py-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Section