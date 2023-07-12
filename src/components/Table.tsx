import { TaskDatableLayout, TaskDataHeaderAndAction, TaskDataTableHeader, TaskDataAndAction, TasksData, TaskField, ConfirmkAction, BackToPending, TrashAction, Actions, TrashOrConfirm } from "../global"
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai"
import { GrUpdate } from "react-icons/gr"
import { Modal } from "antd"
import { removeTaskByIdAsync, updateStatusFromTaskAsync } from "../store/actions"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../store/reducers"
import { Task } from "../types/types"

export const Table = () => {
  const dispatch = useDispatch()
  const tasks: Task [] = useSelector((state: RootState) => state.tasks)
  const capitalize = (text: string) => {
    return text.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase() })
  }
  const updateStatusFromTask = (id: string, status: 'pendente' | 'concluído') => {
    dispatch(updateStatusFromTaskAsync(tasks, id, status) as any)
  }
  const removeTaskById = (id: string) => {
    dispatch(removeTaskByIdAsync(id) as any)
  }
  const confirmToUpdateTaskToConcluded = (id: string) => {
    Modal.confirm({
      onOk: () => updateStatusFromTask(id, 'concluído'),
      title: 'Conclusão de tarefa',
      content: 'Deseja confirmar a conclusão dessa tarefa?',
      okText: 'Sim',
      cancelText: 'Não',
      cancelButtonProps: {
        danger: true
      }
    })
  }
  const confirmToUpdateTaskToPending = (id: string) => {
    Modal.confirm({
      onOk: () => updateStatusFromTask(id, 'pendente'),
      title: 'Retorno da tarefa',
      content: 'Deseja confirmar essa tarefa como pendente?',
      okText: 'Sim',
      cancelText: 'Não',
      cancelButtonProps: {
        danger: true
      }
    })
  }
  const confirmToRemoveTask = (id: string) => {
    Modal.confirm({
      onOk: () => removeTaskById(id),
      title: 'Remoção de tarefa',
      content: 'Deseja confirmar a remoção dessa tarefa?',
      okText: 'Sim',
      cancelText: 'Não',
      cancelButtonProps: {
        danger: true
      }
    })
  }
  return <TaskDatableLayout>
    <TaskDataHeaderAndAction>
      <TaskDataTableHeader>
        <TaskField>Tarefa</TaskField>
        <TaskField>Data Final</TaskField>
        <TaskField>Categoria</TaskField>
        <TaskField>Status</TaskField>
      </TaskDataTableHeader>
      <Actions>Ações</Actions>
    </TaskDataHeaderAndAction>
    { tasks.map((task: Task) => (<TaskDataAndAction key={task.id}>
      <TasksData>
        <TaskField>{ task.task }</TaskField>
        <TaskField>{ task.finished ? task.finished : task.final }</TaskField>
        <TaskField>{ task.category }</TaskField>
        <TaskField>{ capitalize(task.status) }</TaskField>
      </TasksData>
      <TrashOrConfirm>
        { task.status == 'pendente'
          ? <ConfirmkAction onClick={() => { confirmToUpdateTaskToConcluded(task.id) }}>
            <AiOutlineCheck />
          </ConfirmkAction>
          : <BackToPending onClick={() => { confirmToUpdateTaskToPending(task.id) }}>
            <GrUpdate/>
          </BackToPending>
        }
        <TrashAction onClick={() => { confirmToRemoveTask(task.id) }}>
          <AiOutlineDelete />
        </TrashAction>
      </TrashOrConfirm>
    </TaskDataAndAction>)) }
  </TaskDatableLayout>
}