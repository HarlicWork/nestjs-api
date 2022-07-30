import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'sign up!' };
  }

  signin() {
    return { message: 'sign in!' };
  }
}
