import { Job } from "sidequest";
// This is where I've added the .ts extension, this allows it to work but then it just fails one level down in \src\lib\second-dependency
import { consoleLogger } from "../lib/first-dependency.ts";

export class TestJob extends Job {
  async run() {
    consoleLogger();
    // Your email sending logic here
    return { completed: true };
  }
}
