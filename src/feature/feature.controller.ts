import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FeatureService } from './feature.service';
import { Response } from 'express';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FeatureCreate } from './dto/feature-create-dto';

@Controller('feature')
export class FeatureController {
  constructor(private featureService: FeatureService) {}

  @Get(':id')
  async getFeature(
    @Param('id') id: string,
    @Res() resp: Response,
  ): Promise<Response> {
    try {
      const feature = await this.featureService.findById(id);
      if (feature) resp.send(feature);
      else resp.status(HttpStatus.NOT_FOUND).send();
    } catch (err) {
      console.log(err);
    }
    return resp;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createFeature(
    @Body() feature: FeatureCreate,
    @Res() resp: Response,
  ): Promise<Response> {
    const newFeature = await this.featureService.insert(feature);
    resp.send(newFeature);
    return resp;
  }

  @Delete(':id')
  async deleteFeature(@Param('id') id: string) {}
}
