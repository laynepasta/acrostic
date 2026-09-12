create extension if not exists "pgcrypto";

create table if not exists mnemonics (
  id uuid primary key default gen_random_uuid(),
  topic text,
  sentence text not null,
  tone text,
  created_at timestamptz not null default now()
);
