import { UserProfile } from '@clerk/nextjs';

export default function UserProfilePage({
  params,
  searchParams,
}: {
  params: { user_profile: string[] };
  searchParams: URLSearchParams;
}) {
  return (
    <section
      className={
        'h-screen grid place-items-center bg-gradient-to-tr from-sky-600 via-blue-600 to-teal-600'
      }>
      <UserProfile path='/user-profile' />
    </section>
  );
}
