class ConsoleLogger implements ILogWriter{

  writeLog(message: string): void {
      console.log(message);
  }
}
