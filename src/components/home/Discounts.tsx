import YellowButton from "../../ui/YellowButton.tsx";

const Discounts = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10 items-center'>
                    <h2 className='uppercase font-bold text-[32px]'>Скидки</h2>
                    <YellowButton>
                        <span className='text-[#DA9000] font-medium '>Смотреть все </span>

                    </YellowButton>
                </div>
                <div className='flex gap-2 items-center'>
                    <button> l </button>
                    <button> r </button>
                </div>
            </div>
            <div className='flex gap-[25px] mt-5'>
                <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                </div>
                <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                </div>
                <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                </div>
                <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                </div>
            </div>
        </>
    );
};

export default Discounts;