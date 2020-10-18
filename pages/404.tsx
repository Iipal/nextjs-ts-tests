import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function ErroPage() {
  return (
    <MainLayout>
      <h1>Error 404</h1>
      <p>Page doesn't exist. Please go back to safety.</p>
      <style jsx>{`
        h1 {
          font-size: 5rem;
        }
        p {
          font-size: 1.35rem;
        }
      `}</style>
    </MainLayout>
  );
}
