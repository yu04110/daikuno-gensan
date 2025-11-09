import { Ear, Home, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Philosophy() {
  const philosophies = [
    {
      icon: Ear,
      title: '丁寧なヒアリング',
      description: 'お客様のご要望を細かくお聞きし、ライフスタイルに合わせた最適なプランをご提案します。'
    },
    {
      icon: Home,
      title: '長く使える家づくり',
      description: '目先だけでなく、10年、20年先も安心して暮らせる、しっかりとした施工を心がけています。'
    },
    {
      icon: Wrench,
      title: '小さな工事も喜んで',
      description: '棚一つの取り付けから大規模リフォームまで。どんな小さな仕事でも丁寧に対応いたします。'
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#8B4513] mb-4">仕事への思い</h2>
          <p className="text-gray-700">げんさんが大切にしている3つのこと</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <Card key={index} className="bg-white border-[#D2B48C] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#2F5233] rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#8B4513]">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
