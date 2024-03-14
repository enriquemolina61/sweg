import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
  .setTitle('Sweg')
  .setDescription('Aplicação para gestão das usinas de energia elétrica.')
  .setVersion('1.0.0')
  .addTag('Status')
  .addTag('Users')
  .addTag('Company')
  .addTag('Plant')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
