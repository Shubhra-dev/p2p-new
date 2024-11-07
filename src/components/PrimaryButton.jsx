import { GoArrowDownRight } from "react-icons/go";

function PrimaryButton({ children, bg, noIcon, width }) {
  return (
    <button
      className={`capitalize flex gap-2 items-center py-2 px-10 text-white ${
        bg ? `bg-${bg}` : "bg-primary"
      } ${
        width ? `${width}` : ""
      } rounded-md text-sm sm:text-15[px] tab:text-base font-semibold`}
    >
      <p className="text-center w-full">{children}</p>
      {!noIcon && <GoArrowDownRight className="font-semibold text-lg" />}
    </button>
  );
}

export default PrimaryButton;
