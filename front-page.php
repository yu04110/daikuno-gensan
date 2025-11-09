<?php
/**
 * Front page template for Daikuno Gensan theme.
 *
 * @package DaikunoGensan
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta
      name="description"
      content="地元密着の大工・げんさんの静的サイト。小さな修理からリフォームまで丁寧に対応します。"
    />
    <title><?php bloginfo( 'name' ); ?></title>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header class="site-header">
      <div class="container header-inner">
        <a class="site-brand" href="#hero"><?php bloginfo( 'name' ); ?></a>
        <button
          class="menu-toggle"
          aria-label="メニューを開閉"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav" id="site-nav">
          <ul class="nav-links">
            <li><a href="#about">げんさんについて</a></li>
            <li><a href="#philosophy">仕事への思い</a></li>
            <li><a href="#portfolio">施工事例</a></li>
            <li><a href="#process">ご依頼の流れ</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
          <a class="btn btn-outline phone-link" href="tel:0120000000"
            >電話で相談する</a
          >
        </nav>
      </div>
    </header>

    <main>
      <section id="hero" class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>
              ちょっとしたお直しから、<br />
              こだわりのリフォームまで。
            </h1>
            <p>
              地元密着の大工・げんさんが、<br />
              あなたの家を丁寧にお守りします。
            </p>
            <a class="btn btn-primary" href="tel:0120000000">
              <span aria-hidden="true">☎</span>
              電話で相談する
            </a>
          </div>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container about-grid">
          <div>
            <img
              src="https://images.unsplash.com/photo-1651824039247-c811f27e9e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNyYWZ0c21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjY0OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1400&utm_source=figma&utm_medium=referral"
              alt="大工のげんさんが木材を加工している様子"
              loading="lazy"
            />
          </div>
          <div class="about-text">
            <div class="section-heading" style="text-align: left; margin-bottom: 24px;">
              <h2>げんさんについて</h2>
            </div>
            <p>
              木の仕事一筋20年。小さな修理から大きなリフォームまで、「自分の家だと思って」丁寧に施工しています。
            </p>
            <p>
              地域の皆さまに支えられ、これまで300件以上の施工を手がけてきました。一つひとつの仕事に真心を込めて、長く安心して暮らせる家づくりをお手伝いします。
            </p>
            <p>
              「また頼みたい」と言っていただけることが、何よりの喜びです。小さなことでもお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      <section id="philosophy" class="section section-sand">
        <div class="container">
          <div class="section-heading">
            <h2>仕事への思い</h2>
            <p>げんさんが大切にしている3つのこと</p>
          </div>
          <div class="philosophy-grid">
            <article class="philosophy-card">
              <span class="icon-circle" aria-hidden="true">聴</span>
              <h3>丁寧なヒアリング</h3>
              <p>
                お客様のご要望を細かくお聞きし、ライフスタイルに合わせた最適なプランをご提案します。
              </p>
            </article>
            <article class="philosophy-card">
              <span class="icon-circle" aria-hidden="true">住</span>
              <h3>長く使える家づくり</h3>
              <p>
                目先だけでなく、10年、20年先も安心して暮らせる、しっかりとした施工を心がけています。
              </p>
            </article>
            <article class="philosophy-card">
              <span class="icon-circle" aria-hidden="true">丁</span>
              <h3>小さな工事も喜んで</h3>
              <p>
                棚一つの取り付けから大規模リフォームまで。どんな小さな仕事でも丁寧に対応いたします。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="portfolio" class="section">
        <div class="container">
          <div class="section-heading">
            <h2>施工事例</h2>
            <p>これまでの施工例をご紹介します</p>
          </div>

          <article class="portfolio-item">
            <h3>築30年のキッチンをリフォーム</h3>
            <div class="media-grid">
              <div class="media-card">
                <span class="badge badge-before">施工前</span>
                <img
                  src="https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3NjI2NDkxNzd8MA&ixlib=rb-4.1.0&q=80&w=1200&utm_source=figma&utm_medium=referral"
                  alt="キッチンリフォーム前の様子"
                  loading="lazy"
                />
              </div>
              <div class="media-card">
                <span class="badge badge-after">施工後</span>
                <img
                  src="https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwd29vZGVufGVufDF8fHx8MTc2MjY0OTE3OHww&ixlib=rb-4.1.0&q=80&w=1200&utm_source=figma&utm_medium=referral"
                  alt="キッチンリフォーム後の様子"
                  loading="lazy"
                />
              </div>
            </div>
            <p class="portfolio-description">
              使い勝手を考慮した動線設計で、明るく広々としたキッチンに生まれ変わりました。
            </p>
          </article>

          <article class="portfolio-item">
            <h3>リビングの全面改装</h3>
            <div class="media-grid">
              <div class="media-card">
                <span class="badge badge-before">施工前</span>
                <img
                  src="https://images.unsplash.com/photo-1646592491560-e121e097dcf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MjUzOTU4MXww&ixlib=rb-4.1.0&q=80&w=1200&utm_source=figma&utm_medium=referral"
                  alt="リビング改装前の様子"
                  loading="lazy"
                />
              </div>
              <div class="media-card">
                <span class="badge badge-after">施工後</span>
                <img
                  src="https://images.unsplash.com/photo-1686245928676-bdc52f818783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYyNjE4MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1200&utm_source=figma&utm_medium=referral"
                  alt="リビング改装後の様子"
                  loading="lazy"
                />
              </div>
            </div>
            <p class="portfolio-description">
              自然木を活かした温かみのある空間に。家族が集まるくつろぎの場となりました。
            </p>
          </article>

          <article class="portfolio-item">
            <h3>玄関の床・収納の新設</h3>
            <div class="media-grid">
              <div class="media-card">
                <span class="badge badge-before">施工前</span>
                <img
                  src="https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3NjI2NDkxNzd8MA&ixlib=rb-4.1.0&q=80&w=1200&utm_source=figma&utm_medium=referral"
                  alt="玄関の施工前の様子"
                  loading="lazy"
                />
              </div>
              <div class="media-card">
                <span class="badge badge-after">施工後</span>
                <img
                  src="https://images.unsplash.com/photo-1646592491560-e121e097dcf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MjUzOTU4MXww&ixlib=rb-4.1.0&q=80&w=1200&utm_source=figma&utm_medium=referral"
                  alt="玄関の施工後の様子"
                  loading="lazy"
                />
              </div>
            </div>
            <p class="portfolio-description">
              収納スペースを確保しつつ、お客様をお迎えする明るい玄関に変身しました。
            </p>
          </article>
        </div>
      </section>

      <section id="process" class="section section-sand">
        <div class="container">
          <div class="section-heading">
            <h2>ご依頼の流れ</h2>
            <p>お問い合わせから完了まで、安心の4ステップ</p>
          </div>
          <div class="process-grid">
            <article class="process-step">
              <div class="step-number">01</div>
              <div class="step-icon" aria-hidden="true">問</div>
              <h3>お問い合わせ</h3>
              <p>
                お電話またはフォームよりお気軽にご相談ください。ご希望の日程を調整いたします。
              </p>
            </article>
            <article class="process-step">
              <div class="step-number">02</div>
              <div class="step-icon" aria-hidden="true">見</div>
              <h3>現地調査・お見積もり</h3>
              <p>
                現地を拝見し、ご要望を詳しくお伺いします。その後、お見積もりを作成してご提示いたします。
              </p>
            </article>
            <article class="process-step">
              <div class="step-number">03</div>
              <div class="step-icon" aria-hidden="true">施</div>
              <h3>ご契約・施工</h3>
              <p>
                お見積もりにご納得いただけましたら、ご契約後、スケジュールを組んで施工を開始します。
              </p>
            </article>
            <article class="process-step">
              <div class="step-number">04</div>
              <div class="step-icon" aria-hidden="true">完</div>
              <h3>完了・アフターフォロー</h3>
              <p>
                施工完了後、しっかりと確認していただきます。アフターフォローもお任せください。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container contact-grid">
          <div class="section-heading">
            <h2>お問い合わせ・ご相談</h2>
            <p>お気軽にご連絡ください</p>
          </div>
          <div class="callout">
            <p>お電話でのお問い合わせ</p>
            <a href="tel:0120000000">0120-000-000</a>
            <p>「ホームページを見た」とお伝えください。</p>
            <p>受付時間：9:00〜18:00（日曜定休）</p>
          </div>
          <div class="form-card">
            <h3 style="text-align: center; color: var(--brown); margin-top: 0;">
              メールでのお問い合わせ
            </h3>
            <p style="text-align: center; color: var(--muted); margin-bottom: 24px;">
              ※このフォームはサンプルのため送信できません
            </p>
            <form id="contact-form">
              <label for="name">お名前</label>
              <input id="name" name="name" type="text" placeholder="山田太郎" required />

              <label for="phone">電話番号</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputmode="tel"
                placeholder="090-1234-5678"
                required
              />

              <label for="email">メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />

              <label for="message">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="ご相談内容をお書きください"
                required
              ></textarea>

              <button class="btn btn-primary" type="submit">
                送信する（サンプル）
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3>大工のげんさん</h3>
            <p>
              地元密着の誠実な大工<br />
              木の仕事一筋20年
            </p>
          </div>
          <div>
            <h4>お問い合わせ</h4>
            <p><a href="tel:0120000000">0120-000-000</a></p>
            <p>〒123-4567 東京都サンプル区サンプル町1-2-3</p>
          </div>
          <div>
            <h4>営業時間</h4>
            <p>9:00〜18:00</p>
            <p>定休日：日曜日</p>
          </div>
        </div>
        <div class="footer-note">
          © 大工のげんさん（サンプルサイト）All Rights Reserved.
        </div>
      </div>
    </footer>
    <?php wp_footer(); ?>
  </body>
</html>
