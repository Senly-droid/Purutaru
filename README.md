# プルタル

世界史の教科書に「名前と実績」だけで
一行紹介されて終わってしまう人物について、教科書には載らない「もう一つの顔」
を検索できるWebアプリです。

このバージョンはサーバー（Python/FastAPI）を使わず、検索ロジックをすべて
JavaScriptで実装しています。GitHub Pagesだけで無料・常時稼働の公開ができます。

## 構成

```
purutaru-pages/
├── index.html        アプリ本体（検索UI・検索ロジック）
├── data/
│   └── figures.js     人物データ（第一弾: 古代ギリシャ・ローマ）
└── README.md
```

## GitHub Pagesでの公開手順

1. GitHubで新しいリポジトリを作成する（例: `purutaru`）
2. このフォルダの中身（`index.html`、`data/`）をリポジトリのルートに追加してpush

   ```bash
   cd purutaru-pages
   git init
   git add .
   git commit -m "提出版: JavaScriptのみで動く固定フォーマット応答版"
   git branch -M main
   git remote add origin https://github.com/あなたのユーザー名/purutaru.git
   git push -u origin main
   ```

3. GitHubのリポジトリ画面で「Settings」→「Pages」を開く
4. 「Build and deployment」の「Source」で `Deploy from a branch` を選択
5. 「Branch」で `main` ブランチ、フォルダは `/ (root)` を選んで保存
6. 数分待つと `https://あなたのユーザー名.github.io/purutaru/` で公開されます

## 人物データの追加方法

`data/figures.js` の配列に、以下の形式でオブジェクトを追加するだけです。

```js
{
  id: "一意のID（英数字）",
  name: "表示名",
  name_en: "英語名（検索用）",
  category: "ギリシャ" または "ローマ" など,
  era: "生没年など",
  textbook_face: "教科書的な基本情報",
  hidden_face: "教科書に載らない逸話",
  source: "出典の説明",
  source_url: "出典のURL",
}
```

## 今後の予定（選考通過後）

固定フォーマット応答から、AI連携による対話的な深掘り機能・未収録人物のその場生成
への拡張を予定しています。その際はAPIキーをブラウザに露出させないため、
軽量なサーバー（Vercel Functions等）を別途追加する想定です。
