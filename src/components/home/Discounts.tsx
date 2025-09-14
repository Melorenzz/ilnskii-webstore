import YellowButton from "../../ui/YellowButton.tsx";
import Subtitle from "./Subtitle.tsx";
import {Swiper, SwiperSlide} from "swiper/react";

const Discounts = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10 items-center'>
                    <Subtitle subtitle='СКИДКИ' />
                    <YellowButton text={'Смотреть все'} color='yellow' />
                </div>
                <div className='flex gap-2 items-center'>
                    <button> l </button>
                    <button> r </button>
                </div>
            </div>
            <Swiper
                spaceBetween={20}    // расстояние между карточками
                slidesPerView={1.25}
                breakpoints={{
                    500: { // при ширине >= 1024px (lg:)
                        slidesPerView: 2.25,
                    },
                    1024: { // при ширине >= 1024px (lg:)
                        slidesPerView: 4,
                    },
                }}
                className="mt-5"
                allowTouchMove={true}     // разрешаем свайп
                simulateTouch={true}
            >
                <SwiperSlide>
                    <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[406px] flex-1 border border-[#DADADA] rounded-xl'>

                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Discounts;