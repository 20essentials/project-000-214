const BlurBackground = ({color1, color2, color3}) => {
  return (
    <div
      className='blurBackground'
      style={{
        backgroundImage: `linear-gradient(
        45deg,
        ${color1 || "skyblue"}, 
        ${color2 || "orange"}, 
        ${color3 || "springgreen"}
      )`
      }}
    >
      BlurBackground
    </div>
  );
};

export default BlurBackground;
