import { PrismaClient } from '@prisma/client';

const prisma = global._prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global._prisma = prisma;
}

export default prisma;
