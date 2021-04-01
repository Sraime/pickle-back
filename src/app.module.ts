import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health.controller';
import { FeatureModule } from './feature/feature.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TerminusModule,
    UserModule,
    AuthModule,
    FeatureModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
