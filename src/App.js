import React, {useEffect, useState} from "react";
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
  text-align: center;
  padding-top: 30px;
  box-sizing: border-box;
`

const Main = styled.main`
  min-height: calc(100vh - 110px);
  padding: 20px;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 20px;
  padding-top: 30px;
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
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width || '100%'};
`

const Search = styled.input`
  border: none;
  background: rgba(255, 255, 255, 0.45);
  outline: none;
  color: #fff;
  text-align: center;
  width: 550px;
  margin-right: 30px;
  height: 70px;
  border-radius: 10px;
`

function App() {
	let localStorageTask = JSON.parse(localStorage.getItem('tasks'))
	const [itemDo, setDo] = useState(localStorageTask ? localStorageTask : [])
	const [inputText, setText] = useState('')
	const [id, setId] = useState(+localStorage.getItem('id'))
	const [search, setSearch] = useState('')
	const filteredTasks = itemDo.filter(elem => elem.text.toLowerCase().includes(search.toLowerCase()))

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(itemDo))
	}, [itemDo])

	return (
		<Body>
			<Header>
				<h1>TODO app</h1>
			</Header>
			<Main>
				<Flex>
					<Flex width={'460px'}>
						<TextArea value={inputText} onChange={event => setText(event.target.value)}/>
						<AddButton onClick={() => {
							if (inputText) {
								let newTask = {
									id: id,
									text: inputText,
									date: new Date().toLocaleString().slice(0, -3)
								}
								localStorage.setItem('id', (id + 1).toString())
								setDo(prev => [...prev, newTask])
								setId(id + 1)
								setText('')
							}
						}}>Add task</AddButton>
					</Flex>
					<Search placeholder={'Search'} value={search}
					        onChange={(event) => setSearch(event.target.value)}
					/>
				</Flex>
				<CardWrapper>
					{filteredTasks.map((elem) => <Card elem={elem} key={elem.id} method={setDo}/>)}
				</CardWrapper>
			</Main>
		</Body>
	);
}

export default App;
