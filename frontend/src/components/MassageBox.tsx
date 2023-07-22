import Alert from "react-bootstrap/Alert";

export default function MassageBox({
  variant = "info",
  children,
}: {
  variant?: string;
  children: React.ReactNode;
}) {
  return <Alert variant={variant || "info"}>{children}</Alert>;
}
