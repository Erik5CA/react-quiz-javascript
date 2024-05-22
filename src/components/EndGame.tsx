import { Typography } from "@mui/material";
import { useQuestionsData } from "../hooks/useQuestionsData";
import Start from "./Start";

function EndGame() {
  const { correct, incorrect } = useQuestionsData();
  return (
    <>
      <Typography variant="h5" component="p" marginTop={5} marginBottom={5}>
        Haz finalizado el quiz
      </Typography>
      <Typography variant="h6" component="p" marginTop={5} marginBottom={5}>
        <p>Tus resultados fueron.</p>
        {`Correctas: ${correct} | Incorrectas ${incorrect}`}
      </Typography>

      <Start>Volver a jugar </Start>
    </>
  );
}

export default EndGame;
