import React, { FC, useState } from "react";

interface Props {
  options: { key: string | number; value: string }[];
}

const getOptionClass = (active: boolean) =>
  active ? "px-2  bg-blue-700 text-white rounded-sm" : "px-2 ";

const Select: FC<Props> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);
  const handleSelect =
    (select: { key: string | number; value: string }) => () => {
      setSelected(select);
      setIsActive(false);
    };
  const handleKeyDown =
    (select: { key: string | number; value: string }) =>
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case " ":
        case "SpaceBar":
        case "Enter":
          e.preventDefault();
          setSelected(select);
          setIsActive(false);
          break;
        default:
          break;
      }
    };
  return (
    <div className="rounded-sm border-2 px-2 py-1 mb-2 relative">
      <select defaultValue={selected.key} name="userId" className="hidden">
        <option value={selected.key}></option>
      </select>
      <p onClick={() => setIsActive(!isActive)}>{selected.value} </p>
      {isActive && (
        <ul
          className="rounded-sm bg-white left-0 top-0 w-full absolute max-h-52 overflow-y-auto border-2"
          aria-activedescendant={selected.value}
          tabIndex={-1}
          role="listbox"
        >
          {options.map(({ key, value }) => (
            <li
              key={key}
              role="option"
              aria-selected={selected.key === key}
              tabIndex={0}
              onClick={handleSelect({ key, value })}
              onKeyDown={handleKeyDown({ key, value })}
              className={getOptionClass(selected.key === key)}
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
