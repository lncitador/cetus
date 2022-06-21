export interface IJwtServicePayload {
  name: string;
}

export interface IJwtService {
  checkToken(token: string): Promise<any>;

  createToken(
    payload: IJwtServicePayload,
    secret: string,
    expiresIn: string,
  ): string;
}
