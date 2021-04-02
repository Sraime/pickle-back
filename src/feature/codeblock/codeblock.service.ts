import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Codeblock } from './codeblock.entity';

@Injectable()
export class CodeblockService {
  constructor(
    @InjectRepository(Codeblock)
    private readonly codeblockRepository: Repository<Codeblock>,
  ) {}
  async getFeatureCodeblocks(featureId: string): Promise<Codeblock[]> {
    const options: FindManyOptions<Codeblock> = {
      where: { feature: featureId },
    };
    return await this.codeblockRepository.find(options);
  }
}
