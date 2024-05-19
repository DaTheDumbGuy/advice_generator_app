export default function AdviceGeneratorContent({ isLoading, advice }) {
  return (
    <div>
      <p>{isLoading ? "Loading..." : advice}</p>
      <div>---</div>
    </div>
  );
}
