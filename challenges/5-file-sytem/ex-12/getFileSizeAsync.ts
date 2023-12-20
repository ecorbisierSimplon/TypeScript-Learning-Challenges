import * as fs from "fs";

export function getFileSizeAsync(path: string): Promise<number> {
  try {
    return Promise.resolve(fs.statSync(path).size);
  } catch (error) {
    return Promise.reject(error);
  }
}
