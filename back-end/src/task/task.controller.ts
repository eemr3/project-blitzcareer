import { Request, Response } from 'express';
import { TaskService } from './task.service';
import { RequestWithUser } from '../authentication/middleware/auth.middleware';
import { NotFoundException } from '../shared/exceptions/not-found.exception';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async createTask(req: RequestWithUser, res: Response) {
    const data = {
      ...req.body,
      userId: req.user?.sub,
    };

    const task = await this.taskService.createTask(data);
    return res.status(201).json(task);
  }

  async findAllTask(req: Request, res: Response) {
    const tasks = await this.taskService.findAllTask();
    return res.status(200).json(tasks);
  }

  async findoneTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await this.taskService.findOneTask(Number(id));
      return res.status(200).json(task);
    } catch (err) {
      if (err instanceof NotFoundException) {
        return res.status(404).json({ message: err.message });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await this.taskService.updateTask(Number(id), req.body);
      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof NotFoundException) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await this.taskService.deleteTask(Number(id));
      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof NotFoundException) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
