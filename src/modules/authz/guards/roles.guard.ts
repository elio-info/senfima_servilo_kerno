import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const anonymous = this.reflector.get<boolean>(
      'anonymous',
      context.getHandler(),
    );

    if (anonymous || !roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return this.matchRoles(roles, user.name);
  }

  matchRoles(roles, userRoles) {
    return userRoles.some((role) => roles.some((r) => r === role));
  }
}
