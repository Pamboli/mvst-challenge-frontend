import { TimesIcon } from "@/components/common/Icons";
import { CreateCoffeeForm } from "@/components/create/CreateCoffeeForm";
import { bebas } from "@/fonts";
import Link from "next/link";

export default function CreateCoffeePage() {
  return (
    <main className="w-full h-screen flex flex-col px-6 py-10 lg:px-36 lg:h-auto max-w-3xl lg:m-auto lg:bg-dark-light lg:mt-36">
      <Link className="text-white w-fit self-end mb-3" href="/">
        <TimesIcon />
      </Link>
      <h1 className={`${bebas.className} text-5xl text-center text-white mb-6`}>
        CREATE NEW
      </h1>
      <CreateCoffeeForm />
    </main>
  );
}
