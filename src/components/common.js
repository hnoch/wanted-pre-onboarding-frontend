import { styled } from 'styled-components'

export const Layout = styled.div`
  height: 100%;
`

export const Inner = styled.div`
  margin: 0px auto;
  padding: 80px 0px;
  width: 420px;
  text-align: center;
`

export const LogoImg = styled.img`
  width: calc(100% - 100px);
  height: 60px;
  margin-bottom: 40px;
`

export const InputLabel = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
`

export const InputWarnLabel = styled.div`
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 16px;
  color: coral;
`

export const InputBox = styled.input`
  box-sizing: border-box;
  border-radius: 7px;
  border: 1px solid #e5e5e5;
  background: #f6f6f6;
  &:focus {
    background: #ffffff;
  }
  width: 100%;
  padding: 12px 16px;
  margin-bottom: ${props => (props.noMB ? '0px' : '10px')};
  font-size: 12px;
  font-weight: 400;
`

export const SubmitButton = styled.button`
  border-radius: 4px;
  padding: 12px 8px;
  width: ${props => (props.width ? props.width : '100%')};
  border: 1px solid #e5e5e5;
  background: rgb(67, 139, 255);
  font-size: 14px;
  font-weight: 600;
  color: white;
  &:disabled {
    background: #8d8d8e;
  }
`

export const CommonButton = styled.button`
  border-radius: 4px;
  padding: 12px 8px;
  width: ${props => (props.width ? props.width : '100%')};
  border: none;
  background: ${props => (props.color ? props.color : '#67ff5f')};
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-top: ${props => (props.noMT ? '0px' : '10px')};
`

export const RowWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const SmallButton = styled.button`
  border-radius: 4px;
  padding: 12px 16px;
  width: auto;
  border: none;
  background: ${props => (props.color ? props.color : '#67ff5f')};
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-left: 8px;
  white-space: nowrap;
`

export const CommonH1 = styled.h1`
  text-decoration: underline;
`

export const CommonH2 = styled.h2`
  text-align: left;
`

export const NoData = styled.div`
  padding: 20px 0px;
  font-size: 16px;
  font-weight: 500;
`

export const CommonLi = styled.li`
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const InputCheck = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 8px;
`

export const CommonSpan = styled.span`
  font-size: 12px;
  margin-left: ${props => (props.noML ? '0px' : '12px')};
  font-weight: ${props => (props.weight ? props.weight : 300)};
`
