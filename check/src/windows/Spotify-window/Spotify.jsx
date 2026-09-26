import MacWindow from '../MacWindow'
import './Spotify.scss'
const Spotify = () => {
  return (
    <MacWindow>
      <div className="spotify-window">
      <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/artist/6qqNVTkY8uBg9cP3Jd7DAH?utm_source=generator&si=807a96bb80944a14" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify