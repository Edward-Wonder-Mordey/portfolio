-- Adapted from Executive Summary 4(2).docx.
-- Renamed "recent albums": the source contains no release-date filter.
-- These are catalog counts, not a measure of recent activity.
-- Not re-executed during portfolio preparation.
WITH ArtistTrackCounts AS (
    SELECT ar.artistid, ar.name AS artistname,
           COUNT(t.trackid) AS totaltracks
    FROM chinook.artist ar
    JOIN chinook.album al ON ar.artistid = al.artistid
    JOIN chinook.track t ON al.albumid = t.albumid
    GROUP BY ar.artistid, ar.name
),
AlbumCounts AS (
    SELECT ar.artistid, COUNT(al.albumid) AS albumcount
    FROM chinook.artist ar
    JOIN chinook.album al ON ar.artistid = al.artistid
    GROUP BY ar.artistid
)
SELECT a.name AS artistname, atc.totaltracks, ac.albumcount
FROM ArtistTrackCounts atc
JOIN AlbumCounts ac ON atc.artistid = ac.artistid
JOIN chinook.artist a ON atc.artistid = a.artistid
ORDER BY ac.albumcount DESC, atc.totaltracks DESC;
