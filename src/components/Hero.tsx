import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="hero" className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1683115100702-af818681184d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MjY0OTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="大工の作業場"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-white mb-6">
            ちょっとしたお直しから、<br />
            こだわりのリフォームまで。
          </h1>
          <p className="text-white/90 mb-8">
            地元密着の大工・げんさんが、<br />
            あなたの家を丁寧にお守りします。
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#2F5233] hover:bg-[#244126] text-white"
          >
            <a href="tel:0120000000" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              電話で相談する
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
