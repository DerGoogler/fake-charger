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
}
