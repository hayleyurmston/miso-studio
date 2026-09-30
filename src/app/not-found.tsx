import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4">That page has wandered off.</h1>
        <p className="mt-4 text-[#2b2b29]">Let's get you back to something useful.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="ghost">Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
