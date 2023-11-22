import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <Swiper pagination={{ type: 'progressbar', }} navigation={true} modules={[Navigation]}
                className="mySwiper w-3/4 mx-auto">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        className="px-24"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            <Rating
                                style={{ maxWidth: 180, }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-5xl" />
                            <p className="text-justify">{review.details}</p>
                            <h3 className="text-3xl font-semibold text-orange-600">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonials;