# puppetmaker_api_server
パペットメーカー怪異譚のAPIサーバー

## getstarted


### APIサーバー

```bash
$ cd api
```

- 以下実行して.npmrcを作ってください
```bash
$ cat - << DOC > ./api/app/.npmrc
@puppetmaker-project:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={SECRET_TOKEN}
DOC
```
`{SECRET_TOKEN}` は自分のものを入れてください

- .envを２種類作ります
```bash
$ cat << DOC > ./api/.env
MYSQL_ROOT_PASSWORD=hogehoge
MYSQL_ROOT_DATABASE=puppetmaker
DOC
```

```bash
$ cat << DOC > ./api/app/.env
DATABASE_URL="mysql://root:hogehoge@puppetmaker-api-db:3306/puppetmaker"
DOC
```

```bash
$ yarn
$ yarn bootstrap
$ yarn workspace api start
```

ラズパイは
```bash
$ yarn workspace api start:rp
```

appはvolumesで同期されてます

#### APIへのパッケージの追加
```bash
yarn workspace app add {パッケージ名}
```

### デプロイ時

Lambdaへのデプロイ時にapi/app/package.jsonのversionを見ます。そこが更新されていない場合S3へはデプロイされますがlambdaへはデプロイされないので注意

### インフラ

```bash
$ yarn workspace infra test
```