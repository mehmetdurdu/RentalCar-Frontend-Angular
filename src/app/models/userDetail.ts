import { Byte } from "@angular/compiler/src/util";

export interface UserDetail {
    userId: number;
    customerId: number;
    firstName: string;
    lastName: string;
    companyName?: string;
    email: string;
    passwordHash: Byte[];
    passwordSalt: Byte[];
    status: boolean;
  }