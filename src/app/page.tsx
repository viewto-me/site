import ResetButton from '@/components/ResetButton';

export default function Home() {
  return (
    <main className="flex-grow flex relative w-full h-full">
      {/* The page is intentionally blank except for the reset button */}
      <ResetButton className="absolute top-6 right-6" />
    </main>
  );
}
