import { Controller, Get } from '@nestjs/common';
import { ServerStatus } from '@shared/types';

@Controller()
export class AppController {
  @Get('/status')
  getStatus() {
    return {
      status: ServerStatus.ONLINE
    };
  }
}