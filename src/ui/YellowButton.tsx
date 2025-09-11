import type {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
};

const YellowButton = ({children}: ButtonProps) => {
    return (
        <button className='rounded-xl border border-[#FFA90073] transition cursor-pointer bg-[#FFF8EB] hover:bg-[#FFE8BC] px-3 py-2 flex items-center gap-2'>
            {children}
        </button>
    );
};

export default YellowButton;