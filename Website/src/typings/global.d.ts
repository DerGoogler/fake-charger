export {};

declare global {
  /**
   * A window containing a DOM document; the document property points to the DOM document loaded in that window.
   */
  interface Window {
    /**
     * Declare the custom window event (`Android`) for the WebView
     */
    readonly android: any;
  }

  interface AndroidInterface {
    cmd(command: string | undefined): void;
    cmdResult(command: string | undefined): string;
    rootAccess(): boolean;
  }

  interface Function {
    exec(params: any): void;
  }

  const Android: AndroidInterface;
}
