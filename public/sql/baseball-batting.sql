-- Adapted from Executive Summary Enhancing(1).docx.
-- Academic source query; not re-executed during portfolio preparation.
WITH BattingStats AS (
    SELECT b.playerid,
           p.namefirst || ' ' || p.namelast AS player_name,
           SUM(b.ab::integer) AS total_at_bats,
           SUM(b.h::integer) AS total_hits,
           SUM(b.hr::integer) AS total_home_runs,
           SUM(b.bb::integer) AS total_walks
    FROM laman.batting b
    JOIN laman.people p ON b.playerid = p.playerid
    GROUP BY b.playerid, player_name
    HAVING SUM(b.ab::integer) > 1000
)
SELECT player_name,
       total_hits * 1.0 / total_at_bats AS batting_average,
       total_home_runs,
       total_walks
FROM BattingStats
ORDER BY batting_average DESC
LIMIT 10;
