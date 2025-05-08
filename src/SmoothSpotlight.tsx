import React from "react";
import { motion } from "motion/react";

interface SmoothSpotlightProps {
  x: number;
  y: number;
  width: number;
  height: number;
  padding?: number;
  radius?: number;
  shadowOpacity?: number;
}

const SmoothSpotlight: React.FC<SmoothSpotlightProps> = ({
    x,
    y,
    width,
    height,
    padding = 30,
    radius = 20,
    shadowOpacity = 0.6,
  }) => {
    const px = x - padding / 2;
    const py = y - padding / 2;
    const pw = width + padding;
    const ph = height + padding;
  
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <mask id="smooth-spotlight-mask">
              <rect width="100%" height="100%" fill="white" />
              <motion.rect
                initial={false}
                animate={{
                  x: px,
                  y: py,
                  width: pw,
                  height: ph,
                  rx: radius,
                  ry: radius,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`rgba(0, 0, 0, ${shadowOpacity})`}
            mask="url(#smooth-spotlight-mask)"
          />
        </svg>
      </div>
    );
  };

export default SmoothSpotlight;