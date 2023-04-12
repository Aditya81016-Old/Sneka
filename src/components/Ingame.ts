export default function Ingame() {
  return {
    html: /* html */ `
    <h4 id="Points" class="scoreboard">Points: 0</h4>
    `,

    updatePoints: (points: number): void => {
        $("#Points.scoreboard").text(`Points: ${points}`)
    }
  };
}
