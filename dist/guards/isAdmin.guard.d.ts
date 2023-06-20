import { ExecutionContext, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class IsAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
