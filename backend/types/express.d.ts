import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      file?: {
        buffer: Buffer;
        originalname: string;
        mimetype: string;
        size: number;
      };
      user?: {
        id: string;
        email: string;
        firstName?: string;
        lastName?: string;
      };
      isAuthenticated?: () => boolean;
      logout?: (callback?: (err: any) => void) => void;
    }
  }
}

export {};
