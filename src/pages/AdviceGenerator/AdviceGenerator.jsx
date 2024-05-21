import { useEffect, useState } from "react";
import "./adviceGenerator.scss";
import { fetchAdvice, fetchAdvice_117 } from "../../service/api";
import AdviceGeneratorHeader from "./AdviceGeneratorHeader";
import AdviceGeneratorContent from "./AdviceGeneratorContent";
import AdviceGeneratorButton from "./AdviceGeneratorButton";
export default function AdviceGenerator() {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [trigger, setTrigger] = useState(false);

  function handleAdviceButton() {
    setIsLoading(true);
    setTrigger(!trigger);
  }
  useEffect(() => {
    fetchAdvice()
      .then((data) => {
        setAdvice(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [trigger]);
  console.log(advice);
  return (
    <article className="ag_container">
      <AdviceGeneratorHeader isLoading={isLoading} id={advice.id} />
      <AdviceGeneratorContent isLoading={isLoading} advice={advice.advice} />
      <AdviceGeneratorButton handleAdviceButton={handleAdviceButton} />
    </article>
  );
}
