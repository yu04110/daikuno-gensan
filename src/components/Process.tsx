import { Phone, Search, FileCheck, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'お問い合わせ',
      description: 'お電話またはフォームよりお気軽にご相談ください。ご希望の日程を調整いたします。'
    },
    {
      number: '02',
      icon: Search,
      title: '現地調査・お見積もり',
      description: '現地を拝見し、ご要望を詳しくお伺いします。その後、お見積もりを作成してご提示いたします。'
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'ご契約・施工',
      description: 'お見積もりにご納得いただけましたら、ご契約後、スケジュールを組んで施工を開始します。'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: '完了・アフターフォロー',
      description: '施工完了後、しっかりと確認していただきます。アフターフォローもお任せください。'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#8B4513] mb-4">ご依頼の流れ</h2>
          <p className="text-gray-700">お問い合わせから完了まで、安心の4ステップ</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="text-[#8B4513] mb-4 opacity-30">{step.number}</div>
                <div className="w-16 h-16 bg-[#2F5233] rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-[#8B4513] mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#8B4513] text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
