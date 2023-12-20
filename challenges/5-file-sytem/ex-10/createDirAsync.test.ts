import { beforeEach, afterEach, describe, expect, test } from "@jest/globals";
import { createDirAsync } from "./createDirAsync";
import * as fs from "fs";

describe("createDirAsync", () => {
  const dir = `${__dirname}/test-dir`;
  afterEach(() => {
    try {
      fs.rmdirSync(dir);
<<<<<<< HEAD
    } catch {}
=======
    } catch { }
>>>>>>> b37cf2f (Cached data.csv)
  });
  beforeEach(() => {
    try {
      fs.rmdirSync(dir);
<<<<<<< HEAD
    } catch {}
=======
    } catch { }
>>>>>>> b37cf2f (Cached data.csv)
  });

  test("should create directory", async () => {
    await createDirAsync(dir);
    const exists = fs.existsSync(dir);
    expect(exists).toBe(true);
  });

  test("should throw error if directory already exists", async () => {
    fs.mkdirSync(dir);
    await expect(createDirAsync(dir)).rejects.toThrow();
  });
});
