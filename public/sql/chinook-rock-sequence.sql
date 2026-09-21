-- Source: SQL Query (Chinook Database)(1).docx.
-- Academic source query; not re-executed during portfolio preparation.
-- Set the Chinook schema/search_path for these unqualified table names.
-- ROW_NUMBER assigns a sequence, not a popularity ranking.
SELECT t.TrackId,
       t.Name AS TrackName,
       g.Name AS Genre,
       a.Name AS Artist,
       ROW_NUMBER() OVER (
           PARTITION BY g.Name ORDER BY t.TrackId
       ) AS NewTrackNumber
FROM Track t
JOIN Album al ON t.AlbumId = al.AlbumId
JOIN Artist a ON al.ArtistId = a.ArtistId
JOIN Genre g ON t.GenreId = g.GenreId
WHERE g.Name = 'Rock';
