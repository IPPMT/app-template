import SignInForm from "@/components/form/auth/sign-in";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main className="flex w-full min-h-screen items-center justify-center">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <section className="lg:w-1/2 flex flex-col hidden lg:block">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl font-semibold">Welcome</p>
          <p className="text-zinc-400 text-sm">Sign in page template</p>
        </div>
      </section>

      <section className="border-l w-full lg:w-1/2 flex flex-col h-screen items-center justify-center lg:bg-gradient-to-br lg:from-white lg:to-zinc-100 lg:z-10">
        <p className="text-2xl font-semibold text-left w-full px-10 block lg:hidden">
          Welcome
        </p>
        <div className="p-10 rounded-md w-full lg:w-4/5 xl:w-2/3 2xl:w-1/2 flex flex-col justify-center">
          <p className="text-xl font-semibold">Sign In</p>
          <p className="text-zinc-400 text-sm">
            Sign in to your account to continue
          </p>
          <SignInForm />
        </div>
      </section>
    </main>
  );
}
