import { useState } from "react";
import './Carousel.scss';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


function Carousel({ data }) {

    const [slide, setSlide] = useState(0);

    const onRightClick = () => {
        if (slide === data.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    const onLeftClick = () => {
        if (slide > 0) {
            return setSlide(slide - 1);
        }
        if (slide === 0) {
            return setSlide(data.length - 1);
        }
        return setSlide(0);
    }

    const onGoToClick = (id) => {
        setSlide(id)
    }

    return (
        <div className="Carousel">

            <FaArrowLeft className="arrow arrow-left" onClick={onLeftClick} />
            {data.map((el, i) => (
                <img key={i} src={el.src} alt={el.alt} className={`slide ${slide === i ? "" : "slide-hidden"} `} />
            ))}

            <FaArrowRight className="arrow arrow-right" onClick={onRightClick} />


            <span className="indicators">
                {data.map((_, i) => {
                    return <button key={i} onClick={() => onGoToClick(i)} className={`indicator ${slide === i ? "active" : ""}`}  ></button>
                })}
            </span>
        </div>
    );
}

export default Carousel;
