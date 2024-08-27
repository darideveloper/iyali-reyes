import Title from '@/components/Title'
import Cta from '@/components/Cta'

export default function Video () {
  return (
    <section 
      id="video"
      className={`
        video
        my-24
        bg-brown
        py-16
      `}
    >
      <div 
        className={`
          video-wapper
          container
          relative
        `}
      >
        <div 
          className={`
            content
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            z-10
            flex
            flex-col
            justify-center
            items-center
          `}
        >
          <Title
            className={`
              uppercase
              text-white
              text-center
            `}
          >
            Ser para florecer
          </Title>

          <Cta 
            link="https://drive.google.com/file/d/1Relkgd_9GN1c0BklrY_C0WST-6fLuWyQ/view?usp=sharing"
            text="Descarga mi último Webinar"
            target="_blank"
          />
        </div>


        <video 
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={`
            w-full
            h-auto
            opacity-30
          `}
        >
          Tu navegador no soporta video HTML5
        </video>

      </div>

    </section>
  )
}