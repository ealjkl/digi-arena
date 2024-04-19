import "../styles/CounterWrapper.scss";

type CounterWrapperProps = {
  count: number;
  children: React.ReactNode;
};

export default function CounterWrapper({
  children,
  count,
}: CounterWrapperProps) {
  return (
    <div className="counter-wrapper">
      <div className="counter-wrapper-count">
        <p>{count}</p>
      </div>
      {children}
    </div>
  );
}
