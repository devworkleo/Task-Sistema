import { CreateTaskLayout, CreateTaskCard, CreateTaskHeader, CreateTaskForm, Title, Exit, ExitOrCreateTask, ExitButton } from "../global"
import { Form, Input, Tooltip, Select, DatePicker, ConfigProvider, Button } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"
import { AiOutlineFileSearch } from "react-icons/ai"
import { HiOutlineXMark } from "react-icons/hi2"
import { AiOutlinePlus } from "react-icons/ai"
import { createTaskAsync, getTaskCreateConfirmationAsync } from "../store/actions"
import { useDispatch } from "react-redux"
import { Task } from "../types/types"
import locale from 'antd/lib/locale/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Cookies } from "react-cookie"

moment.locale('pt-br')

export const CreateTask = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const cookies = new Cookies()
  const updateConfirmationToCreatreTask = () => {
    dispatch(getTaskCreateConfirmationAsync(false) as any)
  }
  const onDisabledDate = (current: any) => {
    return current && current < moment().endOf('day')
  }
  const handleDatePickerChange = (date: any, dateString: string) => {
    form.setFieldsValue({ final: dateString });
  }
  const handleSubmit = (data: { task: string, final: string, category: string }) => {
    const allTasks: Task [] = cookies.get('tasks') || []
    const positionTask = allTasks.length + 1
    const task: Task = {
      id: positionTask.toString(),
      task: data.task,
      final: data.final,
      category: data.category,
      status: 'pendente',
      finished: ''
    }
    dispatch(createTaskAsync(task) as any)
  }
  const categories = [
    { value: 'Alimentação', label: 'Alimentação' },
    { value: 'Esportes', label: 'Esportes' },
    { value: 'Estudo', label: 'Estudo' },
    { value: 'Dívidas', label: 'Dívidas' },
    { value: 'Saúde', label: 'Saúde' },
    { value: 'Entretenimento', label: 'Entretenimento' },
    { value: 'Dúvidas Gerais', label: 'Dúvidas Gerais' },
    { value: 'Outros', label: 'Outros' }
  ]
  return <CreateTaskLayout>
    <CreateTaskCard>
      <CreateTaskHeader>
        <Title>Cadastrar tarefa</Title>
        <Exit onClick={updateConfirmationToCreatreTask}>
          <HiOutlineXMark size={20} />
        </Exit>
      </CreateTaskHeader>
      <CreateTaskForm>
        <Form form={form} onFinish={handleSubmit} className="form">
          <Form.Item name="task" rules={[{ required: true, message: 'Por favor, informe a tarefa que deseja cadastrar!' }]}>
            <Input
              placeholder="Tarefa"
              prefix={<AiOutlineFileSearch className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Informe a tarefa que deseja cadastrar">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item name="category" rules={[{ required: true, message: 'Por favor, informe uma das categorias de tarefas!' }]}>
            <Select
              showSearch
              placeholder={'Procure por uma categoria'}
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) => (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '')
                .toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item name="final" rules={[{ required: true, message: 'Por favor, informe uma data final para essa tarefa!' }]}>
            <ConfigProvider locale={locale}>
              <DatePicker
                format="DD/MM/YYYY"
                style={{ width: '100%' }}
                disabledDate={onDisabledDate}
                onChange={handleDatePickerChange}
              />
            </ConfigProvider>
          </Form.Item>
          <ExitOrCreateTask>
            <ExitButton onClick={updateConfirmationToCreatreTask}>
              Sair
            </ExitButton>
            <Button htmlType={'submit'} className={'create_task_button'}>
              <AiOutlinePlus />
              Cadastrar tarefa
            </Button>
          </ExitOrCreateTask>
        </Form>
      </CreateTaskForm>
    </CreateTaskCard>
  </CreateTaskLayout>
}