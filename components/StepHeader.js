export default function StepHeader({ children }) {

    return (
      <div>
        <h2 key={children} id={children}>{children}</h2>
      </div>
    );
  }
  