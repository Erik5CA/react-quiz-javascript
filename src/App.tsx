import { Container, Stack, Typography } from "@mui/material";
import { JavaScriptLogo } from "../src/components/JavaScriptLogo";
import "./App.css";
import Start from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./components/Game";
import { useQuestionsData } from "./hooks/useQuestionsData";
import EndGame from "./components/EndGame";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h3" component="h1">
            JavaScript Quiz
          </Typography>
        </Stack>

        {questions.length === 0 && (
          <>
            <Typography
              variant="h5"
              component="p"
              marginTop={5}
              marginBottom={5}
            >
              Ponte a prueba con este quiz para demostrat tus conocimiento sobre
              Javascript.
            </Typography>
            <Start>¡Empezar!</Start>
          </>
        )}
        {questions.length > 0 && unanswered !== 0 && <Game />}
        {questions.length > 0 && unanswered === 0 && <EndGame />}
      </Container>
    </main>
  );
}

export default App;
