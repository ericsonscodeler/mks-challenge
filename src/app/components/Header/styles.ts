import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px;
`

export const Company = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 40px;
    font-weight: semi-bold;
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 20px;
    font-weight: light;
    color: ${(props) => props.theme.white};
    margin-left: 10px;
  }
`

export const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 45px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  p {
    color: ${(props) => props.theme.black};
    font-weight: bold;
    margin-left: 14px;
  }
`
