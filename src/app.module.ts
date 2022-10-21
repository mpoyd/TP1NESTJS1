import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { uuidProvider } from './common/common.uuidProvider';
import { PipesControllerController } from './pipes/pipes-controller/pipes-controller.controller';

@Module({
  imports: [PremierModule, TodoModule, CommonModule],
  controllers: [AppController, PipesControllerController],
  providers: [AppService],
})
export class AppModule {}
