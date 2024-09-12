import { ReactNode } from "react";

export default function layout({
  children,
  posts,
  profile,
}: {
  children: ReactNode;
  posts: ReactNode;
  profile: ReactNode;
}) {
  return (
    <div>
      <h1>This is served from inside</h1>
      {children}
      {posts}
      {profile}
    </div>
  );
}
