import { motion } from 'framer-motion';
import { GiLotusFlower } from 'react-icons/gi';

const NAVBAR_HEIGHT = 72;

const FlowerBackground = () => {
  const flowers = Array.from({ length: 90 }).map((_, i) => {
    const placeNearEdge = Math.random() > 0.2;
    let left, top;
    if (placeNearEdge) {
      const edge = Math.floor(Math.random() * 4);
      const cornerBias = Math.random() > 0.7;
      if (cornerBias) {
        const xCorner = Math.random() > 0.5 ? 0 : 90;
        const yCorner = Math.random() > 0.5 ? 0 : 90;
        left = `${xCorner}%`;
        top = `${yCorner}%`;
      } else {
        switch (edge) {
          case 0:
            left = `${Math.random() * 100}%`;
            top = `${Math.random() * 20}%`;
            break;
          case 1:
            left = `${80 + Math.random() * 20}%`;
            top = `${Math.random() * 100}%`;
            break;
          case 2:
            left = `${Math.random() * 100}%`;
            top = `${80 + Math.random() * 20}%`;
            break;
          case 3:
            left = `${Math.random() * 20}%`;
            top = `${Math.random() * 100}%`;
            break;
        }
      }
    } else {
      left = `${Math.random() * 100}%`;
      top = `${Math.random() * 100}%`;
    }
    let topPx = top.endsWith('%') ? `calc(${top} + ${NAVBAR_HEIGHT}px)` : `${parseFloat(top) + NAVBAR_HEIGHT}px`;
    return {
      id: i,
      size: `${Math.random() * 0.5 + 0.5}rem`,
      left,
      top: topPx,
      rotate: Math.random() * 360,
      delay: Math.random() * 3,
      duration: Math.random() * 20 + 20,
      opacity: Math.random() * 0.2 + 0.3
    };
  });
  const flowerChar = '🌸';
  return (
    <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0" style={{top: NAVBAR_HEIGHT}}>
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute origin-center"
          style={{
            fontSize: flower.size,
            left: flower.left,
            top: flower.top,
            rotate: flower.rotate,
            opacity: flower.opacity,
            zIndex: 0,
            color: '#f9a8d4',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.03))'
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [flower.rotate, flower.rotate + 30, flower.rotate - 20, flower.rotate + 30],
            opacity: [flower.opacity, flower.opacity + 0.2, flower.opacity]
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiLotusFlower 
            style={{ 
              width: '100%', 
              height: '100%', 
              color: '#f472b6',
              filter: 'drop-shadow(0 0 1px #ffe4f3) drop-shadow(0 0 2px #f9a8d4)'
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerBackground; 