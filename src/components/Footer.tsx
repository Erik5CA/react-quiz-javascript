import { useQuestionsData } from "../hooks/useQuestionsData";
import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

function Footer() {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>Correctas: {correct} | </strong>
      <strong>Incorrectas: {incorrect} | </strong>
      <strong>Sin Responder: {unanswered}</strong>

      <footer style={{ marginTop: "16px" }}>
        <Button onClick={() => reset()}>Resetear Juego</Button>
      </footer>
    </footer>
  );
}

export default Footer;
