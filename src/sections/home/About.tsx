import Image from "next/image"

function About() {
  return (
    <div className="about">
      <Image
        src="/img/photo.png"
        alt="Photo"
        width={273}
        height={273}
      />

      <div className="introduction">
        <p className="greeting">Sahabat Pejuang Indonesia Raya Yth.</p>
        <p className="message">
          Selamat datang dalam Aplikasi <b>Galang Perjuangan</b>.
          Sebuah aplikasi layanan penggalangan dana untuk perjuangan politik demi perbaikan kondisi Bangsa, Negara dan Rakyat Indonesia.  
          Indonesia telah memilih jalan demokrasi dalam berbangsa dan bernegara. 
          Dimana seluruh kebijakan publik yang dikeluarkan oleh seorang pemimpin adalah sebuah keputusan politik (political decision). 
          Dan keputusan itu berdampak sangat besar bagi kehidupan rakyat.  Politik balas budi yang mengakibatkan seorang pemimpin negeri ini tersandera oleh kepentingan pengusaha besar, taipan, bandar, dan cukong harus segera kita hentikan. 
          Kita semua harus wujudkan dan ciptakan pemimpin-pemimpin yang jujur, cerdas dan memiliki integritas tanpa adanya embel-embel dibelakangnya. Pemimpin yang merdeka karena dukungan rakyatnya, pemimpin yang semata-mata hanya memikirkan kepentingan rakyatnya tanpa segan dan takut pada siapapun. 
          Pemimpin yang dapat mengutamakan kepentingan Bangsa, Negara dan Rakyat di atas kepentingan lainnya.  Untuk itu saudara-saudara, sahabat-sahabat Pejuang Indonesia Raya. <b>Salam Indonesia Raya</b>.
        </p>
      </div>
    </div>
  )
}

export default About