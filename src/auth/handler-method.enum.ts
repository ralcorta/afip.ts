export enum HandlerMethodEnum {
  /**
   * In this way the package will save the tokens localy on a binary file.
   */
  SELF_LOCAL,
  /**
   * In this way the package will be expecting the auth tokens to do the request.
   */
  REMOTE,
}
