import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // <-- pozwala frontendowi łączyć się z backendem z innego portu
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
