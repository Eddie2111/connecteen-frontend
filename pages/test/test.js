/*
import Image from 'next/image'
import React from 'react'
import Component from '../test/component'
const Container = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ overflowX: 'scroll', width: '500px' }}>
      {props.children}
    </div>
  )
})

export default function Example () {
  const lazyRoot = React.useRef(null)

  return (

    <Container ref={lazyRoot}>
      <Image lazyRoot={lazyRoot} src="/c.png" width="800" height="500" />
      <Component />
      <Image lazyRoot={lazyRoot} src="/ai.png" width="600" height="500" />
    </Container>
  )
}
*/
