import { Either } from "../signal/railway.js";

export interface UploadedFile {
  filename: string;
  mimetype: string;
  encoding?: string;
  size: number;
  buffer: Buffer;
  tempFilePath?: string;
  stream?: NodeJS.ReadableStream;
}


export interface HttpResponse {
    status(code:number): this;
    json(data:Record<string, unknown>): void;
    send(data: unknown): void;
    setHeader(key:string, value:string): void;
    setLocals( key: string, value:unknown ): void;
    getLocals( key: string ): unknown;
}
export interface HttpRequest {
    method: string;
    path: string;
    headers: Record<string, string> | string[];
    query: Record<string, any>;
    params: Record<string, any>;
    body: Record<string, any>;
    files?: Record<string, UploadedFile> | UploadedFile[]; 
}


export type HttpHandler<T = unknown> = (req: HttpRequest, res: HttpResponse) => Promise<Either<T>>

