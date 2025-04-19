interface Props {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Input({ label, onChange, value, placeholder }: Props) {
  return (
    <label className="block text-gray-700 text-sm font-medium mb-2">
      {label}
      <div className="relative">
        <input
          type="text"
          className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </label>
  );
}
