import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/base/select";

const languages = [
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
];

const frontend = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
];

const backend = [
  {
    label: "Express",
    value: "express",
  },
  {
    label: "NestJS",
    value: "nestjs",
  },
  {
    label: "Django",
    value: "django",
  },
];

export function ExampleSelect() {
  return (
    <Select items={languages}>
      <SelectTrigger>
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={true}>
        {languages.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}

export function ExampleSelectGroup() {
  return (
    <Select
      items={[
        ...frontend,
        ...backend,
      ]}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>Frontend</SelectGroupLabel>
          {frontend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Backend</SelectGroupLabel>
          {backend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
