
import { CreateTask } from "../components/CreateTask"
import { SearchTask } from "../components/SearchTask"
import { NotFound } from "../components/NotFound"
import { Table } from "../components/Table"
import { TasksLayout } from "../global"
import { RootState } from "../store/reducers"
import { useSelector } from "react-redux"
import { Task } from "../types/types"

export const Tasks = () => {
  const TaskDataTableOrNotFound = () => {
    const data: Task [] = useSelector((state: RootState) => state.tasks)
    if (data.length >= 1) {
      return <Table />
    } else {
      return <NotFound />
    }
  }
  const CreateTaskToShow = () => {
    const isCreate: boolean = useSelector((state: RootState) => state.isCreate)
    if (isCreate) {
      return <CreateTask />
    }
  }
  return <TasksLayout>
    <SearchTask />
    <TaskDataTableOrNotFound />
    <CreateTaskToShow />
  </TasksLayout>
}