import { combineReducers } from "redux"
import { Cookies } from "react-cookie"
import { Task } from "../types/types"
const cookies = new Cookies()

const initialTasks: Task [] = cookies.get('tasks') ?? []
const initialFilterTasks: string = ''
const initialCreateTasksConfirmation: boolean = false

const taskReducer = (state = initialTasks, action: any): Task [] => {
  switch (action.type) {
    case 'GET_TASK':
      return action.payload
    case 'GET_TASK_BY_FILTER':
      return action.payload
    default:
      return state
  }
}
export const taskFilterReducer = (state = initialFilterTasks, action: any): string => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.payload
    default:
      return state
  }
}
const taskCreateConfirmationReducer = (state = initialCreateTasksConfirmation, action: any): boolean => {
  switch (action.type) {
    case 'UPDATE_CREATE_CONFIRMATION':
      return action.payload
    default:
      return state
  }
}

export const reducer = combineReducers({
  tasks: taskReducer,
  filter: taskFilterReducer,
  isCreate: taskCreateConfirmationReducer
})

export type RootState = ReturnType<typeof reducer>