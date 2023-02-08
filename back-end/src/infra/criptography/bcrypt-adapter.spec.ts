import * as bcrypt from 'bcrypt';
import { BcryptAdapter } from './bcrypt-adapter';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve('hash'));
  },
}));
describe('Bcrypt Adapter', () => {
  it('should call bcrypt with correct value', async () => {
    const salt = 12;
    const sut = new BcryptAdapter(salt);
    const hashSpy = jest.spyOn(bcrypt, 'hash');

    await sut.encrypt('any_password');

    expect(hashSpy).toHaveBeenCalledWith('any_password', salt);
  });

  it('should return a hash on success', async () => {
    const salt = 12;
    const sut = new BcryptAdapter(salt);
    const hash = await sut.encrypt('any_password');

    expect(hash).toBe('hash');
  });
});
