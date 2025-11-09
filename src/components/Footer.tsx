import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#3E2723] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="mb-4">大工のげんさん</h3>
            <p className="text-white/80">
              地元密着の誠実な大工<br />
              木の仕事一筋20年
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0120000000" className="hover:text-white transition-colors">
                  0120-000-000
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  〒123-4567<br />
                  東京都サンプル区サンプル町1-2-3
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-4">営業時間</h4>
            <div className="text-white/80">
              <p>9:00〜18:00</p>
              <p className="mt-2">定休日：日曜日</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 大工のげんさん（サンプルサイト）All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
