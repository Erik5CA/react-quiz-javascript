import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

const LIMIT_QUESTIONS = 10;

interface Props {
  children: React.ReactNode;
}

function Start({ children }: Props) {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };
  return (
    <Button onClick={handleClick} variant="contained">
      {children}
    </Button>
  );
}

export default Start;
