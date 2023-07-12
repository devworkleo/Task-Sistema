export interface Task {
  id: string
  task: string
  final: string
  category: string
  status: 'pendente' | 'concluído'
  finished: string
}
export interface TaskRecords {
  filter: string
  allRecords: Task []
  filteredRecords: Task []
}