export default function Unit({ unit, setSelectedUnit }) {
  const TEXT_CENTERING_POSITIONS = {
    y: 110,
    x: 58,
  };
  const handleSelectUnit = () => {
    setSelectedUnit(unit);
  };

  return (
    <>
      <rect
        cursor="pointer"
        onClick={handleSelectUnit}
        stroke="#000"
        id={unit.id}
        height="200"
        width="200"
        y={unit.coordinates.y}
        x={unit.coordinates.x}
        fill={unit.color}
      />
      <text
        cursor="pointer"
        onClick={handleSelectUnit}
        xmlSpace="preserve"
        textAnchor="start"
        fontFamily="'Roboto Slab'"
        fontSize="24"
        strokeWidth="0"
        id={"name-" + unit.id}
        y={unit.coordinates.y + TEXT_CENTERING_POSITIONS.y}
        x={unit.coordinates.x + TEXT_CENTERING_POSITIONS.x}
        stroke="#000"
        fill="#000000"
      >
        {unit.label}
      </text>
    </>
  );
}
