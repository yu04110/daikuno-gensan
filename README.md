
 # 大工のげんさん WordPress テーマ

 町の大工「げんさん」の紹介用ワンページデザインを WordPress テーマとして利用できるように整備しました。元デザインはこちら：https://www.figma.com/design/qAQr5DLrnqyltffZgZ5CW3

 ## 使い方

  1. このフォルダーを ZIP にまとめ、WordPress の `/wp-content/themes/` に配置するか、管理画面からアップロードしてください
  2. 管理画面 → 外観 → テーマ で「Daikuno Gensan Static」を有効化します
  3. 「設定」→「表示設定」でフロントページを固定ページにし、フロントページとして空のページを指定すると `front-page.php` が読み込まれます

 ## 構成

 - `front-page.php` … トップページテンプレート
 - `index.php` … テーマ必須のバックアップテンプレート（front-page と同じ内容を出力）
 - `functions.php` … テーマサポート宣言と CSS/JS の読み込み
 - `style.css` … テーマメタ情報とレスポンシブスタイル
 - `main.js` … ナビ開閉やフォームのダミー送信制御など最小限の挙動
 - `ATTRIBUTIONS.md` … 利用素材のクレジット

 ## ライセンス

 Unsplash の写真と元デザインで利用していた shadcn/ui のライセンスについては `ATTRIBUTIONS.md` をご覧ください。
  
