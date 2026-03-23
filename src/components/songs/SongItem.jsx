function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function SongItem({ song, index }) {
  return (
    <tr className="song-item">
      <td className="song-index">{index + 1}</td>
      <td className="song-title">
        <span className="title">{song.title}</span>
        <span className="artist">{song.artist?.name}</span>
      </td>
      <td className="song-album">{song.album?.title ?? "—"}</td>
      <td className="song-length">{formatDuration(song.length)}</td>
    </tr>
  );
}

export default SongItem;
