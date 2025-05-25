type TextInputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
};

export default function TextInput({ label, value, onChange }: TextInputProps) {
  return (
    <label>
      {label}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
