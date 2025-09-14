import YellowButton from "../../ui/YellowButton.tsx";
import Subtitle from "./Subtitle.tsx";
import {Swiper, SwiperSlide} from "swiper/react";

const Sales = () => {
    return (
        <div className='mt-20'>
            <div className='flex items-center gap-10'>
                <Subtitle subtitle='АКЦИИ' />
                <YellowButton text={'Смотреть все'} color='yellow' />
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
                    <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='aspect-[4/6] flex-1 rounded-xl bg-[red]'></div>

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Sales;