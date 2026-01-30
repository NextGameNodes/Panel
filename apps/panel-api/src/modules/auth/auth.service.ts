import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  private user = {
    id: 1,
    email: 'admin@test.pl',
    passwordHash: bcrypt.hashSync('admin123', 10),
    role: 'admin',
  };

  async login(email: string, password: string) {
    if (email !== this.user.email) {
      throw new UnauthorizedException();
    }

    const ok = await bcrypt.compare(password, this.user.passwordHash);
    if (!ok) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: this.jwt.sign({
        sub: this.user.id,
        role: this.user.role,
      }),
    };
  }
}
