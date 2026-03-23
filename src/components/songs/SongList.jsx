import SongItem from "./SongItem";

function SongList({ songs }) {
  if (!songs.length) {
    return <p className="empty-state">No songs found.</p>;
  }

  return (
    <table className="song-list">
      <thead>
        <tr>
          <th className="col-index">#</th>
          <th className="col-title">Title</th>
          <th className="col-album">Album</th>
          <th className="col-length">Duration</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, i) => (
          <SongItem key={song._id} song={song} index={i} />
        ))}
      </tbody>
    </table>
  );
}

export default SongList;
