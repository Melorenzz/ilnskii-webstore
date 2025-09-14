import Subtitle from "./Subtitle.tsx";
import YellowButton from "../../ui/YellowButton.tsx";
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/css";
const Supermarkets = () => {
    return (
        <div className='mt-20'>
            <div className='flex gap-10 items-center'>
                <Subtitle subtitle='Сумермаркет' />
                <YellowButton text={'Смотреть все'} color='yellow' />
            </div>
            <Swiper
                spaceBetween={10}    // расстояние между карточками
                slidesPerView={2.25}
                breakpoints={{
                    1024: { // при ширине >= 1024px (lg:)
                        slidesPerView: 4,
                        spaceBetween: 20,   // расстояние между карточками
                    },
                }}
                className="mt-5"
                allowTouchMove={true}     // разрешаем свайп
                simulateTouch={true}
            >
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                spaceBetween={10}    // расстояние между карточками
                slidesPerView={2.25}
                breakpoints={{
                    1024: { // при ширине >= 1024px (lg:)
                        slidesPerView: 4,
                        spaceBetween: 20,   // расстояние между карточками
                    },
                }}              className="mt-3 lg:mt-5"
                allowTouchMove={true}     // разрешаем свайп
                simulateTouch={true}
            >
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-square border border-[#CCE0A0] bg-[#F7FFE5] rounded-4xl"></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Supermarkets;