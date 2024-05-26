
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

### Kullanılan Teknolojiler

- React: Kullanıcı arayüzünü oluşturmak için kullanıldı.
- Node.js: Backend sunucusunu oluşturmak için kullanıldı.
- PostgreSQL: Veritabanı olarak kullanıldı.
- Docker: Uygulamayı konteynerize etmek ve daha kolay dağıtım sağlamak için kullanıldı.
- Docker Compose: Çoklu konteyner uygulamasını yönetmek için kullanıldı.
