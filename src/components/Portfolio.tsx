import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      title: '築30年のキッチンをリフォーム',
      before: 'https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3NjI2NDkxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      after: 'https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwd29vZGVufGVufDF8fHx8MTc2MjY0OTE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '使い勝手を考慮した動線設計で、明るく広々としたキッチンに生まれ変わりました。'
    },
    {
      title: 'リビングの全面改装',
      before: 'https://images.unsplash.com/photo-1646592491560-e121e097dcf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MjUzOTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      after: 'https://images.unsplash.com/photo-1686245928676-bdc52f818783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYyNjE4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '自然木を活かした温かみのある空間に。家族が集まるくつろぎの場となりました。'
    },
    {
      title: '玄関の床・収納の新設',
      before: 'https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3NjI2NDkxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      after: 'https://images.unsplash.com/photo-1646592491560-e121e097dcf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MjUzOTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '収納スペースを確保しつつ、お客様をお迎えする明るい玄関に変身しました。'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#8B4513] mb-4">施工事例</h2>
          <p className="text-gray-700">これまでの施工例をご紹介します</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0">
              <h3 className="text-[#8B4513] mb-6 text-center">{project.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div>
                  <div className="bg-[#8B4513] text-white px-4 py-2 inline-block mb-3 rounded">
                    施工前
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={project.before}
                      alt={`${project.title} - 施工前`}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="bg-[#2F5233] text-white px-4 py-2 inline-block mb-3 rounded">
                    施工後
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={project.after}
                      alt={`${project.title} - 施工後`}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6 text-center">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
