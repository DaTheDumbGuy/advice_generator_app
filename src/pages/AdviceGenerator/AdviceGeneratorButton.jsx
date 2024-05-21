import "./adviceGeneratorButton.scss";
export default function AdviceGeneratorButton({ handleAdviceButton }) {
  return (
    <button onClick={handleAdviceButton}>
      <img src="/src/assets/images/icon-dice.svg" alt="" />
    </button>
  );
}
