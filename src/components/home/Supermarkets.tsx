import YellowButton from "../../ui/YellowButton.tsx";

const Supermarkets = () => {
    return (
        <div className='mt-20'>
            <div className='flex gap-10 items-center'>
                <h2 className='uppercase font-bold text-[32px]'>супермаркет</h2>
                <YellowButton>
                    <span className='text-[#DA9000] font-medium '>Смотреть все </span>

                </YellowButton>
            </div>
            <div className='grid grid-cols-4 grid-rows-2 gap-5 h-[630px] mt-5'>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>

            </div>
        </div>
    );
};

export default Supermarkets;