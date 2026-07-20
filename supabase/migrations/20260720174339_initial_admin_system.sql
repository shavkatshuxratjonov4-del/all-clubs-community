-- =====================================================
-- INITIAL ADMIN SYSTEM
-- =====================================================

create extension if not exists "pgcrypto";

-- =====================================================
-- ENUMS
-- =====================================================

do $$
begin
    if not exists (
        select 1
        from pg_type
        where typname = 'platform_role'
    ) then
        create type public.platform_role as enum (
            'student',
            'club_admin',
            'platform_admin'
        );
    end if;
end $$;

do $$
begin
    if not exists (
        select 1
        from pg_type
        where typname = 'admin_status'
    ) then
        create type public.admin_status as enum (
            'pending',
            'active',
            'suspended'
        );
    end if;
end $$;

-- =====================================================
-- PERMISSIONS
-- =====================================================

create table if not exists public.permissions (
    id uuid primary key default gen_random_uuid(),

    code text not null unique,
    name text not null,
    description text,

    created_at timestamptz not null default now()
);

create index if not exists idx_permissions_code
on public.permissions(code);