export function createTask(title) {
  return { id: Date.now(), title, status: "pending" };
}
