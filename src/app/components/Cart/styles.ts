import styled from 'styled-components'

interface IContainer {
  isOpen: boolean
}

export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  width: 420px;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  box-shadow: -2px 0px 5px ${(props) => props.theme.gray};
  transition: right 0.3s ease;
  p {
    font-size: 13px;
    margin: 0;
  }
`

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  span {
    width: 150px;
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: black;
  cursor: pointer;
  border-radius: 50%;
  svg {
    color: ${(props) => props.theme.white};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  overflow-y: auto;
`

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px 20px;
  height: 70px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};

  img {
    border-radius: 8px;
  }
`

export const Name = styled.div`
  width: 25%;
  margin: 0 5px;
  span {
    display: block;
    word-wrap: break-word;
  }
`

export const DivQuantity = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 0;
    font-size: 10px;
  }
`

export const QuantityDisplay = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 4px;

  div {
    cursor: pointer;
    font-size: 20px;
    border: 1px solid #ccc;
    padding: 0 8px;
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      font-weight: bold;
      padding: 4.5px 1px;
    }
  }
`

export const DivNumberItems = styled.div``

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  span {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`

export const FinalizePurchase = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.black};
  height: 70px;
  span {
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`

export const RemoveButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -8px;
  margin-right: -8px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.black};
  cursor: pointer;
  border-radius: 50%;
  svg {
    color: ${(props) => props.theme.white};
  }
`
