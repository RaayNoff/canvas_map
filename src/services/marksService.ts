import { IMark } from "../models/IMark";

class MarksService {
  getAll() {
    const storageResult = localStorage.getItem("marks");

    if (storageResult === null) return [] as IMark[];

    return JSON.parse(storageResult) as IMark[];
  }
  setMark(address: string, title: string, description: string) {}
}

export default new MarksService();
