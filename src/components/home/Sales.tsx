import YellowButton from "../../ui/YellowButton.tsx";
import Subtitle from "./Subtitle.tsx";

const Sales = () => {
    return (
        <div className='mt-20'>
            <div className='flex items-center gap-10'>
                <Subtitle subtitle='АКЦИИ' />
                <YellowButton text={'Смотреть все'} color='yellow' />
            </div>
            <div className='flex gap-5 mt-5'>
                <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>
                <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>
                <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>
                <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>
            </div>
        </div>
    );
};

export default Sales;