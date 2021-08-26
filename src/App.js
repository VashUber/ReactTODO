import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Card";

const Body = styled.div`
  background: rgb(131, 58, 180);
  background: linear-gradient(175deg, rgba(131, 58, 180, 1) 22%, rgba(253, 29, 29, 1) 100%);
  background-attachment: fixed;
`

const Header = styled.header`
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.main`
  min-height: calc(100vh - 110px);
  padding: 20px;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 55px;
`

const AddButton = styled.button`
  width: 140px;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.45);
  color: #fff;
  text-shadow: 3px 1px 4px rgba(0, 0, 0, 0.54);
`

const TextArea = styled.textarea`
  resize: none;
  outline: none;
  width: 290px;
  height: 70px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.45);
  color: #fff;
  text-shadow: 3px 1px 4px rgba(0, 0, 0, 0.54);
  box-sizing: border-box;
  padding: 10px;
`

const Flex = styled.div`
  width: 460px;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
`

function App() {

	const [itemDo, setDo] = useState([])
	const [inputText, setText] = useState('')

	return (
		<Body>
			<Header>
				<h1>TODO app</h1>
			</Header>
			<Main>
				<Flex>
					<TextArea value={inputText} onChange={event=> setText(event.target.value)} />
					<AddButton onClick={() => {
						setDo(prev => [...prev, inputText])
						setText('')
					}}>Add task</AddButton>
				</Flex>
				<CardWrapper>
					{itemDo.map(elem => <Card do={elem}/>)}
				</CardWrapper>
			</Main>
		</Body>
	);
}

export default App;
