import "./adviceGeneratorContent.scss";
export default function AdviceGeneratorContent({ isLoading, advice }) {
  return (
    <div className="ag_content">
      <p> &quot;{isLoading ? "Loading..." : advice}&quot;</p>
      <div className="ag_divider">
        {/* <img src="src/assets/images/pattern-divider-mobile.svg" alt="" /> */}
      </div>
    </div>
  );
}
