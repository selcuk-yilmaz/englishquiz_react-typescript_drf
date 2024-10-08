import AddQuestionForm from "@/components/Admin/AddQuestionForm";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AddGrade from "@/components/Admin/AddGrade";
import AddLesson from "@/components/Admin/AddLesson";
import AddSubject from "@/components/Admin/AddSubject";
import DellGrade from "@/components/Admin/DellGrade";
import DellLesson from "@/components/Admin/DellLesson";
import DellSubject from "@/components/Admin/DellSubject";
import UpdateQuestionForm from "@/components/Admin/UpdateQuestionForm";

const AddQuestionPage = ({ params }: { params: { slug: number } }) => {
  const { slug } = params;
  return (
    <div className="flex justify-center items-center gap-2 mt-2">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg md:min-w-full"
      >
        <ResizablePanel defaultSize={40}>
          <div className="w-full h-full flex flex-col items-center justify-around gap-8">
            <div className="flex w-full items-center justify-around gap-4">
              <Card className="w-10/12 p-8">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Add Question
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <AddQuestionForm />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
            <div className="flex w-full items-center justify-around gap-4 ">
              <Card className="w-10/12 p-8">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Update Question
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <UpdateQuestionForm slug={slug} />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <div className="w-full h-full flex flex-col items-center justify-around gap-8">
            <div className="flex w-full items-center justify-around gap-4">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Add Lesson
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <AddLesson />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>

            <div className="flex w-full items-center justify-around gap-4">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Add Grade
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <AddGrade />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>

            <div className="flex w-full items-center justify-around gap-4">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Add Subject
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <AddSubject />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <div className="w-full h-full flex flex-col items-center justify-around gap-8">
            <div className="flex w-full items-center justify-around gap-4">
              <Card className="p-2">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Dell Lesson
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <DellLesson />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>

            <div className="flex w-full items-center justify-around gap-4">
              <Card className="p-2">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Dell Grade
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <DellGrade />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>

            <div className="flex w-full items-center justify-around gap-4">
              <Card className="p-2">
                <CardHeader>
                  <CardTitle className="flex justify-center items-center text-base font-semibold">
                    Dell Subject
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid gap-0">
                  <DellSubject />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default AddQuestionPage;
