import { Icon, IconButton, Stack } from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import Footer from "./Footer";
import { Question } from "./Question";

function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const nextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const previousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton onClick={previousQuestion} disabled={currentQuestion === 0}>
          <Icon>arrow_back_ios</Icon>
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={nextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <Icon>arrow_forward_ios</Icon>
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  );
}

export default Game;
