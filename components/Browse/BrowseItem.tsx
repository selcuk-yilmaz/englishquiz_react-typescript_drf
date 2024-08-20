import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface BrowseItemProps {
  id: number;
  lesson_name: string;
  grade_level: number;
  title: string;
  question_count: number;
}

const BrowseItem = ({
  id,
  lesson_name,
  grade_level,
  title,
  question_count
}: BrowseItemProps) => {
  return (
    <div className="col-span-1">
      <Link href={`/quizes/${title}`}>
        <Card>
          {/* <CardHeader className="relative w-full h-[500px]"></CardHeader> */}
          <CardHeader>
            {/* <Image
              alt={title}
              src={image}
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            /> */}
            <p className="mt-2 text-base font-semibold">
              lesson_name: {lesson_name}
            </p>
            <p className="mt-2 text-base font-semibold">konu: {title}</p>
            <p className="mt-2 text-base font-semibold">
              sınıf: {grade_level}
            </p>
            <p className="mt-2 text-base font-semibold">
              soru sayısı: {question_count}
            </p>
          </CardHeader>
          <CardContent>
            <span>konu</span>
            <Badge>{title}</Badge>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default BrowseItem;
