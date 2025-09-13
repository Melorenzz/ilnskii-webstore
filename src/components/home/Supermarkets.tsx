import Subtitle from "./Subtitle.tsx";
import YellowButton from "../../ui/YellowButton.tsx";

const Supermarkets = () => {
    return (
        <div className='mt-20'>
            <div className='flex gap-10 items-center'>
                <Subtitle subtitle='Сумермаркет' />
                <YellowButton text={'Смотреть все'} color='yellow' />
            </div>
            <div className='grid grid-cols-4 grid-rows-2 gap-5  mt-5'>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
                <div className='aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl'>

                </div>
            </div>
        </div>
    );
};

export default Supermarkets;