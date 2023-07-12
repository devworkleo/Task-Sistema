import { NotFoundAction, NotFoundActions, NotFoundLayout, Subtitle, Title } from "../global"
import { AiOutlineFileSearch, AiOutlineClear, AiOutlinePlus } from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store/reducers"
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

export const NotFound = () => {
  const dispatch = useDispatch()
  const filtered = useSelector((state: RootState) => state.filter)
  const taskCookies = cookies.get('tasks')
  const clearFilter = () => {
    dispatch({ type: 'GET_TASK_BY_FILTER', payload: taskCookies })
    dispatch({ type: 'UPDATE_FILTER', payload: '' })
  }
  const updateConfirmationToCreatreTask = () => {
    dispatch({ type: 'UPDATE_CREATE_CONFIRMATION', payload: true })
  }
  const FilterOrNot = () => {
    if (filtered) {
      return <NotFoundAction onClick={clearFilter}>
        <AiOutlineClear />
        Limpar Filtros
      </NotFoundAction>
    }
  }
  return <NotFoundLayout>
    <AiOutlineFileSearch size={40} />
    <Title>Nenhuma tarefa encontrada</Title>
    <Subtitle>Não foi possível encontrar tarefas com o filtro realizado. Gostaria de criar uma nova tarefa?</Subtitle>
    <NotFoundActions>
      <FilterOrNot />
      <NotFoundAction onClick={updateConfirmationToCreatreTask}>
        <AiOutlinePlus />
        Nova tarefa
      </NotFoundAction>
    </NotFoundActions>
  </NotFoundLayout>
}