import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeatureCreate } from './dto/feature-create-dto';
import { Feature } from './feature.entity';

@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(Feature)
    private readonly featureRepository: Repository<Feature>,
  ) {}
  async findById(id: string): Promise<Feature> {
    return await this.featureRepository.findOne(id);
  }

  async insert(featureData: FeatureCreate): Promise<Feature> {
    return await this.featureRepository.save(new Feature(featureData));
  }
}
