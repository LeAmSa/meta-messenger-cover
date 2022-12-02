import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignIn() {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src="https://links.papareact.com/161"
          alt="Profile Picture"
          width={700}
          height={700}
          className="rounded-full mx-2 object-cover"
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignIn;
