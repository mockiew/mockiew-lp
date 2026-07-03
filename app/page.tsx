import { HeroForm } from '@/components/landing/HeroForm';
import { SneakPeek } from '@/components/landing/SneakPeek';
import { PainPoints } from '@/components/landing/PainPoints';
import { Features } from '@/components/landing/Features';
import { CtaBanner } from '@/components/landing/CtaBanner';

export default function Page() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e]">
      <HeroForm />
      <SneakPeek />
      <PainPoints />
      <Features />
      <CtaBanner />
    </div>
  );
}
