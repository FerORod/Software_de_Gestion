import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EmployeesModule, 
    ProductsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.host,
      port: +(process.env.port || 5432),
      username: 'postgres',
      password: process.env.pass,
      database: process.env.name,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_PIPE, useClass: ValidationPipe },
    AppService
  ],
})
export class AppModule {}