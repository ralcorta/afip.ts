import { WSAuthTokens } from "./auth/types";

export type Context = Omit<AfipContext, "ticketPath"> & { ticketPath?: string };

export type AfipContext = {
  /**
   * Flag for production or testing environment
   *
   * @var boolean
   **/
  production?: boolean;

  /**
   * File name for the X.509 certificate in PEM format
   *
   * @var string
   **/
  cert: string;

  /**
   * File name for the private key correspoding to CERT (PEM)
   *
   * @var string
   **/
  key: string;

  /**
   * The CUIT to use
   *
   * @var int
   **/
  cuit: number;

  /**
   * Tokens object object if you have one created before
   *
   * @var authTokens
   **/
  authTokens?: WSAuthTokens;

  /**
   * Flag that if is true, the access tickets data is handled by the developer, otherwise is saved locally.
   */
  handleTicket?: boolean;

  /**
   * The path of the auth obj if the package is auto managed
   */
  ticketPath: string;
};
