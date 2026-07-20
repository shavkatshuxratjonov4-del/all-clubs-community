-- =====================================================
-- Create Admin Invitations Table
-- =====================================================

create table if not exists public.admin_invitations (
    id uuid primary key default gen_random_uuid(),

    email text not null,
    full_name text not null,
    job_title text not null,

    invitation_token text not null unique,

    invited_by uuid not null references public.profiles(id),

    invitation_status invitation_status not null default 'pending',

    expires_at timestamptz not null,

    accepted_at timestamptz,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_admin_invitations_email
on public.admin_invitations(email);

create index if not exists idx_admin_invitations_token
on public.admin_invitations(invitation_token);

create index if not exists idx_admin_invitations_status
on public.admin_invitations(invitation_status);