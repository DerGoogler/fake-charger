interface Android {
    exec(command: string): void;
    execResult(command: string): string;
    isAppGrantedRoot(): boolean;
}

export default Android;