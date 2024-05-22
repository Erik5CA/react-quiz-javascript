import { Question as QuestionType } from "../types";

export const getBGColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;
  if (userSelectedAnswer == null) return "transparent";
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "transparent";
  if (correctAnswer === index) return "green";
  if (index === userSelectedAnswer) return "red";

  return "transparent";
};
