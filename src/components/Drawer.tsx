import * as React from 'react'
import styled from 'styled-components'

type TProps = {
  show: boolean
  onClickShadow: () => void
}
type TShadow = {
  show: boolean
}
type TStyledMain = {
  show: boolean
}

const Shadow = styled.div<TShadow>(props => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  bottom: 0,
  zIndex: 4,
  background: 'rgba(0, 0, 0, 0.5)',
  display: props.show ? 'block' : 'none'
}))

const Main = styled.div<TStyledMain>(() => ({
  position: 'absolute',
  width: '100%',
  bottom: 0,
  zIndex: 5,
  borderRadius: '8px 8px 0 0',
  background: 'white',
}))


const Drawer: React.FC<TProps> = (props) => {
  const {show, onClickShadow} = props

  return (
    <Shadow show={show} onClick={onClickShadow}>
      <Main show={show}>
        {props.children}
      </Main>
    </Shadow>
  )
}

export default Drawer