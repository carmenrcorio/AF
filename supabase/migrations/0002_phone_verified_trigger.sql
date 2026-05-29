create or replace function public.set_phone_verified()
returns trigger language plpgsql security definer set search_path = public as $func$
begin
  new.phone_verified := exists (
    select 1 from auth.users u
    where u.id = new.id and u.phone_confirmed_at is not null
  );
  return new;
end;
$func$;
drop trigger if exists profiles_set_phone_verified on public.profiles;
create trigger profiles_set_phone_verified
before insert or update on public.profiles
for each row execute function public.set_phone_verified();
