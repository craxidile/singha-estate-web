import type ResidenceProject from "~/models/types/residence-project";
import type BaseDto from "~/models/dto/_base/base-dto";

import residenceProjects from "~/models/dto/residence-project-dto/data/list";

export class ResidenceProjectDto implements BaseDto<ResidenceProject, ResidenceProject> {

  async create(input: ResidenceProject): Promise<ResidenceProject | null> {
    throw new Error('Unimplemented');
  }

  async find(id: string): Promise<ResidenceProject | null> {
    throw new Error('Unimplemented');
  }

  async list(query?: ResidenceProject, take?: number, skip?: number): Promise<ResidenceProject[]> {
    return residenceProjects;
  }

  async remove(id: string): Promise<ResidenceProject | null> {
    throw new Error('Unimplemented');
  }

  async update(id: string, input: ResidenceProject): Promise<ResidenceProject | null> {
    throw new Error('Unimplemented');
  }

}
