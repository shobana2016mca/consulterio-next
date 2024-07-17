import { SignedIn, UserButton } from '@clerk/nextjs';

export default function ProfileMenu() {
  return (
    <SignedIn>
      {/* Mount the UserButton component */}
      <UserButton
        afterMultiSessionSingleSignOutUrl='/'
        afterSignOutUrl='/'
        afterSwitchSessionUrl='/'
        userProfileMode='modal'
        key={'profile-button'}
      />
    </SignedIn>
  );
}
