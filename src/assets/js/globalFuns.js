import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";

export const useWindowScrollPositions = () => {

    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });
 
    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
        }
    
        window.addEventListener('scroll', updatePosition);
        updatePosition();
    
        return () => window.removeEventListener('scroll', updatePosition);
    }, [])
 
    return scrollPosition;
}

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const animation = (animationEle) => {
    var windowHeight = window.innerHeight;
    var elementTop = animationEle.current.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      if (animationEle.current.className.search('reveal-active') === -1) {
        animationEle.current.className = `${animationEle.current.className} reveal-active`;
      }
    }
}

export const ScrollTop = () => {

    const {scrollY} = useWindowScrollPositions();
    const [scroll, setScroll] = useState(0);

    const style = {
        position: 'fixed',
        width: "41px",
        height: "41px",
        fontSize: '20px',
        bottom: '25px',
        right: '32px',
        color: '#FFFFFF',
        textAlign: 'center',
        zIndex: "99",
        backgroundColor: '#1d1f25',
        border: '1px solid #b3f024',
        outline: "0",
        cursor: "pointer",
        transition: "0.3s linear",
    }

    useEffect(() => {
        if(scrollY > 300) {
            setScroll(1);
        } else {
            setScroll(0);
        }
    }, [scrollY]);

    return (
        <>
            {
                scroll === 1 && 
                    <button
                        onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }}
                        style={style}
                    >
                        <BsArrowUp style={{}} />
                    </button>
            }
        </>
    );
}

export default function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}
