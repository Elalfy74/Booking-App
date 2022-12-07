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

  {
    title: "Room & Price",
    value: "tab3",
  },
  {
    title: "Review",
    value: "tab4",
  },
];

interface Props {}

const HotelTabs = (props: Props) => {
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
          <span className="text-sm text-gray-700 dark:text-gray-100">
            {
              {
                tab1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                tab2: "Make some coffee",
                tab3: "Order more coffee",
                tab4: "Order more coffee 4",
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default HotelTabs;
