import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDoComponent} from "./to-do/to-do.component";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  tasksUrl = "https://handsome-ruby-pinafore.cyclic.app/tasks/";

  // http://localhost:5000/tasks

  headers = {
    headers:
      {
        "Content-Type": "application/json"
      }
  }

  getTasks() {
    return this.http.get(this.tasksUrl)
  }

  postTask(task: any) {
    return this.http.post(this.tasksUrl, task, this.headers)
  }


  postSubTask(subTask: any, id: number) {
    let subTasksUrl = this.tasksUrl + id + "/subTasks"
    console.log(subTasksUrl)
    return this.http.post(subTasksUrl, subTask, this.headers)
  }

  patchSubTask(taskId:number, subId:number, patch:any) {
    let subTaskUrl = this.tasksUrl + taskId + "/subTasks/" + subId
    return this.http.patch(subTaskUrl, patch, this.headers)
  }


  deleteTask(taskId: number) {
    let taskIdUrl = this.tasksUrl + taskId;
    return this.http.delete(taskIdUrl, this.headers)
  }

  deleteSubTAsk(taskId:number, subId:number) {
    let subTaskUrl = this.tasksUrl + taskId + "/subTasks/" + subId
    return this.http.delete(subTaskUrl, this.headers)
  }
}



