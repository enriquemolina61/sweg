import { Company } from "@prisma/client";

export class User {
  id?: string;
  email: string;
  phoneNumber: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  company?: Company[];
}

