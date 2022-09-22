/* eslint-disable no-var */
import 'next-auth';
import type { PrismaClient } from '@prisma/client';

declare global {
  var _prisma: PrismaClient | undefined;
}

declare module 'next-auth' {
  interface Session {
    userId: string;
  }
}
