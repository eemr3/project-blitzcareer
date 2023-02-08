import { Encrypter } from '../../data/protocols/encryper';
import * as bcrypt from 'bcrypt';

export class BcryptAdapter implements Encrypter {
  constructor(private salt: number) {}

  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }
}
