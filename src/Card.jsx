import styled from "styled-components";
import trash from './trash.png'

const CardItem = styled.div`
  width: 330px;
  height: 450px;
  text-align: center;
  border-radius: 20px;
  background: rgba(181, 250, 255, 0.3);
  color: #ffffff;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 6px 15px 20px 0 rgba(34, 60, 80, 0.2);
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const DeleteButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: none;
  border: none;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  direction: rtl;
`

const DeleteIco = styled.img`
  width: 45px;
  height: 45px;
  display: block;
  -webkit-user-drag: none;
`

const Card = (props) => {
	return (
		<CardItem>
			<CardHeader>
				<DeleteButton onClick={() => {
					props.method(prev => prev.filter(elem => elem.id !== props.elem.id))
				}}>
					<DeleteIco src={trash} alt=""/>
				</DeleteButton>
				<h2>{props.elem.text}</h2>
			</CardHeader>
			<div>{props.elem.date}</div>
		</CardItem>
	)
}

export default Card