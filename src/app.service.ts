import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  getAnotherShit(): Array<string> {
    return ['this', 'is', 'another', 'shit'];
  }
}
