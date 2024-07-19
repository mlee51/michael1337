export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe
        width="720"
        height="1280"
        src="https://www.youtube.com/embed/9sCYDZ877Pc?si=1Wz06ttPzRl44yok&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </main>
  );
}
