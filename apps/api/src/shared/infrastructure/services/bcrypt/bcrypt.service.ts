import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IBcryptService } from '@domain/adapter/bcrypt.interface';

@Injectable()
export class BcryptService implements IBcryptService {
  protected rounds = 10;

  public async hash(hashString: string): Promise<string> {
    return await bcrypt.hash(hashString, this.rounds);
  }

  public async compare(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
