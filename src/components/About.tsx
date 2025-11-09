import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651824039247-c811f27e9e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNyYWZ0c21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjY0OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="大工のげんさん"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-[#8B4513] mb-6">げんさんについて</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                木の仕事一筋20年。小さな修理から大きなリフォームまで、「自分の家だと思って」丁寧に施工しています。
              </p>
              <p>
                地域の皆さまに支えられ、これまで300件以上の施工を手がけてきました。
                一つひとつの仕事に真心を込めて、長く安心して暮らせる家づくりをお手伝いします。
              </p>
              <p>
                「また頼みたい」と言っていただけることが、何よりの喜びです。
                小さなことでもお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
