import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { uuidProvider } from './common/common.uuidProvider';

@Module({
  imports: [PremierModule, TodoModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
