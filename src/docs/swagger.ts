import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const router = Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Financialize API',
      version: '1.0.0',
      description: 'API documentation for Financialize backend',
    },
    components: {
      schemas: {
        IPostUserRequest: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            cpf: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
          },
          required: ['name', 'cpf', 'email', 'password'],
        },
        IGetUserRequest: {
          type: 'object',
          properties: {
            cpf: { type: 'string' },
            email: { type: 'string' },
            id: { type: 'string' },
            withPassword: { type: 'boolean' },
          },
        },
        ILoginUserRequest: {
          type: 'object',
          properties: {
            cpf: { type: 'string' },
            password: { type: 'string' },
          },
          required: ['cpf', 'password'],
        },
        IPutUserRequest: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
          },
          required: ['id'],
        },
        IDelUserRequest: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            cpf: { type: 'string' },
          },
        },
        ResponseDTO: {
          type: 'object',
          properties: {
            has_error: { type: 'boolean' },
            message: { type: 'string' },
            data: { type: ['object', 'array', 'null'] },
          },
        },
      },
    },
  },
  apis: ['./src/routes/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options as any);

// `swaggerUi.serve` and `swaggerUi.setup` have types that occasionally
// conflict with Express's overloads in our tsconfig strict mode. Cast to
// any here to avoid a noisy type error while keeping runtime behavior.
(router as any).use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
