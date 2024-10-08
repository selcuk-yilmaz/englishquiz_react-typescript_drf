"use client";

import React, { } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import RadioGroupForm from "./RadioGroupForm";
import { useQuizContext } from "@/context/QuizContext";
import { Button } from "../ui/button";
import Link from "next/link";
import { deleteQuestion } from "@/actions/quizActions";
import { toast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "@/types/quizTypes";

interface QuizesItemProps {
  id: number;
  subject_title: string;
  difficulty: string;
  url: string;
  number_of_options: number;
}

const QuizesPageItem = ({
  id,
  subject_title,
  difficulty,
  url,
  number_of_options,
}: QuizesItemProps) => {
  const { setStudentResponses } = useQuizContext(); // Use user from context
  const { currentUser } = useAuthContext() as { currentUser: User | null }; // User tipi uygulandı

  const handleAnswerSubmit = (data: { selectedOption: string }) => {
    setStudentResponses((prevResponses) => {
      const existingResponseIndex = prevResponses.findIndex(
        (response) => response.id === id
      );

      if (existingResponseIndex >= 0) {
        const updatedResponses = [...prevResponses];
        updatedResponses[existingResponseIndex] = {
          id,
          selectedOption: data.selectedOption,
        };
        return updatedResponses;
      } else {
        return [...prevResponses, { id, selectedOption: data.selectedOption }];
      }
    });
  };

  const handleDelete = async () => {
    try {
      await deleteQuestion(id);
      console.log(`Question with id ${id} deleted successfully.`);
      toast({
        title: "Question deleted successfully!",
        description: "The selected Question has been deleted.",
      });
    } catch (error) {
      console.error("Failed to delete question:", error);
      toast({
        title: "Failed to delete Question",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-red-500 p-4">
            <code className="text-white">{JSON.stringify(error, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <div className="col-span-1">
      <Card>
        <CardHeader>
          <Image
            alt={subject_title}
            src={url}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
          <p className="mt-2 text-base font-semibold">
            Question Subject: {subject_title}
          </p>

          {currentUser && currentUser.is_staff && (
            <div className="flex justify-around">
              <Button
                variant="destructive"
                type="button"
                onClick={handleDelete}
              >
                Delete question
              </Button>
              <Link href={`/admin/${id}`}>
                <Button>Edit quesion</Button>
              </Link>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <span>Difficulty degree </span>
          <Badge>{difficulty}</Badge>
          <RadioGroupForm
            onSubmitAnswer={handleAnswerSubmit}
            number_of_options={number_of_options}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizesPageItem;
