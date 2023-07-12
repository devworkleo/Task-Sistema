import { SearchTaskLayout, CreateOrRemoveTask, CreateTaskButton, RemoveAllTaskButton, Text } from "../global"
import { AiOutlineFileSearch, AiOutlinePlus, AiOutlineClear } from "react-icons/ai"
import { InfoCircleOutlined } from "@ant-design/icons"
import { Input, Tooltip, Modal } from "antd"
import { getTaskByFilterAsync, getTaskCreateConfirmationAsync, removeAllTaksAsync } from "../store/actions"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../store/reducers"
import { Task } from "../types/types"
import { useEffect } from "react"

export const SearchTask = () => {
  const dispatch = useDispatch()
  const tasks: Task [] = useSelector((state: RootState) => state.tasks)
  const filter = useSelector((state: RootState) => state.filter)
  const searchByFilter = (filter: string) => {
    dispatch(getTaskByFilterAsync(filter, tasks) as any)
  }
  const removeAllTaks = () => {
    dispatch(removeAllTaksAsync() as any)
  }
  const updateConfirmationToCreatreTask = () => {
    dispatch(getTaskCreateConfirmationAsync(true) as any)
  }
  const confirmToRemoveTasks = () => {
    Modal.confirm({
      onOk: () => removeAllTaks(),
      title: 'Remoção de tarefas',
      content: 'Deseja confirmar a remoção de todas as tarefas?',
      okText: 'Sim',
      cancelText: 'Não',
      cancelButtonProps: {
        danger: true
      }
    })
  }
  useEffect(() => {
    searchByFilter(filter)
  }, [])
  return <SearchTaskLayout>
    <Input
      value={filter}
      className='search_task'
      onChange={(event) => searchByFilter(event.target.value)}
      placeholder='Infome o nome, categoria ou status da tarefa'
      prefix={<AiOutlineFileSearch size={16} />}
      suffix={<Tooltip title="Informe o nome, categoria ou status da tarefa que deseja encontrar">
      <InfoCircleOutlined style={{ color: 'rgba(0,0,0,0.7)', marginRight: 10 }} />
    </Tooltip>}
    />
    { tasks.length >= 1
      ? <CreateOrRemoveTask>
        <RemoveAllTaskButton onClick={confirmToRemoveTasks}>
          <AiOutlineClear size={14} />
          <Text>Apagar tarefas</Text>
        </RemoveAllTaskButton>
        <CreateTaskButton onClick={updateConfirmationToCreatreTask}>
          <AiOutlinePlus size={14} />
          <Text>Nova tarefa</Text>
        </CreateTaskButton>
      </CreateOrRemoveTask>
      : <CreateTaskButton onClick={updateConfirmationToCreatreTask} style={{ width: '30%' }}>
        <AiOutlinePlus size={14} />
        <Text>Nova tarefa</Text>
      </CreateTaskButton>
    }
  </SearchTaskLayout>
}