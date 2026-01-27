import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFF0]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-display font-bold text-[#D4AF37] mb-4">404</h1>
          <h2 className="text-4xl font-display font-semibold text-[#0A1628] mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-[#36454F]/80 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button variant="primary">Return Home</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary">View Portfolio</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
