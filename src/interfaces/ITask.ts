interface ITask {
  id?: number,
  userId: number, 
  task: string, 
  status: string, 
  created?: string
}

export default ITask;
