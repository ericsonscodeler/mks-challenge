import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 320px;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: gray 0px 1px 4px;
  position: relative;
`
export const DivImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  align-items: center;
`

export const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 120px;
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: black;
  border-radius: 6px;
  p {
    color: ${(props) => props.theme.white};
  }
`
export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 15px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-bottom: 10px;
  p {
    font-size: 10px;
    font-weight: light;
  }
`

export const Purchase = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 0 50px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #6283f3;
  }

  p {
    color: ${(props) => props.theme.white};
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`

interface LoadingProps {
  width: string
  height: string
}

export const Loading = styled.div<LoadingProps>`
  ${({ width, height }) => css`
    display: flex;
    align-items: center;
    width: ${width}px;
    height: ${height}px;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 50%, #f2f2f2 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    margin: 10px;
  `}

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`
