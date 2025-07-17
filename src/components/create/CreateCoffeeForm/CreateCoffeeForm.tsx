"use client";

import { createCoffee, CreateCoffeeFormValues } from "@/actions/coffee.actions";
import { Button } from "@/components/common/Button";
import { RadioInput } from "@/components/common/RadioInput";
import { TextInput } from "@/components/common/TexInput";
import { TimesIcon } from "@/components/common/Icons";
import { CoffeeType } from "@/types/coffee.type";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { WarningIcon } from "@/components/common/Icons";

const TOAST_ID = "CREATE_TOAST";

const imagesURL: Record<CoffeeType, string> = {
  ARABIC: "/images/arabic.png",
  ROBUSTA: "/images/robusta.png",
};

const defaultValues: CreateCoffeeFormValues = {
  name: "",
  description: "",
  type: "ARABIC",
  imageUrl: imagesURL.ARABIC,
  price: "",
};

type Option = {
  label: string;
  value: CoffeeType;
};

const radioOptions: Option[] = [
  { label: "Arabic", value: "ARABIC" },
  { label: "Robusta", value: "ROBUSTA" },
];

export function CreateCoffeeForm() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ defaultValues });

  const coffeeType = watch("type");

  async function onSubmit(data: CreateCoffeeFormValues) {
    const result = await createCoffee(data);

    if (result.error) {
      toast(
        <div className="flex gap-2 items-center text-white">
          <WarningIcon />
          <p>A coffee with the same name already exists</p>
          <button onClick={() => toast.dismiss(TOAST_ID)}>
            <TimesIcon size="small" />
          </button>
        </div>,
        { id: TOAST_ID, style: { backgroundColor: "#FF4949", border: "none" } }
      );
    }
  }

  useEffect(() => {
    setValue("imageUrl", imagesURL[coffeeType]);
  }, [coffeeType, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col gap-4"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <TextInput.WithControl
            placeholder="Name your coffee here"
            label="Name"
            control={control}
            name="name"
            error={errors.name?.message}
            rules={{ required: "Please, fill the name" }}
          />
        </div>
        <div className="lg:w-28 w-full">
          <TextInput.WithControl
            type="number"
            placeholder="0.00"
            label="Price"
            control={control}
            name="price"
            icon={<span className="text-gray">€</span>}
            error={errors.price?.message}
            rules={{
              required: "Please, fill the price",
              min: { value: 0, message: "Price must be positive" },
            }}
          />
        </div>
      </div>
      <RadioInput.WithControl
        options={radioOptions}
        control={control}
        name="type"
        error={errors.type?.message}
        label="Type"
        rules={{ required: "Select a coffee type" }}
      />
      <TextInput.WithControl
        placeholder="Paste image URL here"
        label="Upload image"
        control={control}
        name="imageUrl"
        readOnly
      />
      <TextInput.WithControl
        placeholder="Add a description"
        label="Description"
        control={control}
        name="description"
        error={errors.description?.message}
        rules={{ required: "Please, fill the description" }}
      />
      <div className="flex flex-col lg:flex-row w-full justify-end flex-1 items-end lg:w-64 lg:items-center self-center gap-4 mt-7">
        <Button variant="secondary" href="/">
          Discard
        </Button>
        <Button loading={isSubmitting} disabled={!isValid}>
          Submit
        </Button>
      </div>
    </form>
  );
}
