import { charged, half, charging as chargingIcon, empty } from "./icons";

function convertLabel(seconds) {
  if (seconds === Infinity) {
    return "Not gonna lie ... I have no idea how long this will take";
  }

  if (seconds > 60 * 60) {
    const hours = seconds / (60 * 60);
    return `~ ${Math.round(hours)} hours remaining`;
  }
  if (seconds > 60) {
    const minutes = seconds / 60;
    return `~ ${Math.round(minutes)} minutes remaining`;
  }

  return "Any second";
}

function getIcon(level) {
  if (level > 90) return charged;
  if (level <= 90 && level >= 30) return half;
  return empty;
}

export default function Battery({
  charging,
  level,
  chargingTime,
  dischargingTime,
}) {
  if (charging) {
    return (
      <div className="charging">
        <div className="row">
          <h2 className="level">{level}%</h2>
          {chargingIcon}
        </div>
        <p className="status">
          {chargingTime > 0
            ? `Charging (${convertLabel(chargingTime)})`
            : "Fully Charged"}
        </p>
      </div>
    );
  }

  return (
    <div className="discharging">
      <div className="row">
        <h2 className="level">{level}%</h2>
        {getIcon(level)}
      </div>
      <p className="status">
        {dischargingTime > 0
          ? `${convertLabel(dischargingTime)}`
          : "Battery is dead (how is this showing)"}
      </p>
    </div>
  );
}
