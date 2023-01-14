import React, { useState, useEffect } from "react"

function Hitmarker() {

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
          setMousePos({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleMouseMove
          );
        };
      }, []);

    return (
        <div>
            <div>
                ({mousePos.x}, {mousePos.y})
            </div>
        </div>
    )
}

export default Hitmarker