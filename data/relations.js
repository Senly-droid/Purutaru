// プルタル - 人物相関データ
// 各関係はWikipedia（日本語版・英語版）の本文を実際に確認したうえで作成。
// 向きの規約: label の文の主語が from（例 from:virgil / to:homer →「ウェルギリウスはホメロスを手本にした」）。
// 史実性に議論があるものは label 中に「〜と伝わる」「諸説ある」等を明記している。

const RELATIONS = [
  {
    from: "hesiod",
    to: "homer",
    type: "競合",
    label:
      "『ホメロスとヘシオドスの歌競べ』という古代の伝承では、カルキスで両者が詩を競い、戦争と武勇を歌うホメロスに対し、ヘシオドスは牧歌的な『仕事と日々』を歌って勝利したと伝わる。後世に作られた伝説とされる。",
    source_url: "https://ja.wikipedia.org/wiki/ヘーシオドス",
  },
  {
    from: "heraclitus",
    to: "homer",
    type: "論敵",
    label:
      "ホメロスを名指しで批判した数少ない初期哲学者の一人。「争いが世界から消えてほしい」というホメロスの願いに対し、それでは世界が滅びると反論した。",
    source_url: "https://en.wikipedia.org/wiki/Heraclitus",
  },
  {
    from: "plato",
    to: "homer",
    type: "論敵",
    label:
      "ホメロスを「ギリシャを教育した者」と呼んで影響力を認めつつ、『国家』では詩は理性ではなく霊感によるものだとして、理想国家からホメロスの詩を追放すべきだと論じた。称賛と排除が同居する複雑な関係。",
    source_url: "https://en.wikipedia.org/wiki/Plato",
  },
  {
    from: "herodotus",
    to: "homer",
    type: "記録",
    label:
      "『歴史』でホメロスの年代を推定したほか、『エピゴノイ』『キュプリア』が本当にホメロスの作かどうか疑問を呈した。",
    source_url: "https://ja.wikipedia.org/wiki/ホメーロス",
  },
  {
    from: "thucydides",
    to: "homer",
    type: "記録",
    label:
      "ホメロスが自分自身について語った箇所として『ホメロス讃歌』の一節を引用した。史料批判に厳しい彼がホメロスを史料として使った珍しい例。",
    source_url: "https://ja.wikipedia.org/wiki/ホメーロス",
  },
  {
    from: "aristotle",
    to: "homer",
    type: "記録",
    label:
      "『詩学』で、地の文と登場人物の会話を混ぜるホメロスの語りの技法を、叙事詩の模範として分析した。",
    source_url: "https://en.wikipedia.org/wiki/Poetics_(Aristotle)",
  },
  {
    from: "seneca",
    to: "homer",
    type: "記録",
    label:
      "「『オデュッセイア』の漕ぎ手は何人だったか」「『イリアス』と『オデュッセイア』は同じ作者か」などを知りたがるのは「ギリシャ人の病気」だと皮肉った。当時すでにホメロス考証が過熱していたことがわかる。",
    source_url: "https://ja.wikipedia.org/wiki/ホメーロス",
  },
  {
    from: "democritus",
    to: "homer",
    type: "記録",
    label:
      "原子論で知られる彼は『ホメロス論』という著作を書いたと伝わる（著作目録に名が残るが現存しない）。",
    source_url: "https://en.wikipedia.org/wiki/Democritus",
  },
  {
    from: "virgil",
    to: "homer",
    type: "影響",
    label:
      "ホメロスの『イリアス』『オデュッセイア』を手本に『アエネイス』を書いた。古代の注釈家によれば、前半6巻が『オデュッセイア』、後半6巻が『イリアス』を下敷きにした構成になっている。",
    source_url: "https://ja.wikipedia.org/wiki/ウェルギリウス",
  },
  {
    from: "horace",
    to: "homer",
    type: "影響",
    label:
      "『詩論』で「よい手本は常にホメロスに見出される」と述べる一方、「時には偉大なホメロスも居眠りする」という一句でその欠点も指摘した。この言葉は今も慣用句として使われる。",
    source_url: "https://en.wikipedia.org/wiki/Ars_Poetica_(Horace)",
  },
  {
    from: "strabo",
    to: "homer",
    type: "影響",
    label:
      "『地理誌』で「ホメロスは地理学の創始者である」と位置づけた。学んだ学校がホメロス叙事詩の解釈に強い関心を持つ学統だったためと考えられている。",
    source_url: "https://en.wikipedia.org/wiki/Strabo",
  },
  {
    from: "tribonian",
    to: "homer",
    type: "記録",
    label:
      "10世紀の事典『スーダ』によれば、『イリアス』の「船の目録」（ギリシャ軍の陣容を列挙した部分）を翻訳したという。異教徒だった可能性も指摘される古典教養の持ち主だった。",
    source_url: "https://en.wikipedia.org/wiki/Tribonian",
  },
  {
    from: "heraclitus",
    to: "hesiod",
    type: "論敵",
    label:
      "「ヘシオドスは昼と夜を知らなかった。昼と夜は一つのものだからだ」と述べ、その世界観を痛烈に否定した。",
    source_url: "https://en.wikipedia.org/wiki/Heraclitus",
  },
  {
    from: "herodotus",
    to: "hesiod",
    type: "記録",
    label:
      "『歴史』でホメロスとヘシオドスをほぼ同時代人とみなし、ヘシオドスが語り直した神々の姿が全ギリシャ人に共通する正統な神話として受け入れられた、と記録した。",
    source_url: "https://en.wikipedia.org/wiki/Hesiod",
  },
  {
    from: "aristotle",
    to: "hesiod",
    type: "記録",
    label:
      "『形而上学』で、「万物の第一原因は何か」という哲学の根本問題はヘシオドスから始まったかもしれない、と述べた。詩人を哲学の先駆者として位置づけた例。",
    source_url: "https://en.wikipedia.org/wiki/Hesiod",
  },
  {
    from: "virgil",
    to: "hesiod",
    type: "影響",
    label:
      "農業を歌った『農耕詩』を書くにあたり、ヘシオドスの『仕事と日々』にのっとった教訓詩の形式を採用した。",
    source_url: "https://ja.wikipedia.org/wiki/ウェルギリウス",
  },
  {
    from: "ovid",
    to: "hesiod",
    type: "影響",
    label:
      "『変身物語』は、ヘシオドスの『女の目録』に代表される、神話を次々と列挙していく「カタログ詩」の伝統の上に立っている。",
    source_url: "https://en.wikipedia.org/wiki/Ovid",
  },
  {
    from: "herodotus",
    to: "sappho",
    type: "記録",
    label:
      "サッフォーの弟が遊女ロドピスを大金で身請けし、サッフォーが詩でそれを叱責したという逸話を書き残した。サッフォーの家族について現存する最古の記録。",
    source_url: "https://en.wikipedia.org/wiki/Sappho",
  },
  {
    from: "plato",
    to: "sappho",
    type: "記録",
    label:
      "プラトン作と伝わる詩で、サッフォーは9人のムーサ（詩の女神）に並ぶ「第十のムーサ」と呼ばれた。古代における最高の賛辞だが、プラトン自身の作かどうかには疑問も残る。",
    source_url: "https://en.wikipedia.org/wiki/Sappho",
  },
  {
    from: "horace",
    to: "sappho",
    type: "影響",
    label:
      "『歌集』はギリシャ抒情詩の意識的な模倣で、サッフォーが手本の一つ。「サッフォー詩形」と呼ばれる韻律を用い、彼女を「男らしいサッフォー」と呼んだ。",
    source_url: "https://en.wikipedia.org/wiki/Odes_(Horace)",
  },
  {
    from: "ovid",
    to: "sappho",
    type: "影響",
    label:
      "『ヘロイデス』第15歌を「サッフォーからパオーンへの手紙」として書き、青年パオーンへの失恋で身を投げたという伝説を広めた。『恋の技法』では「いまやサッフォーの名はあらゆる国々に知られている」とも述べている。",
    source_url: "https://en.wikipedia.org/wiki/Sappho",
  },
  {
    from: "sophocles",
    to: "aeschylus",
    type: "競合",
    label:
      "前468年のディオニュシア祭で、当時アテネ悲劇界の第一人者だったアイスキュロスを破って初優勝した。ただし初期には彼を真似るほど尊敬しており、自らの作風を「第一期はアイスキュロス流の大言壮語」と回想している。",
    source_url: "https://ja.wikipedia.org/wiki/ソポクレス",
  },
  {
    from: "aristophanes",
    to: "aeschylus",
    type: "記録",
    label:
      "喜劇『蛙』で、死後50年を経たアイスキュロスを登場人物にし、エウリピデスと冥界で悲劇詩人対決をさせた。最後はアイスキュロスが勝ち、現世へ連れ戻される。",
    source_url: "https://en.wikipedia.org/wiki/The_Frogs",
  },
  {
    from: "pliny_elder",
    to: "aeschylus",
    type: "記録",
    label:
      "『博物誌』で「鷲は亀の甲羅を割るために高所から落とす習性があり、それが詩人アイスキュロスの死の原因となった」と記した。ハゲ頭を岩と間違えられたという有名な死因伝説の出典。",
    source_url: "https://en.wikipedia.org/wiki/Aeschylus",
  },
  {
    from: "aristotle",
    to: "aeschylus",
    type: "記録",
    label:
      "アイスキュロスが舞台に登場する役者の数を1人から2人へ増やしたと記録している。ギリシャ悲劇が「対話劇」になった転換点として伝えられる。",
    source_url: "https://en.wikipedia.org/wiki/Aeschylus",
  },
  {
    from: "seneca",
    to: "aeschylus",
    type: "影響",
    label:
      "悲劇『アガメムノン』『テュエステス』はアイスキュロスの『オレステイア』三部作の影響を受けている。ただし舞台裏で起きた殺人をより凄惨に描写する点が異なる。",
    source_url: "https://en.wikipedia.org/wiki/Senecan_tragedy",
  },
  {
    from: "euripides",
    to: "sophocles",
    type: "影響",
    label:
      "年長のソフォクレスに影響を与えた。ソフォクレスは年下の彼を高く評価し、後期作品『ピロクテテス』『コロノスのオイディプス』にその跡が見える。前406年にエウリピデスが死ぬと、ソフォクレスは上演前の挨拶で公に弔意を示した。",
    source_url: "https://en.wikipedia.org/wiki/Euripides",
  },
  {
    from: "aristotle",
    to: "sophocles",
    type: "記録",
    label:
      "『詩学』で、ソフォクレスの『オイディプス王』を悲劇の最高到達点の実例として挙げた。この評価が後世の悲劇観を決定づけた。舞台背景画を最初に導入したのもソフォクレスだと記している。",
    source_url: "https://en.wikipedia.org/wiki/Sophocles",
  },
  {
    from: "herodotus",
    to: "sophocles",
    type: "影響",
    label:
      "『歴史』のインタフェルネスの妻の話が、ソフォクレス『アンティゴネ』の「夫や子は替えがきくが兄弟は替えがきかない」と語る場面と酷似していると指摘されている。ただし現代の研究では最も議論の多い論点の一つとされる。",
    source_url: "https://en.wikipedia.org/wiki/Histories_(Herodotus)",
  },
  {
    from: "plutarch",
    to: "sophocles",
    type: "記録",
    label:
      "ソフォクレスの初優勝が「異様な雰囲気の中」で決まったことや、自らの作風の変遷を三段階に分けて語った言葉を書き残している。",
    source_url: "https://ja.wikipedia.org/wiki/ソポクレス",
  },
  {
    from: "aristophanes",
    to: "sophocles",
    type: "記録",
    label:
      "喜劇『蛙』では、直前に死んだソフォクレスも冥界にいるが「アイスキュロスへの遠慮から」詩人コンクールへの参加を辞退している、という設定で描かれる。",
    source_url: "https://en.wikipedia.org/wiki/The_Frogs",
  },
  {
    from: "seneca",
    to: "sophocles",
    type: "影響",
    label:
      "悲劇『オイディプス』はソフォクレスの『オイディプス王』と同じ筋を扱う。ソフォクレスがゆっくり真相を明かして緊張を高めるのに対し、セネカは劇的な見せ場で扇情的に描いた。",
    source_url: "https://en.wikipedia.org/wiki/Senecan_tragedy",
  },
  {
    from: "aristophanes",
    to: "euripides",
    type: "論敵",
    label:
      "『アカルナイの人々』『女だけの祭』『蛙』の少なくとも3作でエウリピデスを登場人物にして執拗に嘲笑した。名台詞「舌は誓ったが心は誓わない」を何度ももじり、出自についても「母親は野菜売りだった」と中傷している。",
    source_url: "https://ja.wikipedia.org/wiki/エウリピデス",
  },
  {
    from: "socrates",
    to: "euripides",
    type: "友人",
    label:
      "喜劇詩人テレクレイデスは「ソクラテスがエウリピデスの新作のために薪をくべている」と揶揄し、二人が共作していると冗談を言った。実際の共作を示す証拠はなく、当時の風刺として伝わる。",
    source_url: "https://en.wikipedia.org/wiki/Euripides",
  },
  {
    from: "aristotle",
    to: "euripides",
    type: "記録",
    label:
      "エウリピデスを「最も悲劇的な詩人」と呼んだ。悲惨な結末を好んだ点を指してのことだと考えられている。",
    source_url: "https://en.wikipedia.org/wiki/Euripides",
  },
  {
    from: "seneca",
    to: "euripides",
    type: "影響",
    label:
      "悲劇『メデア』はエウリピデスの同名作を下敷きにしている。セネカによるこの翻案を通じて、エウリピデスはルネサンス期ヨーロッパにおける悲劇復活の立役者となった。",
    source_url: "https://en.wikipedia.org/wiki/Senecan_tragedy",
  },
  {
    from: "aristophanes",
    to: "socrates",
    type: "論敵",
    label:
      "喜劇『雲』でソクラテスを、ノミの跳躍距離を測ったり蚊の羽音を分析したりする、こそ泥まがいの詭弁家として風刺した。プラトンはこの作品がソクラテス裁判と処刑の一因になったと考えている。",
    source_url: "https://en.wikipedia.org/wiki/The_Clouds",
  },
  {
    from: "plato",
    to: "aristophanes",
    type: "友人",
    label:
      "師を風刺されたにもかかわらず、『饗宴』でアリストファネスを愛すべき人物として登場させ、「人間はもともと2人分の体を持っていたが神に半分に切られ、以来失われた半身を探し回っている」という有名な愛の起源神話を語らせた。プラトン作と伝わる墓碑銘も残る。",
    source_url: "https://en.wikipedia.org/wiki/Aristophanes",
  },
  {
    from: "aristophanes",
    to: "herodotus",
    type: "論敵",
    label:
      "喜劇『アカルナイの人々』で、ペルシア側の言い分をそのまま伝えるヘロドトスの記述の仕方を揶揄した。『歴史』が当時のアテネでネタになるほど知られていたことを示す。",
    source_url: "https://en.wikipedia.org/wiki/Herodotus",
  },
  {
    from: "aristophanes",
    to: "phidias",
    type: "記録",
    label:
      "喜劇『平和』で、フェイディアスをめぐる「不幸な事件」に触れている。同時代人による数少ない言及だが、詳しい文脈は劇中に書かれていない。",
    source_url: "https://en.wikipedia.org/wiki/Phidias",
  },
  {
    from: "plutarch",
    to: "phidias",
    type: "記録",
    label:
      "フェイディアスと政治家ペリクレスの親交を記し、ペリクレスの政敵たちがフェイディアスを叩くことでペリクレスを攻撃しようとしたと伝えている。投獄され獄死したことも記録している。",
    source_url: "https://en.wikipedia.org/wiki/Phidias",
  },
  {
    from: "plato",
    to: "phidias",
    type: "記録",
    label:
      "『ヒッピアス（大）』で、同時代の多くの彫刻家と違ってフェイディアスは大理石で作品を作ることがほとんどなかった、と述べている（彼は金と象牙による巨像を得意とした）。",
    source_url: "https://en.wikipedia.org/wiki/Phidias",
  },
  {
    from: "pliny_elder",
    to: "praxiteles",
    type: "記録",
    label:
      "『博物誌』でプラクシテレスの作品目録を残した。「クニドスのアプロディーテー」については着衣像と裸像の2体が作られ、コス島の人々が着衣像を、クニドス人が裸像を買ったと記録している。この記述がなければ彼の作品の多くは特定できなかった。",
    source_url: "https://en.wikipedia.org/wiki/Praxiteles",
  },
  {
    from: "thucydides",
    to: "herodotus",
    type: "論敵",
    label:
      "ヘロドトスを「物語作家」と切り捨て、面白がらせるために話を作っていると批判した。神の介入を一切認めない厳密な史学を打ち立てた。一方で、少年トゥキディデスがヘロドトスの朗読を聞いて感涙したという逸話も伝わる（後代の創作の可能性が高い）。",
    source_url: "https://en.wikipedia.org/wiki/Thucydides",
  },
  {
    from: "cicero",
    to: "herodotus",
    type: "記録",
    label:
      "ヘロドトスを「歴史の父」と呼んだ最初の人物。しかし同時に「ヘロドトスには無数の作り話がある」とも批判しており、称号と批判をセットで与えた。",
    source_url: "https://ja.wikipedia.org/wiki/ヘロドトス",
  },
  {
    from: "plutarch",
    to: "herodotus",
    type: "論敵",
    label:
      "『ヘロドトスの悪意について』を書き、偏見と歪曲のかどで告発した。ボイオティア人だった彼は、ペルシア戦争での故郷の役割を敵意をもって描かれたことに憤った。「史上初の酷評書評」とも呼ばれる。",
    source_url: "https://en.wikipedia.org/wiki/On_the_Malice_of_Herodotus",
  },
  {
    from: "aristotle",
    to: "herodotus",
    type: "論敵",
    label:
      "ヘロドトスが伝えたアラビア人によるライオンの出産の話を「馬鹿げている」と一蹴した。",
    source_url: "https://ja.wikipedia.org/wiki/ヘロドトス",
  },
  {
    from: "herodotus",
    to: "thales",
    type: "記録",
    label:
      "タレスが紀元前585年の日食を予言したと『歴史』に書き残した。この有名な逸話の出典はヘロドトスである。",
    source_url: "https://ja.wikipedia.org/wiki/タレス",
  },
  {
    from: "pliny_elder",
    to: "herodotus",
    type: "影響",
    label:
      "『博物誌』は約100人の著者・2000巻の本から2万の事実を集めたと自ら述べ、ギリシャの歴史記述の典拠としてヘロドトスを利用した。",
    source_url: "https://en.wikipedia.org/wiki/Natural_History_(Pliny)",
  },
  {
    from: "polybius",
    to: "thucydides",
    type: "影響",
    label:
      "客観性と批判的な推論という点で、トゥキディデスの後継者と見なされる。彼自身も『歴史』で先行の歴史家の記述を厳しく批判する史料批判を展開した。",
    source_url: "https://en.wikipedia.org/wiki/Polybius",
  },
  {
    from: "plutarch",
    to: "thucydides",
    type: "影響",
    label:
      "後代のギリシャ人歴史家たちと同様、トゥキディデスの著作を「真実の歴史」の手本として仰いだ。ただしヘロドトスには極めて批判的だった。",
    source_url: "https://en.wikipedia.org/wiki/Thucydides",
  },
  {
    from: "strabo",
    to: "thucydides",
    type: "影響",
    label:
      "トゥキディデスの著作を真実の歴史の模範として仰いだ一人。彼の『歴史』（散逸）はポリビオスの続編として書かれており、ギリシャ史学の系譜に連なる。",
    source_url: "https://en.wikipedia.org/wiki/Thucydides",
  },
  {
    from: "tacitus",
    to: "thucydides",
    type: "影響",
    label:
      "トゥキディデスを、サッルスティウスやリウィウスと並ぶ歴史叙述の手本として受け継いだ。",
    source_url: "https://en.wikipedia.org/wiki/Tacitus",
  },
  {
    from: "pliny_elder",
    to: "thucydides",
    type: "影響",
    label:
      "『博物誌』の典拠一覧には327のギリシャ系の資料が含まれ、ギリシャ史の典拠としてトゥキディデスを利用した。",
    source_url: "https://en.wikipedia.org/wiki/Natural_History_(Pliny)",
  },
  {
    from: "thucydides",
    to: "hippocrates",
    type: "影響",
    label:
      "アテネの疫病を記述する際、当時の医学理論であるヒッポクラテス医学に依拠し、超自然的な原因ではなく直接観察による証拠を集めようとした。",
    source_url: "https://en.wikipedia.org/wiki/Plague_of_Athens",
  },
  {
    from: "thales",
    to: "pythagoras",
    type: "師弟",
    label:
      "若きピタゴラスがタレスを訪ね、タレスは「エジプトへ行って学べ」と助言したと初期の伝承にある。ピタゴラスの師としてタレスの名を挙げる説もあるが、諸説ある。",
    source_url: "https://en.wikipedia.org/wiki/Thales_of_Miletus",
  },
  {
    from: "euclid",
    to: "thales",
    type: "影響",
    label:
      "『原論』は、タレスら先行する数学者の定理を集大成したもの。「タレスの定理」は今も彼の名で呼ばれる。",
    source_url: "https://en.wikipedia.org/wiki/Euclid%27s_Elements",
  },
  {
    from: "aristotle",
    to: "thales",
    type: "記録",
    label:
      "タレスが「最初の哲学者」とされるのは、アリストテレスが『形而上学』でそう位置づけたため。オリーブ搾油機を買い占めて儲けた話もアリストテレスが伝えている。",
    source_url: "https://ja.wikipedia.org/wiki/タレス",
  },
  {
    from: "plato",
    to: "thales",
    type: "記録",
    label:
      "星を見上げるのに夢中で溝に落ちた、という有名な逸話を伝えたのはプラトン。哲学者の浮世離れを笑う話として書いた。",
    source_url: "https://ja.wikipedia.org/wiki/タレス",
  },
  {
    from: "plato",
    to: "pythagoras",
    type: "影響",
    label:
      "ピタゴラスの数学重視と輪廻転生の思想から大きな影響を受けた。第一回シケリア旅行ではピタゴラス学派と交流している。",
    source_url: "https://ja.wikipedia.org/wiki/プラトン",
  },
  {
    from: "euclid",
    to: "pythagoras",
    type: "影響",
    label:
      "『原論』第1巻・第2巻の大部分はピタゴラス派に由来するとされ、第1巻の最後には現存最古の「ピタゴラスの定理」の証明が置かれている。",
    source_url: "https://en.wikipedia.org/wiki/Euclid%27s_Elements",
  },
  {
    from: "aristotle",
    to: "pythagoras",
    type: "記録",
    label:
      "『形而上学』でピタゴラス派の教説を詳しく論じたが、ピタゴラス本人の名は挙げていない。",
    source_url: "https://en.wikipedia.org/wiki/Pythagoras",
  },
  {
    from: "heraclitus",
    to: "pythagoras",
    type: "論敵",
    label:
      "ピタゴラスから「調和」の考えを受け継ぎながら、その一方で彼を「いかさま師」と呼んで罵倒した。",
    source_url: "https://ja.wikipedia.org/wiki/ヘラクレイトス",
  },
  {
    from: "ptolemy",
    to: "pythagoras",
    type: "論敵",
    label:
      "音楽理論書『ハルモニア論』で、音程を3:2の比だけで説明しようとするピタゴラス派を批判し、複数の比を組み合わせる方式を主張した。",
    source_url: "https://en.wikipedia.org/wiki/Ptolemy",
  },
  {
    from: "plato",
    to: "heraclitus",
    type: "影響",
    label:
      "若い頃、ソクラテスより先にヘラクレイトス派のクラテュロスから自然哲学を学んだ。「万物は流転する」を引用したのもプラトンである。",
    source_url: "https://ja.wikipedia.org/wiki/プラトン",
  },
  {
    from: "aristotle",
    to: "heraclitus",
    type: "論敵",
    label:
      "ヘラクレイトスが矛盾律（同じものが同時にそうでありかつそうでないことはない）を否定していると非難した。",
    source_url: "https://en.wikipedia.org/wiki/Heraclitus",
  },
  {
    from: "zeno_citium",
    to: "heraclitus",
    type: "影響",
    label:
      "ストア派の宇宙論にヘラクレイトスの「火」の自然学を取り込んだ。ストア派は自分たちの中心概念ロゴスをヘラクレイトス由来と考えていた。",
    source_url: "https://en.wikipedia.org/wiki/Zeno_of_Citium",
  },
  {
    from: "epicurus",
    to: "democritus",
    type: "影響",
    label:
      "原子論はデモクリトスに負っている。デモクリトス派のナウシパネスに学んだが、自分は誰の影響も受けていないと強弁した。",
    source_url: "https://en.wikipedia.org/wiki/Epicurus",
  },
  {
    from: "democritus",
    to: "hippocrates",
    type: "師弟",
    label:
      "ヒッポクラテスは医術以外の学問をデモクリトスから学んだ。逆にヒッポクラテスがデモクリトスを診察し、その奇行が狂気でなく哲学によるものだと見抜いたという逸話も伝わる。",
    source_url: "https://ja.wikipedia.org/wiki/ヒポクラテス",
  },
  {
    from: "democritus",
    to: "protagoras",
    type: "師弟",
    label:
      "荷物の縛り方から少年プロタゴラスの数学的才能を見抜き、自宅に引き取って哲学を教えたと伝わる。ただし実年代ではプロタゴラスの方が30歳ほど年長で、この話は成立しないという指摘もある。",
    source_url: "https://ja.wikipedia.org/wiki/プロタゴラス",
  },
  {
    from: "plato",
    to: "democritus",
    type: "論敵",
    label:
      "デモクリトスの著作を集めて焼き払おうとしたという伝説がある。実際、多くの同時代哲学者が登場するプラトンの対話篇に、デモクリトスは一度も出てこない。",
    source_url: "https://ja.wikipedia.org/wiki/デモクリトス",
  },
  {
    from: "aristotle",
    to: "democritus",
    type: "論敵",
    label:
      "デモクリトスを高く評価しつつも、目的論の欠如を批判した。天文学では「天の川は地球の影に入った星々だ」というデモクリトス説を論駁している。",
    source_url: "https://en.wikipedia.org/wiki/Aristotle",
  },
  {
    from: "cicero",
    to: "democritus",
    type: "記録",
    label:
      "デモクリトスの鋭敏な知性と魂の偉大さを高く評価した。プラトンに黙殺された彼を、ローマの知識人はむしろ称賛した。",
    source_url: "https://ja.wikipedia.org/wiki/デモクリトス",
  },
  {
    from: "seneca",
    to: "democritus",
    type: "記録",
    label:
      "デモクリトスの知性と精神の偉大さを高く評価する言葉を残している。",
    source_url: "https://ja.wikipedia.org/wiki/デモクリトス",
  },
  {
    from: "plato",
    to: "hippocrates",
    type: "記録",
    label:
      "『プロタゴラス』で彼を「コス島のヒッポクラテス、アスクレピオスの子」と呼び、『パイドロス』では身体の全体を知ることが医術に必要だと考えた人物として紹介している。",
    source_url: "https://en.wikipedia.org/wiki/Hippocrates",
  },
  {
    from: "aristotle",
    to: "hippocrates",
    type: "記録",
    label:
      "アリストテレスの証言によれば、ヒッポクラテスは当時すでに「偉大なるヒッポクラテス」と呼ばれていた。",
    source_url: "https://en.wikipedia.org/wiki/Hippocrates",
  },
  {
    from: "socrates",
    to: "protagoras",
    type: "論敵",
    label:
      "プラトンの対話篇『プロタゴラス』で、「徳は教えられるか」をめぐって老プロタゴラスと論争する。最後は二人の立場が入れ替わるという皮肉な結末になる。",
    source_url: "https://en.wikipedia.org/wiki/Protagoras_(dialogue)",
  },
  {
    from: "plato",
    to: "protagoras",
    type: "論敵",
    label:
      "『テアイテトス』で「人間は万物の尺度である」を徹底した相対主義として解釈し、それが自己矛盾に陥ることを示して論駁した。",
    source_url: "https://en.wikipedia.org/wiki/Theaetetus_(dialogue)",
  },
  {
    from: "plutarch",
    to: "protagoras",
    type: "記録",
    label:
      "ペリクレスとプロタゴラスが法的責任をめぐる一つの論点について丸一日議論して過ごした、と書き残している。",
    source_url: "https://en.wikipedia.org/wiki/Protagoras",
  },
  {
    from: "socrates",
    to: "plato",
    type: "師弟",
    label:
      "ソクラテスはプラトンの師であり最大の霊感源。プラトンは対話篇でけっして自分の声では語らず、ほぼ全編にソクラテスを登場させ続けた。",
    source_url: "https://en.wikipedia.org/wiki/Plato",
  },
  {
    from: "zeno_citium",
    to: "socrates",
    type: "影響",
    label:
      "立ち寄った本屋でクセノフォンの『ソクラテスの思い出』を読み、こういう人物にどこで会えるかと尋ねたのが哲学の道に入るきっかけだった。ストア派の源流にはソクラテスの弟子アンティステネスに始まるキュニコス派がある。",
    source_url: "https://en.wikipedia.org/wiki/Zeno_of_Citium",
  },
  {
    from: "aristotle",
    to: "socrates",
    type: "記録",
    label:
      "ソクラテスの死後に生まれたアリストテレスは、クセノフォンやプラトンのような偏りなくソクラテスを扱っている。",
    source_url: "https://en.wikipedia.org/wiki/Socrates",
  },
  {
    from: "epictetus",
    to: "socrates",
    type: "影響",
    label:
      "弟子アッリアノスが記録した『語録』は、ソクラテスをめぐる著作群に匹敵するものと位置づけられ、エピクテトスは現代のソクラテス的人物とみなされた。",
    source_url: "https://en.wikipedia.org/wiki/Epictetus",
  },
  {
    from: "plato",
    to: "aristotle",
    type: "師弟",
    label:
      "前367年、17歳のアリストテレスがアカデメイアに入門し、プラトンの死まで約20年間そこに留まった。プラトンは彼を「学校の精神」と評したと伝わる。",
    source_url: "https://ja.wikipedia.org/wiki/プラトン",
  },
  {
    from: "euclid",
    to: "plato",
    type: "影響",
    label:
      "プラトンと同時代ではないため、アテネのアカデメイアでプラトンの弟子たちに教育を受けたと推測されている。",
    source_url: "https://en.wikipedia.org/wiki/Euclid",
  },
  {
    from: "plutarch",
    to: "plato",
    type: "影響",
    label:
      "プラトンの流れをくむ中期プラトン主義の哲学者。ペリパトス派やストア派にも開かれていたが、エピクロス派だけは絶対に拒絶した。",
    source_url: "https://en.wikipedia.org/wiki/Plutarch",
  },
  {
    from: "epicurus",
    to: "plato",
    type: "論敵",
    label:
      "エピクロスの生きた時代はプラトン主義が高等教育を支配しており、それへの反対が彼の思想の大きな部分を占めた。「主要教説」40条の半分以上はプラトン主義の真っ向からの否定である。",
    source_url: "https://en.wikipedia.org/wiki/Epicurus",
  },
  {
    from: "polybius",
    to: "plato",
    type: "影響",
    label:
      "政体循環論（アナキュクロシス）は、プラトンとアリストテレスが段階的に発展させたものを、ポリビオスが主に体系化したものとされる。",
    source_url: "https://en.wikipedia.org/wiki/Anacyclosis",
  },
  {
    from: "cicero",
    to: "plato",
    type: "影響",
    label:
      "『国家論』はプラトンの『国家』を模倣して書かれた。書名もプラトンの有名な対話篇を念頭に置いたものである。",
    source_url: "https://en.wikipedia.org/wiki/De_re_publica",
  },
  {
    from: "ptolemy",
    to: "aristotle",
    type: "影響",
    label:
      "『アルマゲスト』第1巻はアリストテレスの宇宙論の要約から始まり、球形の天の中心に球形の地球が静止しているとした。ただし天球を動かす原因については独自の説明をした。",
    source_url: "https://en.wikipedia.org/wiki/Almagest",
  },
  {
    from: "strabo",
    to: "aristotle",
    type: "影響",
    label:
      "アリストテレスから影響を受け、ペリパトス派（アリストテレス学派）のクセナルコスに哲学を、同じくペリパトス派のテュランニオンに文法を学んだ。",
    source_url: "https://en.wikipedia.org/wiki/Strabo",
  },
  {
    from: "aristotle",
    to: "aristarchus",
    type: "論敵",
    label:
      "アリスタルコスが地動説を唱えたにもかかわらず、その後ずっとアリストテレスとプトレマイオスの天動説が支配的であり続けた。",
    source_url: "https://ja.wikipedia.org/wiki/アリスタルコス",
  },
  {
    from: "polybius",
    to: "aristotle",
    type: "影響",
    label:
      "政体循環論はプラトンとアリストテレスが段階的に発展させた議論を受け継ぐ。混合政体が循環を止めうるという発想はアリストテレスにも見られる。",
    source_url: "https://en.wikipedia.org/wiki/Anacyclosis",
  },
  {
    from: "plutarch",
    to: "aristotle",
    type: "影響",
    label:
      "プラトン主義を土台としつつ、アリストテレスの学派であるペリパトス派の考え方も取り入れ、折衷主義的な立場をとった。",
    source_url: "https://ja.wikipedia.org/wiki/プルタルコス",
  },
  {
    from: "cicero",
    to: "aristotle",
    type: "影響",
    label:
      "アリストテレスの教えに従う古アカデメイア派の弁論術・修辞学を高く評価した。ギリシャ哲学をラテン語で紹介するため、ギリシャ語の哲学用語を訳す約150もの新しいラテン語を作った。",
    source_url: "https://ja.wikipedia.org/wiki/マルクス・トゥッリウス・キケロ",
  },
  {
    from: "pliny_elder",
    to: "aristotle",
    type: "影響",
    label:
      "『博物誌』の動物に関する記述はアリストテレスに大きく依拠しており、火・地・空気・水というアリストテレスの四元素説にも同意している。",
    source_url: "https://en.wikipedia.org/wiki/Natural_History_(Pliny)",
  },
  {
    from: "zeno_citium",
    to: "epicurus",
    type: "論敵",
    label:
      "「庭園」に閉じこもるエピクロス派の自己充足的なあり方を、公共の場で教えることを選んだゼノンのストア派は激しく批判した。ただしこの対立が明確になったのはエピクロスの死後らしい。",
    source_url: "https://en.wikipedia.org/wiki/Epicurus",
  },
  {
    from: "seneca",
    to: "epicurus",
    type: "影響",
    label:
      "ストア派でありながら『倫理書簡集』でエピクロスを頻繁に引用した。ただし敵対学派の教義を受け入れたわけではなく、もっぱら道徳的な格言の供給源として使っている。",
    source_url: "https://en.wikipedia.org/wiki/Seneca_the_Younger",
  },
  {
    from: "horace",
    to: "epicurus",
    type: "影響",
    label:
      "『諷刺詩』にはエピクロス主義の要素が強く、『歌集』でもエピクロス主義はストア主義のおよそ2倍の詩を特徴づける支配的影響となっている。",
    source_url: "https://en.wikipedia.org/wiki/Horace",
  },
  {
    from: "virgil",
    to: "epicurus",
    type: "影響",
    label:
      "ナポリでエピクロス派の哲学者シロンに学び、心の平安を目指すエピクロス派に惹かれていた。詩作を始めたのもこの時期である。",
    source_url: "https://ja.wikipedia.org/wiki/ウェルギリウス",
  },
  {
    from: "plutarch",
    to: "epicurus",
    type: "論敵",
    label:
      "諸学派のうちエピクロス派だけは全面的に拒絶し、『エピクロス流に生きても快適には暮らせない』『コロテス反駁』といった論駁の書を残した。",
    source_url: "https://en.wikipedia.org/wiki/Plutarch",
  },
  {
    from: "cicero",
    to: "epicurus",
    type: "論敵",
    label:
      "『善と悪の究極について』第2巻でエピクロス派を論駁し、「苦痛のないこと」を最高善とするのは矛盾していると批判した。",
    source_url: "https://en.wikipedia.org/wiki/De_finibus_bonorum_et_malorum",
  },
  {
    from: "eratosthenes",
    to: "zeno_citium",
    type: "師弟",
    label:
      "アテネでストア派の創始者ゼノン本人からストア哲学を教わった。ただし到着直後にゼノンが死んだため、接触はごく短かったとみられる。",
    source_url: "https://en.wikipedia.org/wiki/Eratosthenes",
  },
  {
    from: "seneca",
    to: "zeno_citium",
    type: "影響",
    label:
      "ゼノンが創始したストア派の後期（ローマ期）を代表する哲学者。著作でゼノン、クレアンテス、クリュシッポスにたびたび言及している。",
    source_url: "https://en.wikipedia.org/wiki/Seneca_the_Younger",
  },
  {
    from: "marcus_aurelius",
    to: "zeno_citium",
    type: "影響",
    label:
      "ゼノンが創始したストア派を奉じた。師フロントは「クレアンテスやゼノンの知恵に達することはできても、哲学者の粗末な外套だけは着られまい」と皇帝を諌める手紙を書いている。",
    source_url: "https://en.wikipedia.org/wiki/Marcus_Aurelius",
  },
  {
    from: "cicero",
    to: "zeno_citium",
    type: "論敵",
    label:
      "『善と悪の究極について』で、徳だけを唯一の善とするゼノン以来のストア派の教義を批判した。論理学の扱いも先行する哲学者たちに劣ると評している。",
    source_url: "https://en.wikipedia.org/wiki/De_finibus_bonorum_et_malorum",
  },
  {
    from: "epictetus",
    to: "zeno_citium",
    type: "影響",
    label:
      "奴隷の身でありながら主人の許しを得てストア派のムソニウス・ルフスに学び、ゼノンが創始したストア派の後期を代表する哲学者となった。",
    source_url: "https://ja.wikipedia.org/wiki/エピクテトス",
  },
  {
    from: "strabo",
    to: "zeno_citium",
    type: "影響",
    label:
      "初めアリストテレス派だったが、のちにゼノンが創始したストア派に転じた。ストア派の師アテノドロスの影響とされる。",
    source_url: "https://ja.wikipedia.org/wiki/ストラボン",
  },
  {
    from: "plutarch",
    to: "zeno_citium",
    type: "論敵",
    label:
      "ストア派の考え方を部分的に取り入れつつも、『ストア派の自己矛盾について』などでその原理を批判した。",
    source_url: "https://en.wikipedia.org/wiki/Moralia",
  },
  {
    from: "archimedes",
    to: "eratosthenes",
    type: "友人",
    label:
      "エラトステネスの親しい友人で、成果を送っては論評を求め、彼を熱烈に称賛した。『方法』と『牛の問題』はエラトステネス宛てに書かれている。",
    source_url: "https://ja.wikipedia.org/wiki/エラトステネス",
  },
  {
    from: "strabo",
    to: "eratosthenes",
    type: "影響",
    label:
      "『地理誌』の主要な典拠としてエラトステネスの『地理学』を用いたが、数学に寄りすぎだとして、より記述的な地理学の方が実用的だと主張した。",
    source_url: "https://en.wikipedia.org/wiki/Strabo",
  },
  {
    from: "ptolemy",
    to: "eratosthenes",
    type: "影響",
    label:
      "科学的原理に基づく地図はエラトステネスの時代から作られており、プトレマイオスはその手法を改良した。彼はエラトステネスの測定に言及している。",
    source_url: "https://en.wikipedia.org/wiki/Ptolemy",
  },
  {
    from: "archimedes",
    to: "aristarchus",
    type: "記録",
    label:
      "アリスタルコスの著作は失われたが、アルキメデスが『砂粒を数えるもの』で「恒星と太陽は動かず、地球が太陽のまわりを回る」という彼の仮説を紹介したため、地動説の内容が今に伝わっている。",
    source_url: "https://ja.wikipedia.org/wiki/アリスタルコス",
  },
  {
    from: "plutarch",
    to: "aristarchus",
    type: "記録",
    label:
      "プルタルコスの伝える話では、アリスタルコスは太陽崇拝者でありながら地動説に反対したストア派のクレアンテスを「不敬の罪で訴えるべきだ」と冗談めかして言った。後世これが逆に伝えられ、アリスタルコスが告発された話になった。",
    source_url: "https://en.wikipedia.org/wiki/Aristarchus_of_Samos",
  },
  {
    from: "ptolemy",
    to: "aristarchus",
    type: "記録",
    label:
      "アリスタルコスが紀元前280年の夏至を観測したと記録している。",
    source_url: "https://en.wikipedia.org/wiki/Aristarchus_of_Samos",
  },
  {
    from: "archimedes",
    to: "euclid",
    type: "影響",
    label:
      "先行するエウクレイデスの著作の影響下にある。てこの原理の先行する記述もエウクレイデスの著作に見られる。ただしアルキメデスがエウクレイデスに言及したとされる箇所は、後世の挿入とみられている。",
    source_url: "https://ja.wikipedia.org/wiki/エウクレイデス",
  },
  {
    from: "ptolemy",
    to: "euclid",
    type: "影響",
    label:
      "視覚論（光学）ではエウクレイデス以来の幾何学的な視覚論の伝統を受け継ぎつつ、錯視の原因を階層に分類するなど、より経験論的な理論を展開した。",
    source_url: "https://ja.wikipedia.org/wiki/クラウディオス・プトレマイオス",
  },
  {
    from: "plutarch",
    to: "archimedes",
    type: "記録",
    label:
      "『対比列伝』で、アルキメデスがシラクサ王ヒエロン2世の縁者だったと記し、その戦争機械と死の様子を伝えた。",
    source_url: "https://ja.wikipedia.org/wiki/アルキメデス",
  },
  {
    from: "polybius",
    to: "archimedes",
    type: "記録",
    label:
      "『歴史』のシラクサ攻囲の記述で、70年前のアルキメデスの死と彼の兵器について書き残した。現存する最も古い証言である。",
    source_url: "https://ja.wikipedia.org/wiki/アルキメデス",
  },
  {
    from: "livy",
    to: "archimedes",
    type: "記録",
    label:
      "ポリビオスと並び、シラクサを守ったアルキメデスの戦争機械について証言を残している。",
    source_url: "https://en.wikipedia.org/wiki/Archimedes",
  },
  {
    from: "cicero",
    to: "archimedes",
    type: "記録",
    label:
      "『国家論』でアルキメデスの天球儀について記し、さらにシチリア勤務中に自費で忘れられていたアルキメデスの墓を探し出した。球と円柱が刻まれていたという。",
    source_url: "https://ja.wikipedia.org/wiki/アルキメデス",
  },
  {
    from: "virgil",
    to: "horace",
    type: "友人",
    label:
      "皇帝の側近マエケナスのサークルにホラティウスを引き入れる道を開いた。ホラティウスはウェルギリウスを「わたしの魂の半分」と呼ぶほど親密だった。",
    source_url: "https://ja.wikipedia.org/wiki/ウェルギリウス",
  },
  {
    from: "ovid",
    to: "horace",
    type: "影響",
    label:
      "ホラティウスの朗読を聴いたことがあると自ら書き、ヘクサメトロス（六歩格）で完全に自然な表現を作り出す手法を彼にならった。",
    source_url: "https://en.wikipedia.org/wiki/Ovid",
  },
  {
    from: "ovid",
    to: "virgil",
    type: "記録",
    label:
      "一世代上のウェルギリウスについて、「かろうじて一度見かけた程度で言葉を交わしたことはない」と自ら書き残している。",
    source_url: "https://en.wikipedia.org/wiki/Ovid",
  },
  {
    from: "livy",
    to: "polybius",
    type: "影響",
    label:
      "『ローマ建国史』の叙述でポリビオスの『歴史』に言及し、それを典拠として使用した。",
    source_url: "https://en.wikipedia.org/wiki/Polybius",
  },
  {
    from: "cicero",
    to: "caesar",
    type: "政敵",
    label:
      "カエサルが支援した土地分配法に反対して成立を阻止し、カティリナ事件では死刑反対のカエサルに対し極刑を主張して自説を通した。第一回三頭政治にも反対し、暗殺後は暗殺者たちを支持した。",
    source_url: "https://ja.wikipedia.org/wiki/マルクス・トゥッリウス・キケロ",
  },
  {
    from: "plutarch",
    to: "caesar",
    type: "記録",
    label:
      "『対比列伝』でカエサルの生涯を書き、アレクサンドロス大王と対にして論じた。この「カエサル伝」は古代の歴史家によるカエサルの事績の主要な記録となっている。",
    source_url: "https://ja.wikipedia.org/wiki/プルタルコス",
  },
  {
    from: "tacitus",
    to: "livy",
    type: "影響",
    label:
      "リウィウスを自らの歴史叙述の手本の一人とし、「雄弁と真実性においてとりわけ名高い」と評価した。",
    source_url: "https://en.wikipedia.org/wiki/Tacitus",
  },
  {
    from: "tacitus",
    to: "cicero",
    type: "影響",
    label:
      "弁論術をめぐる対話篇『雄弁家たちについての対話』は、ローマ随一の弁論家キケロの対話篇の形式を模倣している。",
    source_url: "https://en.wikipedia.org/wiki/Tacitus",
  },
  {
    from: "tacitus",
    to: "pliny_elder",
    type: "影響",
    label:
      "大プリニウスの著作を歴史書の典拠として利用した。大プリニウスの最期を伝える手紙も、甥の小プリニウスからタキトゥス宛てに書かれたものである。",
    source_url: "https://en.wikipedia.org/wiki/Pliny_the_Elder",
  },
  {
    from: "tacitus",
    to: "seneca",
    type: "記録",
    label:
      "セネカがネロに自殺を命じられた最期を書き残した。毒ニンジンを飲んでも死にきれず、浴室で静脈を切って死んだとタキトゥスは伝えている。",
    source_url: "https://ja.wikipedia.org/wiki/ルキウス・アンナエウス・セネカ",
  },
  {
    from: "plutarch",
    to: "cicero",
    type: "記録",
    label:
      "『対比列伝』でキケロの伝記を書き、ギリシャ最大の弁論家デモステネスと対にして論じた。キケロの生涯を伝える主要な史料の一つとなっている。",
    source_url: "https://en.wikipedia.org/wiki/Cicero",
  },
  {
    from: "plutarch",
    to: "polybius",
    type: "影響",
    label:
      "『対比列伝』を書く際、ポリビオスが著したピロポイメン伝を典拠の一つとして利用した。",
    source_url: "https://en.wikipedia.org/wiki/Polybius",
  },
  {
    from: "strabo",
    to: "polybius",
    type: "影響",
    label:
      "『地理誌』の典拠としてポリビオスの『歴史』第34巻（ヨーロッパの地誌を扱った巻）を引用した。",
    source_url: "https://ja.wikipedia.org/wiki/ストラボン",
  },
  {
    from: "cicero",
    to: "polybius",
    type: "影響",
    label:
      "ポリビオスはキケロの政治思想にとって重要な着想源であり、『国家論』ではポリビオスの政体循環論を扱っている。",
    source_url: "https://en.wikipedia.org/wiki/De_re_publica",
  },
  {
    from: "marcus_aurelius",
    to: "epictetus",
    type: "影響",
    label:
      "エピクテトスの哲学から強い影響を受け、『自省録』の中でエピクテトスを引用している。苦難の中で平静を保つこと、人類の平等を説く教えが受け継がれた。",
    source_url: "https://en.wikipedia.org/wiki/Epictetus",
  },
  {
    from: "tribonian",
    to: "ptolemy",
    type: "記録",
    label:
      "10世紀の事典『スーダ』によれば、プトレマイオスの天文表『カノン』の注釈書も書いていたという。",
    source_url: "https://en.wikipedia.org/wiki/Tribonian",
  },
];
