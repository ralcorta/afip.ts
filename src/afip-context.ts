export type AfipContext = {
  production: boolean;

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
};
