# AI Coding Agent Instructions for Panel Project

## Architecture Overview
This is a monorepo panel application with:
- **Backend**: NestJS API (`apps/panel-api`) with JWT authentication
- **Frontend**: React + Vite app (`apps/web`) 
- **Shared**: TypeScript types package (`packages/shared-types`)

Key data flows: Frontend fetches server status from `/status` and user info from `/api/auth/me` using Bearer tokens stored in localStorage.

## Development Workflows
- **Run backend**: `pnpm --filter panel-api start:dev` (watches for changes)
- **Run frontend**: `cd apps/web && pnpm dev` 
- **Build shared types**: `pnpm --filter @shared/types build`
- **Install deps**: `pnpm install` (root level for all workspaces)

Use `pnpm --filter <package>` for package-specific commands. Workspaces are defined in `pnpm-workspace.yaml`.

## Authentication Pattern
- Hardcoded user: `admin@test.pl` / `admin123` (bcrypt hashed)
- JWT secret: `'dev-secret'` (change for production)
- Login endpoint: `POST /api/auth/login` returns `{ accessToken }`
- Protected routes use `@UseGuards(JwtAuthGuard)` and `Authorization: Bearer <token>` header
- User payload attached to `req.user` with `sub` (userId) and `role`

Example auth controller: `apps/panel-api/src/modules/auth/auth.controller.ts`

## Shared Types Usage
Import from `@shared/types` (path mapped in `tsconfig.base.json`).
Currently exports `ServerStatus` enum: `ONLINE | OFFLINE`.

Example: `import { ServerStatus } from '@shared/types'`

## Code Conventions
- Polish comments in code (e.g., "CHRONIONY ENDPOINT" for protected routes)
- Controllers prefixed with `/api/` (e.g., `/api/auth/login`)
- DTOs in `dto/` subfolders with `!` assertion for required fields
- CORS enabled in main.ts for frontend-backend communication
- Status endpoint returns `{ status: ServerStatus.ONLINE, timestamp: Date.now() }`

## File Structure Patterns
- Modules in `src/modules/` with controller, service, module files
- Auth guards/strategies in same module directory
- API functions in `src/api/` for frontend (e.g., `fetchMe()` in `apps/web/src/api/me.ts`)

Reference: `apps/panel-api/src/app.controller.ts` for status endpoint pattern.</content>
<parameter name="filePath">c:\Users\Przemek\Documents\GitHub\Panel\.github\copilot-instructions.md