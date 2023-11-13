import { Parallax } from 'react-parallax';

const Cover = ({ bgImage, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgImage}
            bgImageAlt="the cover image"
            strength={-200}
        >
            <div className="hero h-[600px]">
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 py-16 px-24">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;