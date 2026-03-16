import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  const orbit1Count = 4;
  const orbit2Count = 3;

  const sat1BackRefs = useRef([]);
  const sat1FrontRefs = useRef([]);
  const sat2BackRefs = useRef([]);
  const sat2FrontRefs = useRef([]);

  const orbit1Ref = useRef(null);
  const orbit2Ref = useRef(null);

  useEffect(() => {
    let angle = 0;

    const getOrbitRadii = () => {
      const el1 = orbit1Ref.current;
      const el2 = orbit2Ref.current;
      if (!el1 || !el2) {
        return { rx1: 399.16, ry1: 106.31, rx2: 313.43, ry2: 100.82 };
      }

      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);

      return {
        rx1: parseFloat(style1.width) / 2,
        ry1: parseFloat(style1.height) / 2,
        rx2: parseFloat(style2.width) / 2,
        ry2: parseFloat(style2.height) / 2,
      };
    };

    const animate = () => {
      angle += 0.015;
      const { rx1, ry1, rx2, ry2 } = getOrbitRadii();

      for (let i = 0; i < orbit1Count; i++) {
        const spacing = (Math.PI * 2) / orbit1Count;
        const currentAngle = angle + i * spacing;
        const x = rx1 * Math.cos(currentAngle);
        const y = ry1 * Math.sin(currentAngle);
        const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

        const backEl = sat1BackRefs.current[i];
        const frontEl = sat1FrontRefs.current[i];

        if (backEl) backEl.style.transform = transform;
        if (frontEl) frontEl.style.transform = transform;

        if (y < 0) {
          if (backEl) backEl.style.opacity = "1";
          if (frontEl) frontEl.style.opacity = "0";
        } else {
          if (backEl) backEl.style.opacity = "0";
          if (frontEl) frontEl.style.opacity = "1";
        }
      }

      for (let i = 0; i < orbit2Count; i++) {
        const spacing = (Math.PI * 2) / orbit2Count;
        const currentAngle = -angle * 1.2 + i * spacing;
        const x = rx2 * Math.cos(currentAngle);
        const y = ry2 * Math.sin(currentAngle);
        const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

        const backEl = sat2BackRefs.current[i];
        const frontEl = sat2FrontRefs.current[i];

        if (backEl) backEl.style.transform = transform;
        if (frontEl) frontEl.style.transform = transform;

        if (y < 0) {
          if (backEl) backEl.style.opacity = "1";
          if (frontEl) frontEl.style.opacity = "0";
        } else {
          if (backEl) backEl.style.opacity = "0";
          if (frontEl) frontEl.style.opacity = "1";
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [orbit1Count, orbit2Count]);

  const createSats = (count, refs) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="satellite-js"
        ref={(el) => (refs.current[i] = el)}
      />
    ));

  return (
    <section id="hero">
      <div className="heroRow">
        <div className="left">
          <div className="texts">
            <Typewriter
              options={{
                strings: [
                  'SHARE<br/>YOUR<br/><span class="orange">ABILITY</span>',
                  'MY<br/><span class="orange">ABILITY</span><br/>SHARE',
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>

        <div className="planet-container">
          <div className="orbit-1-size orbit-line-container layer-back">
            <div className="orbit-1-border" style={{width:"100%",height:"100%",borderRadius:"50%",position:"absolute"}} />
            <div className="orbit-sat-container">
              {createSats(orbit1Count, sat1BackRefs)}
            </div>
          </div>
          <div className="orbit-2-size orbit-line-container layer-back">
            <div className="orbit-2-border" style={{width:"100%",height:"100%",borderRadius:"50%",position:"absolute"}} />
            <div className="orbit-sat-container">
              {createSats(orbit2Count, sat2BackRefs)}
            </div>
          </div>

          <div className="main-planet"></div>

          <div className="orbit-1-size orbit-line-container layer-front" ref={orbit1Ref}>
            <div className="orbit-1-border" style={{width:"100%",height:"100%",borderRadius:"50%",position:"absolute"}} />
            <div className="orbit-sat-container">
              {createSats(orbit1Count, sat1FrontRefs)}
            </div>
          </div>
          <div className="orbit-2-size orbit-line-container layer-front" ref={orbit2Ref}>
            <div className="orbit-2-border" style={{width:"100%",height:"100%",borderRadius:"50%",position:"absolute"}} />
            <div className="orbit-sat-container">
              {createSats(orbit2Count, sat2FrontRefs)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
