# Express + TypeScript + Prisma + Serverless Template

This is a template for a Express + TypeScript + Prisma + Serverless projects.

## Supports ORMs

- [Prisma](https://www.prisma.io/)
- [TypeORM](https://typeorm.io/#/)

## Supports Serverless Deployments to

- [x] AWS Lambda
- [x] Vercel

## Additional Utilities

- [x] Permission Manager

## Steps to use TypeORM

By default, this template uses Prisma. If you want to use TypeORM, follow these steps:

1. `yarn orm:use-typeorm` - This will remove Prisma and install TypeORM
2. Uncomment TypeORM setup in `src/app.ts`

Note: You will need to manually import your entities into `src/entities/index.ts` to make them available during runtime. Path imports cannot be used in serverless environments.

## Why I made Prisma as the default ORM

Prisma is a great ORM that is easy to use and has a lot of great features. However, it is not as mature as TypeORM. I made Prisma the default ORM because it can generates a client that can be used in serverless environments. This is not the case with TypeORM. If you want to use TypeORM, you will need to manually import your entities into `src/entities/index.ts` to make them available during runtime. Path imports cannot be used in serverless environments. This is a limitation of TypeORM and not this template. If you want to use TypeORM, you can use the steps above to switch to TypeORM. If you want to use Prisma, you can continue using this template as is.

<!-- TODO: Document available commands -->
