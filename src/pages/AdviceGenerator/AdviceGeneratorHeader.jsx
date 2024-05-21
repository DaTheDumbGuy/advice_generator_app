import "./adviceGeneratorHeader.scss";

export default function AdviceGeneratorHeader({ isLoading, id }) {
  return (
    <header>
      <h1>
        Advice: #<span>{isLoading ? "Loading..." : id}</span>
      </h1>
    </header>
  );
}
