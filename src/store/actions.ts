import { ThunkDispatch, ThunkAction } from 'redux-thunk'
import { RootState } from '../store/reducers'
import { AnyAction } from 'redux'
import { Task } from '../types/types'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

const removerObjetoPorID = (array: Task [], id: string) => {
  return array.filter(objeto => objeto.id !== id)
}
const alterarStatusDeObjetoPorID = (array: Task [], id: string, status: 'pendente' | 'concluído', finish: string) => {
  const finished = finish ?? ''
  const object = array.map(item => {
    if (item.id === id) {
      return { ...item, status: status, finished: finished };
    }
    return item;
  })
  return object
}
export const createTaskAsync = (task: Task): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    const tasks: Task [] = cookies.get('tasks') || []
    tasks.push(task)
    cookies.set('tasks', tasks)
    dispatch({ type: 'GET_TASK', payload: tasks })
    dispatch({ type: 'UPDATE_CREATE_CONFIRMATION', payload: false })
  }
}
export const getTaskByFilterAsync = (task: string, tasks: Task[]): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    const filteredTasks = tasks.filter(founded => Object.values(founded).some(value => value.toLowerCase().includes(task.toLowerCase())))
    dispatch({ type: 'GET_TASK_BY_FILTER', payload: filteredTasks })
    dispatch({ type: 'UPDATE_FILTER', payload: task })
  }
}
export const getTaskCreateConfirmationAsync = (confirmation: boolean): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    dispatch({ type: 'UPDATE_CREATE_CONFIRMATION', payload: confirmation })
  }
}
export const removeAllTaksAsync = (): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    try {
      cookies.remove('tasks')
      dispatch({ type: 'GET_TASK', payload: [] })
      dispatch({ type: 'UPDATE_FILTER', payload: '' })
    } catch {
      console.log('Não foi possível remover os registros')
    }
  }
}
export const removeTaskByIdAsync = (id: string): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    const tasks: Task [] = cookies.get('tasks')
    const taskUpdated = removerObjetoPorID(tasks, id)
    cookies.set('tasks', taskUpdated)
    dispatch({ type: 'GET_TASK', payload: taskUpdated })
  }
}
export const updateStatusFromTaskAsync = (tasks: Task [], id: string, status: 'pendente' | 'concluído'): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
    const date = moment().format('DD/MM/YYYY')
    const taskUpdated = alterarStatusDeObjetoPorID(tasks, id, status, date)
    cookies.set('tasks', taskUpdated)
    dispatch({ type: 'GET_TASK', payload: taskUpdated })
  }
}
