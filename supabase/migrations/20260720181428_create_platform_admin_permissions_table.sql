-- =====================================================
-- Create Platform Admin Permissions Table
-- =====================================================

create table if not exists public.platform_admin_permissions (
    id uuid primary key default gen_random_uuid(),

    admin_id uuid not null references public.profiles(id) on delete cascade,
    permission_id uuid not null references public.permissions(id) on delete cascade,

    created_at timestamptz not null default now(),

    constraint uq_platform_admin_permission
        unique (admin_id, permission_id)
);

create index if not exists idx_platform_admin_permissions_admin_id
on public.platform_admin_permissions(admin_id);

create index if not exists idx_platform_admin_permissions_permission_id
on public.platform_admin_permissions(permission_id);