import styled from "styled-components";

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
  border: solid 3px #fd8181;
  background: none;
  color: #fd8181;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  direction: rtl;
`


const Card = (props) => {
	return (
		<CardItem>
			<CardHeader>
				<DeleteButton onClick={() => {
					props.method(prev => prev.filter(elem => elem.id !== props.elem.id))
				}}>
					<div>X</div>
				</DeleteButton>
				<h2>{props.elem.text}</h2>
			</CardHeader>
			<div>{props.elem.date}</div>
		</CardItem>
	)
}

export default Card