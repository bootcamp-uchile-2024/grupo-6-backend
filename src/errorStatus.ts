export class ErrorStatus extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}
