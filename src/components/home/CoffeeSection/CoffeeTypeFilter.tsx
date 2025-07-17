"use client";

import { ToggleSwitch } from "@/components/common/ToggleSwitch";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type FilterOption = {
  label: string;
  value: string;
};

const filterOptions: FilterOption[] = [
  {
    label: "All",
    value: "",
  },
  { label: "Robusta", value: "ROBUSTA" },
  { label: "Arabic", value: "ARABIC" },
];

const FILTER_PARAM = "type";

export function CoffeeTypeFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleToggle(index: number) {
    const params = new URLSearchParams(searchParams);
    if (index === 0) {
      params.delete(FILTER_PARAM);
    } else {
      params.set(FILTER_PARAM, filterOptions[index].value);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const typeParam = searchParams.get(FILTER_PARAM);
  const selectedValue = typeParam
    ? filterOptions.findIndex((fo) => fo.value === typeParam)
    : 0;

  return (
    <nav className="w-full px-6 max-w-[548px]" aria-label="Coffee Type Filter">
      <ToggleSwitch
        options={filterOptions.map((fo) => fo.label)}
        selectedIndex={selectedValue}
        onChange={handleToggle}
      />
    </nav>
  );
}
