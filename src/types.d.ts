/* eslint-disable no-var */
import type { PrismaClient } from '@prisma/client';

declare global {
  var _prisma: PrismaClient | undefined;
}
