
# BookStore

React, NodeJs, Postgresql, Docker kullanilmistir.
Küçük çaplı kitap satış sitesi yapılmıştır.

## Başlarken

### Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki yazılımların sisteminizde yüklü olması gerekmektedir:

- Node.js (v15 veya üstü)
- Docker
- Docker Compose

### Kurulum

Proje dosyalarını yerel makinenize klonlayın:

```bash
git clone https://github.com/Mertflixs/bookstore.git
cd bookstore
cd backend/psql
open data.zip
```

PostgreSql için gereklı data dosyamızı zipten çıkararak başladık.
Sonrasında docker-compose.yml dosyamızın oldugu konuma gelerek komutumuzu calıstırdık.

```bash
docker compose up --build
```

Bu komut, PostgreSQL ve Node.js tabanlı backend servisini çalıştıracak, ardından React tabanlı frontend servisini başlatacaktır. Proje varsayılan olarak aşağıdaki portlarda çalışacaktır:

- Frontend `localhost:3000`
- Backend `localhost:3001`

### PostgreSql Görüntüleme
- Öncelikle databaseimizi docker ile kaldiriyoruz
- PgAdmin4 kurulumunu tamamlıyoruz

```bash
docker ps

Bu sekılde goruntu gelecek burada CONTAINER ID numarasını kullanacağız
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS         PORTS                                       NAMES
de6b4fffeafb   test-frontend   "docker-entrypoint.s…"   5 minutes ago   Up 6 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   test-frontend-1
ba4c51b25335   test-backend    "docker-entrypoint.s…"   5 minutes ago   Up 6 seconds   0.0.0.0:3001->3001/tcp, :::3001->3001/tcp   test-backend-1
dbc6ebe92efd   test-postgres   "docker-entrypoint.s…"   5 minutes ago   Up 6 seconds   5432/tcp                                    test-postgres-1

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' test-postgres-container-id 
bu komut ile ip adresini almış oluyoruz.

PgAdmin4 programını çalıştırıyoruz
-Add New Server ile işleme devam ediyoruz
-Name kısmına istediğimiz isimi verebiliriz
sonrasında connection kısmından devam ediyoruz
Host name/address alanına bulmuş oldugumuz ip adresini yazıyoruz
Maintenance database ve password kısmına backend/psql klasöründeki psql.Dockerfile a bakarak öğrenebilirsiniz.
save işlemini yaptıktan sonra databaseimizdeki tabloları görüntüleye bilirsiniz.
```

### Kullanılan Teknolojiler

- React: Kullanıcı arayüzünü oluşturmak için kullanıldı.
- Node.js: Backend sunucusunu oluşturmak için kullanıldı.
- PostgreSQL: Veritabanı olarak kullanıldı.
- Docker: Uygulamayı konteynerize etmek ve daha kolay dağıtım sağlamak için kullanıldı.
- Docker Compose: Çoklu konteyner uygulamasını yönetmek için kullanıldı.
