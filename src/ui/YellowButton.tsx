
type ButtonProps = {
    text: string;
    icon?: string;
    color?: 'black' | 'yellow';
};

const YellowButton = ({text, icon, color = 'black'}: ButtonProps) => {
    return (
        <button className='rounded-xl border border-[#FFA90073] transition cursor-pointer bg-[#FFF8EB] hover:bg-[#FFE8BC] px-3 py-2 flex items-center gap-2'>
            <span className={` ${color === 'black' ? 'text-black' : 'text-[#DA9000]'} font-medium `}>{text}</span>
            {icon ? (
                <img src={icon} alt="icon"/>
            ) : null}
        </button>
    );
};

export default YellowButton;