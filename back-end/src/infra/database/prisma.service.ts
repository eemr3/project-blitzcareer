import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
        {
          emit: 'event',
          level: 'error',
        },
      ],
    });
    this.$on('query' as any, (event: any) => {
      console.log('Query: ' + event.query);
      console.log('Duration: ' + event.duration + 'ms');
    });
    this.$on('info' as any, (event: any) => {
      console.log('Info: ' + event.message);
    });
    this.$on('warn' as any, (event: any) => {
      console.log('Warn: ' + event.message);
    });
    this.$on('error' as any, (event: any) => {
      console.log('Error: ' + event.message);
    });
  }
}
