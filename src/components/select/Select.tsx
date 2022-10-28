import React, { FC, useState } from "react";

interface Props {
  options: { key: string | number; value: string }[];
}

const Select: FC<Props> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);
  const handleSelect =
    (select: { key: string | number; value: string }) => () => {
      setSelected(select);
      setIsActive(false);
    };
  return (
    <div className="rounded-sm border-2 px-2 py-1 mb-2 relative">
      <select defaultValue={selected.key} name="userId" className="hidden">
        <option value={selected.key}></option>
      </select>
      <p onClick={() => setIsActive(!isActive)}>{selected.value} </p>
      {isActive && (
        <ul className="rounded-sm px-2 py-1 bg-white left-0 top-0 w-full absolute max-h-48 overflow-y-auto border-2">
          {options.map(({ key, value }) => (
            <li
              key={key}
              onClick={handleSelect({ key, value })}
              className={
                selected.key === key ? "text-blue-500 border-b-2" : "border-b-2"
              }
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
