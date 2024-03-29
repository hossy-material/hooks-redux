# udemy やってみた企画 No.1

## 動機

知り合いが React について動画形式で学びたいとのことで udemy のこの講座はどうか URL が送られてきたので復習がてらやってみたのでざっくりまとめる

なお、講座は js での実装だがせっかくなので TypeScript で

今回の講座：[React Hooks 入門 - Hooks と Redux を組み合わせて最新のフロントエンド状態管理手法を習得](https://www.udemy.com/course/react-hooks-101/)

## 目的

Hooks, Redux に関しては大体触っているので暇つぶしがてら

## 内容

シンプルなイベント管理画面的なものを実装していく講座

create-react-app を使用するので webpack やら eslint やらを噛ませるようなややこしい環境構築はせずに一発で環境構築できるので初心者には優しい

前提条件として以下が必要

- Node のインストール
- テキストエディタの導入（vscode でいい）
- js の基本

なお ReactHooks と Redux 周りについての講座なのでスタイル周りの実装やら説明はない

講座内で使用してるコンポーネントに関しても bootstrap でいい感じに装飾しているだけ

最新と謳っている通りクラスコンポーネントではなく関数コンポーネントのみで実装をしていく

関数コンポーネントの主な強みは hooks であるが hooks の中でも基本的には以下のものを説明している

- useState
- useEffect
- useReducer
- useContext

## 主に何ができるようになるか

- useState を使用した状態管理
- useEffect での副作用の実装
- props リレーを避けるための useContext の使用方法
- useReducer を使用した複雑な状態管理
- 適切なコンポーネント分割
- Redux を使用してでの複雑な状態管理
- localStorage を使用してでの状態永続化

## まとめ

React 公式チュートリアルやった後、手を動かしたりない的な人にいい

どのような場合にどのhooksを使用すべきか、またこのようなケースの時にはこのhooksを使用して解決できるという説明があるので初学者とか独学には最適

詰まった場合には講師に質問もできるのでサポート体制もある

ただ useMemo と useCallback についての説明と実装がないのでその辺は別途学習する必要がある

また最近のトレンドとして大体 TypeScript と併用されることが多い？ため、そこについても同じ
