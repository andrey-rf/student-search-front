interface SearchProps {
  id: string;
  value?: string;
  label: string;
  handleChange(value: string): void;
  placeholder?: string;
}

export type { SearchProps };
