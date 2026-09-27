export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* Base background - Dark for hero visibility */}
      <div style={{ backgroundColor: "var(--bg-deep)" }} className="absolute inset-0" />

      {/* Ambient orbs */}
      <div
        className="orb"
        style={{
          top: "0%",
          left: "25%",
          width: "800px",
          height: "800px",
          backgroundColor: "var(--orb-1-color)",
          opacity: 0.6,
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "25%",
          right: "25%",
          width: "600px",
          height: "600px",
          backgroundColor: "var(--orb-2-color)",
          opacity: 0.5,
        }}
      />
      <div
        className="orb"
        style={{
          top: "50%",
          right: "0%",
          width: "500px",
          height: "500px",
          backgroundColor: "var(--orb-3-color)",
          opacity: 0.4,
        }}
      />
    </div>
  );
};
