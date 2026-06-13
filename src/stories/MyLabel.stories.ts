import { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/Labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "text-secondary",
  },
};

export const CustomFontColor: Story = {
  args: {
    label: "Custom color label",
    fontColor: "#5527ac",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom background color",
    size: "h1",
    fontColor: "white",
    backgroundColor: "#000000",
  },
};
