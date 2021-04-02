import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health.controller';
import { FeatureModule } from './feature/feature.module';
import { StepModule } from './step/step.module';
import { ScenarioModule } from './scenario/scenario.module';
import { StepUsageModule } from './step-usage/step-usage.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TerminusModule,
    UserModule,
    AuthModule,
    FeatureModule,
    StepModule,
    ScenarioModule,
    StepUsageModule,
    ProjectModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
