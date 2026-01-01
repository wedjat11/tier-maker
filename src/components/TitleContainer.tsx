import tierLogo from "../assets/tiermaker-logo.png";

export default function TitleContainer() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src={tierLogo}
        className="h-10"
        alt="My tier"
        aria-label="My tier"
        title="My tier"
      />
    </div>
  );
}
