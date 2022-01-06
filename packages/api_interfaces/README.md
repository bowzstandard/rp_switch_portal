# puppetmaker_api_type_def
パペットメーカー怪異譚のAPI型定義


## get started

`npm i -g lerna yarn`  
`yarn install`

github packagesの認証が必要なので以下実行してください（１アカウントで使えるpackage１個なので注意）
https://qiita.com/emaame/items/3c223fec41b07c15c08f#github-%E3%81%AE%E8%AA%8D%E8%A8%BC%E6%83%85%E5%A0%B1%E3%82%92-npmrc-%E3%81%AB%E5%9F%8B%E3%82%81%E8%BE%BC%E3%82%80
トークン作ったらnpmrcへの直書きではなく `yarn login --registry=https://npm.pkg.github.com --scope=@puppetmaker-project` でもオッケー（その場合はパスワードにはつくったトークンいれてください）


## how to publish

`yarn lerna run build`  
`yarn lerna publish [mejor/minor/patch]`
