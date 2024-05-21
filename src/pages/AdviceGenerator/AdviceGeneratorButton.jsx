import "./adviceGeneratorButton.scss";
import diceIcon from "../../assets/images/icon-dice.svg";
export default function AdviceGeneratorButton({ handleAdviceButton }) {
  return (
    <button onClick={handleAdviceButton}>
      <img src={diceIcon} alt="" />
    </button>
  );
}
