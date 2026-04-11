import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //*************the below are the configuration we use for user input ***********//
  // whitlist true => if we pass extra parameter in body then they will not passed 
  // forbidNonWhitelisted true => if we pass extra parameter then it wil sho the error 
  // transform true => so user becomes instnce of that dto 
//  and global pipes is used that validatio need to use everywhere so we creted the global pipe for it 

  app.useGlobalPipes(new ValidationPipe({whitelist:true ,transform:true}))
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
