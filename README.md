# Blog API Uygulaması

Bu proje, Django ve React kullanarak blog yazılarını API isteğiyle kolayca oluşturmanıza olanak tanır.

## Backend (Django)

### Post Model
Blog yazılarının başlık, yazar, özet, içerik ve durum bilgilerini içerir.

### API
- Yazıları listeleyebilir.
- Yeni yazılar ekleyebilir.
- Mevcut yazıları görüntüleyebilir.
- İçeriği silebilirsiniz.

## Frontend (React)

### Ana Sayfa
Son blog yazılarını gösterir.

### Bileşenler
- **posts:** Blog yazılarını listeler.
- **postLoading:** Veri yüklenmeden önce gösterilen yükleniyor yazar.
- **header:** Üst kısımda başlık içerir.
- **footer:** Alt kısımda bilgiler içerir.
- **register:** Kayıt işlemi yapar.
- **login:** Giriş işlemi yapar.
- **logout:** Çıkış işlemi yapar.

## Kurulum ve Kullanım

1. **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/rkaya21/djangorestframework-react
    ```

2. **Backend Kurulumu:**

    - Proje dizinine gidin:
        ```bash
        cd djangorestframework-react/backend
        ```

    - Bağımlılıkları Yükleyin:
        ```bash
        pip install -r requirements.txt
        ```

    - Veritabanı Migrations:
        ```bash
        python manage.py migrate
        ```

    - Sunucuyu Başlatın:
        ```bash
        python manage.py runserver
        ```

    - API'ye [http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/) adresinden erişebilirsiniz.

3. **Frontend Kurulumu:**

    - Proje dizinine gidin:
        ```bash
        cd djangorestframework-react/frontend
        ```

    - Bağımlılıkları Yükleyin:
        ```bash
        npm install
        ```

    - Uygulamayı Başlatın:
        ```bash
        npm start
        ```

    - Web uygulamamız [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## Görseller
<img src="./images/4.png" alt="Kayıt Ol" width="800"/>
<img src="./images/5.png" alt="Giriş Yap" width="800"/>
<img src="./images/1.png" alt="Post Öncesi" width="800"/>
<img src="./images/2.png" alt="Frontend" width="800"/>
<img src="./images/3.png" alt="Backend" width="800"/>
