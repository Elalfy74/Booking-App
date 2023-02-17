import * as TabsPrimitive from "@radix-ui/react-tabs";
import cx from "classnames";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Description",
    value: "tab1",
  },
  {
    title: "Features",
    value: "tab2",
  },
];

const FeaturesTap = ({ features }: { features: string[] }) => {
  const uniqueFeatures = Array.from(new Set<string>(features));
  return (
    <div className="flex flex-wrap gap-5">
      {uniqueFeatures.map((feature) => (
        <span
          key={feature}
          className="h-fit rounded-lg bg-white px-3 py-2 shadow-sm"
        >
          {feature}
        </span>
      ))}
    </div>
  );
};
interface Props {
  desc: string;
  features: string[];
}

const HotelTabs = ({ desc, features }: Props) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List className={cx("flex w-full")}>
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={cx(
              "group",
              "border-b ",
              "border-gray-300 ",
              "radix-state-active:border-b-primary  radix-state-active:text-primary  radix-state-inactive:bg-gray-50 ",
              "flex-1 px-1 py-2.5 sm:px-3"
            )}
          >
            <span className={cx("text-xs font-medium sm:text-sm")}>
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={cx(" px-6 py-4 ")}
        >
          <div className="leading-relaxed tracking-wide text-gray-700 dark:text-gray-100">
            {
              {
                tab1: desc,
                tab2: <FeaturesTap features={features} />,
              }[value]
            }
          </div>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default HotelTabs;
