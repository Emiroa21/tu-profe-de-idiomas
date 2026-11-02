-- Tu profe de idiomas: tabla de progreso por usuario.
-- Ejecuta este script una sola vez en Supabase → SQL Editor → New query → Run.

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Seguridad a nivel de fila: cada persona solo ve y modifica su propio progreso.
alter table public.progress enable row level security;

drop policy if exists "Leer mi progreso" on public.progress;
create policy "Leer mi progreso" on public.progress
  for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Crear mi progreso" on public.progress;
create policy "Crear mi progreso" on public.progress
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Actualizar mi progreso" on public.progress;
create policy "Actualizar mi progreso" on public.progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- Permisos de la API (necesarios si desactivaste "Exponer automáticamente nuevas tablas").
revoke all on public.progress from anon;
grant select, insert, update on public.progress to authenticated;
