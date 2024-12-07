import { Injectable } from "@nestjs/common";
import * as Crypto from 'crypto';

@Injectable()
export class HashingService {
  getHash(entrada: string): string {
    const modo = 'md5';
    const hash = Crypto.createHash(modo).update(entrada).digest('hex');
    return hash;
  }
}