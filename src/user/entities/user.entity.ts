import { Company, Plant } from "@prisma/client";

export class User {
  id?: string;
  email: string;
  phoneNumber: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  companyId?: number;
  plants?: Plant[];
  company?: Company;
}

