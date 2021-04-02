import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureController } from './feature.controller';
import { Feature } from './feature.entity';
import { FeatureService } from './feature.service';
import { CodeblockController } from './codeblock/codeblock.controller';
import { CodeblockService } from './codeblock/codeblock.service';
import { Codeblock } from './codeblock/codeblock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feature, Codeblock])],
  controllers: [FeatureController, CodeblockController],
  providers: [FeatureService, CodeblockService],
})
export class FeatureModule {}
