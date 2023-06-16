import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { JwtGuard } from 'src/guards/jwt.guard';

@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @ApiOperation({ summary: 'create a new skill' })
  @Post('/create')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @ApiOperation({ summary: 'get all skills' })
  @Get('/findall')
  findAll() {
    return this.skillsService.findAll();
  }

  @ApiOperation({ summary: 'get skill by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }

  @ApiOperation({ summary: 'update skill by id' })
  @Put(':id')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @ApiOperation({ summary: 'delete skill by id' })
  @Delete(':id')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
