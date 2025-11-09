import { Phone, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信機能なし（静的サイトのため）
    alert('このフォームは送信機能がありません。お電話でお問い合わせください。');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#8B4513] mb-4">お問い合わせ・ご相談</h2>
          <p className="text-gray-700">お気軽にご連絡ください</p>
        </div>

        {/* Phone CTA */}
        <div className="bg-[#2F5233] text-white rounded-lg p-8 mb-12 text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h3 className="mb-2">お電話でのお問い合わせ</h3>
          <a 
            href="tel:0120000000" 
            className="inline-block mb-4 transition-transform hover:scale-105"
          >
            0120-000-000
          </a>
          <p className="opacity-90">「ホームページを見た」とお伝えください。</p>
          <p className="opacity-90 mt-2">受付時間：9:00〜18:00（日曜定休）</p>
        </div>

        {/* Contact Form (No submit functionality) */}
        <div className="bg-[#F5F5DC] rounded-lg p-8">
          <h3 className="text-[#8B4513] mb-6 text-center">メールでのお問い合わせ</h3>
          <p className="text-gray-600 text-center mb-6">※このフォームは送信機能がありません（サンプルサイト）</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4" />
                お名前
              </Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="山田太郎" 
                className="bg-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4" />
                電話番号
              </Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="090-1234-5678" 
                className="bg-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4" />
                メールアドレス
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@email.com" 
                className="bg-white"
              />
            </div>

            <div>
              <Label htmlFor="message" className="mb-2 block">
                お問い合わせ内容
              </Label>
              <Textarea 
                id="message" 
                placeholder="ご相談内容をお書きください"
                rows={6}
                className="bg-white"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#8B4513] hover:bg-[#6B3410] text-white"
              size="lg"
            >
              送信する（サンプル）
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
