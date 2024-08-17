import { fetchQuizByGrade, fetchQuizBySubject, fetchQuizzes } from "@/actions/quizActions";
import BrowseItem from "@/components/Browse/BrowseItem";
import Category from "@/components/Category/Category";
import { Products, Quizes } from "@/constans";
import { Questions } from "@/types/quizTypes";
import React from "react";

interface BrowseDetailPageProps {
  params: {
    slug: string;
  };
}

const BrowseDetailPage = async ({ params }: BrowseDetailPageProps) => {
  const filtedProdoucts = Quizes.filter((product) => {
    return product.tags.includes(params.slug);
  });

  filtedProdoucts.sort((a, b) => b.id - a.id);
  const quizzesses: Questions[] = await fetchQuizzes();
  const quizzesByGrade: Questions[] = await fetchQuizByGrade(1);
  const quizzesBySubject: Questions[] = await fetchQuizBySubject("flags");

  return (
    <div className="mt-4">
      <Category />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 mt-2">
        {filtedProdoucts.map((product) => (
          <>
            <BrowseItem
              key={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              url={product.href}
              description={product.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default BrowseDetailPage;
