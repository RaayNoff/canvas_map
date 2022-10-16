import { IMark } from "../models/IMark";

class MarksService {
  getAll() {
    const storageResult = localStorage.getItem("marks");

    if (storageResult === null) return [] as IMark[];

    return JSON.parse(storageResult) as IMark[];
  }
  setMark(mark: IMark) {
    const storageMarks = this.getAll();
    storageMarks.push(mark);
    localStorage.setItem("marks", JSON.stringify(storageMarks));
  }
}

export default new MarksService();
