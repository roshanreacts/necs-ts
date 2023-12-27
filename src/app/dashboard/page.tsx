import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();

  console.log(await getAccessToken());
  console.log(await getBooleanFlag("bflag", false));
  console.log(await getFlag("flag", "x", "s"));
  console.log(await getIntegerFlag("iflag", 99));
  console.log(await getOrganization());
  console.log(await getPermission("eat:chips"));
  console.log(await getPermissions());
  console.log(await getAccessToken());
  console.log(await getStringFlag("sflag", "test"));
  console.log(await getUser());
  console.log(await getUserOrganizations());
  console.log(await isAuthenticated());
  return <main>This is dashboard</main>;
}
