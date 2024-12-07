import { Module } from '@nestjs/common';
import { HashingService } from './service/hashing.service';

@Module({
  providers: [
    HashingService
  ],
  exports: [
    HashingService
  ]
})
export class SeguridadModule {}