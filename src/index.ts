import { Sidequest } from "sidequest";
import { TestJob } from "./jobs/TestJob.ts";

// Start Sidequest
Sidequest.start({
  backend: {
    driver: "@sidequest/sqlite-backend",
    config: {
      client: "better-sqlite3",
      connection: {
        filename: "./sidequest.sqlite",
      },
    },
  },
})
  .then(async () => {
    console.log("Sidequest started! Dashboard: http://localhost:8678");

    await Sidequest.build(TestJob).enqueue();
  })
  .catch((err) => console.error("Issue starting sidequest", err));
