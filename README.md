# sunstripe

Team.Sunstripe
====

Overview

## Description
Team.Sunstripe サイト作成の練習のためのサンドボックス的なところ

## Demo

## VS. 

## Requirement

## Usage

## Install

## Contribution
Team.Sunstripeはプログラミングを学びたい人、Web制作を学びたい人、作りたいという気持ちを応援しています！

[@sunstripe2011](http://twitter.com/sunstripe2011/) ← こちらまでDMしていただき、本文に「GitHub」についてと書いてお送りください。
[slack](https://sunstripe2011.slack.com/)


## Licence
ライセンス許可もらったもののみを使用しています。
但し、理由があって許可がないものを掲載していた場合はご連絡ください。
尚、当サイトで使用するものは、Team.Sunstripeのものであり、皆さんのものです。なんてったって、皆さんがもう既にTeam.Sunstripeですから。

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[tcnksm](https://github.com/tcnksm)

### わかりやすいREADME.mdを書く
Githubなどに自分のツールやライブラリを公開するとき，README.mdは重要な役割を担っている．レポジトリを訪れたユーザが自分のツールを使ってくれるか否かの第一歩はREADME.mdにかかっている，と言っても過言ではない．実際自分が使う側になったときも，まずREADME.mdを読んで判断していると思う．

成功しているプロジェクトを参考にしつつ，自分が実践していることをまとめておく．ここに書いていることはあくまで（自分の中で）最低限的なものである．プロジェクトが成長していくにつれてREADMEはあるべき姿に成長していくべきだと思う．

# READMEの役割

### README.mdには大きく2つの役割がある．

プロジェクト，ツールの使い方，インストール方法
プロジェクト，ツールの宣伝
元々READMEは前者の役割しかなかったが，Githubの仕組み上，後者の役割も徐々に重要になっている．

さらに自分の場合は，README.mdを簡単な設計書としても使う．新しくツールやライブラリを書き始めるときは，まずREADME.mdを書く．Usageを書くことでツールの簡単なインターフェース，オプションを定義する．Installを書くことで配布の仕方を定義する．これにより作りたいツールのゴールが明確になる．

以下で詳しく書くが，自分は社内プロジェクトでもREADMEを準備する，準備するようにチームに呼びかけている．その場合は，基本的な使い方に加えて，プロジェクトに新たに参加したメンバーに対してその道しるべになるようにREADMEを使ってる．

# Name

まず，一番上には名前を書く．かっこいい名前を考える．

# Overview

名前のすぐ下にこのツールの概要を一言で書く．レポジトリを訪れたユーザがまず最初に目にし，このツールは何ができるのかを判断する．例えば，

kennethreitz/requests - Requests is an Apache2 Licensed HTTP library, written in Python, for human beings.
progrium/dokku - Docker powered mini-Heroku. The smallest PaaS implementation you’ve ever seen.
mitchellh/gox - Gox is a simple, no-frills tool for Go cross compilation that behaves a lot like standard go build.
プロジェクトやツールの名前が，何かに由来する場合は，その画像を貼っておくとインパクトがある．例えば，

tsenart/vegeta
flynn/strowger
guard/guard
Description

概要だけでは伝わらない場合にもう少し丁寧な説明を書く．例えば，

kennethreitz/requests - Most existing Python modules for sending HTTP requests are extremely verbose and cumbersome. Python’s builtin urllib2 module provides most of the HTTP capabilities you should need, but the api is thoroughly broken. It requires an enormous amount of work (even method overrides) to perform the simplest of tasks.
OverviewとDescriptionはとても見られる．その証拠に自分のあるプロジェクトでは，Descriptionでの単語のスペルミスに対してすぐさまPull Requestでの指定をうけた（ただしこれは珍しいことだと思う．人によっては簡単なスペルミスだけでそのプロジェクトを切り捨てるかもしれない）．

自分だけが良いと思っていてもそれを分かりやすく伝えない限り使われない．どんどんブラッシュアップしていかないといけない．

# Demo

最近はアニメGIFなどを貼付けて実際の動作例を見せるプロジェクトをよく見る．頑張って拙い英語を長々と書くよりも，分かりやすいデモを準備した方が伝わりやすい．百聞は一見に如かずである．例えば，

pearkes/gethub
peco/peco
tcnksm/cli-init
ユーザにツールをインストールさせることなく，使ってみたいと思わせることができる．

自分は，アニメGIFの作成にRebuild #47で紹介されてたLICEcapを使っている．サイトを訪れるとその90年代感に驚くが，シンプルで使いやすい．

# VS.

これはあまり見ないが，作成するツールと似たようなツールがある場合に，それと比較して何が違うか，利点は何かを書く（貶さない）．これにより事前調査をすることになり，全く同じツールを作ってしまうことがなくなるし，作りたいツールに似たものがあったとしても，それと比べてどのような特色をつけるのかを考えるきっかけになる．

これは，Hashicorpのドキュメント（e.g., “Consul vs. Other Software - Consul”）のやり方を参考にしている．

その他

他にもFeatureでプロジェクトやツールの特徴を箇条書きで書いているひともいる．これも判断材料になって良い．例えば，

azu/github-reader
どうやって使うのか？

# Requirement

ツールやライブラリを使うのに依存がある場合は，その依存を書く．

# Usage

使い方を書く．コマンドの場合は，オプションなども説明できるとよい．例えば，

motemen/ghq
'ghq' get [-u] [-p] (<repository URL> | <user>/<project> | <project>)
'ghq' list [-p] [-e] [<query>]
'ghq' look (<project> | <path/to/project>)
'ghq' import starred [-u] [-p] <user>
'ghq' import pocket [-u]
自分はExampleという項目を作り，簡単な使用例を書くことがある．

この辺は，使い始めたユーザが離れないようにする努力でもある．

# Install

インストール方法を書く．ターミナルから最小限のコマンドでインストールできるとよい．コピペするだけでよいように書く．例えば，

visionmedia/express
$ npm install express
heroku/hk
$ L=/usr/local/bin/hk && curl -sL -A "`uname -sp`" https://hk.heroku.com/hk.gz | zcat >$L && chmod +x $L
progrium/logspout
$ docker pull progrium/logspout
バイナリで配布する場合，OSXに対しては，[Homebrew]()でインストールできるようにするなど，ツールを使い始めるまでの敷居をなるべく低くしておくとより良い（“HomeBrewで自作ツールを配布する”）．

どうやって参加するのか？

# Contribution

OSSとして公開する以上は，多くの人に参加してもらいたい．そのために，Contributionの方法を書いておくと良い．

例えば，rubygemの場合は，以下が自動で生成される．

1. Fork it ( http://github.com//rbdock/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
最近はよくGo言語でツールを書くが，自分はflynnのContribution Guideを参考に以下を書いている．

1. Fork ([https://github.com/tcnksm/tool/fork](https://github.com/tcnksm/tool/fork))
2. Create a feature branch
3. Commit your changes
4. Rebase your local changes against the master branch
5. Run test suite with the `go test ./...` command and confirm that it passes
6. Run `gofmt -s`
7. Create new Pull Request
大きなプロジェクトでは，README.mdとは別にCONTRIBUTING.mdを準備しているのも見かける．例えば，

homebrew-cask/CONTRIBUTING.md
ライセンスは？

# LICENCE

著作権をもつ作者として準備するべき．LICENCEを明示することは，ツールを使う側に安心感を与える．以下が参考になる．

“ライセンスの選択を恐れる必要はありません”
社内プロジェクトの場合

社内プロジェクトであってもREADMEを書くようにしている．上述したインストール方法や使い方はもちろんのこと，以下のような項目を書くようにしている．

Document - 別途プロジェクトの概要，デザイン等をまとめたページがあれば，そのリンクをまとめる
Ticket - 別でチケット管理をしている場合は，そのリンクをまとめる
Deploy - どのようにデプロイするのか
Test - CIサーバの場所やテストの方法を書く
これらを書くことで初めてプロジェクトに参加したメンバーが迷うことがなくなる．レポジトリのみで全てが完結すればよいが，歴史のあるプロジェクトはドキュメントが各地に散っていることがある．長くそのプロジェクトに関わっているメンバーであれば問題ないが，新しく参加したメンバーには負担になる．どんなメンバーであってもスムーズにプロジェクトに参加できるように整備しておきたい．

