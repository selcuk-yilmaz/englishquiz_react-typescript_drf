import axios from "../utils/axiosInstance";
import {
  Quiz,
  Question,
  Category,
  Questions,
  SelectedGrade,
  Grade,
  QuizResponse,
} from "../types/quizTypes";

//! get grades info for category component
export const fetchGrades = async (): Promise<Grade[]> => {
  const response = await axios.get("/api/grade/");
  // console.log(response);
  return response.data;
};
//! get questions info according to grade
export const fetchQuizByGrade = async (
  id: number
): Promise<SelectedGrade[]> => {
  const response = await axios.get(`/api/grade/${id}/`);
  return response.data;
};
//! get questions according to subject
export const fetchQuizBySubject = async (
  slug: string
): Promise<QuizResponse> => {
  try {
    console.log(
      `/api/subject/${slug[0]}/?limit=${slug[1]}&offset=${
        parseInt(slug[1], 10) - 10
      }`
    );
    const response = await axios.get(
      `/api/subject/${slug[0]}/?limit=${slug[1]}&offset=${
        parseInt(slug[1], 10) - 10
      }`
    );

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      console.error(`Subject with slug "${slug}" not found.`);
    }
    throw error; // rethrow the error to be caught by your page component
  }
};

//! post student responses to be for calculate
interface StudentResponse {
  id: number;
  selectedOption: string;
}

interface PostResponsesPayload {
  studentResponses: StudentResponse[];
}

export const postStudentResponses = async (
  studentResponses: StudentResponse[]
): Promise<any> => {
  const payload: PostResponsesPayload = { studentResponses };

  try {
    const response = await axios.post("/api/results/", payload);
    return response.data;
  } catch (error) {
    console.error("Failed to post student responses", error);
    throw error;
  }
};



//!belows are example
export const fetchQuizzes = async (): Promise<Questions[]> => {
  const response = await axios.get("/api/questions/");
  // console.log(response);
  return response.data;
};

export const updateQuiz = async (id: number, quiz: Quiz): Promise<Quiz> => {
  const response = await axios.put(`/quizzes/${id}/`, quiz);
  return response.data;
};

export const deleteQuiz = async (id: number): Promise<void> => {
  await axios.delete(`/quizzes/${id}/`);
};
