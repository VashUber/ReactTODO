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
  box-shadow: 6px 15px 20px 0px rgba(34, 60, 80, 0.2); 
`

const Card = (props) => {
	return (
		<CardItem>
			<h2>{props.do}</h2>
		</CardItem>
	)
}

export default Card